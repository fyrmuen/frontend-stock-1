import { Chip } from "@/components/ui/Chip";
import { SECTORS } from "@/lib/constants";

export function SectorFilter({ value, onChange }: { value: string; onChange: (next: string) => void }) {
  return (
    <div className="mb-5 rounded-grove-2 border border-grove-border bg-grove-bg2 p-3">
      <p className="mb-2 text-[9.5px] uppercase tracking-[.1em] text-grove-muted">Sector Filter</p>
      <div className="flex flex-wrap gap-1.5">
        {SECTORS.map((sector) => <Chip key={sector} label={sector} active={value === sector} onClick={() => onChange(sector)} />)}
      </div>
    </div>
  );
}
