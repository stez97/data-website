"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type TechnicalBackgroundProps = {
  className?: string;
  variant?: "light" | "dark";
};

export function TechnicalBackground({
  className,
  variant = "light",
}: TechnicalBackgroundProps) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div
        className={cn(
          "technical-pan absolute inset-0 bg-technical-grid bg-[size:48px_48px]",
          variant === "dark" ? "opacity-35" : "opacity-70",
        )}
      />
      <motion.div
        className={cn(
          "absolute -right-24 top-16 h-72 w-72 rounded-full blur-3xl",
          variant === "dark" ? "bg-cyan/18" : "bg-cyan/12",
        )}
        animate={{ opacity: [0.25, 0.48, 0.25], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={cn(
          "absolute -bottom-20 left-10 h-64 w-64 rounded-full blur-3xl",
          variant === "dark" ? "bg-copper/16" : "bg-copper/10",
        )}
        animate={{ opacity: [0.18, 0.36, 0.18], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
