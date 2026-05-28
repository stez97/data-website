import Image from "next/image";
import { dacatImages } from "@/data/assets";
import { homeContent } from "@/data/content";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

export function AboutSection() {
  return (
    <section id="empresa" className="bg-white py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <SectionHeader
            eyebrow="Empresa"
            title={homeContent.companyTitle}
            copy={homeContent.companyParagraphs[0]}
          />
          {homeContent.companyParagraphs.slice(1).map((paragraph) => (
            <p key={paragraph} className="mt-6 text-base leading-8 text-graphite/78 md:text-lg">
              {paragraph}
            </p>
          ))}
        </Reveal>
        <Reveal delay={0.12} className="grid grid-cols-2 gap-4">
          <div className="relative min-h-[360px] overflow-hidden rounded-sm shadow-premium">
            <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,transparent,rgba(3,34,83,0.18))]" />
            <Image
              src={dacatImages.about.src}
              alt={dacatImages.about.alt}
              fill
              className="object-cover"
            />
          </div>
          <div className="relative mt-12 min-h-[360px] overflow-hidden rounded-sm">
            <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,transparent,rgba(180,107,67,0.16))]" />
            <Image
              src={dacatImages.contact.src}
              alt={dacatImages.contact.alt}
              fill
              className="object-cover"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
