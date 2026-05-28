import { Mail, MapPin, Phone } from "lucide-react";
import { contact } from "@/data/contact";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { TechnicalBackground } from "@/components/ui/technical-background";

export function ContactSection() {
  return (
    <section id="contactos" className="relative overflow-hidden bg-white py-20 md:py-28">
      <TechnicalBackground className="opacity-60" />
      <Container className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeader eyebrow="Contactos" title="Contactos" />
          <div className="mt-10 grid gap-5">
            <Card className="flex gap-4 p-5 text-graphite">
              <MapPin className="mt-1 shrink-0 text-copper" />
              <span>
                {contact.addressLines[0]}
                <br />
                {contact.addressLines[1]}
              </span>
            </Card>
            <Card className="p-0">
              <a
                href={contact.phoneHref}
                className="flex gap-4 p-5 text-graphite transition hover:text-copper"
              >
                <Phone className="shrink-0 text-copper" />
                {contact.phone}
              </a>
            </Card>
            <Card className="p-0">
              <a
                href={contact.emailHref}
                className="flex gap-4 p-5 text-graphite transition hover:text-copper"
              >
                <Mail className="shrink-0 text-copper" />
                {contact.email}
              </a>
            </Card>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <Card variant="dark" className="overflow-hidden p-6 md:p-8">
            <form className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-2 text-sm text-white/78">
                  Nombre
                  <input className="h-12 rounded-sm border border-white/12 bg-white/10 px-4 text-white outline-none transition placeholder:text-white/40 focus:border-copper" />
                </label>
                <label className="grid gap-2 text-sm text-white/78">
                  Empresa
                  <input className="h-12 rounded-sm border border-white/12 bg-white/10 px-4 text-white outline-none transition placeholder:text-white/40 focus:border-copper" />
                </label>
              </div>
              <label className="grid gap-2 text-sm text-white/78">
                Email
                <input
                  type="email"
                  className="h-12 rounded-sm border border-white/12 bg-white/10 px-4 text-white outline-none transition placeholder:text-white/40 focus:border-copper"
                />
              </label>
              <label className="grid gap-2 text-sm text-white/78">
                Mensaje
                <textarea className="min-h-36 resize-none rounded-sm border border-white/12 bg-white/10 p-4 text-white outline-none transition placeholder:text-white/40 focus:border-copper" />
              </label>
              <Button type="button" variant="light" className="mt-2">
                Enviar
              </Button>
            </form>
          </Card>
        </Reveal>
      </Container>
    </section>
  );
}
