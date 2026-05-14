import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const variantClass: Record<ButtonVariant, string> = {
  primary: "bg-grove-primary text-black hover:bg-grove-primary2",
  secondary: "border border-grove-border text-grove-text hover:border-grove-border2",
  ghost: "text-grove-muted hover:text-grove-text"
};

const sizeClass: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-sm"
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant; size?: ButtonSize }) {
  return <button className={`rounded-grove-2 font-medium transition ${variantClass[variant]} ${sizeClass[size]} ${className}`} {...props} />;
}
