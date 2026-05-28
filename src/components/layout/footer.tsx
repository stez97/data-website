import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { dacatImages } from "@/data/assets";
import { contact } from "@/data/contact";
import { homeContent } from "@/data/content";
import { navigation } from "@/data/navigation";
import { products } from "@/data/products";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ocean-2 py-14 text-white">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper/70 to-transparent" />
      <div aria-hidden="true" className="absolute inset-0 bg-technical-grid bg-[size:52px_52px] opacity-[0.08]" />

      <Container className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-[1.35fr_0.75fr_0.9fr_1.15fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={dacatImages.logo.src}
              alt={dacatImages.logo.alt}
              width={190}
              height={76}
              className="hidden h-14 w-auto brightness-0 invert sm:block"
            />
            <span className="text-lg font-semibold tracking-[0.18em] sm:hidden">DACAT S.A.</span>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/68">
            {homeContent.companyParagraphs[0]}
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-steel">
            Navegación
          </p>
          <div className="grid gap-3 text-sm text-white/74">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-steel">
            Productos
          </p>
          <div className="grid gap-3 text-sm text-white/74">
            {products.map((product) => (
              <a
                key={product.name}
                href={product.href}
                className="group flex items-center justify-between gap-3 transition hover:text-white"
              >
                {product.name}
                <ArrowUpRight size={15} className="text-copper opacity-0 transition group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-steel">
            Contactos
          </p>
          <div className="grid gap-4 text-sm text-white/74">
            <p className="flex gap-3">
              <MapPin size={18} className="mt-1 shrink-0 text-copper" />
              <span>
                {contact.addressLines[0]}
                <br />
                {contact.addressLines[1]}
              </span>
            </p>
            <a className="flex gap-3 transition hover:text-white" href={contact.phoneHref}>
              <Phone size={18} className="shrink-0 text-copper" />
              {contact.phone}
            </a>
            <a className="flex gap-3 transition hover:text-white" href={contact.emailHref}>
              <Mail size={18} className="shrink-0 text-copper" />
              {contact.email}
            </a>
          </div>
        </div>
      </Container>
      <Container className="relative mt-10 flex flex-col gap-3 border-t border-white/12 pt-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
        <span>{homeContent.footerCopyright}</span>
        <span>{homeContent.heroTitle}</span>
      </Container>
    </footer>
  );
}
