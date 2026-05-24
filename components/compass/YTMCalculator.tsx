"use client";

import { useState, useMemo } from "react";

function calcYTM(price: number, coupon: number, tenor: number): number {
  // Approx YTM formula (match HTML)
  const faceValue = 100;
  const annualCoupon = coupon;
  const ytm =
    (annualCoupon + (faceValue - price) / tenor) / ((faceValue + price) / 2);
  return ytm;
}

export function YTMCalculator() {
  const [price, setPrice] = useState(99);
  const [coupon, setCoupon] = useState(5.65);
  const [tenor, setTenor] = useState(8);

  const ytm = useMemo(
    () => calcYTM(price, coupon, tenor),
    [price, coupon, tenor],
  );
  const currentYield = useMemo(() => (coupon / price) * 100, [coupon, price]);
  const totalReturn = useMemo(() => {
    const faceValue = 100;
    const annualCoupon = coupon;
    return ((annualCoupon * tenor + (faceValue - price)) / price) * 100;
  }, [price, coupon, tenor]);
  const premiumVsDeposito = useMemo(() => ytm * 100 - 4.0, [ytm]);

  return (
    <section className="rounded-[12px] border border-grove-border bg-grove-bg2 p-6">
      <p className="mb-4 text-[10px] font-medium uppercase tracking-[.15em] text-[#4ecb8d]">
        Kalkulator YTM Obligasi
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Sliders */}
        <div className="space-y-5">
          {/* Harga Beli */}
          <div>
            <label className="mb-1 block text-[10px] text-grove-muted">
              Harga Beli (% dari par)
            </label>
            <input
              type="range"
              min={90}
              max={110}
              step={0.1}
              value={price}
              onChange={(e) => setPrice(+e.target.value)}
              className="w-full"
            />
            <div className="mt-1 flex justify-between text-[10px] text-grove-muted">
              <span>90</span>
              <span className="font-mono font-semibold text-[#4ecb8d]">
                {price.toFixed(2)}
              </span>
              <span>110</span>
            </div>
          </div>

          {/* Kupon */}
          <div>
            <label className="mb-1 block text-[10px] text-grove-muted">
              Kupon Tahunan (%)
            </label>
            <input
              type="range"
              min={3}
              max={10}
              step={0.05}
              value={coupon}
              onChange={(e) => setCoupon(+e.target.value)}
              className="w-full"
            />
            <div className="mt-1 flex justify-between text-[10px] text-grove-muted">
              <span>3%</span>
              <span className="font-mono font-semibold text-[#4ecb8d]">
                {coupon.toFixed(2)}%
              </span>
              <span>10%</span>
            </div>
          </div>

          {/* Tenor */}
          <div>
            <label className="mb-1 block text-[10px] text-grove-muted">
              Tenor (tahun)
            </label>
            <input
              type="range"
              min={1}
              max={15}
              step={1}
              value={tenor}
              onChange={(e) => setTenor(+e.target.value)}
              className="w-full"
            />
            <div className="mt-1 flex justify-between text-[10px] text-grove-muted">
              <span>1</span>
              <span className="font-mono font-semibold text-[#4ecb8d]">
                {tenor} thn
              </span>
              <span>15</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="rounded-[10px] border border-grove-border bg-grove-bg3 p-4">
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <p className="mb-1 text-[9.5px] text-grove-muted">YTM Estimasi</p>
              <p className="font-serif text-[22px] font-medium text-[#4ecb8d]">
                {(ytm * 100).toFixed(2)}%
              </p>
            </div>
            <div>
              <p className="mb-1 text-[9.5px] text-grove-muted">
                Total Return (hold)
              </p>
              <p className="font-serif text-[22px] font-medium text-[#4ecb8d]">
                {totalReturn >= 0 ? "+" : ""}
                {totalReturn.toFixed(1)}%
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 border-t border-grove-border pt-4">
            <div>
              <p className="mb-1 text-[9.5px] text-grove-muted">
                Current Yield
              </p>
              <p className="text-[13px] font-semibold text-grove-text">
                {currentYield.toFixed(2)}%
              </p>
            </div>
            <div>
              <p className="mb-1 text-[9.5px] text-grove-muted">
                Premium vs Deposito
              </p>
              <p
                className={`text-[13px] font-semibold ${premiumVsDeposito >= 0 ? "text-[#e8a84c]" : "text-[#e05c5c]"}`}
              >
                {premiumVsDeposito >= 0 ? "+" : ""}
                {premiumVsDeposito.toFixed(0)} bps
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
