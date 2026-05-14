import { Badge } from "@/components/ui/Badge";

export function VerdictBlock() {
  return (
    <section className="mb-4 rounded-grove-2 border border-grove-border bg-grove-bg2">
      <div className="grid border-b border-grove-border md:grid-cols-3">
        <article className="border-r border-grove-border p-4 text-center"><p className="text-[9px] uppercase tracking-[.09em] text-grove-muted">Verdict</p><Badge status="OW+" /></article>
        <article className="border-r border-grove-border p-4 text-center"><p className="text-[9px] uppercase tracking-[.09em] text-grove-muted">Probabilitas</p><p className="font-serif text-2xl">74%</p></article>
        <article className="p-4 text-center"><p className="text-[9px] uppercase tracking-[.09em] text-grove-muted">Expected Return</p><p className="font-serif text-2xl text-grove-primary">+12.5%</p></article>
      </div>
      <p className="p-4 text-[12px] leading-[1.75] text-grove-muted2">Masih layak overweight untuk medium-term dengan disiplin risk management di area support major.</p>
    </section>
  );
}
