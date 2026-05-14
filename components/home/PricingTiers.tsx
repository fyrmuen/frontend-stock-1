import Link from "next/link";

const freeFeatures = [
  { text: "✓ Market Compass mingguan — arah rotasi aset", active: true },
  { text: "✓ Highlight riset 1× / bulan", active: true },
  { text: "✓ Makro brief ringkas 2× / bulan", active: true },
  { text: "✓ Newsletter Grove setiap Jumat", active: true },
  { text: "— Market Compass dengan reasoning penuh", active: false },
  { text: "— Riset saham 5 skenario probabilistik", active: false },
  { text: "— Panduan obligasi FR & INDON detail", active: false },
  { text: "— Grove Model Portfolio", active: false },
  { text: "— Komunitas diskusi member", active: false },
];

const memberLeft = [
  "✓ Market Compass penuh + reasoning",
  "✓ Riset saham: 5 skenario probabilistik",
  "✓ Asset allocation bulanan",
  "✓ Makro deep dive 1× / bulan",
  "✓ Panduan obligasi FR & INDON",
  "✓ Kalkulator YTM interaktif",
];

const memberRight = [
  "✓ Grove Model Portfolio real-time",
  "✓ Special situation alerts",
  "✓ Watchlist 97 emiten + scoring",
  "✓ Weekly technical update",
  "✓ Komunitas diskusi aktif",
  "✓ Diskon 30–40% semua add-on",
];

const addons = [
  {
    tag: "Online",
    tagColor: "text-[#4ecb8d]",
    tagExtra: null,
    title: "Webinar Tematik",
    price: "Rp 175K",
    desc: "Non-member Rp 275K · 1–2× / bln",
  },
  {
    tag: "Online",
    tagColor: "text-[#4ecb8d]",
    tagExtra: "Berseri",
    title: "Pelatihan Berseri",
    price: "Rp 299K",
    desc: "per modul 3–4 sesi · Non-member Rp 450K",
  },
  {
    tag: "Offline · Bandung / Jakarta",
    tagColor: "text-[#c8a84b]",
    tagExtra: null,
    title: "Bootcamp Intensif",
    price: "Rp 2–2.5 jt",
    desc: "2 hari · 25–40 peserta · Non-member Rp 3–3.5 jt",
  },
  {
    tag: "1-on-1 Online",
    tagColor: "text-[#9ab0a2]",
    tagExtra: null,
    title: "Konsultasi Portofolio",
    price: "Rp 750K",
    desc: "60 menit · Khusus member",
  },
];

