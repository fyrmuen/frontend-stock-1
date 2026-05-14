import { rotations } from "@/data/mockData";
import { Badge } from "@/components/ui/Badge";

export function RotationCards() {
  return (
    <section className="mb-4 grid gap-3 md:grid-cols-5">
      {rotations.map((item) => (
        <article key={item.label} className="rounded-grove-2 border border-grove-border bg-grove-bg2 p-3 text-center">
          <p className="mb-1 text-[11px] font-medium">{item.label}</p>
          <Badge status={item.status} />
          <p className="mt-2 text-[10px] leading-[1.5] text-grove-muted2">{item.note}</p>
        </article>
      ))}
    </section>
  );
}
