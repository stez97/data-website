"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { contact } from "@/data/contact";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { TechnicalBackground } from "@/components/ui/technical-background";

const fieldClass =
  "h-12 rounded-sm border border-white/12 bg-white/10 px-4 text-white outline-none transition placeholder:text-white/40 focus:border-copper focus:bg-white/[0.13] focus:ring-2 focus:ring-copper/20";

const labelClass = "grid gap-2 text-sm font-medium text-white/78";

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <section id="contactos" className="relative overflow-hidden bg-white py-20 md:py-28">
      <TechnicalBackground className="opacity-60" />
      <Container className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeader
            eyebrow="Contactos"
            title="Contactos"
            copy="Información de contacto de DACAT S.A."
          />
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
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <label className={labelClass} htmlFor="contact-name">
                  Nombre
                  <input id="contact-name" name="name" autoComplete="name" className={fieldClass} />
                </label>
                <label className={labelClass} htmlFor="contact-company">
                  Empresa
                  <input id="contact-company" name="company" autoComplete="organization" className={fieldClass} />
                </label>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <label className={labelClass} htmlFor="contact-email">
                  Email
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className={fieldClass}
                  />
                </label>
                <label className={labelClass} htmlFor="contact-phone">
                  Teléfono
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className={fieldClass}
                  />
                </label>
              </div>
              <label className={labelClass} htmlFor="contact-product">
                Producto de interés
                <select
                  id="contact-product"
                  name="product"
                  className={`${fieldClass} appearance-none text-white`}
                  defaultValue=""
                >
                  <option value="" className="text-ink">
                    Seleccionar producto
                  </option>
                  {products.map((product) => (
                    <option key={product.slug} value={product.name} className="text-ink">
                      {product.name}
                    </option>
                  ))}
                </select>
              </label>
              <label className={labelClass} htmlFor="contact-message">
                Mensaje
                <textarea
                  id="contact-message"
                  name="message"
                  className="min-h-36 resize-none rounded-sm border border-white/12 bg-white/10 p-4 text-white outline-none transition placeholder:text-white/40 focus:border-copper focus:bg-white/[0.13] focus:ring-2 focus:ring-copper/20"
                />
              </label>
              <Button type="submit" variant="light" className="mt-2">
                Enviar
              </Button>
              {isSubmitted ? (
                <p
                  className="mt-2 flex items-start gap-3 rounded-sm border border-copper/30 bg-copper/10 p-4 text-sm leading-6 text-white/82"
                  role="status"
                  aria-live="polite"
                >
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-copper-light" />
                  Gracias. Tu solicitud ha sido preparada para el prototipo.
                </p>
              ) : null}
            </form>
          </Card>
        </Reveal>
      </Container>
    </section>
  );
}
