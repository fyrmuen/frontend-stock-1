import { statsBand } from "@/data/mockData";

export default function TrackRecordPage() {
  return (
    <main className="container-shell py-8 animate-fadeUp">
      <h1 className="mb-4 font-serif text-4xl">Track Record</h1>
      <div className="grid gap-3 md:grid-cols-4">
        {statsBand.map((item) => (
          <article key={item.label} className="rounded-grove-2 border border-grove-border bg-grove-bg2 p-5 text-center">
            <p className="font-serif text-3xl text-grove-primary">{item.value}</p>
            <p className="text-[10px] uppercase tracking-[.1em] text-grove-muted">{item.label}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
