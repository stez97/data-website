import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/data/site";
import { MotionPanel } from "@/components/ui/motion-panel";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProductsSection() {
  return (
    <section id="productos" className="bg-mist py-20 md:py-28">
      <div className="container-page">
        <MotionPanel>
          <SectionHeading
            eyebrow="Productos"
            title="Descubre nuestra línea de productos."
            copy="Tuberías de cobre preaisladas diseñadas para aplicaciones profesionales de aire acondicionado, refrigeración y sistemas HVAC/R."
          />
        </MotionPanel>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {products.map((product, index) => (
            <MotionPanel key={product.name} delay={index * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-ink/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-premium">
                <div className="relative aspect-[4/3] bg-[linear-gradient(135deg,#f8fafc,#dce7ed)]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-8 transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-semibold text-ink">{product.name}</h3>
                    <a
                      href={product.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Abrir ${product.name}`}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-ink/10 text-ink transition group-hover:border-copper group-hover:bg-copper group-hover:text-white"
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                  <p className="line-clamp-[9] text-sm leading-7 text-graphite/76">
                    {product.description}
                  </p>
                </div>
              </article>
            </MotionPanel>
          ))}
        </div>
      </div>
    </section>
  );
}
