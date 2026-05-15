"use client";

import { useMemo, useState } from "react";
import { AssetTab } from "@/lib/types";
import { HorizonTab, HorizonTabs } from "@/components/research/Horizontabs";
import { summaryStocks } from "@/data/mockData";
import { DashboardHeader } from "@/components/research/DashboardHeader";
import { AssetClassTabs } from "@/components/research/AssetClassTabs";
import { SummaryCards } from "@/components/research/SummaryCards";
import { SectorFilter } from "@/components/research/SectorFilter";
import { StockTable } from "@/components/research/StockTable";

const horizonLabel: Record<HorizonTab, string> = {
  long: "Long Term",
  medium: "Medium Term",
  short: "Short Term",
};

export default function ResearchPage() {
  const [assetTab, setAssetTab] = useState<AssetTab>("indonesia");
  const [sector, setSector] = useState("Semua sektor");
  const [horizon, setHorizon] = useState<HorizonTab>("long");

  const rows = useMemo(
    () =>
      summaryStocks.filter((item) =>
        sector === "Semua sektor"
          ? true
          : item.sector?.toLowerCase() === sector.toLowerCase()
      ),
    [sector]
  );

  return (
    <main className="container-shell py-7 animate-fadeUp">
      {/* 1. Header */}
      <DashboardHeader />

      {/* 2. Asset class tabs */}
      <AssetClassTabs value={assetTab} onChange={setAssetTab} />

      {/* 3. Summary cards — top 3 per horizon */}
      <SummaryCards />

      {/* 4. Sector filter */}
      <SectorFilter value={sector} onChange={setSector} />

      {/* 5. Horizon tabs */}
      <HorizonTabs value={horizon} onChange={setHorizon} />

      {/* 6. Table label */}
      <p className="mb-3 flex items-center gap-2 text-[9.5px] font-bold uppercase tracking-[.1em] text-grove-muted">
        Ranking {horizonLabel[horizon]} — Grove Score (G·R·O·V·E Breakdown)
        <span className="flex-1 border-t border-grove-border" />
      </p>

      {/* 7. Stock table */}
      <StockTable rows={rows} />
    </main>
  );
}