const assetCards = [
  {
    icon: "▣",
    title: "Saham Indonesia",
    description: "Screening emiten, skenario probabilistik, dan tactical trigger dengan konteks makro domestik.",
    tags: ["IDX", "5 skenario", "Timing"]
  },
  {
    icon: "◫",
    title: "Saham Amerika",
    description: "Framework thematic growth, quality filter, dan valuation discipline untuk market US.",
    tags: ["US Equities", "Thematic", "Valuation"]
  },
  {
    icon: "◍",
    title: "Obligasi & MMF",
    description: "Yield map, strategi tenor, dan cash parking framework untuk FR, INDON, MMF IDR & USD.",
    tags: ["FR & INDON", "MMF", "Duration"]
  }
];

export function AssetCoverageGrid() {
  return (
    <section className="mb-14 animate-fadeUp">
      <div className="mb-6 text-center">
        <p className="kicker mb-2">Asset Coverage</p>
        <h2 className="font-serif text-[clamp(24px,3vw,34px)] leading-[1.25]">Aset yang dianalisis secara menyeluruh</h2>
      </div>
      <div className="grid gap-3 min-[761px]:grid-cols-3">
        {assetCards.map((card) => (
          <article key={card.title} className="rounded-grove-3 border border-grove-border bg-grove-bg2 p-5 transition hover:-translate-y-0.5 hover:border-grove-border2">
            <p className="mb-2 text-[18px] text-grove-primary">{card.icon}</p>
            <h3 className="mb-1 font-serif text-[16px]">{card.title}</h3>
            <p className="mb-3 text-[11.5px] leading-[1.7] text-grove-muted2">{card.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {card.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-[rgba(95,184,138,.3)] bg-[rgba(95,184,138,.12)] px-2.5 py-1 text-[10px] text-grove-primary">{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
