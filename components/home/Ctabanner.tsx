import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
    return (
        <section className="mx-auto mb-14 max-w-[720px] animate-fadeUp py-16 text-center">
            <h2 className="mb-5 font-serif text-[clamp(28px,4vw,44px)] font-bold leading-[1.2] tracking-[-0.01em]">
                Mulai berpikir dengan{" "}
                <br />
                <em className="italic text-grove-primary">framework</em>
                <span className="not-italic text-grove-text">, bukan perasaan.</span>
            </h2>

            <p className="mb-8 text-[13.5px] leading-[1.75] text-grove-muted2">
                Bergabung dengan investor yang sudah berhenti menebak — dan mulai
                <br />
                memutuskan dengan alasan yang jelas.
            </p>

            <div className="mb-4 flex items-center justify-center gap-3">
                <Link
                    href="/research"
                    className="inline-flex items-center gap-2 rounded-grove-2 bg-grove-primary px-6 py-3 text-[13.5px] font-semibold text-grove-bg transition hover:bg-grove-primary2"
                >
                    Mulai gratis sekarang
                    <ArrowRight size={15} strokeWidth={2.5} />
                </Link>
                <Link
                    href="#pricing-section"
                    className="inline-flex items-center gap-1.5 rounded-grove-2 border border-grove-border px-6 py-3 text-[13.5px] text-grove-muted2 transition hover:border-grove-border2 hover:text-grove-text"
                >
                    Lihat paket
                    <ArrowRight size={15} strokeWidth={2} />
                </Link>
            </div>

            <p className="text-[11px] text-grove-muted">
                Tidak perlu kartu kredit · Batalkan kapan saja
            </p>
        </section>
    );
}