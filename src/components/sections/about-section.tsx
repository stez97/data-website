import Image from "next/image";
import { MotionPanel } from "@/components/ui/motion-panel";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <section id="empresa" className="bg-white py-20 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <MotionPanel>
          <SectionHeading
            eyebrow="Empresa"
            title="Soluciones de cobre para el mercado HVAC/R y de refrigeración en América Latina."
            copy="Gracias a una logística eficiente y a un enfoque orientado al cliente, brindamos soporte a distribuidores, instaladores y empresas mediante un servicio profesional y cercano."
          />
          <p className="mt-6 text-base leading-8 text-graphite/78 md:text-lg">
            Nuestro compromiso es construir relaciones comerciales sólidas basadas en
            confianza, seriedad y atención personalizada. DACAT nace con una visión
            internacional y con la misión de convertirse en un referente en soluciones de
            cobre para el mercado HVAC/R y de refrigeración en América Latina.
          </p>
        </MotionPanel>
        <MotionPanel delay={0.12} className="grid grid-cols-2 gap-4">
          <div className="relative min-h-[360px] overflow-hidden rounded-sm shadow-premium">
            <Image
              src="/images/dacat/workshop-detail.jpg"
              alt="Instalaciones DACAT"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative mt-12 min-h-[360px] overflow-hidden rounded-sm">
            <Image
              src="/images/dacat/hero-workshop.jpg"
              alt="Produccion DACAT"
              fill
              className="object-cover"
            />
          </div>
        </MotionPanel>
      </div>
    </section>
  );
}
