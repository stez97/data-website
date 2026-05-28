import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { dacatImages } from "@/data/assets";
import { contact } from "@/data/contact";
import { homeContent } from "@/data/content";
import { navigation } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-ink py-12 text-white">
      <div className="container-page grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Image
            src={dacatImages.logo.src}
            alt={dacatImages.logo.alt}
            width={190}
            height={76}
            className="h-14 w-auto brightness-0 invert"
          />
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/68">
            {homeContent.heroTitle}.
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
      </div>
      <div className="container-page mt-10 border-t border-white/12 pt-6 text-sm text-white/50">
        {homeContent.footerCopyright}
      </div>
    </footer>
  );
}
