import { homeContent } from "@/data/content";
import { products } from "@/data/products";
import { Container } from "@/components/ui/container";
import { ProductCard } from "@/components/ui/product-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { TechnicalBackground } from "@/components/ui/technical-background";

export function ProductsSection() {
  return (
    <section id="productos" className="relative overflow-hidden bg-ocean-2 py-20 text-white md:py-28">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper/70 to-transparent" />
      <div aria-hidden="true" className="absolute -right-28 top-24 h-96 w-96 rounded-full bg-copper/12 blur-3xl" />
      <TechnicalBackground variant="dark" />
      <Container className="relative">
        <Reveal>
          <SectionHeader
            eyebrow="Productos"
            title={homeContent.productsTitle}
            copy="Productos DACAT preservados desde el sitio actual: CONDY, CONDY DUO y CONDY PRO."
            inverted
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <Reveal key={product.name} delay={index * 0.08}>
              <ProductCard
                name={product.fullName}
                shortName={product.name}
                href={product.href}
                image={product.image}
                description={product.description}
                tags={product.tags}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
