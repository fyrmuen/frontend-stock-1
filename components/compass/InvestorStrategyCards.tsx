"use client";

import { useState } from "react";

type Profile = {
  key: string;
  label: string;
  badge: string;
  badgeClass: string;
  title: string;
  desc: string;
  expectedReturn: string;
  maxDrawdown: string;
  horizon: string;
  focus: string;
  allocation: Array<{ label: string; value: number; color: string }>;
  detail: Array<{ title: string; items: string[] }>;
};

const profiles: Profile[] = [
  {
    key: "konservatif",
    label: "Konservatif",
    badge: "Konservatif",
    badgeClass: "bg-[rgba(58,158,232,0.12)] text-[#3A9EE8]",
    title: "Capital Preservation",
    desc: "Prioritas utama menjaga modal. Toleransi risiko sangat rendah. Cocok untuk horizon <3 tahun atau mendekati tujuan keuangan.",
    expectedReturn: "8–10%",
    maxDrawdown: "~10%",
    horizon: "<3 thn",
    focus: "Fokus: SBN menengah (FR) + MMF USD untuk yield & perlindungan FX.",
    allocation: [
      { label: "Obligasi (SBN/INDON)", value: 45, color: "#3A9EE8" },
      { label: "MMF & Deposito", value: 30, color: "#5FB88A" },
      { label: "Saham Indonesia", value: 15, color: "#22C97A" },
      { label: "Saham Amerika", value: 10, color: "#9A72E8" },
    ],
    detail: [
      {
        title: "Obligasi (45%)",
        items: [
          "FR100 — yield 6.85% IDR",
          "INDON 2034 — yield 5.85% USD",
          "ORI/SR ritel saat penawaran",
          "SBN duration 3–7 tahun",
        ],
      },
      {
        title: "MMF & Deposito (30%)",
        items: [
          "MMF USD — yield ~4.25% net",
          "MMF IDR — yield ~5.5% net",
          "Deposito max 6 bulan",
          "Kas untuk peluang entry",
        ],
      },
      {
        title: "Saham Indonesia (15%)",
        items: [
          "BBCA — defensif, dividen 5%+",
          "TLKM — dividen yield 5%",
          "UNTR — emiten kualitas tinggi",
          "Max 3–4 nama blue chip saja",
        ],
      },
      {
        title: "Saham Amerika (10%)",
        items: [
          "SPY ETF — diversifikasi luas",
          "Bukan individual stock",
          "DCA setiap bulan kecil",
          "Untuk FX hedge dan diversifikasi",
        ],
      },
    ],
  },
  {
    key: "moderat-konservatif",
    label: "Moderat Konservatif",
    badge: "Mod. Konservatif",
    badgeClass: "bg-[rgba(95,184,138,0.12)] text-[#4ecb8d]",
    title: "Income & Stability",
    desc: "Utamakan pendapatan rutin (dividen, kupon) dengan sedikit eksposur pertumbuhan. Toleransi drawdown hingga 15%.",
    expectedReturn: "10–13%",
    maxDrawdown: "~15%",
    horizon: "3–5 thn",
    focus: "Fokus: Saham dividen tinggi + FR series menengah + SPY untuk FX.",
    allocation: [
      { label: "Saham Indonesia", value: 35, color: "#22C97A" },
      { label: "Obligasi (SBN/FR)", value: 35, color: "#3A9EE8" },
      { label: "MMF & Kas", value: 15, color: "#5FB88A" },
      { label: "Saham Amerika", value: 15, color: "#9A72E8" },
    ],
    detail: [
      {
        title: "Saham Indonesia (35%)",
        items: [
          "BBCA, BMRI — dividen 5-6%",
          "TLKM — defensif telco",
          "ASII — valuasi murah",
          "4–6 nama, bobot merata",
        ],
      },
      {
        title: "Obligasi (35%)",
        items: [
          "FR100/FR098 — IDR menengah",
          "INDON 2034 — USD sovereign",
          "Target YTM 6.5–7%",
          "Duration 5–8 tahun",
        ],
      },
      {
        title: "MMF & Kas (15%)",
        items: [
          "MMF USD untuk dry powder",
          "Likuiditas 1–2 bulan pengeluaran",
          "Siap deploy saat koreksi",
        ],
      },
      {
        title: "Saham Amerika (15%)",
        items: [
          "SPY 10% — broad market",
          "QQQ 5% — tech exposure",
          "DCA bulanan konsisten",
        ],
      },
    ],
  },
  {
    key: "moderat",
    label: "Moderat",
    badge: "Moderat",
    badgeClass: "bg-[rgba(200,168,75,0.12)] text-[#c8a84b]",
    title: "Balanced Growth",
    desc: "Keseimbangan antara pertumbuhan dan perlindungan. Horizon 5–7 tahun. Profil paling umum di kalangan investor berpengalaman.",
    expectedReturn: "13–17%",
    maxDrawdown: "~25%",
    horizon: "5–7 thn",
    focus:
      "Fokus: Core-Satellite — blue chip IDX + SPY sebagai core, growth stocks sebagai satellite.",
    allocation: [
      { label: "Saham Indonesia", value: 45, color: "#22C97A" },
      { label: "Saham Amerika", value: 25, color: "#9A72E8" },
      { label: "Obligasi", value: 20, color: "#3A9EE8" },
      { label: "MMF / Kas", value: 10, color: "#5FB88A" },
    ],
    detail: [
      {
        title: "Saham Indonesia (45%)",
        items: [
          "Core: BBCA, BMRI, ASII (25%)",
          "Satellite: 3–4 high conviction (20%)",
          "Small cap max 10% dari total",
          "Rebalancing setiap 6 bulan",
        ],
      },
      {
        title: "Saham Amerika (25%)",
        items: [
          "SPY 15% — core passive",
          "MSFT/NVDA 5–10% — individual",
          "QQQ bisa gantikan SPY",
          "Hold jangka panjang, DCA",
        ],
      },
      {
        title: "Obligasi (20%)",
        items: [
          "FR series IDR (12%)",
          "INDON USD (8%)",
          "Buffer saat equity koreksi",
          "Entry saat yield spike",
        ],
      },
      {
        title: "MMF / Kas (10%)",
        items: [
          "Dry powder untuk peluang",
          "Target deploy saat IHSG -15%+",
          "MMF USD preferred",
        ],
      },
    ],
  },
  {
    key: "moderat-agresif",
    label: "Moderat Agresif",
    badge: "Mod. Agresif",
    badgeClass: "bg-[rgba(240,160,48,0.12)] text-[#f0a030]",
    title: "Growth Oriented",
    desc: "Pertumbuhan modal jangka panjang sebagai prioritas. Siap melewati siklus bear market tanpa panik.",
    expectedReturn: "17–22%",
    maxDrawdown: "~35%",
    horizon: "7–10 thn",
    focus:
      "Fokus: High-conviction IDX + QQQ/individual US tech + obligasi hanya sebagai buffer.",
    allocation: [
      { label: "Saham Indonesia", value: 50, color: "#22C97A" },
      { label: "Saham Amerika", value: 35, color: "#9A72E8" },
      { label: "Obligasi", value: 8, color: "#3A9EE8" },
      { label: "MMF / Kas", value: 7, color: "#5FB88A" },
    ],
    detail: [
      {
        title: "Saham Indonesia (50%)",
        items: [
          "Blue chip 30% (BBCA, BMRI)",
          "Growth/small cap 20%",
          "8–10 nama maksimal",
          "Conviction tinggi setiap posisi",
        ],
      },
      {
        title: "Saham Amerika (35%)",
        items: [
          "Individual: NVDA, MSFT, AAPL",
          "QQQ 10–15% sebagai core",
          "Tidak pakai SPY — terlalu broad",
          "Hold minimum 2–3 tahun",
        ],
      },
      {
        title: "Obligasi (8%)",
        items: [
          "INDON USD saja — lebih efisien",
          "Buffer jika equity crash >25%",
          "Bisa di-deploy ke saham saat krisis",
        ],
      },
      {
        title: "MMF / Kas (7%)",
        items: [
          "Minimum kas operasional",
          "Siap entry saat crash",
          "Tidak perlu lebih dari ini",
        ],
      },
    ],
  },
  {
    key: "agresif",
    label: "Agresif",
    badge: "Agresif",
    badgeClass: "bg-[rgba(224,72,72,0.12)] text-[#e04848]",
    title: "Maximum Growth",
    desc: "Memaksimalkan return jangka panjang. Toleransi drawdown ekstrem. Disiplin besi diperlukan — TIDAK untuk semua orang.",
    expectedReturn: "20–30%+",
    maxDrawdown: ">40%",
    horizon: ">10 thn",
    focus:
      "Fokus: 100% ekuitas. IDX: 8–12 high-conviction. Amerika: individual stocks + 1 ETF sektor.",
    allocation: [
      { label: "Saham Indonesia", value: 55, color: "#22C97A" },
      { label: "Saham Amerika", value: 40, color: "#9A72E8" },
      { label: "Kas Taktis", value: 5, color: "#5FB88A" },
    ],
    detail: [
      {
        title: "Saham Indonesia (55%)",
        items: [
          "High-conviction 8–12 nama",
          "Termasuk small cap 20–25%",
          "Zero blue chip defensif",
          "Semua saham harus ada thesis kuat",
        ],
      },
      {
        title: "Saham Amerika (40%)",
        items: [
          "Individual: NVDA, AAPL, MSFT, AMZN",
          "1 ETF sektor (XLK/SOXX)",
          "Tidak ada SPY — terlalu diversified",
          "Minimum 3 tahun per posisi",
        ],
      },
      {
        title: "Kas (5%)",
        items: [
          "Hanya untuk entry peluang",
          "Deploy saat crash >20%",
          "Tidak ada obligasi — return terlalu rendah",
        ],
      },
    ],
  },
];

