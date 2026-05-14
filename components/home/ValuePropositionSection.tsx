import { Tag } from "@/components/ui/Tag";

const tags = ["Saham Indonesia", "Saham Amerika", "Obligasi FR & INDON", "MMF USD & IDR", "Rotasi aset & timing"];

export function ValuePropositionSection() {
  return (
    <section className="mb-14 grid gap-8 border-y border-grove-border py-10 md:grid-cols-2">
      <div>
        <p className="kicker mb-3">Apa yang Grove lakukan berbeda</p>
        <h3 className="mb-4 font-serif text-[clamp(20px,2.5vw,28px)] leading-[1.2]">
          Bukan sinyal beli atau jual.<br />
          <span className="italic text-grove-primary">Tapi cara berpikir yang bisa kamu pakai seumur hidup.</span>
        </h3>
        <p className="text-[13px] leading-[1.85] text-grove-muted2">Grove memberi alasan, risiko, dan timing keluar dalam framework konsisten lintas aset.</p>
        <div className="mt-3 flex flex-wrap gap-2">{tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
      </div>
      <aside className="rounded-grove-3 border border-grove-border bg-grove-bg2 p-6">
        <p className="font-serif text-[17px] italic leading-[1.55]">"Kami tidak menjanjikan selalu benar. Kami pastikan cara berpikirmu lebih terstruktur."</p>
        <p className="mt-4 border-t border-grove-border pt-4 text-[10px] uppercase tracking-[.1em] text-grove-muted">Prinsip inti Grove</p>
      </aside>
    </section>
  );
}
