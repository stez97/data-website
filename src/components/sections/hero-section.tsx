import Image from "next/image";
import { ArrowRight, Gauge, ShieldCheck, ThermometerSnowflake } from "lucide-react";
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
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-ocean-2 pt-20 text-white">
      <Image
        src={dacatImages.hero.src}
        alt={dacatImages.hero.alt}
        fill
        priority
        className="object-cover opacity-42"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,26,50,0.96),rgba(7,26,50,0.78),rgba(7,26,50,0.28))]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(180deg,transparent,rgba(7,26,50,0.96))]" />
      <div className="absolute left-0 top-28 h-px w-full bg-gradient-to-r from-transparent via-copper/50 to-transparent" />
      <div className="absolute -left-28 top-1/3 h-80 w-80 rounded-full bg-copper/18 blur-3xl" />
      <TechnicalBackground variant="dark" />

      <Container className="relative grid min-h-[calc(100vh-80px)] items-center gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
        <Reveal className="max-w-4xl">
          <Badge tone="dark" className="mb-5">DACAT S.A.</Badge>
          <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.02] md:text-7xl xl:text-8xl">
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
              Ver productos
            </Button>
            <Button href="#contactos" variant="ghost">
              Contactar
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="relative hidden min-h-[520px] lg:block">
          <div className="absolute inset-8 rounded-sm border border-white/12 bg-white/[0.04] shadow-glass backdrop-blur-sm" />
          <div className="absolute inset-0 rounded-sm border border-copper/24" />
          <div className="absolute -right-6 top-10 h-28 w-28 border-r border-t border-copper/70" />
          <div className="absolute -bottom-6 left-10 h-28 w-28 border-b border-l border-cyan/60" />

          <div className="absolute inset-6 overflow-hidden rounded-sm">
            <Image
              src={dacatImages.hero.src}
              alt={dacatImages.hero.alt}
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,26,50,0.04),rgba(7,26,50,0.38))]" />
          </div>

          <div className="absolute left-0 top-16 rounded-sm border border-white/14 bg-ocean-2/78 px-4 py-3 text-xs uppercase tracking-[0.16em] text-white/74 backdrop-blur-xl">
            HVAC/R
          </div>
          <div className="absolute right-0 top-48 rounded-sm border border-copper/30 bg-copper/14 px-4 py-3 text-xs uppercase tracking-[0.16em] text-white/78 backdrop-blur-xl">
            ASTM / EN
          </div>
          <div className="absolute bottom-14 left-8 rounded-sm border border-white/14 bg-white/10 px-4 py-3 text-xs uppercase tracking-[0.16em] text-white/74 backdrop-blur-xl">
            Refrigeración
          </div>
        </Reveal>
      </Container>

      <Container className="relative -mt-8 hidden pb-8 lg:block">
        <Card variant="glass" className="grid grid-cols-[1fr_1fr_1fr_1.7fr] overflow-hidden">
          <div className="flex items-center gap-4 border-r border-white/14 p-5">
            <ShieldCheck className="text-steel" />
            <span className="text-sm font-medium text-white/82">Cobre de alta calidad</span>
          </div>
          <div className="flex items-center gap-4 border-r border-white/14 p-5">
            <Gauge className="text-steel" />
            <span className="text-sm font-medium text-white/82">Rendimiento profesional</span>
          </div>
          <div className="flex items-center gap-4 border-r border-white/14 p-5">
            <ThermometerSnowflake className="text-steel" />
            <span className="text-sm font-medium text-white/82">Sectores HVAC/R</span>
          </div>
          <div className="p-5 text-sm leading-7 text-white/78">
            Productos fabricados bajo estrictos estándares internacionales ASTM y EN.
          </div>
        </Card>
      </Container>
    </section>
  );
}
