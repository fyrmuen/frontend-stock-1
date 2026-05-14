import Link from "next/link";
import { heroContent } from "@/data/mockData";
import { Button } from "@/components/ui/Button";
import { GroveLogo } from "@/components/ui/GroveLogo";

export function HeroSection() {
  return (
    <section className="mb-14 border-b border-grove-border pb-10 pt-8 text-center">
      <div className="mb-5 flex items-center justify-center gap-3">
        <GroveLogo className="h-14 w-14" />
        <span className="font-serif text-[52px] leading-none">Grove<span className="text-grove-primary">.</span></span>
      </div>
      <p className="kicker mb-4">{heroContent.tag}</p>
      <h1 className="mx-auto mb-4 max-w-[720px] font-serif text-[clamp(28px,4vw,46px)] leading-[1.18]">
        Riset yang membantu kamu <em className="text-grove-primary">memutuskan</em>,<br />bukan sekadar menambah bingung.
      </h1>
      <p className="mx-auto mb-7 max-w-[620px] text-[14px] leading-[1.75] text-grove-muted2">{heroContent.subtitle}</p>
      <div className="flex justify-center gap-3">
        <Link href="/research"><Button size="lg">Lihat dashboard riset</Button></Link>
        <Button size="lg" variant="secondary">Lihat harga</Button>
      </div>
    </section>
  );
}
