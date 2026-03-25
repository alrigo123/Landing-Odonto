import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "OdontClinic - Tu Sonrisa, Nuestra Prioridad",
  description:
    "Clinica dental profesional con mas de 15 anos de experiencia. Limpieza dental, blanqueamiento, ortodoncia, implantes, endodoncia y odontologia estetica.",
  keywords:
    "dentista, clinica dental, odontologia, blanqueamiento, ortodoncia, implantes, limpieza dental",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
