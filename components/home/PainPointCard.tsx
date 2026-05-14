export function PainPointCard({ quote, status }: { quote: string; status: string }) {
  return (
    <article className="home-card rounded-grove-3 border border-grove-border bg-grove-bg2 p-5 transition hover:-translate-y-0.5 hover:border-grove-border2">
      <p className="mb-1.5 text-[13px] font-medium leading-[1.5] text-grove-text">{quote}</p>
      <p className="text-[11px] text-grove-muted">{status}</p>
    </article>
  );
}
