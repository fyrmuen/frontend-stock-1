import { Card } from "@/components/ui/Card";

const cards = [
  { title: "Vision", body: "Menjadi platform riset investasi yang membuat keputusan lebih terukur dan repeatable." },
  { title: "Mission", body: "Menyederhanakan analisis kompleks menjadi framework praktis yang bisa dipakai investor harian." }
];

export function VisionMissionCards() {
  return (
    <section className="mb-14 grid gap-3 md:grid-cols-2">
      {cards.map((card) => (
        <Card key={card.title} className="relative overflow-hidden rounded-grove-3 p-6">
          <span className="absolute left-0 top-0 h-full w-[3px] bg-grove-primary" />
          <p className="kicker mb-2">{card.title}</p>
          <h3 className="mb-2 font-serif text-[22px]">{card.title} Grove</h3>
          <p className="text-[12.5px] leading-[1.8] text-grove-muted2">{card.body}</p>
        </Card>
      ))}
    </section>
  );
}
