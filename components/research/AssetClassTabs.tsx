import { Tab } from "@/components/ui/Tab";
import { AssetTab } from "@/lib/types";

const tabs: Array<{ key: AssetTab; label: string }> = [
  { key: "indonesia", label: "Indonesia" },
  { key: "us", label: "US" },
  { key: "global", label: "Global" },
  { key: "bonds", label: "Bonds" },
  { key: "mmf", label: "MMF/ETF" }
];

export function AssetClassTabs({ value, onChange }: { value: AssetTab; onChange: (next: AssetTab) => void }) {
  return (
    <div className="mb-4 flex gap-1 overflow-x-auto rounded-grove-2 border border-grove-border bg-grove-bg2 p-1">
      {tabs.map((tab) => <Tab key={tab.key} active={value === tab.key} onClick={() => onChange(tab.key)}>{tab.label}</Tab>)}
    </div>
  );
}
