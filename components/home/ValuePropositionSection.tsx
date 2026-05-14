import { Tag } from "@/components/ui/Tag";

const tags = ["Saham Indonesia", "Saham Amerika", "Obligasi FR & INDON", "MMF USD & IDR", "Rotasi aset & timing"];

export function ValuePropositionSection() {
  return (
    <section className="mx-auto mb-14 grid max-w-[720px] animate-fadeUp gap-8 border-y border-grove-border py-10 min-[761px]:grid-cols-2">
      <div>
        <p className="kicker mb-3">Apa yang Grove lakukan berbeda</p>
        <h2 className="mb-4 font-serif text-[clamp(20px,2.5vw,28px)] leading-[1.2]">
          Bukan sinyal beli atau jual.
          <br />
          <em>Tapi cara berpikir yang bisa kamu pakai seumur hidup.</em>
        </h2>
        <p className="mb-3 text-[13px] leading-[1.85] text-grove-muted2">Di luar sana banyak yang kasih rekomendasi. Grove kasih alasan, risiko, dan kapan keluarnya — dalam satu framework yang konsisten untuk semua aset.</p>
        <p className="text-[13px] leading-[1.85] text-grove-muted2">Setiap analisis Grove selalu menjawab empat pertanyaan: <strong className="text-grove-text">apa yang harus dilakukan sekarang</strong>, <strong className="text-grove-text">kenapa itu masuk akal</strong>, <strong className="text-grove-text">apa risikonya</strong>, dan <strong className="text-grove-text">kapan harus berubah pikiran</strong>.</p>
        <div className="mt-3 flex flex-wrap gap-2">{tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
      </div>

      <aside className="rounded-grove-3 border border-grove-border bg-grove-bg2 p-7">
        <p className="font-serif text-[17px] italic leading-[1.55]">"Kami tidak menjanjikan selalu benar. Kami pastikan cara berpikirmu jauh lebih terstruktur dari sebelumnya."</p>
        <p className="mt-4 border-t border-grove-border pt-4 text-[10px] uppercase tracking-[.1em] text-grove-muted">Prinsip inti Grove</p>
      </aside>
    </section>
  );
}
