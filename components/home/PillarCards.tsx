const pillars = [
  { letter: "G", title: "Growth metrics", body: "Kualitas dan kesinambungan pertumbuhan fundamental bisnis." },
  { letter: "R", title: "Relative valuation", body: "Menilai murah-mahal relatif terhadap kualitas dan sektor pembanding." },
  { letter: "O", title: "Operational efficiency", body: "Efisiensi operasi, margin, dan disiplin alokasi modal perusahaan." },
  { letter: "V", title: "Value creation", body: "Kemampuan manajemen menciptakan nilai jangka panjang bagi pemegang saham." },
  { letter: "E", title: "Exit strategy", body: "Kejelasan trigger invalidasi, target, dan disiplin keluar posisi." }
];

export function PillarCards() {
  return (
    <section className="mb-14 animate-fadeUp bg-gradient-to-b from-grove-bg2 to-grove-bg border-y border-grove-border px-4 py-14 -mx-4 sm:-mx-7 sm:px-7 min-[1101px]:-mx-[calc((1100px-100vw)/2)]">
      <div className="mx-auto max-w-[760px]">
        <div className="mb-10 text-center">
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[.18em] text-grove-primary">Metode GROVE</p>
          <h2 className="mb-3 font-serif text-[clamp(24px,3.5vw,34px)] leading-[1.2] tracking-[-.015em]">5 pilar penilaian. <em>Satu skor yang bijak.</em></h2>
        </div>
        <div className="grid gap-2.5 min-[761px]:grid-cols-5 max-[760px]:grid-cols-2 max-[480px]:grid-cols-1">
          {pillars.map((pillar) => (
            <article key={pillar.letter} className="relative overflow-hidden rounded-grove-2 border border-grove-border bg-grove-bg3 px-4 py-5 text-center transition hover:border-grove-border2">
              <span className="absolute -top-2 right-2.5 font-serif text-[68px] font-medium leading-none text-grove-primary opacity-[.08]">{pillar.letter}</span>
              <p className="mb-2 font-serif text-[36px] font-medium leading-none text-grove-primary">{pillar.letter}</p>
              <p className="mb-1 text-[12px] font-medium text-grove-text">{pillar.title}</p>
              <p className="text-[10.5px] leading-[1.55] text-grove-muted2">{pillar.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
