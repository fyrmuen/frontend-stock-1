"use client";

export function SectorFilter({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: Array<{ key: string; label: string }>;
  onChange: (next: string) => void;
}) {
  return (
    <div className="mb-4 flex flex-wrap items-center gap-3 rounded-[10px] border border-grove-border bg-grove-bg2 px-4 py-2.5">
      <span className="shrink-0 text-[9.5px] font-medium uppercase tracking-[.1em] text-grove-muted">
        {label}
      </span>
      <div className="flex flex-wrap gap-1.5">
        {options.map((opt) => {
          const active = value === opt.key;
          return (
            <button
              key={opt.key}
              onClick={() => onChange(opt.key)}
              className={`rounded-full border px-3 py-1 text-[10.5px] font-medium transition ${
                active
                  ? "border-[rgba(95,184,138,0.35)] bg-[rgba(95,184,138,0.1)] text-grove-primary"
                  : "border-grove-border text-grove-muted2 hover:border-grove-border2 hover:text-grove-text"
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
