import { Table } from "@/components/ui/Table";

export function ResearchTable() {
  return (
    <section className="mt-5">
      <p className="mb-2 text-[9.5px] uppercase tracking-[.1em] text-grove-muted">Research Findings</p>
      <Table>
        <table className="min-w-full text-[11px]">
          <thead className="bg-grove-bg3 text-[9px] uppercase tracking-[.08em] text-grove-muted">
            <tr>
              <th className="px-3 py-2 text-left">Theme</th>
              <th className="px-3 py-2 text-left">Observation</th>
              <th className="px-3 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-grove-border"><td className="px-3 py-2">Liquidity</td><td className="px-3 py-2">Foreign flow turning positive for 3 weeks.</td><td className="px-3 py-2 text-grove-primary">Increase banks exposure</td></tr>
            <tr className="border-t border-grove-border"><td className="px-3 py-2">Earnings</td><td className="px-3 py-2">FY guidance mostly in-line.</td><td className="px-3 py-2 text-grove-amber">Hold quality compounders</td></tr>
          </tbody>
        </table>
      </Table>
    </section>
  );
}
