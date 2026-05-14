import { Tag } from "@/components/ui/Tag";

export function ReportHeader({ ticker }: { ticker: string }) {
  return (
    <header className="mb-5 grid gap-4 border-b border-grove-border pb-5 md:grid-cols-[1fr_auto]">
      <div>
        <h1 className="font-serif text-[38px] leading-none uppercase">{ticker}</h1>
        <p className="mt-1 text-[12px] text-grove-muted2">PT Sample Indonesia Tbk</p>
        <div className="mt-2 flex flex-wrap gap-1"><Tag>Banking</Tag><Tag>Large Cap</Tag><Tag>Defensive</Tag></div>
      </div>
      <div className="md:text-right">
        <p className="font-serif text-[28px]">Rp 9,700</p>
        <p className="font-mono text-[11px] text-grove-green">+1.04%</p>
        <p className="text-[10px] text-grove-muted">Fair Value: Rp 10,800</p>
      </div>
    </header>
  );
}
