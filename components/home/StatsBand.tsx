const stats = [
  { value: "+38.4%", label: "Return total" },
  { value: "+24.1%", label: "Alpha vs IHSG" },
  { value: "67%", label: "Win rate posisi" },
  { value: "27", label: "Posisi dicatat" }
];

export function StatsBand() {
  return (
    <section className="stats-band mb-14 grid animate-fadeUp gap-4 rounded-grove-3 border border-grove-border bg-gradient-to-br from-grove-bg2 to-grove-bg3 px-6 py-8 min-[761px]:grid-cols-4">
      {stats.map((stat) => (
        <article key={stat.label} className="text-center">
          <p className="font-serif text-[30px] text-grove-primary">{stat.value}</p>
          <p className="text-[10px] uppercase tracking-[.1em] text-grove-muted">{stat.label}</p>
        </article>
      ))}
    </section>
  );
}
