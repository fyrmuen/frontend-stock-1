"use client";

import { useMemo, useState } from "react";
import { AssetTab } from "@/lib/types";
import { summaryStocks } from "@/data/mockData";
import { DashboardHeader } from "@/components/research/DashboardHeader";
import { AssetClassTabs } from "@/components/research/AssetClassTabs";
import { SectorFilter } from "@/components/research/SectorFilter";
import { SummaryCards } from "@/components/research/SummaryCards";
import { StockTable } from "@/components/research/StockTable";
import { ResearchTable } from "@/components/research/ResearchTable";

export default function ResearchPage() {
  const [assetTab, setAssetTab] = useState<AssetTab>("indonesia");
  const [sector, setSector] = useState("All");

  const rows = useMemo(
    () =>
      summaryStocks.filter((item) =>
        sector === "All" ? true : item.sector.toLowerCase() === sector.toLowerCase()
      ),
    [sector]
  );

  return (
    <main className="container-shell py-7 animate-fadeUp">
      <DashboardHeader />
      <AssetClassTabs value={assetTab} onChange={setAssetTab} />
      <SectorFilter value={sector} onChange={setSector} />
      <SummaryCards />
      <StockTable rows={rows} />
      <ResearchTable />
    </main>
  );
}
