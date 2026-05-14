const approaches = [
  {
    no: "01",
    title: "Macro and liquidity mapping",
    body: "Membaca arah suku bunga, likuiditas, dan risk appetite global untuk menentukan konteks utama."
  },
  {
    no: "02",
    title: "Sector rotation prioritization",
    body: "Menentukan sektor yang overweight, netral, atau underweight berdasarkan probabilitas siklus."
  },
  {
    no: "03",
    title: "Bottom-up stock scoring",
    body: "Menilai emiten dengan framework GROVE untuk memisahkan leader dari noise pasar."
  },
  {
    no: "04",
    title: "Actionable entry/exit plan",
    body: "Menerjemahkan analisis ke rencana eksekusi dengan trigger masuk, invalidasi, dan exit yang jelas."
  }
];

export function ResearchApproachGrid() {
  return (
    <section className="mb-14 animate-fadeUp bg-grove-bg2 px-4 py-10 -mx-4 border-y border-grove-border sm:-mx-7 sm:px-7 min-[1101px]:-mx-[calc((1100px-100vw)/2)]">
      <div className="mx-auto max-w-[720px]">
        <div className="mb-6 text-center">
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[.12em] text-grove-primary">Cara kerja Grove</p>
          <h2 className="font-serif text-[clamp(20px,2.5vw,26px)]">Setiap laporan selalu menjawab <em>4 hal ini</em>.</h2>
        </div>
        <div className="grid gap-2.5 min-[761px]:grid-cols-4">
          {approaches.map((item) => (
            <article key={item.no} className="rounded-grove-2 border border-grove-border bg-grove-bg3 px-3 py-4 text-center transition hover:border-grove-border2">
              <p className="mb-2 font-serif text-[28px] text-grove-primary">{item.no}</p>
              <p className="mb-1 text-[12px] font-medium text-grove-text">{item.title}</p>
              <p className="text-[10.5px] leading-[1.6] text-grove-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
