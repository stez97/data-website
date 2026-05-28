import type { Metadata } from "next";
import "./globals.css";
import { homeContent } from "@/data/content";

export const metadata: Metadata = {
  title: "DACAT s.a. | Descubre el futuro de la tubería de cobre",
  description: homeContent.companyParagraphs[0],
  metadataBase: new URL("https://www.dacat-sa.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
