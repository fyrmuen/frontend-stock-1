export function CatalystRiskSection() {
  return (
    <section className="mb-4 grid gap-3 md:grid-cols-2">
      <article className="rounded-grove-2 border border-grove-border bg-grove-bg2">
        <h4 className="border-b border-grove-border px-4 py-2 text-[10px] uppercase tracking-[.05em] text-grove-muted2">Catalyst</h4>
        <ul className="space-y-1 p-4 text-[11px] text-grove-muted2"><li>• Loan growth acceleration in Q3.</li><li>• Stable funding cost with improving CASA mix.</li></ul>
      </article>
      <article className="rounded-grove-2 border border-grove-border bg-grove-bg2">
        <h4 className="border-b border-grove-border px-4 py-2 text-[10px] uppercase tracking-[.05em] text-grove-muted2">Risk</h4>
        <ul className="space-y-1 p-4 text-[11px] text-grove-muted2"><li>• Rupiah volatility pressures NIM.</li><li>• Slower demand if policy remains tight.</li></ul>
      </article>
    </section>
  );
}
