import Image from "next/image";
import { ArrowRight, Gauge, ShieldCheck } from "lucide-react";
import { dacatImages } from "@/data/assets";
import { homeContent } from "@/data/content";
import { MotionPanel } from "@/components/ui/motion-panel";

export function HeroSection() {
  const intro = homeContent.companyParagraphs[0];

  return (
    <section id="inicio" className="relative min-h-[92vh] overflow-hidden bg-ink pt-20 text-white">
      <Image
        src={dacatImages.hero.src}
        alt={dacatImages.hero.alt}
        fill
        priority
        className="object-cover opacity-58"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,24,39,0.88),rgba(17,24,39,0.58),rgba(17,24,39,0.2))]" />
      <div className="container-page relative flex min-h-[calc(92vh-80px)] items-end pb-10 pt-20">
        <MotionPanel className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-steel">
            DACAT S.A.
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl lg:text-8xl">
            {homeContent.heroTitle}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
            {intro}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#productos"
              className="inline-flex h-12 items-center justify-center gap-3 rounded-sm bg-copper px-6 text-sm font-semibold text-white transition hover:bg-white hover:text-ink"
            >
              Productos
              <ArrowRight size={18} />
            </a>
            <a
              href="#contactos"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-white/32 px-6 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-ink"
            >
              Contactos
            </a>
          </div>
        </MotionPanel>
      </div>
      <div className="container-page relative -mt-16 hidden pb-8 lg:block">
        <div className="grid grid-cols-[1fr_1fr_2fr] overflow-hidden rounded-sm border border-white/16 bg-white/10 backdrop-blur-xl">
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
        </div>
      </div>
    </section>
  );
}
