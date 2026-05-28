import Image from "next/image";
import { ArrowRight, Gauge, ShieldCheck } from "lucide-react";
import { markets } from "@/data/site";
import { MotionPanel } from "@/components/ui/motion-panel";

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-[92vh] overflow-hidden bg-ink pt-20 text-white">
      <Image
        src="/images/dacat/hero-workshop.jpg"
        alt="Produccion DACAT"
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
            Descubre el futuro de la tubería de cobre
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
            Soluciones profesionales para HVAC/R, refrigeración, aire acondicionado,
            agua sanitaria y gases médicos.
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
          <div className="flex flex-wrap items-center gap-2 p-5">
            {markets.map((market) => (
              <span key={market} className="rounded-sm bg-white/12 px-3 py-2 text-xs text-white/80">
                {market}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
