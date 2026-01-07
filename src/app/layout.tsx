import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Neuraz | Transformación Digital Experiencial",
  description: "Convertimos clientes en jugadores. Sistemas a medida que combinan Tecnología, Gamificación, IA y Automatización.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${manrope.variable} antialiased bg-background text-foreground font-sans`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
