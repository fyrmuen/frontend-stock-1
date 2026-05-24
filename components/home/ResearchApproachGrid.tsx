const approaches = [
  {
    no: "01",
    title: "Harus ngapain sekarang?",
    body: "Verdict jelas: masuk, tunggu, atau hindari",
  },
  {
    no: "02",
    title: "Kenapa masuk akal?",
    body: "5 skenario probabilistik, bukan 1 tesis",
  },
  {
    no: "03",
    title: "Apa risikonya?",
    body: "Mitigasi eksplisit, bukan disembunyikan",
  },
  {
    no: "04",
    title: "Kapan harus berubah?",
    body: "Trigger keluar didefinisikan sejak awal",
  },
];

export function ResearchApproachGrid() {
  return (
    <section className="animate-fadeUp bg-grove-bg2 px-6 py-14 border-b border-grove-border pb-10">
      <div className="mx-auto max-w-[720px]">
        <div className="mb-6 text-center">
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[.12em] text-grove-primary">
            {" "}
            Cara kerja Grove{" "}
          </p>
          <h2 className="font-serif text-[clamp(20px,2.5vw,26px)]">
            {" "}
            Setiap laporan selalu menjawab <em> 4 hal ini </em>.
          </h2>
        </div>
        <div className="grid gap-2.5 min-[761px]:grid-cols-4">
          {approaches.map((item) => (
            <article
              key={item.no}
              className="rounded-grove-2 px-3 py-4 text-center transition hover:border-grove-border2"
            >
              <p className="mb-2 font-serif text-[28px] text-grove-primary">
                {" "}
                {item.no}{" "}
              </p>
              <p className="mb-1 text-[12px] font-medium text-grove-text">
                {" "}
                {item.title}{" "}
              </p>
              <p className="text-[10.5px] leading-[1.6] text-grove-muted">
                {" "}
                {item.body}{" "}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
