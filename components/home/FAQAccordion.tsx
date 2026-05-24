"use client";

import { ArrowDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: '"Apa bedanya Grove dengan akun saham di Instagram atau grup Telegram?"',
    a: "Akun saham memberikan rekomendasi — tanpa penjelasan kenapa, tanpa menyebut risiko, dan tanpa bilang kapan keluarnya. Grove sebaliknya: setiap analisis memiliki thesis yang bisa ditelusuri, risiko yang didefinisikan, dan trigger keluar yang jelas sejak awal. Dan kami tampilkan posisi yang salah sekalipun — karena itulah yang membangun kepercayaan nyata.",
  },
  {
    q: '"Rp 249K per bulan — apakah worth it?"',
    a: "Kalau satu keputusan investasi yang lebih terstruktur menghindarkan kamu dari satu kesalahan — misalnya cut loss terlambat atau masuk di timing yang salah — nilai itu jauh melampaui Rp 249K. Framework yang konsisten nilainya bukan di satu bulan, tapi di kebiasaan berpikir jangka panjang. Dan kamu bisa coba gratis dulu sebelum memutuskan.",
  },
  {
    q: '"Apakah ini menjamin saya profit?"',
    a: "Tidak — dan kami tidak akan pernah mengklaim begitu. Tidak ada siapapun yang bisa menjamin return investasi. Yang Grove jamin adalah framework berpikir yang konsisten: setiap keputusan dibuat dengan alasan yang jelas, risiko yang diukur, dan ekspektasi yang realistis. Dalam jangka panjang, proses yang baik mengalahkan keberuntungan.",
  },
  {
    q: '"Saya masih pemula — apakah Grove cocok untuk saya?"',
    a: "Grove paling cocok untuk investor yang sudah punya rekening dan pernah bertransaksi — tapi belum punya framework yang sistematis. Kalau kamu belum pernah investasi sama sekali, mulai dari Edukasi Grove dulu untuk membangun fondasi. Tapi kalau kamu sudah punya saham atau reksa dana dan bingung langkah selanjutnya, Core adalah titik yang tepat untuk mulai.",
  },
  {
    q: '"Bagaimana kalau saya tidak puas?"',
    a: "Kamu bisa batalkan kapan saja tanpa penalti. Tidak ada kontrak, tidak ada proses ribet. Mulai gratis, coba dashboard dan metodologi kami, dan upgrade hanya kalau kamu merasa ini memang berguna. Kami percaya produk yang baik tidak butuh jebakan untuk membuat orang tetap berlangganan.",
  },
  {
    q: '"Konten Grove seberapa sering diperbarui?"',
    a: "Sinyal rotasi aset dan macro brief diperbarui setiap minggu. Asset allocation guidance setiap bulan. Analisis emiten individual diperbarui setelah ada rilis laporan keuangan atau perubahan fundamental yang signifikan. Kalender event pasar selalu mencerminkan jadwal terkini seperti RDG BI, FOMC, dan earning season.",
  },
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative mx-auto mb-14 animate-fadeUp py-12 px-7 bg-grove-bg2 ">
      <div className="max-w-[720px] mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[.18em] text-grove-primary">
            Pertanyaan yang sering muncul
          </p>
          <h2 className="font-serif text-[clamp(22px,3vw,32px)] font-bold leading-[1.2]">
            Kamu mungkin masih ragu. <em className="italic">Wajar.</em>
          </h2>
        </div>

        {/* Accordion */}
        <div className="overflow-hidden rounded-grove-3 border border-grove-border">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={i !== 0 ? "border-t border-grove-border" : ""}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition hover:bg-grove-bg2"
                >
                  <span className="pr-6 text-[13.5px] font-medium leading-[1.4] text-grove-text">
                    {faq.q}
                  </span>
                  <span className="shrink-0 text-grove-primary">
                    <ArrowDown
                      size={15}
                      strokeWidth={3}
                      className={`transition-transform duration-300 ease-in-out${
                        isOpen ? " rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className="text-[13px] leading-[1.75] text-grove-muted2">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