export function PricingTiers() {
  return (
    <section id="pricing-section" className="mx-auto mb-14 max-w-[760px] animate-fadeUp py-12">
      {/* Header */}
      <div className="mb-8 text-center">
        <p className="mb-2 text-[10px] font-medium uppercase tracking-[.12em] text-grove-primary">
          Harga & Paket
        </p>
        <h2 className="mb-2 font-serif text-[clamp(22px,3vw,32px)] font-bold leading-[1.2]">
          Satu harga flat. <em>Ekosistem add-on.</em>
        </h2>
        <p className="text-[13px] leading-[1.7] text-grove-muted2">
          Tidak ada kebingungan tier. Member dapat akses penuh — program tambahan dibeli sukarela sesuai kebutuhan.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="mb-5 grid gap-[14px] min-[761px]:grid-cols-[1fr_1.15fr]">
        {/* Free Card */}
        <article className="rounded-grove-3 border border-grove-border bg-grove-bg2 p-7">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[.08em] text-grove-muted">
            Free
          </p>
          <p className="font-serif text-[40px] font-bold leading-none">Rp 0</p>
          <p className="mb-6 mt-1.5 text-[11px] text-grove-muted">
            selamanya · tanpa kartu kredit
          </p>
          <Link
            href="/research"
            className="mb-6 block rounded-grove-2 border border-grove-border px-4 py-2.5 text-center text-[12px] text-grove-muted2 transition hover:border-grove-border2"
          >
            Mulai gratis
          </Link>
          <p className="mb-2.5 text-[11px] font-medium text-grove-muted">
            Yang kamu dapat:
          </p>
          <div className="space-y-1.5">
            {freeFeatures.map((f) => (
              <p
                key={f.text}
                className={`text-[11.5px] leading-[1.5] ${f.active ? "text-grove-muted2" : "text-grove-muted"
                  }`}
              >
                {f.text}
              </p>
            ))}
          </div>
        </article>

        {/* Member Card */}
        <article className="relative rounded-grove-3 border-2 border-grove-primary bg-grove-bg2 p-7">
          <span className="absolute -top-[11px] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-grove-primary px-3.5 py-[3px] text-[9px] font-bold tracking-[.05em] text-grove-bg">
            SATU HARGA · AKSES PENUH
          </span>
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[.08em] text-grove-primary">
            Member
          </p>
          <div className="mb-1 flex items-baseline gap-2">
            <p className="font-serif text-[40px] font-bold leading-none">Rp 249K</p>
            <p className="text-[13px] text-grove-muted">/bulan</p>
          </div>
          <p className="mb-6 text-[11px] font-medium text-grove-primary">
            atau Rp 2.49 jt/tahun — hemat 17%
          </p>
          <Link
            href="/research"
            className="mb-6 block rounded-grove-2 bg-grove-primary px-4 py-3 text-center text-[13px] font-semibold text-grove-bg transition hover:bg-grove-primary2"
          >
            Mulai Member sekarang →
          </Link>
          <p className="mb-3 text-[11px] font-medium text-grove-muted">
            Akses penuh ke semua fitur:
          </p>
          <div className="grid gap-x-3 gap-y-1.5 min-[481px]:grid-cols-2">
            <div className="space-y-1.5">
              {memberLeft.map((f) => (
                <p key={f} className="text-[11.5px] leading-[1.5] text-grove-muted2">
                  {f}
                </p>
              ))}
            </div>
            <div className="space-y-1.5">
              {memberRight.map((f) => (
                <p key={f} className="text-[11.5px] leading-[1.5] text-grove-muted2">
                  {f}
                </p>
              ))}
            </div>
          </div>
        </article>
      </div>

      {/* Add-on Section */}
      <div className="rounded-grove-3 border border-grove-border bg-grove-bg2 p-6">
        {/* Add-on Header */}
        <div className="mb-4 flex items-start justify-between">
          <div>
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[.12em] text-grove-primary">
              Add-on · Beli Satuan
            </p>
            <p className="text-[14px] font-semibold text-grove-text">
              Program tambahan — sesuai kebutuhan kamu
            </p>
          </div>
          <p className="text-right text-[11px] leading-[1.5] text-grove-muted">
            Member dapat{" "}
            <span className="font-medium text-grove-primary">harga lebih murah</span>
          </p>
        </div>

        {/* Add-on Cards */}
        <div className="mb-4 grid grid-cols-4 gap-2.5">
          {addons.map((a) => (
            <div
              key={a.title}
              className="rounded-grove-2 border border-grove-border bg-grove-bg3 p-3.5"
            >
              <div className="mb-2 flex flex-wrap items-center gap-1">
                <p className={`text-[9.5px] font-medium ${a.tagColor}`}>{a.tag}</p>
                {a.tagExtra && (
                  <>
                    <span className="text-[9px] text-grove-muted">·</span>
                    <p className="text-[9.5px] font-medium text-[#c8a84b]">{a.tagExtra}</p>
                  </>
                )}
              </div>
              <p className="mb-1.5 text-[12.5px] font-semibold text-grove-text">
                {a.title}
              </p>
              <p className="mb-1 text-[13px] font-bold text-grove-primary">{a.price}</p>
              <p className="text-[10px] leading-[1.5] text-grove-muted">{a.desc}</p>
            </div>
          ))}
        </div>

        {/* Add-on Extra Links */}
        <div className="mb-4 flex flex-wrap gap-x-6 gap-y-1.5 border-t border-grove-border pt-4">
          <p className="text-[11.5px] text-grove-muted2">
            +{" "}
            <span className="font-medium text-grove-primary">Grove Field Research Trip</span>{" "}
            Rp 1.5 jt (non-member Rp 2.5 jt)
          </p>
          <p className="text-[11.5px] text-grove-muted2">
            +{" "}
            <span className="font-medium text-grove-primary">Grove Summit Tahunan</span>{" "}
            Rp 349K early bird
          </p>
          <p className="text-[11.5px] text-grove-muted2">
            +{" "}
            <span className="font-medium text-grove-primary">Laporan Riset Premium</span>{" "}
            Rp 99K (member: 1 gratis/kuartal)
          </p>
        </div>

        {/* Footer note */}
      </div>
      <p className="text-center text-[11px] text-grove-muted">
        Batalkan kapan saja · tidak ada biaya tersembunyi · data tidak dijual ke pihak ketiga
      </p>
    </section>
  );
}