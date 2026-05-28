import type { Metadata } from "next";
import "./globals.css";
import { homeContent } from "@/data/content";

export const metadata: Metadata = {
  title: "DACAT S.A. | Soluciones en tubería de cobre",
  description: homeContent.companyParagraphs[0],
  metadataBase: new URL("https://www.dacat-sa.com"),
  openGraph: {
    title: "DACAT S.A. | Soluciones en tubería de cobre",
    description: homeContent.companyParagraphs[0],
    url: "https://www.dacat-sa.com",
    siteName: "DACAT S.A.",
    images: [
      {
        url: "/images/dacat/hero-dacat.webp",
        width: 1200,
        height: 800,
        alt: "Tuberías de cobre DACAT para soluciones profesionales",
      },
    ],
    locale: "es_PA",
    type: "website",
  },
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
