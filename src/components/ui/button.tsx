import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "light";
  icon?: ReactNode;
};

type LinkButtonProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

const variants = {
  primary: "bg-copper text-white hover:bg-ink",
  secondary: "border border-ink/12 bg-white text-ink hover:border-copper hover:text-copper",
  ghost: "border border-white/24 bg-white/8 text-white hover:border-white hover:bg-white hover:text-ink",
  light: "bg-white text-ink hover:bg-copper hover:text-white",
};

export function Button({
  children,
  className,
  variant = "primary",
  icon,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex h-12 items-center justify-center gap-3 rounded-sm px-6 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-copper/50 focus:ring-offset-2",
    variants[variant],
    className,
  );

  if (props.href) {
    const linkProps = props as LinkButtonProps;

    return (
      <a className={classes} {...linkProps}>
        {children}
        {icon}
      </a>
    );
  }

  const buttonProps = props as NativeButtonProps;

  return (
    <button className={classes} {...buttonProps}>
      {children}
      {icon}
    </button>
  );
}
