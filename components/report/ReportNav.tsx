import { Tab } from "@/components/ui/Tab";

export function ReportNav({ value, onChange }: { value: string; onChange: (next: string) => void }) {
  const tabs = ["overview", "income", "segments", "analysis", "bandar", "narasi", "verdict"];
  return (
    <div className="mb-5 flex gap-1 overflow-x-auto rounded-grove border border-grove-border bg-grove-bg2 p-1">
      {tabs.map((tab) => <Tab key={tab} active={value === tab} onClick={() => onChange(tab)}>{tab}</Tab>)}
    </div>
  );
}
