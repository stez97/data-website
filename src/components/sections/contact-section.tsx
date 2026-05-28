import { Mail, MapPin, Phone } from "lucide-react";
import { contact } from "@/data/contact";
import { MotionPanel } from "@/components/ui/motion-panel";
import { SectionHeading } from "@/components/ui/section-heading";

export function ContactSection() {
  return (
    <section id="contactos" className="bg-white py-20 md:py-28">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <MotionPanel>
          <SectionHeading
            eyebrow="Contactos"
            title="Contactos"
          />
          <div className="mt-10 grid gap-5">
            <p className="flex gap-4 rounded-sm border border-ink/10 p-5 text-graphite">
              <MapPin className="mt-1 shrink-0 text-copper" />
              <span>
                {contact.addressLines[0]}
                <br />
                {contact.addressLines[1]}
              </span>
            </p>
            <a
              href={contact.phoneHref}
              className="flex gap-4 rounded-sm border border-ink/10 p-5 text-graphite transition hover:border-copper"
            >
              <Phone className="shrink-0 text-copper" />
              {contact.phone}
            </a>
            <a
              href={contact.emailHref}
              className="flex gap-4 rounded-sm border border-ink/10 p-5 text-graphite transition hover:border-copper"
            >
              <Mail className="shrink-0 text-copper" />
              {contact.email}
            </a>
          </div>
        </MotionPanel>
        <MotionPanel delay={0.12}>
          <form className="grid gap-4 rounded-sm bg-ocean p-6 text-white shadow-premium md:p-8">
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
            <button
              type="button"
              className="mt-2 h-12 rounded-sm bg-copper px-6 text-sm font-semibold text-white transition hover:bg-white hover:text-ink"
            >
              Enviar
            </button>
          </form>
        </MotionPanel>
      </div>
    </section>
  );
}
