"use client";

import { ResearchHorizon } from "@/lib/types";

const tabs: Array<{ key: ResearchHorizon; label: string }> = [
  { key: "lt", label: "Long Term · 1–3 Thn" },
  { key: "mt", label: "Medium Term · 3–12 Bln" },
  { key: "st", label: "Short Term · 1–8 Mgg" },
];

export function HorizonTabs({
  value,
  onChange,
}: {
  value: ResearchHorizon;
  onChange: (next: ResearchHorizon) => void;
}) {
  return (
    <div className="mb-4 inline-flex gap-0.5 rounded-[8px] border border-grove-border bg-grove-bg2 p-0.5">
      {tabs.map((tab) => {
        const active = value === tab.key;
        return (
          <button
            key={tab.key}
            onClick={() => onChange(tab.key)}
            className={`rounded-[6px] px-4 py-1.5 text-[10.5px] font-medium transition ${
              active
                ? "border border-grove-border2 bg-grove-bg3 text-grove-text"
                : "border border-transparent text-grove-muted2 hover:text-grove-text"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
