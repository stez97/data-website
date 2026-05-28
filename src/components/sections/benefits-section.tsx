import { CheckCircle2, Clock3, Handshake, Layers, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

const benefits = [
  {
    icon: CheckCircle2,
    title: "Calidad",
    copy: "Productos confiables y de alta calidad para aplicaciones comerciales, industriales y residenciales.",
  },
  {
    icon: Shield,
    title: "Durabilidad",
    copy: "Productos seleccionados que combinan eficiencia, durabilidad y facilidad de instalación.",
  },
  {
    icon: Layers,
    title: "Protección",
    copy: "Tuberías de cobre aisladas y sin aislamiento para sistemas de climatización y aplicaciones especializadas.",
  },
  {
    icon: Clock3,
    title: "Instalación eficiente",
    copy: "Soluciones que combinan eficiencia, durabilidad y facilidad de instalación.",
  },
  {
    icon: Handshake,
    title: "Servicio profesional",
    copy: "Soporte a distribuidores, instaladores y empresas mediante un servicio profesional y cercano.",
  },
];

export function BenefitsSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Valor"
            title="Soluciones profesionales para un mercado exigente y técnico."
            copy="DACAT brinda soporte a distribuidores, instaladores y empresas con un enfoque orientado al cliente."
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <Reveal key={benefit.title} delay={index * 0.06}>
                <Card className="h-full p-6 hover:-translate-y-1 hover:shadow-premium">
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-sm bg-copper/10 text-copper">
                    <Icon size={21} />
                  </div>
                  <h3 className="text-lg font-semibold text-ink">{benefit.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-graphite/72">{benefit.copy}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
