import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type ProductCardProps = {
  name: string;
  shortName: string;
  href: string;
  image: {
    src: string;
    alt: string;
  };
  description: string;
  tags?: string[];
};

export function ProductCard({
  name,
  shortName,
  href,
  image,
  description,
  tags = [],
}: ProductCardProps) {
  return (
    <Card
      variant="glass"
      className="group flex h-full flex-col overflow-hidden border-white/14 bg-white/[0.07] hover:-translate-y-1 hover:border-copper/50 hover:shadow-glass"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[radial-gradient(circle_at_50%_20%,rgba(82,199,218,0.18),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03))]">
        <div className="absolute inset-0 bg-technical-grid bg-[size:34px_34px] opacity-35" />
        <div className="absolute inset-x-8 bottom-8 h-px bg-gradient-to-r from-transparent via-copper/70 to-transparent" />
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-contain p-8 transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-copper">
              {shortName}
            </p>
            <h3 className="text-2xl font-semibold leading-tight text-white">{name}</h3>
          </div>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Abrir ${name}`}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-white/14 text-white transition duration-300 group-hover:border-copper group-hover:bg-copper"
          >
            <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="mb-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} tone="dark" className="px-2.5 py-1 text-[10px] tracking-[0.12em]">
              {tag}
            </Badge>
          ))}
        </div>
        <p className="line-clamp-[10] text-sm leading-7 text-white/68">{description}</p>
        <Button
          href={href}
          target="_blank"
          rel="noreferrer"
          variant="light"
          className="mt-7 w-full"
          icon={<ArrowUpRight size={17} />}
        >
          Ver producto
        </Button>
      </div>
    </Card>
  );
}
