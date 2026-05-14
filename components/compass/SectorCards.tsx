const sectors = [
  { name: "Banks", rating: "OW+", stars: "★★★★★" },
  { name: "Telecom", rating: "OW", stars: "★★★★☆" },
  { name: "Property", rating: "NT", stars: "★★★☆☆" },
  { name: "Consumer", rating: "UW", stars: "★★☆☆☆" },
  { name: "Coal", rating: "UW-", stars: "★☆☆☆☆" }
];

export function SectorCards() {
  return (
    <section className="mb-4 grid gap-2 md:grid-cols-5">
      {sectors.map((sector) => (
        <article key={sector.name} className="rounded-grove-2 border border-grove-border bg-grove-bg2 p-3">
          <div className="mb-1 flex items-center justify-between"><p className="text-[12px] font-medium">{sector.name}</p><p className="text-[11px] text-grove-primary">{sector.stars}</p></div>
          <p className="text-[10px] text-grove-muted2">{sector.rating}</p>
        </article>
      ))}
    </section>
  );
}
