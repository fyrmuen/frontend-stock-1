"use client";

import { useState, useMemo } from "react";

function calcYTM(price: number, coupon: number, tenor: number): number {
    // Approx YTM formula
    const faceValue = 100;
    const annualCoupon = (coupon / 100) * faceValue;
    const ytm = (annualCoupon + (faceValue - price) / tenor) / ((faceValue + price) / 2);
    return ytm * 100;
}

export function YTMCalculator() {
    const [price, setPrice] = useState(97.6);
    const [coupon, setCoupon] = useState(4.85);
    const [tenor, setTenor] = useState(8);

    const ytm = useMemo(() => calcYTM(price, coupon, tenor), [price, coupon, tenor]);
    const currentYield = useMemo(() => (coupon / price) * 100, [coupon, price]);
    const totalReturn = useMemo(() => {
        const faceValue = 100;
        const annualCoupon = (coupon / 100) * faceValue;
        return ((annualCoupon * tenor + (faceValue - price)) / price) * 100;
    }, [price, coupon, tenor]);
    const premiumVsDeposito = useMemo(() => ytm - 3.5, [ytm]); // vs deposito 3.5%

    return (
        <section className="rounded-[12px] border border-grove-border bg-grove-bg2 p-6">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[.16em] text-[#4ecb8d]">
                Kalkulator YTM Obligasi
            </p>

            <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
                {/* Sliders */}
                <div className="space-y-5">
                    {/* Harga Beli */}
                    <div>
                        <label className="mb-1 block text-[11.5px] text-grove-muted2">
                            Harga Beli (% dari par)
                        </label>
                        <input
                            type="range" min={90} max={110} step={0.1}
                            value={price}
                            onChange={(e) => setPrice(+e.target.value)}
                            className="w-full accent-[#e040fb]"
                        />
                        <div className="mt-1 flex justify-between text-[10px] text-grove-muted">
                            <span>90</span>
                            <span className="font-mono font-semibold text-[#4ecb8d]">{price.toFixed(2)}</span>
                            <span>110</span>
                        </div>
                    </div>

                    {/* Kupon */}
                    <div>
                        <label className="mb-1 block text-[11.5px] text-grove-muted2">
                            Kupon Tahunan (%)
                        </label>
                        <input
                            type="range" min={3} max={10} step={0.05}
                            value={coupon}
                            onChange={(e) => setCoupon(+e.target.value)}
                            className="w-full accent-[#e040fb]"
                        />
                        <div className="mt-1 flex justify-between text-[10px] text-grove-muted">
                            <span>3%</span>
                            <span className="font-mono font-semibold text-[#4ecb8d]">{coupon.toFixed(2)}%</span>
                            <span>10%</span>
                        </div>
                    </div>

                    {/* Tenor */}
                    <div>
                        <label className="mb-1 block text-[11.5px] text-grove-muted2">
                            Tenor (tahun)
                        </label>
                        <input
                            type="range" min={1} max={15} step={1}
                            value={tenor}
                            onChange={(e) => setTenor(+e.target.value)}
                            className="w-full accent-[#e040fb]"
                        />
                        <div className="mt-1 flex justify-between text-[10px] text-grove-muted">
                            <span>1</span>
                            <span className="font-mono font-semibold text-[#4ecb8d]">{tenor} thn</span>
                            <span>15</span>
                        </div>
                    </div>
                </div>

                {/* Results */}
                <div className="min-w-[240px] rounded-[10px] border border-grove-border bg-grove-bg3 p-5">
                    <div className="mb-5 grid grid-cols-2 gap-4">
                        <div>
                            <p className="mb-1 text-[9.5px] text-grove-muted">YTM Estimasi</p>
                            <p className="font-serif text-[28px] font-bold text-[#4ecb8d]">
                                {ytm.toFixed(2)}%
                            </p>
                        </div>
                        <div>
                            <p className="mb-1 text-[9.5px] text-grove-muted">Total Return (hold)</p>
                            <p className="font-serif text-[28px] font-bold text-[#4ecb8d]">
                                +{totalReturn.toFixed(1)}%
                            </p>
                        </div>
                    </div>
                    <div className="border-t border-grove-border pt-4 grid grid-cols-2 gap-4">
                        <div>
                            <p className="mb-1 text-[9.5px] text-grove-muted">Current Yield</p>
                            <p className="text-[16px] font-bold text-grove-text">
                                {currentYield.toFixed(2)}%
                            </p>
                        </div>
                        <div>
                            <p className="mb-1 text-[9.5px] text-grove-muted">Premium vs Deposito</p>
                            <p className={`text-[16px] font-bold ${premiumVsDeposito > 0 ? "text-[#e8a84c]" : "text-[#e05c5c]"}`}>
                                {premiumVsDeposito > 0 ? "+" : ""}{Math.round(premiumVsDeposito * 100)} bps
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}