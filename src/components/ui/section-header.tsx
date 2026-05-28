import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
  inverted?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  copy,
  align = "left",
  inverted = false,
}: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <Badge tone={inverted ? "dark" : "copper"}>{eyebrow}</Badge>
      <h2
        className={cn(
          "mt-5 text-balance text-3xl font-semibold leading-[1.06] md:text-5xl",
          inverted ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className={cn(
            "mt-5 text-base leading-8 md:text-lg",
            inverted ? "text-white/72" : "text-graphite/78",
          )}
        >
          {copy}
        </p>
      ) : null}
    </div>
  );
}
