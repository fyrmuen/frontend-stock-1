import { summaryStocks } from "@/data/mockData";

const horizons = [
  { key: "long", label: "Long Term · 1–3 Thn · Top 3 Grove Score" },
  { key: "medium", label: "Medium Term · 3–12 Bln · Top 3 Grove Score" },
  { key: "short", label: "Short Term · 1–8 Mgg · Top 3 Grove Score" },
];

// Rank badge bg: rank1=teal, rank2=blue-ish teal, rank3=dark teal/olive
const rankBg = ["bg-[#2d6a4f]", "bg-[#1d4e6b]", "bg-[#5c4a1e]"];

export function SummaryCards() {
  return (
    <section className="mb-4 grid gap-3 min-[761px]:grid-cols-3">
      {horizons.map((horizon, hIdx) => {
        const stocks = summaryStocks.slice(hIdx * 3, hIdx * 3 + 3);
        return (
          <article
            key={horizon.key}
            className="rounded-[10px] border border-grove-border bg-grove-bg2 px-5 py-4"
          >
            {/* Header */}
            <p className="mb-3 border-b border-grove-border pb-2.5 text-[8.5px] font-semibold uppercase tracking-[.12em] text-grove-muted">
              {horizon.label}
            </p>

            {/* Stock rows */}
            <div className="space-y-3">
              {stocks.map((item, i) => {
                const rank = i + 1;
                return (
                  <div key={item.ticker} className="flex items-center gap-3">
                    {/* Rank badge — square teal rounded */}
                    <span
                      className={`flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-[6px] text-[10px] font-bold text-[#4ecb8d] ${rankBg[i]} bg-opacity-60`}
                    >
                      {rank}
                    </span>

                    {/* Name + subname */}
                    <div className="min-w-0 flex-1">
                      <p className="text-[12.5px] font-bold leading-tight text-grove-text">
                        {item.ticker}
                      </p>
                      <p className="truncate text-[10px] leading-tight text-grove-muted">
                        {item.name}
                      </p>
                    </div>

                    {/* Score */}
                    <span className="text-[16px] font-bold text-grove-amber">
                      {item.score}
                    </span>
                  </div>
                );
              })}
            </div>
          </article>
        );
      })}
    </section>
  );
}