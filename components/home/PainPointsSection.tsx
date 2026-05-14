import { Card } from "@/components/ui/Card";
import { painPoints } from "@/data/mockData";

export function PainPointsSection() {
  return (
    <section className="mb-14">
      <div className="mb-8 text-center">
        <p className="mb-2 text-[10px] font-medium uppercase tracking-[.12em] text-grove-primary">Apakah ini terasa familiar?</p>
        <h2 className="font-serif text-[clamp(22px,3vw,32px)]">Kamu mungkin pernah di salah satu situasi ini.</h2>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {painPoints.map((point) => (
          <Card key={point} className="rounded-grove-3 p-5">
            <p className="text-[13px] font-medium leading-[1.5]">{point}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
