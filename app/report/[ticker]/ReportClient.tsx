"use client";

import { useState } from "react";
import { ReportHeader } from "@/components/report/ReportHeader";
import { ReportNav } from "@/components/report/ReportNav";
import { KeyStatsSection } from "@/components/report/KeyStatsSection";
import { IncomeStatementTable } from "@/components/report/IncomeStatementTable";
import { SegmentsSection } from "@/components/report/SegmentsSection";
import { AnalysisSection } from "@/components/report/AnalysisSection";
import { BandarmologySection } from "@/components/report/BandarmologySection";
import { NarasiSection } from "@/components/report/NarasiSection";
import { VerdictBlock } from "@/components/report/VerdictBlock";
import { CatalystRiskSection } from "@/components/report/CatalystRiskSection";

export function ReportClient({ ticker }: { ticker: string }) {
  const [tab, setTab] = useState("overview");

  return (
    <main className="container-shell py-7 animate-fadeUp">
      <ReportHeader ticker={ticker} />
      <ReportNav value={tab} onChange={setTab} />
      {(tab === "overview" || tab === "income") && <KeyStatsSection />}
      {(tab === "overview" || tab === "income") && <IncomeStatementTable />}
      {(tab === "overview" || tab === "segments") && <SegmentsSection />}
      {(tab === "overview" || tab === "analysis") && <AnalysisSection />}
      {(tab === "overview" || tab === "bandar") && <BandarmologySection />}
      {(tab === "overview" || tab === "narasi") && <NarasiSection />}
      {(tab === "overview" || tab === "verdict") && <VerdictBlock />}
      {(tab === "overview" || tab === "verdict") && <CatalystRiskSection />}
    </main>
  );
}
