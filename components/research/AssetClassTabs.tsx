"use client";

import { AssetTab } from "@/lib/types";

const tabs: Array<{ key: AssetTab; label: string; icon: React.ReactNode }> = [
  {
    key: "indonesia",
    label: "Saham Indonesia",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3v18h18" />
        <path d="M7 14l3-3 3 3 5-5" />
      </svg>
    ),
  },
  {
    key: "us",
    label: "Saham Amerika",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 5h18M3 12h18M3 19h18" />
        <rect x="3" y="5" width="8" height="7" rx="0.5" fill="none" />
      </svg>
    ),
  },
  {
    key: "global",
    label: "Saham Global",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" />
      </svg>
    ),
  },
  {
    key: "bonds",
    label: "Obligasi",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M8 14h3" />
      </svg>
    ),
  },
  {
    key: "mmf",
    label: "Reksadana & ETF",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    ),
  },
];

export function AssetClassTabs({
  value,
  onChange,
}: {
  value: AssetTab;
  onChange: (next: AssetTab) => void;
}) {
  return (
    <div className="mb-5 flex gap-[3px] overflow-x-auto rounded-[10px] border border-grove-border bg-grove-bg2 p-1">
      {tabs.map((tab) => {
        const active = value === tab.key;
        return (
          <button
            key={tab.key}
            onClick={() => onChange(tab.key)}
            className={`flex shrink-0 items-center gap-2 rounded-[8px] px-4 py-2 text-[11px] font-medium transition-all ${
              active
                ? "border border-[rgba(95,184,138,0.25)] bg-[rgba(95,184,138,0.1)] text-grove-primary"
                : "border border-transparent text-grove-muted2 hover:text-grove-text"
            }`}
          >
            <span
              className={active ? "text-grove-primary" : "text-grove-muted"}
            >
              <span className="block h-[13px] w-[13px]">{tab.icon}</span>
            </span>
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
