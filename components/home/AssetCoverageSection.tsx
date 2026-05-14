import { Card } from "@/components/ui/Card";

const assetCards = [
  { title: "Saham Indonesia", desc: "Screening emiten, probabilistic scenario, tactical trigger." },
  { title: "Saham Amerika", desc: "Thematic growth dan valuation discipline." },
  { title: "Obligasi & MMF", desc: "Yield map, tenor strategy, and cash parking framework." }
];

export function AssetCoverageSection() {
  return (
    <section className="mb-14">
      <div className="mb-6 text-center">
        <p className="kicker mb-2">Asset Coverage</p>
        <h3 className="font-serif text-[28px]">Aset yang dianalisis <em className="text-grove-primary">secara menyeluruh</em></h3>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {assetCards.map((item) => (
          <Card key={item.title} variant="hover" className="p-5">
            <h4 className="mb-1 font-serif text-[16px]">{item.title}</h4>
            <p className="text-[11.5px] leading-[1.7] text-grove-muted2">{item.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
