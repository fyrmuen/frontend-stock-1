import Link from "next/link";

const pillars = [
  {
    letter: "G",
    title: "Growth Earnings",
    body: "Kualitas &\npertumbuhan\nfundamental bisnis",
  },
  {
    letter: "R",
    title: "Relative Strength",
    body: "Leader atau laggard\nvs pasar",
  },
  {
    letter: "O",
    title: "Orientasi Tren",
    body: "Struktur tren harga &\nstage",
  },
  {
    letter: "V",
    title: "Volume & Volatility",
    body: "Likuiditas & kualitas\npergerakan",
  },
  {
    letter: "E",
    title: "Endorsement\nSmart Money",
    body: "Flow asing, institusi,\nbandar",
  },
];

const horizons = [
  {
    label: "Long Term",
    desc: "Kualitas bisnis dominan — beli fundamental, hold bertahun-tahun",
  },
  {
    label: "Medium Term",
    desc: "Seimbang — fundamental & momentum sama pentingnya",
  },
  {
    label: "Short Term",
    desc: "Momentum & flow dominan — timing lebih berperan",
  },
];

export function PillarCards() {
  return (
    <section className="bg-gradient-to-b from-grove-bg2 to-grove-bg px-6 py-14 font-sans text-[#e8ede9]">
      <div className="mx-auto max-w-[860px]">

        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[.18em] text-[#4ecb8d]">
            Metode Grove
          </p>
          <h2 className="mb-4 font-serif text-[clamp(24px,3.5vw,36px)] font-bold leading-[1.2] text-[#f0f5f1]">
            5 pilar penilaian.{" "}
            <em className="italic">Satu skor yang jujur.</em>
          </h2>
          <p className="mx-auto max-w-[560px] text-[13.5px] leading-[1.7] text-[#9ab0a2]">
            Setiap saham di dashboard Grove dinilai lewat 5 dimensi yang
            mencakup fundamental, teknikal, dan perilaku pasar. Namanya kami
            ambil dari huruf depan masing-masing:{" "}
            <strong className="font-semibold text-[#c8ddd1]">G · R · O · V · E</strong>.
          </p>
        </div>

        {/* Pillar Cards */}
        <div className="mb-3 grid grid-cols-5 gap-2.5">
          {pillars.map((p) => (
            <article
              key={p.letter}
              className="relative overflow-hidden rounded-[10px] border border-[#2a3d33] bg-grove-bg3 px-3.5 py-5 text-center transition hover:border-[#3a5043]"
            >
              {/* Ghost letter */}
              <span className="pointer-events-none absolute -top-2 right-2 select-none font-serif text-[72px] font-bold leading-none text-[#4ecb8d] opacity-[.07]">
                {p.letter}
              </span>

              {/* Foreground letter */}
              <p className="mb-2 font-serif text-[38px] font-bold leading-none text-[#4ecb8d]">
                {p.letter}
              </p>

              {/* Title */}
              <p className="mb-1.5 whitespace-pre-line text-[11.5px] font-bold leading-[1.3] text-[#d4e6da]">
                {p.title}
              </p>

              {/* Body */}
              <p className="whitespace-pre-line text-[10.5px] leading-[1.6] text-[#7a9e8a]">
                {p.body}
              </p>
            </article>
          ))}
        </div>

        {/* 3 Horizon Section */}
        <div className="mb-8 rounded-xl border border-[#2a3d33] bg-grove-bg2 px-7 py-6">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[.16em] text-[#4ecb8d]">
            3 Horizon · Satu Saham, Tiga Perspektif
          </p>
          <p className="mb-4 text-[13.5px] leading-[1.7] text-[#c0d6c8]">
            Setiap saham dinilai untuk tiga jangka waktu yang berbeda —{" "}
            <strong className="font-bold text-[#f0f5f1]">Long Term (1–3 tahun)</strong>,{" "}
            <strong className="font-bold text-[#f0f5f1]">Medium Term (3–12 bulan)</strong>, dan{" "}
            <strong className="font-bold text-[#f0f5f1]">Short Term (1–8 minggu)</strong>{" "}
            — karena saham yang sama bisa menjadi pilihan berbeda tergantung kebutuhanmu.
          </p>

          <div className="grid grid-cols-3 gap-2.5">
            {horizons.map((h) => (
              <div
                key={h.label}
                className="rounded-lg border border-[#2a3d33] bg-grove-bg3 px-4 py-3.5"
              >
                <p className="mb-1.5 text-[12px] font-bold text-[#4ecb8d]">{h.label}</p>
                <p className="text-[11px] leading-[1.6] text-[#8aaa96]">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}

        <div className="text-center">
          <Link href="/track-record" className="inline-block rounded-grove border border-[rgba(95,184,138,.35)] px-[18px] py-[7px] text-[12px] text-grove-primary transition hover:border-grove-primary">
            Pelajari metode GROVE lebih dalam di Edukasi →
          </Link>
        </div>

      </div>
    </section>
  );
}