import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
  variant?: "solid" | "glass" | "dark";
};

export function Card({ children, className, variant = "solid" }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-sm border transition duration-300",
        variant === "solid" && "border-ink/10 bg-white shadow-sm",
        variant === "glass" && "glass-surface text-white",
        variant === "dark" && "border-white/12 bg-ocean text-white shadow-glass",
        className,
      )}
    >
      {children}
    </div>
  );
}
