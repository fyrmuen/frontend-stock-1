"use client";

import { useState } from "react";

type Trend = "up" | "down" | "neutral";
type DimItem = {
  title: string;
  score: number;
  trend: Trend;
  metrics: Array<{ label: string; value: string; trend: Trend }>;
  narrativeLink: string;
};

const macroDimensions: DimItem[] = [
  {
    title: "Global Rate & Liquidity",
    score: 78,
    trend: "up",
    metrics: [
      { label: "Fed Funds", value: "4.25–4.50%", trend: "down" },
      { label: "DXY", value: "102.4", trend: "down" },
      { label: "US 10Y", value: "4.18%", trend: "neutral" },
    ],
    narrativeLink: "#",
  },
  {
    title: "Domestic Rate & Currency",
    score: 74,
    trend: "down",
    metrics: [
      { label: "BI Rate", value: "5.50%", trend: "down" },
      { label: "USD/IDR", value: "16,180", trend: "neutral" },
      { label: "Cadev", value: "$156B", trend: "up" },
    ],
    narrativeLink: "#",
  },
  {
    title: "Growth & Activity",
    score: 68,
    trend: "up",
    metrics: [
      { label: "GDP Indonesia", value: "5.1%", trend: "up" },
      { label: "PMI", value: "51.8", trend: "up" },
      { label: "Consumer Conf", value: "116", trend: "neutral" },
    ],
    narrativeLink: "#",
  },
  {
    title: "Inflation & Fiscal",
    score: 64,
    trend: "down",
    metrics: [
      { label: "CPI YoY", value: "2.8%", trend: "down" },
      { label: "Core CPI", value: "2.4%", trend: "neutral" },
      { label: "Deficit", value: "2.5% GDP", trend: "neutral" },
    ],
    narrativeLink: "#",
  },
  {
    title: "Market Sentiment",
    score: 80,
    trend: "up",
    metrics: [
      { label: "IHSG YTD", value: "+4.2%", trend: "up" },
      { label: "Foreign Flow", value: "+Rp 3.2T", trend: "up" },
      { label: "VIX", value: "14.8", trend: "neutral" },
    ],
    narrativeLink: "#",
  },
];

function scoreColor(s: number) {
  if (s >= 75) return "text-[#4ecb8d]";
  if (s >= 65) return "text-[#e8a84c]";
  return "text-[#e05c5c]";
}

function TrendIcon({ t }: { t: Trend }) {
  if (t === "up") return <span className="text-[#4ecb8d]"> ↑</span>;
  if (t === "down") return <span className="text-[#9ab0a2]"> ↓</span>;
  return <span className="text-[#9ab0a2]"> ●</span>;
}

function metricValueColor(t: Trend, label: string) {
  if (label === "Deficit") return "text-[#e8a84c]";
  if (t === "up") return "text-[#4ecb8d]";
  if (t === "down") return "text-[#9ab0a2]";
  return "text-grove-text";
}

export function MacroDimensionCards() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {macroDimensions.map((item, i) => (
        <article
          key={item.title}
          onClick={() => setActive(active === i ? null : i)}
          className="cursor-pointer rounded-[10px] border border-grove-border bg-grove-bg2 p-4 transition hover:border-grove-border2"
        >
          <p className="mb-2 text-[9px] font-semibold uppercase tracking-[.1em] text-grove-muted">
            {item.title}
          </p>
          <p className={`mb-0.5 font-serif text-[28px] font-bold leading-none ${scoreColor(item.score)}`}>
            {item.score}
            <span className="ml-0.5 text-[11px] font-normal text-grove-muted">/100</span>
          </p>
          <div className="mb-3 mt-3 space-y-1.5">
            {item.metrics.map((m) => (
              <div key={m.label} className="flex items-center justify-between">
                <span className="text-[10px] text-grove-muted">{m.label}</span>
                <span className={`text-[10px] font-mono font-semibold ${metricValueColor(m.trend, m.label)}`}>
                  {m.value}<TrendIcon t={m.trend} />
                </span>
              </div>
            ))}
          </div>
          <p className="text-[9.5px] text-grove-muted transition hover:text-grove-primary">
            Klik untuk narasi & berita →
          </p>
        </article>
      ))}
    </div>
  );
}