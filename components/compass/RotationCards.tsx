type StanceType = "OW+" | "OW" | "NT" | "UW" | "UW-";

const stanceCfg: Record<StanceType, { label: string; cls: string }> = {
  "OW+": { label: "OW+", cls: "bg-[#1e4035] text-[#4ecb8d] border border-[#4ecb8d]" },
  "OW": { label: "OW", cls: "bg-[#1e4035] text-[#4ecb8d] border border-[#4ecb8d]" },
  "NT": { label: "NT", cls: "bg-grove-bg3 text-grove-muted border border-grove-border" },
  "UW": { label: "UW", cls: "bg-[#3a2a10] text-[#e8a84c] border border-[#e8a84c]" },
  "UW-": { label: "UW-", cls: "bg-[#3a1a10] text-[#e05c5c] border border-[#e05c5c]" },
};

function starRating(stars: number, max = 5) {
  return Array.from({ length: max }, (_, i) => (
    <span key={i} className={i < stars ? "text-[#4ecb8d]" : "text-grove-muted"}>★</span>
  ));
}

const rotations = [
  { label: "Saham IDX", stance: "OW+" as StanceType, stars: 5, note: "Fed+BI easing, foreign flow masuk", active: true },
  { label: "Saham AS", stance: "NT" as StanceType, stars: 3, note: "Valuasi mahal, pilih selektif", active: false },
  { label: "Obligasi IDR", stance: "OW" as StanceType, stars: 4, note: "Duration play, BI cutting", active: false },
  { label: "Obligasi USD", stance: "OW" as StanceType, stars: 4, note: "INDON yield 5.85%, menarik", active: false },
  { label: "MMF / Kas", stance: "UW" as StanceType, stars: 2, note: "Yield menurun seiring rate cut", active: false },
];

export function RotationCards() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {rotations.map((item) => {
        const cfg = stanceCfg[item.stance];
        return (
          <article
            key={item.label}
            className={`rounded-[10px] border p-4 text-center transition ${item.active
                ? "border-[#4ecb8d] bg-[#1a2e26]"
                : "border-grove-border bg-grove-bg2 hover:border-grove-border2"
              }`}
          >
            <div className="mb-1.5 flex justify-center gap-0.5 text-[13px]">
              {starRating(item.stars)}
            </div>
            <p className="mb-2 text-[12px] font-bold text-grove-text">{item.label}</p>
            <span className={`inline-block rounded-[6px] px-2.5 py-0.5 text-[10px] font-bold ${cfg.cls}`}>
              {cfg.label}
            </span>
            <p className="mt-2.5 text-[10px] leading-[1.55] text-grove-muted2">{item.note}</p>
          </article>
        );
      })}
    </div>
  );
}