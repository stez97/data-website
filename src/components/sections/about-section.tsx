import Image from "next/image";
import { dacatImages } from "@/data/assets";
import { homeContent } from "@/data/content";
import { MotionPanel } from "@/components/ui/motion-panel";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <section id="empresa" className="bg-white py-20 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <MotionPanel>
          <SectionHeading
            eyebrow="Empresa"
            title={homeContent.companyTitle}
            copy={homeContent.companyParagraphs[0]}
          />
          {homeContent.companyParagraphs.slice(1).map((paragraph) => (
            <p key={paragraph} className="mt-6 text-base leading-8 text-graphite/78 md:text-lg">
              {paragraph}
            </p>
          ))}
        </MotionPanel>
        <MotionPanel delay={0.12} className="grid grid-cols-2 gap-4">
          <div className="relative min-h-[360px] overflow-hidden rounded-sm shadow-premium">
            <Image
              src={dacatImages.about.src}
              alt={dacatImages.about.alt}
              fill
              className="object-cover"
            />
          </div>
          <div className="relative mt-12 min-h-[360px] overflow-hidden rounded-sm">
            <Image
              src={dacatImages.contact.src}
              alt={dacatImages.contact.alt}
              fill
              className="object-cover"
            />
          </div>
        </MotionPanel>
      </div>
    </section>
  );
}
