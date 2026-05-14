export function Tab({
  active,
  children,
  onClick
}: {
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-md border px-3 py-1.5 text-[11px] transition ${
        active ? "border-grove-primary/30 bg-grove-primary/10 text-grove-primary" : "border-transparent text-grove-muted hover:text-grove-text"
      }`}
    >
      {children}
    </button>
  );
}
