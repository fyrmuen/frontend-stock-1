export function AnalysisSection() {
  return (
    <section className="mb-4 rounded-grove-2 border border-grove-border bg-grove-bg2 p-4">
      <h3 className="mb-2 font-serif text-[16px]">Technical Analysis</h3>
      <div className="grid gap-2 md:grid-cols-3">
        <article className="rounded-grove bg-grove-bg3 p-3"><p className="text-[9px] uppercase tracking-[.08em] text-grove-muted">Trend</p><p className="font-serif text-xl text-grove-primary">Markup</p></article>
        <article className="rounded-grove bg-grove-bg3 p-3"><p className="text-[9px] uppercase tracking-[.08em] text-grove-muted">RSI</p><p className="font-mono text-xl">61</p></article>
        <article className="rounded-grove bg-grove-bg3 p-3"><p className="text-[9px] uppercase tracking-[.08em] text-grove-muted">MACD</p><p className="font-mono text-xl text-grove-green">Bullish</p></article>
      </div>
    </section>
  );
}
