import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Assurez-vous que le chemin d'importation correspond à votre structure de dossiers
import CookieBanner from "../components/layout/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Pensez à changer ces valeurs par vos informations réelles
  title: "Cyneris | Solutions IT",
  description: "Cyneris, votre partenaire informatique pour la sécurité et l'infrastructure de votre entreprise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        
        {/* Intégration du bandeau de cookies */}
        <CookieBanner />
      </body>
    </html>
  );
}