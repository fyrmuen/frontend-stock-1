"use client";

import { useMemo, useState } from "react";
import { researchData } from "@/lib/data";
import { AssetClass, Horizon } from "@/lib/types";
import { StanceBadge } from "@/components/ui/stance-badge";

const assetOptions: { key: AssetClass; label: string }[] = [
  { key: "stocks", label: "Indonesia" },
  { key: "us", label: "US" },
  { key: "global", label: "Global" },
  { key: "bonds", label: "Bonds" },
  { key: "mmf", label: "MMF/ETF" }
];

const horizonOptions: { key: Horizon; label: string }[] = [
  { key: "lt", label: "Long Term" },
  { key: "mt", label: "Medium Term" },
  { key: "st", label: "Short Term" }
];

export function ResearchPage() {
  const [asset, setAsset] = useState<AssetClass>("stocks");
  const [horizon, setHorizon] = useState<Horizon>("lt");

  const rows = useMemo(() => researchData[asset][horizon], [asset, horizon]);

  return (
    <main className="container-shell py-8">
      <header className="mb-5">
        <p className="kicker mb-2">Research Dashboard</p>
        <h2 className="font-serif text-3xl">Grove Compass</h2>
        <p className="mt-2 text-xs text-grove-muted">Versi modular Next.js dari `grove_v8 (2).html` untuk pondasi scalable.</p>
      </header>

      <div className="mb-3 flex flex-wrap gap-2">
        {assetOptions.map((item) => (
          <button
            key={item.key}
            onClick={() => setAsset(item.key)}
            className={`rounded-lg border px-3 py-1.5 text-xs ${
              asset === item.key ? "border-grove-primary bg-grove-primarySoft text-grove-primary" : "border-grove-border text-grove-muted"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="mb-5 flex flex-wrap gap-2">
        {horizonOptions.map((item) => (
          <button
            key={item.key}
            onClick={() => setHorizon(item.key)}
            className={`rounded-md px-3 py-1 text-xs ${horizon === item.key ? "bg-grove-bg3 text-grove-text" : "text-grove-muted"}`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <section className="panel overflow-x-auto">
        <table className="min-w-full text-xs">
          <thead className="bg-grove-bg3 text-grove-muted">
            <tr>
              <th className="px-3 py-2 text-left">Ticker</th>
              <th className="px-3 py-2 text-left">Nama</th>
              <th className="px-3 py-2 text-center">Harga</th>
              <th className="px-3 py-2 text-center">G</th>
              <th className="px-3 py-2 text-center">R</th>
              <th className="px-3 py-2 text-center">O</th>
              <th className="px-3 py-2 text-center">V</th>
              <th className="px-3 py-2 text-center">E</th>
              <th className="px-3 py-2 text-center">Score</th>
              <th className="px-3 py-2 text-center">Stance</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={`${row.ticker}-${row.sector}`} className="border-t border-grove-border">
                <td className="px-3 py-2 font-mono">{row.ticker}</td>
                <td className="px-3 py-2">{row.name}</td>
                <td className="px-3 py-2 text-center">{row.price}</td>
                <td className="px-3 py-2 text-center">{row.g}</td>
                <td className="px-3 py-2 text-center">{row.r}</td>
                <td className="px-3 py-2 text-center">{row.o}</td>
                <td className="px-3 py-2 text-center">{row.v}</td>
                <td className="px-3 py-2 text-center">{row.e}</td>
                <td className="px-3 py-2 text-center font-semibold">{row.score}</td>
                <td className="px-3 py-2 text-center"><StanceBadge stance={row.stance} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
