type StanceType = "OW+" | "OW" | "NT" | "UW" | "UW-";

const stanceCfg: Record<
  StanceType,
  { badgeClass: string; cardClass: string; starClass: string }
> = {
  "OW+": {
    cardClass: "bg-[rgba(34,201,122,0.08)] border-[rgba(34,201,122,0.3)]",
    badgeClass:
      "bg-[rgba(34,201,122,0.2)] text-[#22C97A] border border-[rgba(34,201,122,0.35)]",
    starClass: "text-[#22C97A]",
  },
  OW: {
    cardClass: "bg-[rgba(95,184,138,0.06)] border-[rgba(95,184,138,0.22)]",
    badgeClass:
      "bg-[rgba(95,184,138,0.15)] text-[#4ecb8d] border border-[rgba(95,184,138,0.3)]",
    starClass: "text-[#4ecb8d]",
  },
  NT: {
    cardClass: "bg-grove-bg3 border-grove-border",
    badgeClass:
      "bg-[rgba(151,160,148,0.15)] text-grove-muted2 border border-grove-border2",
    starClass: "text-[#b6bdb2]",
  },
  UW: {
    cardClass: "bg-[rgba(224,164,68,0.05)] border-[rgba(224,164,68,0.2)]",
    badgeClass:
      "bg-[rgba(224,164,68,0.15)] text-[#e8a84c] border border-[rgba(224,164,68,0.3)]",
    starClass: "text-[#e8a84c]",
  },
  "UW-": {
    cardClass: "bg-[rgba(217,96,96,0.06)] border-[rgba(217,96,96,0.22)]",
    badgeClass:
      "bg-[rgba(217,96,96,0.15)] text-[#e05c5c] border border-[rgba(217,96,96,0.3)]",
    starClass: "text-[#e05c5c]",
  },
};

function Stars({
  n,
  max = 5,
  activeClass = "",
}: {
  n: number;
  max?: number;
  activeClass?: string;
}) {
  return (
    <div className="flex gap-0.5 text-[11px] tracking-[2px]">
      {Array.from({ length: max }, (_, i) => (
        <span key={i} className={i < n ? activeClass : "text-grove-muted"}>
          ★
        </span>
      ))}
    </div>
  );
}

const sectors = [
  // OW row
  {
    name: "Banking",
    stance: "OW+" as StanceType,
    stars: 5,
    note: "Rate cut → NIM rebound; likuiditas domestik naik",
  },
  {
    name: "Property",
    stance: "OW" as StanceType,
    stars: 4,
    note: "Rate sensitive, KPR recovery dimulai",
  },
  {
    name: "Infrastruktur",
    stance: "OW" as StanceType,
    stars: 4,
    note: "APBN infrastruktur masih kuat",
  },
  {
    name: "Consumer Discretionary",
    stance: "OW" as StanceType,
    stars: 4,
    note: "Middle class recovery, daya beli naik",
  },
  // NT row
  {
    name: "Metal Mining",
    stance: "NT" as StanceType,
    stars: 3,
    note: "Nikel & tembaga stabil, selektif",
  },
  {
    name: "Telekomunikasi",
    stance: "NT" as StanceType,
    stars: 3,
    note: "Defensive, dividen stabil",
  },
  {
    name: "Consumer Staples",
    stance: "NT" as StanceType,
    stars: 3,
    note: "Growth lambat, valuasi fair",
  },
  {
    name: "Plantation / CPO",
    stance: "NT" as StanceType,
    stars: 3,
    note: "CPO sideways, B40 supportive",
  },
  // UW row
  {
    name: "Coal Mining",
    stance: "UW" as StanceType,
    stars: 2,
    note: "Harga batu bara tertekan, demand China lemah",
  },
];

export function SectorCards() {
  return (
    <div className="grid gap-2 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
      {sectors.map((s) => {
        const cfg = stanceCfg[s.stance];
        return (
          <article
            key={s.name}
            className={`rounded-[10px] border p-[12px_14px] ${cfg.cardClass}`}
          >
            <div className="mb-2 flex items-start justify-between gap-2">
              <p className="text-[12px] font-medium tracking-[-0.005em] text-grove-text">
                {s.name}
              </p>
              <span
                className={`shrink-0 rounded-[6px] px-2 py-0.5 text-[9.5px] font-semibold tracking-[0.05em] ${cfg.badgeClass}`}
              >
                {s.stance}
              </span>
            </div>
            <Stars n={s.stars} activeClass={cfg.starClass} />
            <p className="mt-2 text-[10px] leading-[1.5] text-grove-muted2">
              {s.note}
            </p>
          </article>
        );
      })}
    </div>
  );
}
