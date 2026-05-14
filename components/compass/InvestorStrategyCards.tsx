import { investorStrategies } from "@/data/mockData";
import { ProgressBar } from "@/components/ui/ProgressBar";

export function InvestorStrategyCards() {
  return (
    <section className="mb-4 grid gap-2 md:grid-cols-5">
      {investorStrategies.map((strategy) => (
        <article key={strategy.profile} className="rounded-grove-2 border border-grove-border bg-grove-bg2 p-3">
          <p className="mb-1 text-[9px] uppercase tracking-[.08em] text-grove-primary">{strategy.badge}</p>
          <h4 className="font-serif text-[14px]">{strategy.profile}</h4>
          <p className="mb-2 text-[10px] text-grove-muted2">{strategy.note}</p>
          <div className="space-y-1">
            {strategy.allocation.map((item) => (
              <div key={`${strategy.profile}-${item.label}`}>
                <div className="flex justify-between text-[10px]"><span>{item.label}</span><span className="font-mono">{item.value}%</span></div>
                <ProgressBar value={item.value} />
              </div>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}