export function InvestorStrategyCards() {
  const [active, setActive] = useState("konservatif");
  const [detailOpen, setDetailOpen] = useState(false);
  const profile = profiles.find((p) => p.key === active)!;

  return (
    <div>
      {/* Profile tabs */}
      <div className="mb-4 flex flex-wrap gap-[6px]">
        {profiles.map((p) => (
          <button
            key={p.key}
            onClick={() => {
              setActive(p.key);
              setDetailOpen(false);
            }}
            className={`rounded-full border px-[18px] py-2 text-[12px] font-medium transition ${
              active === p.key
                ? "border-[rgba(95,184,138,0.4)] bg-[rgba(95,184,138,0.12)] text-[#4ecb8d]"
                : "border-grove-border bg-transparent text-grove-muted2"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Strategy card */}
      <div className="rounded-[12px] border border-grove-border bg-grove-bg2 p-6">
        <div className="flex flex-col gap-6 md:flex-row">
          {/* Left */}
          <div className="w-full md:w-[50%]">
            <span
              className={`mb-2 inline-block rounded-[6px] px-2.5 py-1 text-[10px] font-semibold ${profile.badgeClass}`}
            >
              {profile.badge}
            </span>
            <h3 className="mb-2 font-serif text-[22px] font-normal text-grove-text">
              {profile.title}
            </h3>
            <p className="mb-5 text-[12.5px] leading-[1.7] text-grove-muted2">
              {profile.desc}
            </p>

            {/* Stats row */}
            <div className="mb-5 grid grid-cols-3 gap-3">
              {[
                {
                  label: "Expected Return",
                  value: profile.expectedReturn,
                  color: "text-[#4ecb8d]",
                },
                {
                  label: "Max Drawdown",
                  value: profile.maxDrawdown,
                  color: "text-[#e8a84c]",
                },
                {
                  label: "Horizon",
                  value: profile.horizon,
                  color: "text-grove-text",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[8px] bg-grove-bg3 px-3 py-2 text-center"
                >
                  <p className="mb-1 text-[9px] text-grove-muted">
                    {stat.label}
                  </p>
                  <p className={`text-[16px] font-semibold ${stat.color}`}>
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — allocation bars */}
          <div className="w-full md:w-[50%]">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[.08em] text-grove-muted">
              Alokasi Aset
            </p>
            <div className="space-y-3">
              {profile.allocation.map((item) => (
                <div key={item.label}>
                  <div className="mb-1 flex justify-between text-[10.5px]">
                    <span className="text-grove-muted2">{item.label}</span>
                    <span
                      className="font-semibold"
                      style={{ color: item.color }}
                    >
                      {item.value}%
                    </span>
                  </div>
                  <div className="h-[4px] w-full rounded-full bg-[rgba(255,255,255,0.05)]">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${item.value}%`,
                        backgroundColor: item.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Focus note */}
        <div className="mt-5 flex items-center justify-between border-t border-grove-border pt-4">
          <p className="text-[11.5px] text-grove-muted2">{profile.focus}</p>
          <button
            onClick={() => setDetailOpen((v) => !v)}
            className="ml-4 shrink-0 rounded-[8px] border border-[rgba(95,184,138,0.35)] px-[14px] py-[5px] text-[11px] text-[#4ecb8d]"
          >
            {detailOpen ? "Sembunyikan detail ↑" : "Lihat detail lengkap ↓"}
          </button>
        </div>
      </div>
      {detailOpen && (
        <div className="mt-4 rounded-[12px] border border-grove-border bg-grove-bg2 p-6">
          <div className="mb-4 text-[11px] font-medium uppercase tracking-[.08em] text-grove-muted2">
            Detail Alokasi &amp; Rekomendasi Instrumen
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {profile.detail.map((block) => (
              <div
                key={block.title}
                className="rounded-[10px] bg-grove-bg3 p-4"
              >
                <div className="mb-2 text-[11px] font-medium text-grove-text">
                  {block.title}
                </div>
                <div className="space-y-1">
                  {block.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 text-[11px] text-grove-muted2"
                    >
                      <span className="mt-[2px] text-[#4ecb8d]">›</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
