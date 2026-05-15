"use client";

import { useState } from "react";

type Profile = {
  key: string;
  label: string;
  badge: string;
  title: string;
  desc: string;
  expectedReturn: string;
  maxDrawdown: string;
  horizon: string;
  focus: string;
  allocation: Array<{ label: string; value: number; color: string }>;
};

const profiles: Profile[] = [
  {
    key: "konservatif",
    label: "Konservatif",
    badge: "Konservatif",
    title: "Capital Preservation",
    desc: "Prioritas utama menjaga modal. Toleransi risiko sangat rendah. Cocok untuk horizon <3 tahun atau mendekati tujuan keuangan.",
    expectedReturn: "8–10%",
    maxDrawdown: "~10%",
    horizon: "<3 thn",
    focus: "Fokus: SBN menengah (FR) + MMF USD untuk yield & perlindungan FX.",
    allocation: [
      { label: "Obligasi (SBN/INDON)", value: 45, color: "#4ecb8d" },
      { label: "MMF & Deposito", value: 30, color: "#4ecb8d" },
      { label: "Saham Indonesia", value: 15, color: "#4ecb8d" },
      { label: "Saham Amerika", value: 10, color: "#c77dff" },
    ],
  },
  {
    key: "moderat-konservatif",
    label: "Moderat Konservatif",
    badge: "Moderat Konservatif",
    title: "Balanced Income",
    desc: "Pertumbuhan moderat dengan downside terkontrol. Horizon 3–5 tahun, toleransi risiko rendah-menengah.",
    expectedReturn: "10–14%",
    maxDrawdown: "~18%",
    horizon: "3–5 thn",
    focus: "Fokus: Campuran obligasi FR + saham IDX defensif + sedikit asing.",
    allocation: [
      { label: "Saham Indonesia", value: 35, color: "#4ecb8d" },
      { label: "Obligasi (SBN/INDON)", value: 35, color: "#4ecb8d" },
      { label: "MMF & Deposito", value: 15, color: "#4ecb8d" },
      { label: "Saham Amerika", value: 15, color: "#c77dff" },
    ],
  },
  {
    key: "moderat",
    label: "Moderat",
    badge: "Moderat",
    title: "Balanced Growth",
    desc: "Seimbang antara pertumbuhan dan perlindungan. Horizon 5–7 tahun, toleransi risiko menengah.",
    expectedReturn: "12–16%",
    maxDrawdown: "~25%",
    horizon: "5–7 thn",
    focus: "Fokus: Saham IDX sektoral + obligasi tenor menengah + global exposure.",
    allocation: [
      { label: "Saham Indonesia", value: 50, color: "#4ecb8d" },
      { label: "Obligasi (SBN/INDON)", value: 25, color: "#4ecb8d" },
      { label: "Saham Amerika", value: 20, color: "#c77dff" },
      { label: "MMF & Deposito", value: 5, color: "#4ecb8d" },
    ],
  },
  {
    key: "moderat-agresif",
    label: "Moderat Agresif",
    badge: "Moderat Agresif",
    title: "Growth Oriented",
    desc: "Fokus pada pertumbuhan kapital jangka panjang. Horizon 7–10 tahun, toleransi risiko tinggi.",
    expectedReturn: "15–20%",
    maxDrawdown: "~35%",
    horizon: "7–10 thn",
    focus: "Fokus: Saham IDX growth + small cap + emerging market ETF.",
    allocation: [
      { label: "Saham Indonesia", value: 60, color: "#4ecb8d" },
      { label: "Saham Amerika", value: 25, color: "#c77dff" },
      { label: "Obligasi (SBN/INDON)", value: 10, color: "#4ecb8d" },
      { label: "MMF & Deposito", value: 5, color: "#4ecb8d" },
    ],
  },
  {
    key: "agresif",
    label: "Agresif",
    badge: "Agresif",
    title: "Maximum Growth",
    desc: "Maksimisasi return jangka panjang. Toleransi drawdown tinggi. Hanya untuk investor berpengalaman.",
    expectedReturn: "18–25%",
    maxDrawdown: "~45%",
    horizon: ">10 thn",
    focus: "Fokus: Saham high-conviction + global equity + minimal obligasi.",
    allocation: [
      { label: "Saham Indonesia", value: 55, color: "#4ecb8d" },
      { label: "Saham Amerika", value: 35, color: "#c77dff" },
      { label: "Obligasi (SBN/INDON)", value: 5, color: "#4ecb8d" },
      { label: "MMF & Deposito", value: 5, color: "#4ecb8d" },
    ],
  },
];

export function InvestorStrategyCards() {
  const [active, setActive] = useState("konservatif");
  const profile = profiles.find((p) => p.key === active)!;

  return (
    <div>
      {/* Profile tabs */}
      <div className="mb-5 flex flex-wrap gap-2">
        {profiles.map((p) => (
          <button
            key={p.key}
            onClick={() => setActive(p.key)}
            className={`rounded-full border px-4 py-1.5 text-[11.5px] font-medium transition ${active === p.key
                ? "border-grove-primary bg-[#1a2e26] text-grove-primary"
                : "border-grove-border text-grove-muted2 hover:border-grove-border2 hover:text-grove-text"
              }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Strategy card */}
      <div className="rounded-[12px] border border-grove-border bg-grove-bg2 p-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          {/* Left */}
          <div>
            <span className="mb-3 inline-block rounded-[6px] bg-[#1a3a5c] px-2.5 py-1 text-[10px] font-bold text-[#4ecb8d]">
              {profile.badge}
            </span>
            <h3 className="mb-2 font-serif text-[26px] font-bold text-grove-text">
              {profile.title}
            </h3>
            <p className="mb-5 text-[12.5px] leading-[1.7] text-grove-muted2">
              {profile.desc}
            </p>

            {/* Stats row */}
            <div className="mb-5 grid grid-cols-3 gap-3">
              {[
                { label: "Expected Return", value: profile.expectedReturn, color: "text-[#4ecb8d]" },
                { label: "Max Drawdown", value: profile.maxDrawdown, color: "text-[#e8a84c]" },
                { label: "Horizon", value: profile.horizon, color: "text-grove-text" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-[8px] border border-grove-border bg-grove-bg3 px-3 py-3 text-center">
                  <p className="mb-1 text-[9px] text-grove-muted">{stat.label}</p>
                  <p className={`text-[16px] font-bold ${stat.color}`}>{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Focus note */}
            <div className="flex items-center justify-between">
              <p className="text-[11.5px] text-grove-muted2">{profile.focus}</p>
              <button className="ml-4 shrink-0 rounded-[8px] border border-grove-border px-4 py-1.5 text-[11px] text-grove-muted2 transition hover:border-grove-border2">
                Lihat detail lengkap ↓
              </button>
            </div>
          </div>

          {/* Right — allocation bars */}
          <div>
            <p className="mb-4 text-[9px] font-bold uppercase tracking-[.14em] text-grove-muted">
              Alokasi Aset
            </p>
            <div className="space-y-4">
              {profile.allocation.map((item) => (
                <div key={item.label}>
                  <div className="mb-1.5 flex justify-between">
                    <span className="text-[12px] text-grove-muted2">{item.label}</span>
                    <span className="text-[12px] font-bold" style={{ color: item.color }}>
                      {item.value}%
                    </span>
                  </div>
                  <div className="h-[5px] w-full rounded-full bg-grove-bg3">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: `${item.value}%`, backgroundColor: item.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}