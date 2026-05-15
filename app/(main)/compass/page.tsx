import { MacroDimensionCards } from "@/components/compass/MacroDimensionCards";
import { RotationCards } from "@/components/compass/RotationCards";
import { SectorCards } from "@/components/compass/SectorCards";
import { InvestorStrategyCards } from "@/components/compass/InvestorStrategyCards";
import { YTMCalculator } from "@/components/compass/YTMCalculator";

// Macro score gauge
function MacroScoreCard() {
  const score = 72;
  const zones = [
    { label: "0–34 Risk Off", pct: 34, color: "#e05c5c" },
    { label: "35–49 Kautius", pct: 15, color: "#e8a84c" },
    { label: "50–64 Netral", pct: 15, color: "#9ab0a2" },
    { label: "65–79 Konstruktif", pct: 15, color: "#4ecb8d" },
    { label: "80–100 Risk On", pct: 21, color: "#1a7a4a" },
  ];

  return (
    <div className="mb-6 rounded-[12px] border border-grove-border bg-grove-bg2 p-6">
      <div className="flex gap-8">
        {/* Score left */}
        <div className="shrink-0">
          <p className="mb-2 text-[9px] font-bold uppercase tracking-[.12em] text-grove-muted">
            Macro Score
          </p>
          <p className="font-serif text-[64px] font-bold leading-none text-[#4ecb8d]">
            {score}
          </p>
          <p className="mb-3 text-[10px] text-grove-muted">/ 100</p>
          <span className="inline-block rounded-[6px] border border-[#4ecb8d] px-3 py-1 text-[9px] font-bold uppercase tracking-[.1em] text-[#4ecb8d]">
            Konstruktif
          </span>
        </div>

        {/* Narrative right */}
        <div className="flex-1">
          <p className="mb-2 text-[16px] font-bold leading-[1.4] text-grove-text">
            Fed & BI keduanya dalam{" "}
            <em className="italic text-[#4ecb8d]">siklus penurunan rate</em>. Indonesia di sweet spot: GDP stabil,
            inflasi terkendali, likuiditas domestik naik.
          </p>
          <p className="text-[12px] leading-[1.7] text-grove-muted2">
            Namun tarif AS–China tetap elevated — selektif di saham ekspor komoditas. Market Sentiment kuat: foreign net buy Rp 3.2T minggu lalu,
            IHSG +4.2% YTD.
          </p>
        </div>
      </div>

      {/* Gauge bar */}
      <div className="mt-6">
        <div className="flex h-[6px] w-full overflow-hidden rounded-full">
          {zones.map((z) => (
            <div key={z.label} style={{ width: `${z.pct}%`, backgroundColor: z.color }} />
          ))}
        </div>
        <div className="mt-2 flex justify-between text-[9px] text-grove-muted">
          {zones.map((z, i) => (
            <span
              key={z.label}
              className={i === 3 ? "font-bold text-[#4ecb8d]" : ""}
            >
              {z.label}{i === 3 ? " ●" : ""}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CompassPage() {
  return (
    <main className="container-shell py-10 animate-fadeUp">

      {/* ── Hero ── */}
      <header className="mb-12 text-center">
        <h1 className="mb-3 font-serif text-[32px] font-bold">
          Grove <em className="italic text-[#4ecb8d]">Compass</em>
        </h1>
        <p className="mx-auto max-w-[520px] text-[13px] leading-[1.75] text-grove-muted2">
          Peta arah pasar. Dari kondisi makro global, rotasi sektor IHSG, hingga strategi alokasi sesuai profil risikomu.
        </p>
        <p className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-grove-muted">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4ecb8d]" />
          Update mingguan · Senin pagi · Apr 2026
        </p>
      </header>

      {/* ══ BLOK 1 · MACRO ══ */}
      <div className="mb-2 flex items-center justify-between border-t border-grove-border pt-6">
        <p className="text-[9px] font-bold uppercase tracking-[.16em] text-[#4ecb8d]">
          Blok 1 · Macro
        </p>
        <p className="text-[10px] text-grove-muted">Klik setiap indikator untuk narasi lengkap</p>
      </div>
      <h2 className="mb-5 font-serif text-[22px] font-bold">
        Cuaca Makro — <em className="italic text-[#4ecb8d]">Apr 2026</em>
      </h2>

      <MacroScoreCard />
      <MacroDimensionCards />

      {/* ══ BLOK 2 · ROTATION ══ */}
      <div className="mb-2 border-t border-grove-border pt-8">
        <p className="text-[9px] font-bold uppercase tracking-[.16em] text-[#4ecb8d]">
          Blok 2 · Rotation
        </p>
      </div>
      <h2 className="mb-5 font-serif text-[22px] font-bold">
        Rotasi Aset & <em className="italic">Sektor IHSG</em>
      </h2>

      {/* Asset class rotation */}
      <div className="mb-4 rounded-[12px] border border-grove-border bg-grove-bg2 p-5">
        <p className="mb-4 text-[9px] font-bold uppercase tracking-[.14em] text-grove-muted">
          Alokasi Antar Kelas Aset
        </p>
        <RotationCards />
      </div>

      {/* Sector IHSG */}
      <div className="rounded-[12px] border border-grove-border bg-grove-bg2 p-5">
        <p className="mb-4 text-[9px] font-bold uppercase tracking-[.14em] text-grove-muted">
          Sektor IHSG — Urut dari Terkuat
        </p>
        <SectorCards />
      </div>

      {/* ══ BLOK 3 · PORTFOLIO ══ */}
      <div className="mb-2 mt-10 border-t border-grove-border pt-8">
        <p className="text-[9px] font-bold uppercase tracking-[.16em] text-[#4ecb8d]">
          Blok 3 · Portfolio
        </p>
      </div>
      <h2 className="mb-1 font-serif text-[22px] font-bold">
        Strategi Portofolio — <em className="italic">Sesuai Profil Risiko</em>
      </h2>
      <p className="mb-5 text-[12.5px] leading-[1.7] text-grove-muted2">
        Alokasi di bawah sudah disesuaikan dengan kondisi Macro Score 72 (Konstruktif) dan sinyal rotasi di atas. Pilih profil yang paling sesuai dengan toleransi risikomu.
      </p>

      <div className="mb-6">
        <InvestorStrategyCards />
      </div>

      {/* YTM Calculator */}
      <YTMCalculator />

      {/* Footer disclaimer */}
      <p className="mt-12 text-center text-[10.5px] leading-[1.7] text-grove-muted">
        Grove Compass bersifat edukatif dan diperbarui mingguan setiap Senin pagi. Bukan saran investasi personal. Setiap keputusan investasi
        <br />adalah tanggung jawab masing-masing investor.
      </p>
    </main>
  );
}