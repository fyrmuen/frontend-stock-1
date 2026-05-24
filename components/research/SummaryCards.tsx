import { ResearchAsset, ResearchHorizon } from "@/lib/types";
import { COLOR_MAP, scoreColor } from "@/lib/research-utils";

const horizons: Array<{ key: ResearchHorizon; label: string }> = [
  { key: "lt", label: "Long Term · 1–3 Thn" },
  { key: "mt", label: "Medium Term · 3–12 Bln" },
  { key: "st", label: "Short Term · 1–8 Mgg" },
];

export function SummaryCards({ assets }: { assets: ResearchAsset[] }) {
  if (assets.length === 0) {
    return (
      <section className="mb-6 grid">
        <article className="rounded-[10px] border border-grove-border bg-grove-bg2 px-4 py-6 text-center">
          <p className="text-[10px] font-medium uppercase tracking-[.1em] text-grove-muted">
            Tidak ada emiten di sektor ini
          </p>
        </article>
      </section>
    );
  }

  return (
    <section className="mb-6 grid gap-3 min-[761px]:grid-cols-3">
      {horizons.map((horizon) => {
        const top = [...assets]
          .sort((a, b) => b[horizon.key].score - a[horizon.key].score)
          .slice(0, 3);

        return (
          <article
            key={horizon.key}
            className="rounded-[10px] border border-grove-border bg-grove-bg2 px-4 py-3.5"
          >
            <p className="mb-2.5 border-b border-grove-border pb-2 text-[9px] font-medium uppercase tracking-[.1em] text-grove-muted">
              {horizon.label} · Top 3 GROVE Score
            </p>

            <div>
              {top.map((item, idx) => {
                const color = COLOR_MAP[item.color] || "#5FB88A";
                return (
                  <div
                    key={item.ticker}
                    className={`flex items-center justify-between py-1.5 ${idx === 0 ? "" : "border-t border-[rgba(255,255,255,0.03)]"}`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className="flex h-[30px] w-[30px] items-center justify-center rounded-[7px] text-[9px] font-semibold"
                        style={{ backgroundColor: `${color}22`, color }}
                      >
                        {idx + 1}
                      </div>
                      <div>
                        <div className="text-[12px] font-medium text-grove-text">
                          {item.ticker}
                        </div>
                        <div className="text-[9.5px] text-grove-muted">
                          {item.name}
                        </div>
                      </div>
                    </div>
                    <span
                      className="text-[14px] font-medium"
                      style={{ color: scoreColor(item[horizon.key].score) }}
                    >
                      {item[horizon.key].score}
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
