import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark" | "copper";
};

export function Badge({ children, className, tone = "light" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]",
        tone === "light" && "border-ink/10 bg-white/70 text-copper",
        tone === "dark" && "border-white/16 bg-white/10 text-steel",
        tone === "copper" && "border-copper/25 bg-copper/10 text-copper",
        className,
      )}
    >
      {children}
    </span>
  );
}
