type Stance = "OW" | "NT" | "UW";

const stanceMap: Record<Stance, string> = {
  OW: "border-green-500/40 bg-green-500/10 text-green-400",
  NT: "border-amber-500/40 bg-amber-500/10 text-amber-300",
  UW: "border-red-500/40 bg-red-500/10 text-red-400"
};

export function StanceBadge({ stance }: { stance: Stance }) {
  return <span className={`rounded-full border px-2 py-0.5 text-[10px] ${stanceMap[stance]}`}>{stance}</span>;
}
