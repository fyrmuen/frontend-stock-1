import { keyStats } from "@/lib/mockData";

export function KeyStatsSection() {
  return (
    <section className="mb-4">
      <div className="mb-3 grid gap-2 md:grid-cols-4">
        {keyStats.map((item) => (
          <article key={item.label} className="rounded-grove border border-grove-border bg-grove-bg2 px-3 py-2">
            <p className="text-[9px] uppercase tracking-[.08em] text-grove-muted">{item.label}</p>
            <p className="font-serif text-[17px]">{item.value}</p>
          </article>
        ))}
      </div>
      <div className="rounded-grove-2 border border-grove-border bg-grove-bg2 p-4">
        <p className="mb-2 text-[10px] text-grove-muted2">Chart Area (mock)</p>
        <div className="h-[170px] rounded-grove bg-grove-bg3" />
      </div>
    </section>
  );
}
