import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";

type ProductCardProps = {
  name: string;
  href: string;
  image: {
    src: string;
    alt: string;
  };
  description: string;
};

export function ProductCard({ name, href, image, description }: ProductCardProps) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden hover:-translate-y-1 hover:shadow-premium">
      <div className="relative aspect-[4/3] overflow-hidden bg-[linear-gradient(135deg,#f8fafc,#dce7ed)]">
        <div className="absolute inset-0 bg-technical-grid bg-[size:34px_34px] opacity-60" />
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-contain p-8 transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <div className="mb-5 flex items-start justify-between gap-4">
          <h3 className="text-2xl font-semibold leading-tight text-ink">{name}</h3>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Abrir ${name}`}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-ink/10 text-ink transition duration-300 group-hover:border-copper group-hover:bg-copper group-hover:text-white"
          >
            <ArrowUpRight size={18} />
          </a>
        </div>
        <p className="line-clamp-[9] text-sm leading-7 text-graphite/76">{description}</p>
      </div>
    </Card>
  );
}
