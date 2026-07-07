import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A-MATRX Micrograft | Dehydrated Placental Tissue Matrix Allograft",
  description:
    "A-MATRX Micrograft is a dehydrated placental tissue matrix allograft supplied in a ready-to-use format for surgical and wound management settings, consistent with Instructions for Use and clinician judgment."
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
