import Image from "next/image";
import { Menu } from "lucide-react";
import { dacatImages } from "@/data/assets";
import { navigation } from "@/data/navigation";
import { Container } from "@/components/ui/container";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-white/82 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between gap-6">
        <a href="#inicio" className="flex items-center">
          <Image
            src={dacatImages.logo.src}
            alt={dacatImages.logo.alt}
            width={178}
            height={72}
            priority
            className="h-12 w-auto"
          />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-graphite md:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-copper">
              {item.label}
            </a>
          ))}
        </nav>
        <button
          className="flex h-11 w-11 items-center justify-center rounded-sm border border-ink/10 text-ink md:hidden"
          aria-label="Abrir menú"
          title="Abrir menú"
        >
          <Menu size={20} />
        </button>
      </Container>
    </header>
  );
}
