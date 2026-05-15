"use client";

import { TrendingUp, LayoutGrid, Globe, BookOpen, PieChart } from "lucide-react";
import { AssetTab } from "@/lib/types";

const tabs: Array<{ key: AssetTab; label: string; icon: React.ReactNode }> = [
  { key: "indonesia", label: "Saham Indonesia", icon: <TrendingUp size={12} strokeWidth={2} /> },
  { key: "us", label: "Saham Amerika", icon: <LayoutGrid size={12} strokeWidth={2} /> },
  { key: "global", label: "Saham Global", icon: <Globe size={12} strokeWidth={2} /> },
  { key: "bonds", label: "Obligasi", icon: <BookOpen size={12} strokeWidth={2} /> },
  { key: "mmf", label: "Reksadana & ETF", icon: <PieChart size={12} strokeWidth={2} /> },
];

export function AssetClassTabs({
  value,
  onChange,
}: {
  value: AssetTab;
  onChange: (next: AssetTab) => void;
}) {
  return (
    <div className="mb-5 flex gap-0.5 overflow-x-auto rounded-[10px] border border-grove-border bg-grove-bg2 p-1">
      {tabs.map((tab) => {
        const active = value === tab.key;
        return (
          <button
            key={tab.key}
            onClick={() => onChange(tab.key)}
            className={`flex shrink-0 items-center gap-2 rounded-[7px] px-4 py-2 text-[12px] font-medium transition-all ${active
                ? "border border-grove-border bg-grove-bg3 text-grove-text"
                : "border border-transparent text-grove-muted hover:text-grove-muted2"
              }`}
          >
            <span className={active ? "text-grove-primary" : "text-grove-muted"}>
              {tab.icon}
            </span>
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}