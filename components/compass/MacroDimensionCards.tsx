import { macroDimensions } from "@/data/mockData";

export function MacroDimensionCards() {
  return (
    <section className="mb-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {macroDimensions.map((item) => (
        <article key={item.title} className="rounded-grove-2 border border-grove-border bg-grove-bg2 p-4">
          <p className="text-[9px] uppercase tracking-[.09em] text-grove-muted">{item.title}</p>
          <p className="font-serif text-[24px]">{item.score}</p>
          <p className="font-mono text-[10px] text-grove-primary">{item.trend}</p>
          <p className="mt-1 text-[10px] text-grove-muted2">{item.summary}</p>
        </article>
      ))}
    </section>
  );
}
