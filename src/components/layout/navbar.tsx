"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { dacatImages } from "@/data/assets";
import { contact } from "@/data/contact";
import { navigation } from "@/data/navigation";
import { products } from "@/data/products";
import { Container } from "@/components/ui/container";

const menuTransition = { duration: 0.24, ease: "easeOut" } as const;

export function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/12 bg-ocean-2/78 text-white backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link href="/#inicio" className="flex items-center gap-3" onClick={() => setIsMobileOpen(false)}>
          <Image
            src={dacatImages.logo.src}
            alt={dacatImages.logo.alt}
            width={178}
            height={72}
            priority
            className="hidden h-11 w-auto brightness-0 invert sm:block"
          />
          <span className="text-base font-semibold tracking-[0.18em] sm:hidden">DACAT S.A.</span>
        </Link>

        <nav className="hidden items-center gap-1 text-sm font-medium lg:flex" aria-label="Navegación principal">
          {navigation.map((item) =>
            item.label === "Productos" ? (
              <div key={item.href} className="group relative">
                <a
                  href={item.href}
                  className="flex h-11 items-center gap-2 rounded-sm px-4 text-white/78 transition hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                  <ChevronDown size={16} className="transition group-hover:rotate-180" />
                </a>
                <div className="invisible absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="grid grid-cols-3 gap-3 rounded-sm border border-white/14 bg-ocean-2/94 p-3 shadow-glass backdrop-blur-xl">
                    {products.map((product) => (
                      <a
                        key={product.name}
                        href={product.href}
                        className="group/card rounded-sm border border-white/10 bg-white/[0.06] p-4 transition hover:border-copper/70 hover:bg-white/[0.1]"
                      >
                        <span className="block text-sm font-semibold text-white">{product.name}</span>
                        <span className="mt-3 block h-px w-8 bg-copper transition group-hover/card:w-14" />
                        <span className="mt-3 line-clamp-3 block text-xs leading-5 text-white/70">
                          {product.description}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="flex h-11 items-center rounded-sm px-4 text-white/78 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-4 text-sm text-white/72 lg:flex">
          <a href={contact.phoneHref} className="transition hover:text-copper">
            {contact.phone}
          </a>
          <span className="h-4 w-px bg-white/18" />
          <a href={contact.emailHref} className="transition hover:text-copper">
            {contact.email}
          </a>
        </div>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-sm border border-white/14 bg-white/8 text-white transition hover:border-copper lg:hidden"
          aria-label={isMobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMobileOpen((value) => !value)}
        >
          {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      <AnimatePresence>
        {isMobileOpen ? (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={menuTransition}
            className="border-t border-white/10 bg-ocean-2/96 text-white shadow-glass backdrop-blur-xl lg:hidden"
          >
            <Container className="grid gap-6 py-6">
              <nav className="grid gap-2" aria-label="Navegación móvil">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="rounded-sm border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-semibold text-white/84 transition hover:border-copper hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-copper">
                  Productos
                </p>
                <div className="grid gap-2">
                  {products.map((product) => (
                    <a
                      key={product.name}
                      href={product.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="rounded-sm border border-white/10 px-4 py-3 text-sm text-white/76 transition hover:border-copper hover:text-white"
                    >
                      {product.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="grid gap-3 border-t border-white/10 pt-5 text-sm text-white/72">
                <a href={contact.phoneHref} className="flex items-center gap-3 transition hover:text-white">
                  <Phone size={17} className="text-copper" />
                  {contact.phone}
                </a>
                <a href={contact.emailHref} className="flex items-center gap-3 transition hover:text-white">
                  <Mail size={17} className="text-copper" />
                  {contact.email}
                </a>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
