"use client";

import { useState } from "react";

const faqs = [
    {
        q: '"Apa bedanya Grove dengan akun saham di Instagram atau grup Telegram?"',
        a: "Akun saham memberikan rekomendasi — tanpa penjelasan kenapa, tanpa menyebut risiko, dan tanpa bilang kapan keluarnya. Grove sebaliknya: setiap analisis memiliki thesis yang bisa ditelusuri, risiko yang didefinisikan, dan trigger keluar yang jelas sejak awal. Dan kami tampilkan posisi yang salah sekalipun — karena itulah yang membangun kepercayaan nyata.",
    },
    {
        q: '"Rp 249K per bulan — apakah worth it?"',
        a: "Satu keputusan investasi yang lebih baik — menghindari satu kesalahan saja — sudah jauh melampaui biaya bulanan. Grove bukan biaya, melainkan infrastruktur berpikir yang kamu pakai setiap kali menganalisis aset.",
    },
    {
        q: '"Apakah ini menjamin saya profit?"',
        a: "Tidak ada yang bisa menjamin profit di pasar modal — dan siapapun yang bilang bisa, bohong. Grove menjamin sesuatu yang lebih berharga: cara berpikir yang terstruktur, konsisten, dan bisa kamu andalkan sendiri.",
    },
    {
        q: '"Saya masih pemula — apakah Grove cocok untuk saya?"',
        a: "Ya. Grove dirancang agar bisa diikuti dari level pemula hingga yang sudah berpengalaman. Konten dijelaskan dengan konteks lengkap, bukan asumsi bahwa kamu sudah tahu segalanya.",
    },
    {
        q: '"Bagaimana kalau saya tidak puas?"',
        a: "Kamu bisa batalkan kapan saja tanpa penalti. Tidak ada kontrak, tidak ada biaya tersembunyi. Jika dalam 7 hari pertama kamu merasa Grove tidak sesuai, hubungi kami dan kami akan proses refund penuh.",
    },
    {
        q: '"Konten Grove seberapa sering diperbarui?"',
        a: "Market Compass terbit setiap minggu. Makro brief 2× per bulan. Riset saham dan deep dive makro minimal 1× per bulan. Special situation alerts dikirim kapanpun ada peluang atau risiko yang perlu segera direspons.",
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
                            <div key={i} className={i !== 0 ? "border-t border-grove-border" : ""}>
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    className="flex w-full items-center justify-between px-6 py-5 text-left transition hover:bg-grove-bg2"
                                >
                                    <span className="pr-6 text-[13.5px] font-medium leading-[1.4] text-grove-text">
                                        {faq.q}
                                    </span>
                                    <span className="shrink-0 text-grove-primary">
                                        {isOpen ? (
                                            /* Arrow up */
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3 10.5L8 5.5L13 10.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        ) : (
                                            /* Arrow down */
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3 5.5L8 10.5L13 5.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        )}
                                    </span>
                                </button>

                                {isOpen && (
                                    <div className="px-6 pb-6">
                                        <p className="text-[13px] leading-[1.75] text-grove-muted2">{faq.a}</p>
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