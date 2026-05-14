import Link from "next/link";

const stats = [
  { value: "+38.4%", label: "Return total", valueClass: "text-grove-green" },
  { value: "+24.1%", label: "Alpha vs IHSG", valueClass: "text-grove-primary" },
  { value: "67%", label: "Win rate posisi", valueClass: "text-grove-text" },
  { value: "27", label: "Posisi dicatat", valueClass: "text-grove-text" }
];

export function TrackRecordTeaser() {
  return (
    <section className="mx-auto mb-14 max-w-[720px] animate-fadeUp py-10">
      <div className="mb-6 text-center">
        <p className="mb-2 text-[10px] font-medium uppercase tracking-[.12em] text-grove-primary">Grove Model Portfolio</p>
        <h2 className="mb-2 font-serif text-[clamp(20px,2.5vw,28px)]">Bukan janji — ini rekam jejak yang bisa ditelusuri.</h2>
        <p className="mx-auto max-w-[480px] text-[13px] leading-[1.7] text-grove-muted2">Simulasi portofolio mengikuti setiap rekomendasi Grove sejak Jan 2024 — termasuk posisi yang rugi, karena kejujuran itu yang membangun kepercayaan.</p>
      </div>
      <div className="mb-5 grid grid-cols-4 gap-2.5 max-[760px]:grid-cols-2 max-[480px]:grid-cols-1">
        {stats.map((stat) => (
          <article key={stat.label} className="rounded-grove-2 border border-grove-border bg-grove-bg2 p-[14px] text-center transition hover:-translate-y-0.5">
            <p className={`font-serif text-[24px] font-medium ${stat.valueClass}`}>{stat.value}</p>
            <p className="mt-[3px] text-[10px] text-grove-muted">{stat.label}</p>
          </article>
        ))}
      </div>
      <div className="text-center">
        <Link href="/track-record" className="inline-block rounded-grove border border-[rgba(95,184,138,.35)] px-[18px] py-[7px] text-[12px] text-grove-primary transition hover:border-grove-primary">
          Lihat semua posisi termasuk yang rugi →
        </Link>
      </div>
    </section>
  );
}
