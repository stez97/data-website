import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DACAT S.A. | Tubería de cobre para HVAC/R",
  description:
    "DACAT S.A. desarrolla soluciones profesionales en tubería de cobre para HVAC/R, refrigeración, aire acondicionado, agua sanitaria y gases médicos.",
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
