"use client";

import { heroData } from "@/lib/data";

type HomePageProps = {
  onStartResearch: () => void;
};

const painPoints = [
  {
    quote: "\"Saham saya merah, tapi nggak tahu harus hold, cut loss, atau pindah ke mana.\"",
    note: "Stuck tanpa playbook yang jelas"
  },
  {
    quote: "\"Dengar obligasi lagi menarik, tapi nggak ngerti FR itu apa dan mulainya dari mana.\"",
    note: "FOMO tapi tidak ada panduan konkret"
  },
  {
    quote: "\"Saya follow banyak akun saham, tapi ujungnya saling bertentangan. Siapa yang benar?\"",
    note: "Information overload, makin bingung"
  },
  {
    quote: "\"Uang saya nganggur di deposito. Mau pindah ke investasi, tapi takut timing-nya salah.\"",
    note: "Cash idle, paralyzed by uncertainty"
  },
  {
    quote: "\"Dapat rekomendasi saham dari mana-mana, tapi nggak ada yang jelasin kenapa dan kapan keluarnya.\"",
    note: "Sinyal tanpa konteks = bahaya"
  },
  {
    quote: "\"Market lagi turun. Saya mau average down, tapi nggak yakin fundamentalnya masih bagus.\"",
    note: "Butuh second opinion yang bisa dipercaya"
  }
];

const methods = [
  { title: "G", text: "Growth Earnings", subtext: "Kualitas & pertumbuhan fundamental bisnis" },
  { title: "R", text: "Relative Strength", subtext: "Leader atau laggard vs pasar" },
  { title: "O", text: "Orientasi Tren", subtext: "Struktur tren harga & stage" },
  { title: "V", text: "Volume & Volatility", subtext: "Likuiditas & kualitas pergerakan" },
  { title: "E", text: "Endorsement Smart Money", subtext: "Flow asing, institusi, bandar" }
];
const reportChecklist = [
  {
    id: "01",
    title: "Harus ngapain sekarang?",
    note: "Verdict jelas: masuk, tunggu, atau hindari"
  },
  {
    id: "02",
    title: "Kenapa masuk akal?",
    note: "5 skenario probabilistik, bukan 1 tesis"
  },
  {
    id: "03",
    title: "Apa risikonya?",
    note: "Mitigasi eksplisit, bukan disembunyikan"
  },
  {
    id: "04",
    title: "Kapan harus berubah?",
    note: "Trigger keluar didefinisikan sejak awal"
  }
];

const assetTags = ["Saham Indonesia", "Saham Amerika", "Obligasi FR & INDON", "MMF USD & IDR", "Rotasi aset & timing"];

const portfolioStats = [
  { value: "+38.4%", label: "Return total", color: "text-[#22C97A]" },
  { value: "+24.1%", label: "Alpha vs IHSG", color: "text-grove-primary" },
  { value: "67%", label: "Win rate posisi", color: "text-grove-text" },
  { value: "27", label: "Posisi dicatat", color: "text-grove-text" }
];

const faqs = [
  "Apa bedanya Grove dengan akun saham di Instagram atau grup Telegram?",
  "Rp 249K per bulan apakah worth it?",
  "Apakah ini menjamin saya profit?",
  "Saya masih pemula, apakah Grove cocok untuk saya?",
  "Bagaimana kalau saya tidak puas?",
  "Konten Grove seberapa sering diperbarui?"
];

