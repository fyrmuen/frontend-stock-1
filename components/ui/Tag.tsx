export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-grove-border2 bg-[#5fb88a1f] text-grove-primary px-4 py-1.5 text-[10px] tracking-[0.03em]">
      {children}
    </span>
  );
}
