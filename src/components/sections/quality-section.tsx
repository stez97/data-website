import { Award, BadgeCheck, ShieldCheck } from "lucide-react";
import { homeContent } from "@/data/content";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { TechnicalBackground } from "@/components/ui/technical-background";

const standards = ["ASTM", "EN", "Calidad", "Seguridad", "Rendimiento"];

const qualityCards = [
  {
    icon: Award,
    title: "Estándares internacionales",
    copy: "Trabajamos con productos fabricados bajo estrictos estándares internacionales ASTM y EN.",
  },
  {
    icon: ShieldCheck,
    title: "Productos confiables",
    copy: "Nuestro objetivo es ofrecer productos confiables y de alta calidad para aplicaciones comerciales, industriales y residenciales.",
  },
  {
    icon: BadgeCheck,
    title: "Productos seleccionados",
    copy: "DACAT apuesta por productos seleccionados que combinan eficiencia, durabilidad y facilidad de instalación.",
  },
];

export function QualitySection() {
  return (
    <section id="calidad" className="relative overflow-hidden bg-ocean-2 py-20 text-white md:py-28">
      <TechnicalBackground variant="dark" />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <Reveal>
            <SectionHeader
              eyebrow="Calidad"
              title="Calidad, seguridad y rendimiento."
              copy={homeContent.companyParagraphs[1]}
              inverted
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Card variant="glass" className="p-5">
              <div className="flex flex-wrap gap-3">
                {standards.map((standard) => (
                  <Badge key={standard} tone="dark">
                    {standard}
                  </Badge>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {qualityCards.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <Card variant="glass" className="h-full p-6">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-sm border border-copper/30 bg-copper/12 text-copper-light">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/68">{item.copy}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
