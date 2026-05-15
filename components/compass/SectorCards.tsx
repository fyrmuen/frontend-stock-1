type StanceType = "OW+" | "OW" | "NT" | "UW" | "UW-";

const stanceCfg: Record<StanceType, { cls: string }> = {
  "OW+": { cls: "bg-[#1e4035] text-[#4ecb8d] border border-[#4ecb8d]" },
  "OW": { cls: "bg-[#1e4035] text-[#4ecb8d] border border-[#4ecb8d]" },
  "NT": { cls: "bg-grove-bg3 text-grove-muted border border-grove-border" },
  "UW": { cls: "bg-[#3a2a10] text-[#e8a84c] border border-[#e8a84c]" },
  "UW-": { cls: "bg-[#3a1a10] text-[#e05c5c] border border-[#e05c5c]" },
};

function Stars({ n, max = 5 }: { n: number; max?: number }) {
  return (
    <div className="flex gap-0.5 text-[11px]">
      {Array.from({ length: max }, (_, i) => (
        <span key={i} className={i < n ? "text-[#4ecb8d]" : "text-grove-muted"}>★</span>
      ))}
    </div>
  );
}

const sectors = [
  // OW row
  { name: "Banking", stance: "OW+" as StanceType, stars: 5, note: "Rate cut → NIM rebound; likuiditas domestik naik" },
  { name: "Property", stance: "OW" as StanceType, stars: 4, note: "Rate sensitive, KPR recovery dimulai" },
  { name: "Infrastruktur", stance: "OW" as StanceType, stars: 4, note: "APBN infrastruktur masih kuat" },
  { name: "Consumer Discretionary", stance: "OW" as StanceType, stars: 4, note: "Middle class recovery, daya beli naik" },
  // NT row
  { name: "Metal Mining", stance: "NT" as StanceType, stars: 3, note: "Nikel & tembaga stabil, selektif" },
  { name: "Telekomunikasi", stance: "NT" as StanceType, stars: 3, note: "Defensive, dividen stabil" },
  { name: "Consumer Staples", stance: "NT" as StanceType, stars: 3, note: "Growth lambat, valuasi fair" },
  { name: "Plantation / CPO", stance: "NT" as StanceType, stars: 3, note: "CPO sideways, B40 supportive" },
  // UW row
  { name: "Coal Mining", stance: "UW" as StanceType, stars: 2, note: "Harga batu bara tertekan, demand China lemah" },
];

export function SectorCards() {
  return (
    <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
      {sectors.map((s) => {
        const cfg = stanceCfg[s.stance];
        const isOW = s.stance === "OW+" || s.stance === "OW";
        return (
          <article
            key={s.name}
            className={`rounded-[10px] border p-4 transition ${isOW
                ? "border-[#2a4a38] bg-[#162620]"
                : s.stance === "UW" || s.stance === "UW-"
                  ? "border-[#3a2a10] bg-[#1e1a10]"
                  : "border-grove-border bg-grove-bg2"
              } hover:border-grove-border2`}
          >
            <div className="mb-2 flex items-start justify-between gap-2">
              <p className="text-[12px] font-bold text-grove-text">{s.name}</p>
              <span className={`shrink-0 rounded-[6px] px-2 py-0.5 text-[9.5px] font-bold ${cfg.cls}`}>
                {s.stance}
              </span>
            </div>
            <Stars n={s.stars} />
            <p className="mt-2 text-[10px] leading-[1.5] text-grove-muted2">{s.note}</p>
          </article>
        );
      })}
    </div>
  );
}