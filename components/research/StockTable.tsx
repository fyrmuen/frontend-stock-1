import Link from "next/link";
import { SummaryStock } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Table } from "@/components/ui/Table";

export function StockTable({ rows }: { rows: SummaryStock[] }) {
  return (
    <Table>
      <table className="min-w-full border-collapse text-[11px]">
        <thead className="bg-grove-bg3 text-[9px] uppercase tracking-[.08em] text-grove-muted">
          <tr>
            <th className="px-3 py-2 text-left">Rank</th>
            <th className="px-3 py-2 text-left">Ticker</th>
            <th className="px-3 py-2 text-center">Price</th>
            <th className="px-3 py-2 text-center">Change</th>
            <th className="px-3 py-2 text-center">Score</th>
            <th className="px-3 py-2 text-center">Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.ticker} className="border-t border-grove-border hover:bg-grove-bg3/80">
              <td className="px-3 py-2 font-mono text-grove-muted">{row.rank.toString().padStart(2, "0")}</td>
              <td className="px-3 py-2">
                <Link href={`/report/${row.ticker.toLowerCase()}`} className="font-medium hover:text-grove-primary">{row.ticker}</Link>
                <p className="text-[10px] text-grove-muted">{row.name}</p>
              </td>
              <td className="px-3 py-2 text-center">{row.price}</td>
              <td className={`px-3 py-2 text-center font-mono ${row.change.startsWith("+") ? "text-grove-green" : "text-grove-red"}`}>{row.change}</td>
              <td className="px-3 py-2 text-center">
                <p>{row.score}</p>
                <ProgressBar value={row.score} />
              </td>
              <td className="px-3 py-2 text-center"><Badge status={row.status} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Table>
  );
}
