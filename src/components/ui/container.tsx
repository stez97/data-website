import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

export function Container({ as: Component = "div", children, className }: ContainerProps) {
  return (
    <Component className={cn("mx-auto w-[min(100%-32px,1180px)]", className)}>
      {children}
    </Component>
  );
}
