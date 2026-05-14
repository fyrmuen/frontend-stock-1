import { Card } from "@/components/ui/Card";

const approaches = [
  "Macro and liquidity mapping",
  "Sector rotation prioritization",
  "Bottom-up stock scoring",
  "Actionable entry/exit plan"
];

export function ResearchApproachGrid() {
  return (
    <section className="mb-14">
      <div className="grid gap-3 md:grid-cols-4">
        {approaches.map((text, index) => (
          <Card key={text} className="p-5">
            <p className="mb-2 font-serif text-3xl italic text-grove-primary">{String(index + 1).padStart(2, "0")}</p>
            <p className="text-[12px] font-medium">{text}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
