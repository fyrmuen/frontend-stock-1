export function DashboardHeader() {
  return (
    <header className="mb-5">
      <h1 className="mb-1 font-serif text-[26px] font-bold">
        Research <em className="italic text-grove-primary">Dashboard</em>
      </h1>
      <p className="max-w-[680px] text-[12px] leading-[1.65] text-grove-muted2">
        Penilaian probabilistik lintas kelas aset — saham Indonesia, saham Amerika, saham global, obligasi, dan reksadana.
        Setiap instrumen dianalisis pada tiga horizon waktu yang berbeda.
      </p>
      <p className="mt-2 flex items-center gap-1.5 text-[10px] text-grove-muted">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-grove-primary" />
        Data ilustratif untuk edukasi · Terakhir diperbarui: Apr 2026
      </p>
    </header>
  );
}