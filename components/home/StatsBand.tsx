import { statsBand } from "@/data/mockData";

export function StatsBand() {
  return (
    <section className="mb-14 grid gap-4 rounded-grove-3 border border-grove-border bg-gradient-to-br from-grove-bg2 to-grove-bg3 px-4 py-8 md:grid-cols-4">
      {statsBand.map((stat, idx) => (
        <article key={stat.label} className={`text-center ${idx < statsBand.length - 1 ? "md:border-r md:border-grove-border" : ""}`}>
          <p className="font-serif text-3xl text-grove-primary">{stat.value}</p>
          <p className="text-[10px] uppercase tracking-[.1em] text-grove-muted">{stat.label}</p>
        </article>
      ))}
    </section>
  );
}
