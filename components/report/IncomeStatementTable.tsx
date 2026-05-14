import { incomeStatementRows } from "@/data/mockData";
import { Table } from "@/components/ui/Table";

export function IncomeStatementTable() {
  return (
    <section className="mb-4">
      <Table>
        <table className="min-w-full text-[11px]">
          <thead className="bg-grove-bg4 text-[9px] uppercase tracking-[.07em] text-grove-muted">
            <tr><th className="px-3 py-2 text-left">Item (Rp T)</th><th className="px-3 py-2 text-right">2023</th><th className="px-3 py-2 text-right">2024</th><th className="px-3 py-2 text-right">2025F</th><th className="px-3 py-2 text-right">2026F</th></tr>
          </thead>
          <tbody>
            {incomeStatementRows.map((row) => (
              <tr key={row.item} className={`${row.isBold ? "bg-grove-bg3 font-medium" : ""} border-t border-grove-border`}>
                <td className="px-3 py-2">{row.item}</td>
                {row.values.map((value, i) => <td key={`${row.item}-${i}`} className="px-3 py-2 text-right font-mono">{value}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </Table>
    </section>
  );
}
