import { ReactNode } from "react";

export function Card({
  children,
  className = "",
  variant = "default"
}: {
  children: ReactNode;
  className?: string;
  variant?: "default" | "hover";
}) {
  return (
    <article
      className={`rounded-grove-2 border border-grove-border bg-grove-bg2 ${
        variant === "hover" ? "transition hover:-translate-y-0.5 hover:border-grove-primary" : ""
      } ${className}`}
    >
      {children}
    </article>
  );
}
