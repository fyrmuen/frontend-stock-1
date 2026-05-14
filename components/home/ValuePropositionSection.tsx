import { Tag } from "@/components/ui/Tag";

const tags = ["Saham Indonesia", "Saham Amerika", "Obligasi FR & INDON", "MMF USD & IDR", "Rotasi aset & timing"];

export function ValuePropositionSection() {
  return (
    <section className="mx-auto mb-14 grid max-w-[720px] animate-fadeUp gap-8 border-y border-grove-border py-10 min-[761px]:grid-cols-2 items-center">
      {/* Left column */}
      <div>
        <p className="kicker mb-3">Apa yang Grove lakukan berbeda</p>
        <h2 className="mb-4 font-serif text-[clamp(20px,2.5vw,28px)] leading-[1.2]">
          Bukan sinyal beli atau jual.
          <br />
          <em className="not-italic text-grove-primary font-serif italic leading-[1.3]">
            Tapi cara berpikir yang bisa kamu pakai seumur hidup.
          </em>
        </h2>
        <p className="mb-3 text-[13px] leading-[1.85] text-grove-muted2">
          Di luar sana banyak yang kasih rekomendasi. Grove kasih alasan, risiko, dan kapan keluarnya — dalam satu framework yang konsisten untuk semua aset.
        </p>
        <p className="text-[13px] leading-[1.85] text-grove-muted2">
          Setiap analisis Grove selalu menjawab empat pertanyaan:{" "}
          <strong className="font-semibold text-grove-text">apa yang harus dilakukan sekarang</strong>,{" "}
          <strong className="font-semibold text-grove-text">kenapa itu masuk akal</strong>,{" "}
          <strong className="font-semibold text-grove-text">apa risikonya</strong>, dan{" "}
          <strong className="font-semibold text-grove-text">kapan harus berubah pikiran</strong>.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>

      {/* Right column — quote box */}
      <aside className="relative rounded-grove-3 border border-grove-border bg-grove-bg2 p-7 h-fit">
        {/* Decorative large opening quote */}
        <span className="mb-1 block font-serif text-[48px] font-bold leading-none text-grove-primary">
          "
        </span>
        <p className="font-serif text-[16px] font-semibold italic leading-[1.6] text-grove-text">
          "Kami tidak menjanjikan selalu benar. Kami pastikan cara berpikirmu jauh lebih terstruktur dari sebelumnya."
        </p>
        <div className="mt-5 border-t border-grove-border pt-4">
          <p className="text-[10px] uppercase tracking-[.1em] text-grove-muted">
            Prinsip inti Grove
          </p>
        </div>
      </aside>
    </section>
  );
}