export function HomePage({ onStartResearch }: HomePageProps) {
  return (
    <main className="container-shell py-10 md:py-12" id="home-top" style={{ background: "radial-gradient(900px 500px at 50% -140px, rgba(95,184,138,.12), transparent 62%), #050b08" }} >
      <section className="mb-14 border-b border-grove-border pb-10 text-center" >
        <div className="mb-5 flex items-center justify-center gap-3" >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-grove-primary/20" >
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" >
              <path d="M 50 10 C 80 10, 100 35, 100 70 C 100 90, 85 105, 60 105 C 35 105, 15 90, 15 65 C 15 35, 30 10, 50 10 Z" fill="#5FB88A" />
              <path d="M 40 80 L 55 60 L 65 70 L 82 42" stroke="#0A0E0B" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </span>
          <span className="font-serif text-5xl" > Grove.</span>
        </div>

        <p className="kicker mb-3" > {heroData.tag} </p>
        <h1 className="mx-auto mb-4 max-w-4xl font-serif text-4xl leading-tight md:text-6xl" > {heroData.title} </h1>
        <p className="mx-auto mb-7 max-w-2xl text-sm leading-7 text-grove-muted" > {heroData.subtitle} </p>
        <div className="flex justify-center gap-3" >
          <button onClick={onStartResearch} className="rounded-xl bg-grove-primary px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90" >
            Lihat dashboard riset
          </button>
          <button className="rounded-xl border border-grove-border px-5 py-3 text-sm text-grove-muted" > Lihat harga </button>
        </div>
      </section>

      <section className="mb-14 py-14" id="compass" >
        <div className="mb-8 text-center" >
          <p className="mb-[10px] text-[10px] font-medium uppercase tracking-[0.12em] text-grove-primary" > Apakah ini terasa familiar ? </p>
          <h2 className="font-serif text-[clamp(22px,3vw,32px)] font-normal leading-[1.3]" > Kamu mungkin pernah di salah satu situasi ini.</h2>
        </div>
        <div className="grid gap-3 md:grid-cols-2" >
          {
            painPoints.map((item) => (
              <article key={item.quote} className="rounded-2xl border border-grove-border bg-grove-bg2 p-5" >
                <div className="mb-1.5 text-[13px] font-medium leading-[1.5] text-grove-text" > {item.quote} </div>
                <div className="text-[11px] text-[#6B7F72]" > {item.note} </div>
              </article>
            ))
          }
        </div>
        <div className="mt-7 text-center text-sm font-medium text-grove-primary" > Grove dibuat untuk persis situasi itu.</div>
      </section>

      <section className="mx-auto mb-14 grid gap-8 border-y border-grove-border py-10 md:grid-cols-2" >
        <div>
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.12em] text-grove-primary" > Apa yang Grove lakukan berbeda </p>
          <h3 className="mb-4 font-serif text-[clamp(20px,2.5vw,28px)] font-normal leading-[1.2]" >
            Bukan sinyal beli atau jual.
            <br />
            <span className="italic text-grove-primary" > Tapi cara berpikir yang bisa kamu pakai seumur hidup.</span>
          </h3>
          <p className="mb-3 text-[13px] leading-[1.85] text-grove-muted" >
            Di luar sana banyak yang kasih rekomendasi.Grove kasih alasan, risiko, dan kapan keluarnya dalam satu framework yang konsisten untuk semua aset.
          </p>
          <p className="text-[13px] leading-[1.85] text-grove-muted" >
            Setiap analisis Grove selalu menjawab empat pertanyaan: <strong className="text-grove-text" > apa yang harus dilakukan sekarang </strong>,{" "}
            <strong className="text-grove-text" > kenapa itu masuk akal </strong>, <strong className="text-grove-text">apa risikonya</strong >, dan{" "}
            <strong className="text-grove-text" > kapan harus berubah pikiran </strong>.
          </p>
          <div className="mt-3 flex flex-wrap gap-2" >
            {
              assetTags.map((tag) => (
                <span key={tag} className="rounded-full border border-[rgba(95,184,138,0.3)] bg-[rgba(95,184,138,0.12)] px-3 py-1 text-[11px] text-grove-primary" >
                  {tag}
                </span>
              ))
            }
          </div>
        </div>
        <aside className="rounded-2xl border border-grove-border bg-grove-bg2 p-6" >
          <p className="font-serif text-[17px] italic leading-[1.55] text-grove-text" >
            &quot;Kami tidak menjanjikan selalu benar.Kami pastikan cara berpikirmu jauh lebih terstruktur dari sebelumnya.&quot;
          </p>
          <div className="mt-4 border-t border-grove-border pt-4 text-[10px] uppercase tracking-[0.1em] text-[#6B7F72]" > Prinsip inti Grove </div>
        </aside>
      </section>

      <section className="mx-auto mb-14" id="track-record" >
        <div className="mb-6 text-center" >
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.12em] text-grove-primary" > Grove Model Portfolio </p>
          <h3 className="mb-2 font-serif text-[clamp(20px,2.5vw,28px)] font-normal" > Bukan janji, ini rekam jejak yang bisa ditelusuri.</h3>
          <p className="mx-auto max-w-[480px] text-[13px] leading-[1.7] text-grove-muted" >
            Simulasi portofolio mengikuti setiap rekomendasi Grove sejak Jan 2024 termasuk posisi yang rugi, karena kejujuran itu yang membangun kepercayaan.
          </p>
        </div>
        <div className="mb-5 grid gap-[10px] md:grid-cols-4" >
          {
            portfolioStats.map((stat) => (
              <article key={stat.label} className="rounded-xl border border-grove-border bg-grove-bg2 p-[14px] text-center" >
                <p className={`font-serif text-4xl font-medium leading-none ${stat.color}`} > {stat.value} </p>
                <p className="mt-1 text-[10px] text-[#6B7F72]" > {stat.label} </p>
              </article>
            ))
          }
        </div>
        <div className="text-center" >
          <button className="rounded-lg border border-[rgba(95,184,138,0.35)] px-[18px] py-[7px] text-xs text-grove-primary" > Lihat semua posisi termasuk yang rugi -&gt; </button>
        </div>
      </section>

      <section className="mb-14" id="edukasi" >
        <div className="mb-14 border-y border-grove-border py-10" >
          <p className="kicker mb-2 text-center" > Cara kerja Grove </p>
          <h3 className="mb-8 text-center font-serif text-[clamp(28px,4.2vw,52px)] leading-tight" >
            Setiap laporan selalu menjawab <span className="italic" >4 hal ini.</span>
          </h3>
          <div className="grid gap-4 text-center md:grid-cols-4" >
            {
              reportChecklist.map((item) => (
                <article key={item.id} className="px-3" >
                  <p className="font-serif text-5xl text-grove-primary" >{item.id}</p>
                  <p className="mt-2 text-sm font-semibold text-grove-text" >{item.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-grove-muted" >{item.note}</p>
                </article>
              ))
            }
          </div>
        </div>

        <p className="kicker mb-3 text-center" > Metode Grove </p>
        <h3 className="mb-2 text-center font-serif text-4xl" >
          5 pilar penilaian. <span className="italic" >Satu skor yang jujur.</span>
        </h3>
        <p className="mx-auto mb-7 max-w-2xl text-center text-sm text-grove-muted" >
          Setiap saham di dashboard Grove dinilai lewat 5 dimensi yang mencakup fundamental, teknikal, dan perilaku pasar. Namanya kami ambil dari huruf depan masing-masing: <strong className="text-grove-text" >G · R · O · V · E</strong>.
        </p>
        <div className="grid gap-3 md:grid-cols-5" >
          {
            methods.map((item) => (
              <article key={item.title} className="panel relative overflow-hidden p-4 text-center" >
                <p className="pointer-events-none absolute right-3 top-2 font-serif text-[70px] leading-none text-grove-primary/12" >{item.title}</p>
                <p className="relative font-serif text-3xl text-grove-primary" > {item.title} </p>
                <p className="relative mt-1 text-xs font-semibold text-grove-text" > {item.text} </p>
                <p className="relative mt-1 text-[11px] leading-relaxed text-grove-muted" > {item.subtext} </p>
              </article>
            ))
          }
        </div>
        <div className="panel mt-5 p-5" >
          <p className="kicker mb-2 text-left" > 3 Horizon - Satu Saham, Tiga Perspektif </p>
          <p className="mb-4 text-sm leading-7 text-grove-muted" >
            Setiap saham dinilai untuk tiga jangka waktu yang berbeda - <strong className="text-grove-text" >Long Term (1-3 tahun), Medium Term (3-12 bulan), dan Short Term (1-8 minggu)</strong> - karena saham yang sama bisa menjadi pilihan berbeda tergantung kebutuhanmu.
          </p>
          <div className="grid gap-2 md:grid-cols-3" >
            <article className="rounded-xl border border-grove-border bg-grove-bg2 p-3" >
              <p className="text-xs font-semibold text-grove-primary" >Long Term</p>
              <p className="mt-1 text-[11px] text-grove-muted" >Kualitas bisnis dominan - beli fundamental, hold bertahun-tahun</p>
            </article>
            <article className="rounded-xl border border-grove-border bg-grove-bg2 p-3" >
              <p className="text-xs font-semibold text-grove-primary" >Medium Term</p>
              <p className="mt-1 text-[11px] text-grove-muted" >Seimbang - fundamental & momentum sama pentingnya</p>
            </article>
            <article className="rounded-xl border border-grove-border bg-grove-bg2 p-3" >
              <p className="text-xs font-semibold text-grove-primary" >Short Term</p>
              <p className="mt-1 text-[11px] text-grove-muted" >Momentum & flow dominan - timing lebih berperan</p>
            </article>
          </div>
          <div className="mt-4 text-center" >
            <button className="rounded-lg border border-[rgba(95,184,138,0.35)] px-5 py-2 text-xs text-grove-primary" > Pelajari metode GROVE lebih dalam di Edukasi -&gt; </button>
          </div>
        </div>
      </section>

      <section className="mb-14" id="track-record" >
        <p className="kicker mb-3 text-center" > Harga & Paket </p>
        <h3 className="mb-2 text-center font-serif text-4xl" > Satu harga flat. <span className="italic" >Ekosistem add-on.</span></h3>
        <p className="mb-6 text-center text-sm text-grove-muted" >Tidak ada kebingungan tier. Member dapat akses penuh, program tambahan dibeli sukarela sesuai kebutuhan.</p>
        <div className="grid gap-4 md:grid-cols-2" >
          <article className="panel p-6" >
            <p className="text-xs uppercase tracking-[0.1em] text-grove-muted" > Free </p>
            <p className="mt-2 font-serif text-5xl" > Rp 0 </p>
            <p className="mt-2 text-xs text-grove-muted" >selamanya - tanpa kartu kredit</p>
            <button className="mt-4 w-full rounded-xl border border-grove-border px-4 py-2 text-sm text-grove-text" >Mulai gratis</button>
            <div className="mt-4 space-y-1 text-sm text-grove-muted" >
              <p>✓ Market Compass mingguan - arah rotasi aset</p>
              <p>✓ Highlight riset 1x / bulan</p>
              <p>✓ Makro brief ringkas 2x / bulan</p>
              <p>✓ Newsletter Grove setiap Jumat</p>
            </div>
          </article>
          <article className="rounded-xl border border-grove-primary bg-grove-primary/5 p-6" >
            <div className="mb-2 flex justify-center" >
              <span className="rounded-full bg-grove-primary px-3 py-1 text-[10px] font-semibold text-black" >SATU HARGA - AKSES PENUH</span>
            </div>
            <p className="text-xs uppercase tracking-[0.1em] text-grove-primary" > Member </p>
            <p className="mt-2 font-serif text-5xl" > Rp 249K <span className="font-sans text-sm text-grove-muted" >/bulan</span></p>
            <p className="mt-1 text-xs font-semibold text-grove-primary" >atau Rp 2.49 jt/tahun - hemat 17%</p>
            <button className="mt-4 w-full rounded-xl bg-grove-primary px-4 py-2 text-sm font-semibold text-black" >Mulai Member sekarang -&gt;</button>
            <div className="mt-4 grid gap-1 text-sm text-grove-text md:grid-cols-2" >
              <p>✓ Market Compass penuh + reasoning</p>
              <p>✓ Grove Model Portfolio real-time</p>
              <p>✓ Riset saham: 5 skenario probabilistik</p>
              <p>✓ Special situation alerts</p>
              <p>✓ Asset allocation bulanan</p>
              <p>✓ Watchlist 97 emiten + scoring</p>
              <p>✓ Weekly technical update</p>
              <p>✓ Komunitas diskusi aktif</p>
            </div>
          </article>
        </div>
        <article className="panel mt-4 p-6" >
          <div className="flex items-start justify-between gap-4" >
            <div>
              <p className="kicker mb-1 text-left" >Add-on - Beli Satuan</p>
              <h4 className="font-semibold text-grove-text" >Program tambahan - sesuai kebutuhan kamu</h4>
            </div>
            <p className="text-xs text-grove-muted" >Member dapat <span className="text-grove-primary" >harga lebih murah</span></p>
          </div>
        </article>
      </section>

      <section className="mb-14" id="tentang-kami" >
        <p className="kicker mb-3 text-center" > Pertanyaan Yang Sering Muncul </p>
        <h3 className="mb-6 text-center font-serif text-4xl" > Kamu mungkin ragu.Wajar.</h3>
        <div className="panel divide-y divide-grove-border" >
          {
            faqs.map((faq) => (
              <div key={faq} className="flex items-center justify-between px-5 py-4 text-sm" >
                <span>{faq} </span>
                <span className="text-grove-primary" > +</span>
              </div>
            ))
          }
        </div>
      </section>

      <section className="rounded-2xl border border-grove-border bg-grove-bg2 px-6 py-12 text-center" >
        <h3 className="mb-3 font-serif text-5xl leading-tight" >
          Mulai berpikir dengan <span className="text-grove-primary italic" >framework</span>, bukan perasaan.
        </h3>
        <p className="mx-auto mb-7 max-w-xl text-sm text-grove-muted" > Bergabung dengan investor yang sudah berhenti menebak dan mulai memutuskan dengan alasan yang jelas.</p>
        <button onClick={onStartResearch} className="rounded-xl bg-grove-primary px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90" >
          Mulai gratis sekarang
        </button>
      </section>
    </main>
  );
}
