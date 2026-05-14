import { STATUS_CLASS_MAP } from "@/lib/constants";
import { RatingStatus } from "@/lib/types";

export function Badge({ status }: { status: RatingStatus }) {
  return <span className={`inline-block rounded-full border px-2 py-0.5 text-[10px] font-medium ${STATUS_CLASS_MAP[status]}`}>{status}</span>;
}
