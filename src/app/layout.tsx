import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
  title: "Cyneris | Cybersécurité, Data Science & Secure Dev - Toulon",
  description: "Cabinet IT expert : Pentest, Data Science, Secure Dev. Audit gratuit. PME & ETI du Var.",
  icons: {
    icon: "/Logo/LogoCyneris.ico",
    shortcut: "/Logo/LogoCyneris.ico",
    apple: "/Logo/LogoCyneris.ico",
  },
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
        
        <CookieBanner />
      </body>
    </html>
  );
}