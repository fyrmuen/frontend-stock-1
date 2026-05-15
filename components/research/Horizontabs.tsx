"use client";

export type HorizonTab = "long" | "medium" | "short";

const tabs: Array<{ key: HorizonTab; label: string }> = [
    { key: "long", label: "Long Term · 1–3 Thn" },
    { key: "medium", label: "Medium Term · 3–12 Bln" },
    { key: "short", label: "Short Term · 1–8 Mgg" },
];

export function HorizonTabs({
    value,
    onChange,
}: {
    value: HorizonTab;
    onChange: (next: HorizonTab) => void;
}) {
    return (
        <div className="mb-4 inline-flex gap-0.5 rounded-[9px] border border-grove-border bg-grove-bg2 p-1">
            {tabs.map((tab) => {
                const active = value === tab.key;
                return (
                    <button
                        key={tab.key}
                        onClick={() => onChange(tab.key)}
                        className={`rounded-[6px] px-5 py-2 text-[11.5px] font-semibold transition whitespace-nowrap ${active
                                ? "border border-grove-border bg-grove-bg3 text-grove-text"
                                : "border border-transparent text-grove-muted hover:text-grove-muted2"
                            }`}
                    >
                        {tab.label}
                    </button>
                );
            })}
        </div>
    );
}