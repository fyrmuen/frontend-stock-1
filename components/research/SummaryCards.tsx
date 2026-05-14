import { summaryStocks } from "@/data/mockData";
import { Badge } from "@/components/ui/Badge";

export function SummaryCards() {
  return (
    <section className="mb-5 grid gap-3 md:grid-cols-3">
      {["Top Conviction", "Momentum", "Risk Watch"].map((title, index) => (
        <article key={title} className="rounded-grove-2 border border-grove-border bg-grove-bg2 p-4">
          <p className="mb-3 border-b border-grove-border pb-2 text-[9px] uppercase tracking-[.1em] text-grove-muted">{title}</p>
          {summaryStocks.slice(index, index + 2).map((item) => (
            <div key={`${title}-${item.ticker}`} className="flex items-center justify-between py-2">
              <div>
                <p className="text-xs font-medium">{item.ticker}</p>
                <p className="text-[10px] text-grove-muted">{item.name}</p>
              </div>
              <Badge status={item.status} />
            </div>
          ))}
        </article>
      ))}
    </section>
  );
}
