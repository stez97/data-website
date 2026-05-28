import { homeContent } from "@/data/content";
import { products } from "@/data/products";
import { Container } from "@/components/ui/container";
import { ProductCard } from "@/components/ui/product-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { TechnicalBackground } from "@/components/ui/technical-background";

export function ProductsSection() {
  return (
    <section id="productos" className="relative overflow-hidden bg-mist py-20 md:py-28">
      <TechnicalBackground />
      <Container className="relative">
        <Reveal>
          <SectionHeader
            eyebrow="Productos"
            title={homeContent.productsTitle}
          />
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {products.map((product, index) => (
            <Reveal key={product.name} delay={index * 0.08}>
              <ProductCard
                name={product.fullName}
                href={product.href}
                image={product.image}
                description={product.description}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
