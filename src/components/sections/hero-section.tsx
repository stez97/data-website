import Image from "next/image";
import { ArrowRight, Gauge, ShieldCheck } from "lucide-react";
import { dacatImages } from "@/data/assets";
import { homeContent } from "@/data/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { TechnicalBackground } from "@/components/ui/technical-background";

export function HeroSection() {
  const intro = homeContent.companyParagraphs[0];

  return (
    <section id="inicio" className="relative min-h-[92vh] overflow-hidden bg-ocean-2 pt-20 text-white">
      <Image
        src={dacatImages.hero.src}
        alt={dacatImages.hero.alt}
        fill
        priority
        className="object-cover opacity-58"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,26,50,0.92),rgba(7,26,50,0.66),rgba(7,26,50,0.22))]" />
      <TechnicalBackground variant="dark" />
      <Container className="relative flex min-h-[calc(92vh-80px)] items-end pb-10 pt-20">
        <Reveal className="max-w-4xl">
          <Badge tone="dark" className="mb-5">DACAT S.A.</Badge>
          <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.02] md:text-7xl lg:text-8xl">
            {homeContent.heroTitle}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
            {intro}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              href="#productos"
              variant="primary"
              icon={<ArrowRight size={18} />}
            >
              Productos
            </Button>
            <Button href="#contactos" variant="ghost">
              Contactos
            </Button>
          </div>
        </Reveal>
      </Container>
      <Container className="relative -mt-16 hidden pb-8 lg:block">
        <Card variant="glass" className="grid grid-cols-[1fr_1fr_2fr] overflow-hidden">
          <div className="flex items-center gap-4 border-r border-white/14 p-5">
            <ShieldCheck className="text-steel" />
            <span className="text-sm font-medium text-white/82">Cobre de alta calidad</span>
          </div>
          <div className="flex items-center gap-4 border-r border-white/14 p-5">
            <Gauge className="text-steel" />
            <span className="text-sm font-medium text-white/82">Rendimiento profesional</span>
          </div>
          <div className="p-5 text-sm leading-7 text-white/78">
            Productos fabricados bajo estrictos estándares internacionales ASTM y EN.
          </div>
        </Card>
      </Container>
    </section>
  );
}
