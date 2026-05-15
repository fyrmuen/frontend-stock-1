"use client";

const SECTORS = [
  "Semua sektor",
  "Perbankan",
  "Konsumer",
  "Telekomunikasi",
  "Komoditas",
  "Otomotif",
  "Healthcare",
  "Infrastruktur",
  "Energi & Petrokimia",
  "Small & Mid Cap +",
];

export function SectorFilter({
  value,
  onChange,
}: {
  value: string;
  onChange: (next: string) => void;
}) {
  return (
    <div className="mb-3 flex items-center gap-4 overflow-x-auto rounded-[10px] border border-grove-border bg-grove-bg2 px-5 py-3">
      <p className="shrink-0 text-[9px] font-bold uppercase tracking-[.14em] text-grove-muted">
        Filter Sektor
      </p>
      <div className="flex flex-nowrap gap-2">
        {SECTORS.map((sector) => {
          const active = value === sector;
          // "Small & Mid Cap +" has special teal outline always
          const isSpecial = sector === "Small & Mid Cap +";
          return (
            <button
              key={sector}
              onClick={() => onChange(sector)}
              className={`shrink-0 rounded-full border px-3.5 py-1 text-[10.5px] font-medium transition whitespace-nowrap ${active || isSpecial
                  ? "border-grove-primary text-grove-primary"
                  : "border-grove-border text-grove-muted2 hover:border-grove-border2 hover:text-grove-text"
                }`}
            >
              {sector}
            </button>
          );
        })}
      </div>
    </div>
  );
}