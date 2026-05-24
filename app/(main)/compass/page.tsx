"use client";

import { useEffect, useRef, useState } from "react";
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
            <em className="italic text-[#4ecb8d]">siklus penurunan rate</em>.
            Indonesia di sweet spot: GDP stabil, inflasi terkendali, likuiditas
            domestik naik.
          </p>
          <p className="text-[12px] leading-[1.7] text-grove-muted2">
            Namun tarif AS–China tetap elevated — selektif di saham ekspor
            komoditas. Market Sentiment kuat: foreign net buy Rp 3.2T minggu
            lalu, IHSG +4.2% YTD.
          </p>
        </div>
      </div>

      {/* Gauge bar */}
      <div className="mt-6">
        <div className="flex h-[6px] w-full overflow-hidden rounded-full">
          {zones.map((z) => (
            <div
              key={z.label}
              style={{ width: `${z.pct}%`, backgroundColor: z.color }}
            />
          ))}
        </div>
        <div className="mt-2 flex justify-between text-[9px] text-grove-muted">
          {zones.map((z, i) => (
            <span
              key={z.label}
              className={i === 3 ? "font-bold text-[#4ecb8d]" : ""}
            >
              {z.label}
              {i === 3 ? " ●" : ""}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CompassPage() {
  const [macroDetailIndex, setMacroDetailIndex] = useState<number | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (macroDetailIndex !== null && panelRef.current) {
      panelRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [macroDetailIndex]);

  const macroDetailsData = [
    {
      title: "Global Rate & Liquidity — Skor 78/100",
      narrative:
        "Fed telah melakukan <em>2 cut rate</em> di 2025 dan sinyal dovish untuk 2026. DXY melemah dari 107 ke 102.4, artinya dolar sedang kehilangan kekuatan terhadap mata uang lainnya. Ini <em>window tailwind</em> untuk emerging markets termasuk Indonesia — modal global akan mencari yield yang lebih tinggi di luar AS.",
      why: "Skor tinggi (78) karena semua sinyal global moneter sedang mendukung risk assets. Fed cutting + DXY melemah + US 10Y stabil di 4.18% — kombinasi ideal untuk EM equity rally.",
      news: [
        {
          date: "18 Apr 2026",
          title:
            "Fed Pivots More Dovish in March Minutes — Markets Price in 3 More Cuts for 2026",
          source: "Bloomberg",
        },
        {
          date: "15 Apr 2026",
          title: "DXY Falls to 6-Month Low as Dollar Softens Across G10",
          source: "Reuters",
        },
        {
          date: "12 Apr 2026",
          title: "EM Funds See $8.2B Weekly Inflows — Largest Since Nov 2023",
          source: "Financial Times",
        },
      ],
    },
    {
      title: "Domestic Rate & Currency — Skor 74/100",
      narrative:
        "BI telah memulai <em>cutting cycle</em> dengan penurunan 25 bps ke 5.50% bulan lalu. Rupiah relatif stabil di 16,180 — tidak terlalu kuat maupun terlalu lemah. Cadangan devisa naik ke USD 156 miliar, level tertinggi dalam 18 bulan. Kombinasi ini memberi ruang untuk <em>cut lebih lanjut</em> tanpa mengganggu stabilitas FX.",
      why: "Skor 74 mencerminkan kondisi domestik moneter yang konstruktif tapi belum optimal. BI masih hati-hati karena tarif AS-China menciptakan ketidakpastian ekspor. Jika Rupiah tetap stabil 2-3 bulan ke depan, skor bisa naik ke 80+.",
      news: [
        {
          date: "17 Apr 2026",
          title: "BI Rate Dipangkas 25 bps ke 5.50% — Dewan Gubernur Dovish",
          source: "Kontan",
        },
        {
          date: "16 Apr 2026",
          title: "Cadev Indonesia Naik ke USD 156 Miliar — Rekor 18 Bulan",
          source: "CNBC Indonesia",
        },
        {
          date: "10 Apr 2026",
          title: "Rupiah Stabil di 16,180 — Foreign Inflow Dukung Kurs",
          source: "Bisnis Indonesia",
        },
      ],
    },
    {
      title: "Growth & Activity — Skor 68/100",
      narrative:
        "GDP Indonesia 2026E diperkirakan <em>5.1%</em> — sedikit di bawah konsensus awal 5.3%. Manufacturing PMI pulih ke 51.8 (ekspansif), tapi Consumer Confidence stabil di 116 tanpa akselerasi. Retail sales tumbuh 4.2% YoY, masih <em>below historical trend 6-7%</em>.",
      why: "Skor 68 (amber) karena pertumbuhan solid tapi belum akseleratif. Tarif AS-China menekan sektor ekspor (tekstil, furnitur). Daya beli domestik middle-class baru pulih, belum sepenuhnya recovery dari tekanan 2024-2025.",
      news: [
        {
          date: "20 Apr 2026",
          title: "GDP Q1 2026 Diperkirakan 5.1% — Sedikit di Bawah Konsensus",
          source: "Bank Indonesia",
        },
        {
          date: "14 Apr 2026",
          title: "PMI Manufaktur April 51.8 — Ekspansi Melambat",
          source: "S&P Global",
        },
        {
          date: "08 Apr 2026",
          title:
            "Retail Sales Maret +4.2% YoY — Middle Class Recovery Bertahap",
          source: "BPS",
        },
      ],
    },
    {
      title: "Inflation & Fiscal — Skor 64/100",
      narrative:
        "CPI headline <em>2.8% YoY</em> — mendekati target BI (2.5-3.5%). Core inflation 2.4%, stabil. Namun fiskal defisit 2.5% GDP cukup tinggi karena belanja infrastruktur dan subsidi energi. Debt/GDP 38.5% — masih aman tapi trajectory naik.",
      why: "Skor 64 (netral-kautius) karena inflasi terkendali (bagus) tapi defisit fiskal lebih lebar dari ideal (kurang bagus). Rating agencies masih comfortable dengan BB+ (S&P), tapi Moody's sudah issue concern notes.",
      news: [
        {
          date: "21 Apr 2026",
          title: "CPI Maret 2.8% YoY — Core Stabil, BI Leluasa Cut Rate",
          source: "BPS",
        },
        {
          date: "19 Apr 2026",
          title:
            "Defisit APBN Q1 2026 di 2.5% GDP — Belanja Infrastruktur Naik",
          source: "Kemenkeu",
        },
        {
          date: "11 Apr 2026",
          title:
            "Moody\'s Affirm Indonesia Baa2 — Outlook Stable Namun Tekanan Fiskal Diperhatikan",
          source: "Moody's",
        },
      ],
    },
    {
      title: "Market Sentiment — Skor 80/100",
      narrative:
        "IHSG YTD <em>+4.2%</em> dengan momentum positif setelah bear market 2025. Foreign flow <em>net buy Rp 3.2 T</em> minggu lalu — terbesar sejak Nov 2024. VIX global rendah di 14.8 (risk-on mode). Credit spread menyempit, investor risk appetite pulih.",
      why: "Skor tinggi (80) karena semua indikator sentimen menyala hijau. Ini yang mendorong Macro Score overall ke zona Konstruktif. Namun sentiment bisa berubah cepat — perlu pantau foreign flow weekly.",
      news: [
        {
          date: "22 Apr 2026",
          title: "Foreign Net Buy Rp 3.2 T — Terbesar Sejak Nov 2024",
          source: "BEI",
        },
        {
          date: "18 Apr 2026",
          title: "IHSG Tembus 7,450 — Target Konsensus 7,800 di Akhir 2026",
          source: "Investor Daily",
        },
        {
          date: "15 Apr 2026",
          title: "VIX Global di 14.8 — Risk-On Mode Kembali ke Pasar EM",
          source: "CNBC",
        },
      ],
    },
  ];
  return (
    <main className="container-shell py-10 animate-fadeUp">
      {/* ── Hero ── */}
      <header className="mb-12 text-center">
        <h1 className="mb-3 font-serif text-[32px] font-bold">
          Grove <em className="italic text-[#4ecb8d]">Compass</em>
        </h1>
        <p className="mx-auto max-w-[520px] text-[13px] leading-[1.75] text-grove-muted2">
          Peta arah pasar. Dari kondisi makro global, rotasi sektor IHSG, hingga
          strategi alokasi sesuai profil risikomu.
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
        <p className="text-[10px] text-grove-muted">
          Klik setiap indikator untuk narasi lengkap
        </p>
      </div>
      <h2 className="mb-5 font-serif text-[22px] font-bold">
        Cuaca Makro — <em className="italic text-[#4ecb8d]">Apr 2026</em>
      </h2>

      <MacroScoreCard />
      <MacroDimensionCards onOpen={(i) => setMacroDetailIndex(i)} />

      {macroDetailIndex !== null && (
        <div
          ref={panelRef}
          className="mt-6 rounded-[12px] border border-grove-border bg-grove-bg2 overflow-hidden"
        >
          <div className="flex items-center justify-between border-b border-grove-border p-4">
            <h3 className="font-serif text-[18px] font-medium">
              {macroDetailsData[macroDetailIndex].title}
            </h3>
            <button
              onClick={() => setMacroDetailIndex(null)}
              className="rounded-[8px] border border-grove-border px-3 py-1 text-[11px] text-grove-muted2"
            >
              Tutup ✕
            </button>
          </div>
          <div className="p-6 space-y-6">
            <div>
              <div className="mb-2 text-[12px] font-semibold text-grove-muted">
                Narasi &amp; Interpretasi
              </div>
              <div
                className="prose max-w-none text-[13px] text-grove-muted2"
                dangerouslySetInnerHTML={{
                  __html: macroDetailsData[macroDetailIndex].narrative,
                }}
              />
            </div>

            <div>
              <div className="mb-2 text-[12px] font-semibold text-grove-muted">
                Mengapa Skor Ini?
              </div>
              <div className="rounded-[8px] border border-grove-border bg-grove-bg3 p-4">
                <div
                  className="text-[13px] text-grove-muted2"
                  dangerouslySetInnerHTML={{
                    __html: macroDetailsData[macroDetailIndex].why,
                  }}
                />
              </div>
            </div>

            <div>
              <div className="mb-3 text-[12px] font-semibold text-grove-muted">
                Berita &amp; Data Pendukung
              </div>
              <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2">
                {macroDetailsData[macroDetailIndex].news.map((n, idx) => (
                  <div
                    key={idx}
                    className="rounded-[8px] border border-grove-border bg-grove-bg3 p-3"
                  >
                    <div className="text-[10px] text-grove-muted">{n.date}</div>
                    <div className="mt-1 text-[13px] font-semibold text-grove-text">
                      {n.title}
                    </div>
                    <div className="mt-1 text-[11px] text-grove-muted">
                      Sumber: {n.source}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

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
        Alokasi di bawah sudah disesuaikan dengan kondisi Macro Score 72
        (Konstruktif) dan sinyal rotasi di atas. Pilih profil yang paling sesuai
        dengan toleransi risikomu.
      </p>

      <div className="mb-6">
        <InvestorStrategyCards />
      </div>

      {/* YTM Calculator */}
      <YTMCalculator />

      {/* Footer disclaimer */}
      <p className="mt-12 text-center text-[10.5px] leading-[1.7] text-grove-muted">
        Grove Compass bersifat edukatif dan diperbarui mingguan setiap Senin
        pagi. Bukan saran investasi personal. Setiap keputusan investasi
        <br />
        adalah tanggung jawab masing-masing investor.
      </p>
    </main>
  );
}
