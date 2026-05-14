export function ProgressBar({ value, color = "bg-grove-primary" }: { value: number; color?: string }) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded bg-white/5">
      <div className={`h-full rounded ${color}`} style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
    </div>
  );
}
