import { ReactNode } from "react";

export function Table({ children }: { children: ReactNode }) {
  return <div className="overflow-x-auto rounded-grove-2 border border-grove-border bg-grove-bg2">{children}</div>;
}
