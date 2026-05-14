import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="mb-8 rounded-grove-3 border border-grove-border bg-grove-bg2 px-6 py-10 text-center">
      <h3 className="mb-3 font-serif text-[26px]">Mulai berpikir dengan <em className="text-grove-primary">framework</em>, bukan perasaan.</h3>
      <p className="mx-auto mb-6 max-w-[480px] text-[12.5px] leading-[1.7] text-grove-muted2">Bergabung dengan investor yang berhenti menebak dan mulai memutuskan dengan alasan jelas.</p>
      <Link href="/research"><Button size="lg">Mulai gratis sekarang</Button></Link>
    </section>
  );
}
