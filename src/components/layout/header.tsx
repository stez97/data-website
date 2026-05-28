import Image from "next/image";
import { Menu } from "lucide-react";
import { navItems } from "@/data/site";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-white/82 backdrop-blur-xl">
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <a href="#inicio" className="flex items-center">
          <Image
            src="/images/dacat/logo-payoff.png"
            alt="DACAT S.A."
            width={178}
            height={72}
            priority
            className="h-12 w-auto"
          />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-graphite md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-copper">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contactos"
          className="hidden h-11 items-center justify-center rounded-sm bg-ocean px-5 text-sm font-semibold text-white transition hover:bg-copper md:flex"
        >
          Contactar
        </a>
        <button
          className="flex h-11 w-11 items-center justify-center rounded-sm border border-ink/10 text-ink md:hidden"
          aria-label="Abrir menu"
          title="Abrir menú"
        >
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
}
