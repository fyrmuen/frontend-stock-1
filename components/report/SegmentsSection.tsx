import { segments } from "@/lib/mockData";
import { ProgressBar } from "@/components/ui/ProgressBar";

export function SegmentsSection() {
  return (
    <section className="mb-4 grid gap-3 md:grid-cols-2">
      <div className="rounded-grove-2 border border-grove-border bg-grove-bg2 p-4">
        <p className="mb-2 text-[10px] text-grove-muted2">Donut Chart (mock)</p>
        <div className="h-[170px] rounded-full border border-grove-border bg-grove-bg3" />
      </div>
      <div className="space-y-2">
        {segments.map((segment) => (
          <article key={segment.name} className="rounded-grove border border-grove-border bg-grove-bg2 p-3">
            <div className="mb-1 flex justify-between text-[11px]"><p>{segment.name}</p><p className="font-mono text-grove-muted2">{segment.revenue}</p></div>
            <ProgressBar value={segment.share} />
            <p className="mt-1 text-[10px] text-grove-muted">Growth {segment.growth}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
