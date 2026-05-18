import Link from "next/link";
import { SummaryStock } from "@/lib/types";
import { Table } from "@/components/ui/Table";

// Score color: ≥75 teal, 60-74 amber/orange, <60 red
function scoreColor(v: number) {
  if (v >= 75) return "text-[#4ecb8d]";
  if (v >= 60) return "text-[#e8a84c]";
  return "text-[#e05c5c]";
}

// Score bar color
function barColor(v: number) {
  if (v >= 75) return "bg-[#4ecb8d]";
  if (v >= 60) return "bg-[#e8a84c]";
  return "bg-[#e05c5c]";
}

type StanceKey = "Overweight" | "Neutral" | "Underweight" | "Avoid";

const stanceCfg: Record<StanceKey, { label: string; cls: string }> = {
  Overweight: { label: "Overweight", cls: "border-[#4ecb8d] text-[#4ecb8d]" },
  Neutral: { label: "Neutral", cls: "border-[#e8a84c] text-[#e8a84c]" },
  Underweight: { label: "Underweight", cls: "border-[#9ab0a2] text-[#9ab0a2]" },
  Avoid: { label: "Avoid", cls: "border-[#e05c5c] text-[#e05c5c]" },
};

function ScoreCell({ value, label }: { value: number; label: string }) {
  return (
    <td className="px-1.5 py-0 text-center align-middle">
      <p className={`text-[15px] font-bold leading-none ${scoreColor(value)}`}>{value}</p>
      <p className="mt-0.5 text-[8px] uppercase text-grove-muted">{label}</p>
    </td>
  );
}

export function StockTable({ rows }: { rows: SummaryStock[] }) {
  return (
    <Table>
      <table className="min-w-full border-collapse">
        {/* Table header */}
        <thead>
          <tr className="border-b border-grove-border bg-grove-bg3">
            <th className="w-10 px-4 py-3 text-left text-[9.5px] font-semibold uppercase tracking-[.08em] text-grove-muted">#</th>
            <th className="px-3 py-3 text-left text-[9.5px] font-semibold uppercase tracking-[.08em] text-grove-muted">Saham</th>
            <th className="px-4 py-3 text-right text-[9.5px] font-semibold uppercase tracking-[.08em] text-grove-muted">Harga</th>
            {["G", "R", "O", "V", "E"].map(l => (
              <th key={l} className="w-14 px-2 py-3 text-center text-[9.5px] font-semibold uppercase tracking-[.08em] text-grove-muted">{l}</th>
            ))}
            <th className="w-20 px-4 py-3 text-center text-[9.5px] font-semibold uppercase tracking-[.08em] text-grove-muted">Score</th>
            <th className="w-28 px-4 py-3 text-center text-[9.5px] font-semibold uppercase tracking-[.08em] text-grove-muted">Stance</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row:any) => {
            const stance = (row.status as StanceKey) ?? "Neutral";
            const cfg = stanceCfg[stance] ?? stanceCfg["Neutral"];
            const gs = row.groveScores ?? { g: row.score, r: row.score, o: row.score, v: row.score, e: row.score };

            return (
              <tr key={row.ticker} className="border-b border-grove-border transition-colors hover:bg-grove-bg3/40">

                {/* Rank */}
                <td className="px-4 py-4 text-left text-[11px] text-grove-muted align-middle">
                  {row.rank}
                </td>

                {/* Saham — logo + ticker + name */}
                <td className="px-3 py-4 align-middle">
                  <div className="flex items-center gap-3">
                    {/* Logo box */}
                    <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[8px] bg-[#1e4035]">
                      <span className="text-[9px] font-bold text-[#4ecb8d]">
                        {row.ticker.slice(0, 3)}
                      </span>
                    </div>
                    <div>
                      <Link
                        href={`/report/${row.ticker.toLowerCase()}`}
                        className="block text-[13px] font-bold text-grove-text hover:text-grove-primary"
                      >
                        {row.ticker}
                      </Link>
                      <p className="text-[10px] text-grove-muted">
                        {row.name} · {row.sector}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Harga */}
                <td className="px-4 py-4 text-right align-middle">
                  <p className="text-[12px] font-semibold text-grove-text">{row.price}</p>
                  <p className={`text-[10px] font-mono ${row.change?.startsWith("+") ? "text-[#4ecb8d]" : "text-[#e05c5c]"}`}>
                    {row.change}
                  </p>
                </td>

                {/* G R O V E individual scores */}
                <ScoreCell value={gs.g} label="G" />
                <ScoreCell value={gs.r} label="R" />
                <ScoreCell value={gs.o} label="O" />
                <ScoreCell value={gs.v} label="V" />
                <ScoreCell value={gs.e} label="E" />

                {/* Total Score + underline bar */}
                <td className="px-4 py-4 text-center align-middle">
                  <p className={`text-[16px] font-bold leading-none ${scoreColor(row.score)}`}>
                    {row.score}
                  </p>
                  {/* Bar: fixed width, colored */}
                  <div className="mx-auto mt-1.5 h-[2.5px] w-10 rounded-full bg-grove-border">
                    <div
                      className={`h-full rounded-full ${barColor(row.score)}`}
                      style={{ width: `${Math.min(row.score, 100)}%` }}
                    />
                  </div>
                </td>

                {/* Stance badge */}
                <td className="px-4 py-4 text-center align-middle">
                  <span className={`inline-block rounded-full border px-3 py-1 text-[10px] font-semibold ${cfg.cls}`}>
                    {cfg.label}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Table>
  );
}