export function Chip({
  label,
  active,
  onClick
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-3 py-1 text-[10px] font-medium transition ${
        active ? "border-grove-primary/35 bg-grove-primary/10 text-grove-primary" : "border-grove-border text-grove-muted hover:text-grove-text"
      }`}
    >
      {label}
    </button>
  );
}
