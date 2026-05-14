export function BandarmologySection() {
  return (
    <section className="mb-4 rounded-grove-2 border border-grove-border bg-grove-bg2 p-4">
      <h3 className="mb-2 font-serif text-[16px]">Bandarmology</h3>
      <div className="grid gap-2 md:grid-cols-4">
        <article className="rounded-grove border border-grove-border bg-grove-bg3 p-3 text-center"><p className="text-[9px] uppercase text-grove-muted">Foreign</p><p className="font-serif text-lg">41%</p></article>
        <article className="rounded-grove border border-grove-border bg-grove-bg3 p-3 text-center"><p className="text-[9px] uppercase text-grove-muted">Domestic Inst.</p><p className="font-serif text-lg">32%</p></article>
        <article className="rounded-grove border border-grove-border bg-grove-bg3 p-3 text-center"><p className="text-[9px] uppercase text-grove-muted">Retail</p><p className="font-serif text-lg">19%</p></article>
        <article className="rounded-grove border border-grove-border bg-grove-bg3 p-3 text-center"><p className="text-[9px] uppercase text-grove-muted">Treasury</p><p className="font-serif text-lg">8%</p></article>
      </div>
    </section>
  );
}
