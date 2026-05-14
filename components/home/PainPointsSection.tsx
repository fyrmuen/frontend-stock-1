import { PainPointCard } from "@/components/home/PainPointCard";

const painPoints = [
  {
    quote: '"Saham saya merah, tapi nggak tahu harus hold, cut loss, atau pindah ke mana."',
    status: "Stuck tanpa playbook yang jelas"
  },
  {
    quote: '"Dengar obligasi lagi menarik, tapi nggak ngerti FR itu apa dan mulainya dari mana."',
    status: "FOMO tapi tidak ada panduan konkret"
  },
  {
    quote: '"Saya follow banyak akun saham, tapi ujungnya saling bertentangan. Siapa yang benar?"',
    status: "Information overload, makin bingung"
  },
  {
    quote: '"Uang saya nganggur di deposito. Mau pindah ke investasi, tapi takut timing-nya salah."',
    status: "Cash idle, paralyzed by uncertainty"
  },
  {
    quote: '"Dapat rekomendasi saham dari mana-mana, tapi nggak ada yang jelasin kenapa dan kapan keluar."',
    status: "Sinyal tanpa konteks = bahaya"
  },
  {
    quote: '"Market lagi turun. Saya mau average down, tapi nggak yakin fundamentalnya masih bagus."',
    status: "Butuh second opinion yang bisa dipercaya"
  }
];

export function PainPointsSection() {
  return (
    <section className="mx-auto mb-14 max-w-[720px] animate-fadeUp py-12">
      <div className="mb-8 text-center">
        <p className="mb-2 text-[10px] font-medium uppercase tracking-[.12em] text-grove-primary">Apakah ini terasa familiar?</p>
        <h2 className="font-serif text-[clamp(22px,3vw,32px)] leading-[1.3]">Kamu mungkin pernah di salah satu situasi ini.</h2>
      </div>
      <div className="grid grid-cols-2 gap-2.5 max-[760px]:grid-cols-1">
        {painPoints.map((point) => (
          <PainPointCard key={point.quote} quote={point.quote} status={point.status} />
        ))}
      </div>
      <p className="mt-7 text-center text-[14px] font-medium text-grove-primary">Grove dibuat untuk persis situasi itu.</p>
    </section>
  );
}
