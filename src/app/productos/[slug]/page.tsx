import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Mail, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { TechnicalBackground } from "@/components/ui/technical-background";
import { contact } from "@/data/contact";
import { products } from "@/data/products";
import { getProductBySlug } from "@/lib/products";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {};
  }

  return {
    title: `${product.fullName} | DACAT S.A.`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter((item) => item.slug !== product.slug);

  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-ocean-2 pb-20 pt-32 text-white md:pb-28 md:pt-40">
          <TechnicalBackground variant="dark" />
          <Container className="relative">
            <Link
              href="/#productos"
              className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-copper"
            >
              <ArrowLeft size={17} />
              Volver a productos
            </Link>

            <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <Reveal>
                <Badge tone="dark" className="mb-5">
                  {product.name}
                </Badge>
                <h1 className="text-balance text-5xl font-semibold leading-[1.04] md:text-7xl">
                  {product.fullName}
                </h1>
                <p className="mt-7 text-lg leading-8 text-white/72">{product.description}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <Badge key={tag} tone="dark">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Button
                    href={contact.emailHref}
                    variant="primary"
                    icon={<Mail size={18} />}
                  >
                    Solicitar información
                  </Button>
                  <Button href="/#productos" variant="ghost">
                    Ver todos los productos
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <Card variant="glass" className="relative overflow-hidden p-8">
                  <div className="absolute inset-0 bg-technical-grid bg-[size:42px_42px] opacity-30" />
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={product.image.src}
                      alt={product.image.alt}
                      fill
                      priority
                      className="object-contain drop-shadow-2xl"
                    />
                  </div>
                </Card>
              </Reveal>
            </div>
          </Container>
        </section>

        <section className="bg-white py-20 md:py-28">
          <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <Badge tone="copper" className="mb-5">
                Información
              </Badge>
              <h2 className="text-balance text-3xl font-semibold leading-tight text-ink md:text-5xl">
                Descripción del producto
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <Card className="p-7 md:p-9">
                <p className="text-base leading-8 text-graphite/78 md:text-lg">
                  {product.description}
                </p>
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {product.tags.map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center gap-3 rounded-sm border border-ink/10 bg-mist p-4 text-sm font-semibold text-graphite"
                    >
                      <ShieldCheck size={18} className="text-copper" />
                      {tag}
                    </div>
                  ))}
                </div>
              </Card>
            </Reveal>
          </Container>
        </section>

        <section className="bg-mist py-20 md:py-24">
          <Container>
            <Reveal>
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <Badge tone="copper" className="mb-5">
                    Productos
                  </Badge>
                  <h2 className="text-3xl font-semibold text-ink md:text-5xl">
                    Otras soluciones DACAT
                  </h2>
                </div>
                <Button href="/#productos" variant="secondary" icon={<ArrowRight size={17} />}>
                  Volver al overview
                </Button>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {relatedProducts.map((item, index) => (
                <Reveal key={item.slug} delay={index * 0.08}>
                  <Link
                    href={item.href}
                    className="group grid gap-5 rounded-sm border border-ink/10 bg-white p-5 transition hover:-translate-y-1 hover:border-copper/50 hover:shadow-premium md:grid-cols-[160px_1fr]"
                  >
                    <div className="relative aspect-[4/3] rounded-sm bg-mist">
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        fill
                        className="object-contain p-4 transition group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-copper">
                        {item.name}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-ink">{item.fullName}</h3>
                      <p className="mt-3 line-clamp-3 text-sm leading-7 text-graphite/72">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
