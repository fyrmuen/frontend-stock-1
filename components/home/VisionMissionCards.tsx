const cards = [
  {
    icon: "◉",
    kicker: "Vision",
    title: "Arah strategis",
    body: "Menjadi platform riset investasi yang membuat keputusan lebih terukur, jujur, dan repeatable untuk investor Indonesia."
  },
  {
    icon: "◎",
    kicker: "Mission",
    title: "Fokus eksekusi",
    body: "Menerjemahkan data pasar menjadi framework keputusan yang jelas: masuk, tunggu, atau hindari dengan alasan yang bisa dipertanggungjawabkan."
  }
];

export function VisionMissionCards() {
  return (
    <section className="vm-row mb-14 grid animate-fadeUp gap-[14px] min-[761px]:grid-cols-2">
      {cards.map((card) => (
        <article key={card.kicker} className="relative overflow-hidden rounded-grove-3 border border-grove-border bg-grove-bg2 p-6 transition hover:border-grove-border2">
          <span className="absolute left-0 top-0 h-full w-[3px] bg-grove-primary" />
          <p className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[.18em] text-grove-primary"><span>{card.icon}</span>{card.kicker}</p>
          <h3 className="mb-2 font-serif text-[22px] leading-[1.3]">{card.title}</h3>
          <p className="text-[12.5px] leading-[1.8] text-grove-muted2">{card.body}</p>
        </article>
      ))}
    </section>
  );
}
