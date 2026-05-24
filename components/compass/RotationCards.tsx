type StanceType = "OW+" | "OW" | "NT" | "UW" | "UW-";

const stanceCfg: Record<
  StanceType,
  { label: string; badgeClass: string; cardClass: string; starClass: string }
> = {
  "OW+": {
    label: "OW+",
    cardClass: "bg-[rgba(34,201,122,0.08)] border-[rgba(34,201,122,0.3)]",
    badgeClass:
      "bg-[rgba(34,201,122,0.2)] text-[#22C97A] border border-[rgba(34,201,122,0.35)]",
    starClass: "text-[#22C97A]",
  },
  OW: {
    label: "OW",
    cardClass: "bg-[rgba(95,184,138,0.06)] border-[rgba(95,184,138,0.22)]",
    badgeClass:
      "bg-[rgba(95,184,138,0.15)] text-[#4ecb8d] border border-[rgba(95,184,138,0.3)]",
    starClass: "text-[#4ecb8d]",
  },
  NT: {
    label: "NT",
    cardClass: "bg-grove-bg3 border-grove-border",
    badgeClass:
      "bg-[rgba(151,160,148,0.15)] text-grove-muted2 border border-grove-border2",
    starClass: "text-[#b6bdb2]",
  },
  UW: {
    label: "UW",
    cardClass: "bg-[rgba(224,164,68,0.05)] border-[rgba(224,164,68,0.2)]",
    badgeClass:
      "bg-[rgba(224,164,68,0.15)] text-[#e8a84c] border border-[rgba(224,164,68,0.3)]",
    starClass: "text-[#e8a84c]",
  },
  "UW-": {
    label: "UW-",
    cardClass: "bg-[rgba(217,96,96,0.06)] border-[rgba(217,96,96,0.22)]",
    badgeClass:
      "bg-[rgba(217,96,96,0.15)] text-[#e05c5c] border border-[rgba(217,96,96,0.3)]",
    starClass: "text-[#e05c5c]",
  },
};

function starRating(stars: number, max = 5, activeClass = "") {
  return Array.from({ length: max }, (_, i) => (
    <span key={i} className={i < stars ? activeClass : "text-grove-muted"}>
      ★
    </span>
  ));
}

const rotations = [
  {
    label: "Saham IDX",
    stance: "OW+" as StanceType,
    stars: 5,
    note: "Fed+BI easing, foreign flow masuk",
  },
  {
    label: "Saham AS",
    stance: "NT" as StanceType,
    stars: 3,
    note: "Valuasi mahal, pilih selektif",
  },
  {
    label: "Obligasi IDR",
    stance: "OW" as StanceType,
    stars: 4,
    note: "Duration play, BI cutting",
  },
  {
    label: "Obligasi USD",
    stance: "OW" as StanceType,
    stars: 4,
    note: "INDON yield 5.85%, menarik",
  },
  {
    label: "MMF / Kas",
    stance: "UW" as StanceType,
    stars: 2,
    note: "Yield menurun seiring rate cut",
  },
];

export function RotationCards() {
  return (
    <div className="grid gap-2 [grid-template-columns:repeat(auto-fit,minmax(145px,1fr))]">
      {rotations.map((item) => {
        const cfg = stanceCfg[item.stance];
        return (
          <article
            key={item.label}
            className={`rounded-[10px] border p-[12px_14px] text-center ${cfg.cardClass}`}
          >
            <div className="mb-1.5 flex justify-center gap-0.5 text-[13px] tracking-[2px]">
              {starRating(item.stars, 5, cfg.starClass)}
            </div>
            <p className="mb-1.5 text-[11px] font-medium tracking-[-0.005em] text-grove-text">
              {item.label}
            </p>
            <span
              className={`inline-block rounded-[6px] px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.05em] ${cfg.badgeClass}`}
            >
              {cfg.label}
            </span>
            <p className="mt-2 text-[10px] leading-[1.5] text-grove-muted2">
              {item.note}
            </p>
          </article>
        );
      })}
    </div>
  );
}
