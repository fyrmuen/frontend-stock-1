import Link from "next/link";

const freeFeatures = [
  "✓ Market Compass mingguan — arah rotasi aset",
  "✓ Highlight riset 1× / bulan",
  "✓ Makro brief ringkas 2× / bulan",
  "✓ Newsletter Grove setiap Jumat",
  "— Market Compass dengan reasoning penuh",
  "— Riset saham 5 skenario probabilistik",
  "— Panduan obligasi FR & INDON detail",
  "— Grove Model Portfolio",
  "— Komunitas diskusi member"
];

const memberLeft = [
  "✓ Market Compass penuh + reasoning",
  "✓ Riset saham: 5 skenario probabilistik",
  "✓ Asset allocation bulanan",
  "✓ Makro deep dive 1× / bulan",
  "✓ Panduan obligasi FR & INDON",
  "✓ Kalkulator YTM interaktif"
];

const memberRight = [
  "✓ Grove Model Portfolio real-time",
  "✓ Special situation alerts",
  "✓ Watchlist 97 emiten + scoring",
  "✓ Weekly technical update",
  "✓ Komunitas diskusi aktif",
  "✓ Diskon 30–40% semua add-on"
];

export function PricingTiers() {
  return (
    <section id="pricing-section" className="mx-auto mb-14 max-w-[760px] animate-fadeUp py-12">
      <div className="mb-8 text-center">
        <p className="mb-2 text-[10px] font-medium uppercase tracking-[.12em] text-grove-primary">Harga & Paket</p>
        <h2 className="mb-2 font-serif text-[clamp(22px,3vw,30px)]">Satu harga jadi. <em>Ecosystem add-on.</em></h2>
        <p className="text-[13px] leading-[1.7] text-grove-muted2">Tidak ada kebingungan tier. Member dapat akses penuh — program tambahan dibeli sukarela sesuai kebutuhan.</p>
      </div>

      <div className="mb-5 grid gap-[14px] min-[761px]:grid-cols-[1fr_1.15fr]">
        <article className="rounded-grove-3 border border-grove-border bg-grove-bg2 p-7">
          <p className="mb-2.5 text-[11px] font-medium uppercase tracking-[.08em] text-grove-muted">Research Platform</p>
          <p className="font-serif text-[34px] font-medium">Rp 0</p>
          <p className="mb-6 text-[11px] text-grove-muted">selamanya · tanpa kartu kredit</p>
          <Link href="/research" className="mb-6 block rounded-grove-2 border border-grove-border px-4 py-2.5 text-center text-[12px] text-grove-muted2 transition hover:border-grove-border2">Mulai gratis</Link>
          <p className="mb-2.5 text-[11px] font-medium text-grove-muted">Yang kamu dapat:</p>
          <div className="space-y-1">
            {freeFeatures.map((feature) => (
              <p key={feature} className={`text-[11.5px] leading-[1.5] ${feature.startsWith("—") ? "text-grove-muted" : "text-grove-muted2"}`}>{feature}</p>
            ))}
          </div>
        </article>

        <article className="relative rounded-grove-3 border-2 border-grove-primary bg-grove-bg2 p-7">
          <span className="absolute -top-[11px] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-grove-primary px-3.5 py-[3px] text-[9px] font-bold tracking-[.05em] text-grove-bg">SATU HARGA · AKSES PENUH</span>
          <p className="mb-2.5 text-[11px] font-medium uppercase tracking-[.08em] text-grove-primary">Community & Tools</p>
          <div className="mb-1.5 flex items-baseline gap-2">
            <p className="font-serif text-[34px] font-medium">Rp 249K</p>
            <p className="text-[12px] text-grove-muted">/bulan</p>
          </div>
          <p className="mb-6 text-[11px] font-medium text-grove-primary">atau Rp 2.49 jt/tahun — hemat 17%</p>
          <Link href="/research" className="mb-6 block rounded-grove-2 bg-grove-primary px-4 py-2.5 text-center text-[12px] font-semibold text-grove-bg transition hover:bg-grove-primary2">Mulai Member sekarang →</Link>
          <p className="mb-2.5 text-[11px] font-medium text-grove-muted">Akses penuh ke semua fitur:</p>
          <div className="grid gap-2 min-[481px]:grid-cols-2">
            <div className="space-y-1">{memberLeft.map((feature) => <p key={feature} className="text-[11.5px] leading-[1.5] text-grove-muted2">{feature}</p>)}</div>
            <div className="space-y-1">{memberRight.map((feature) => <p key={feature} className="text-[11.5px] leading-[1.5] text-grove-muted2">{feature}</p>)}</div>
          </div>
        </article>
      </div>

      <div className="overflow-hidden rounded-grove-3 border border-grove-border">
        <table className="w-full border-collapse text-[11px]">
          <thead className="bg-grove-bg3">
            <tr>
              <th className="px-3 py-2 text-left font-medium text-grove-muted2">Fitur</th>
              <th className="px-3 py-2 text-left font-medium text-grove-muted2">Rp 0</th>
              <th className="px-3 py-2 text-left font-medium text-grove-muted2">Rp 249K</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-grove-border"><td className="px-3 py-2 text-grove-muted2">Market Compass reasoning penuh</td><td className="px-3 py-2 text-grove-muted">—</td><td className="px-3 py-2 text-grove-primary">✓</td></tr>
            <tr className="border-t border-grove-border"><td className="px-3 py-2 text-grove-muted2">Grove Model Portfolio</td><td className="px-3 py-2 text-grove-muted">—</td><td className="px-3 py-2 text-grove-primary">✓</td></tr>
            <tr className="border-t border-grove-border"><td className="px-3 py-2 text-grove-muted2">Watchlist + scoring 97 emiten</td><td className="px-3 py-2 text-grove-muted">—</td><td className="px-3 py-2 text-grove-primary">✓</td></tr>
            <tr className="border-t border-grove-border"><td className="px-3 py-2 text-grove-muted2">Newsletter & makro brief</td><td className="px-3 py-2 text-grove-primary">✓</td><td className="px-3 py-2 text-grove-primary">✓</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
