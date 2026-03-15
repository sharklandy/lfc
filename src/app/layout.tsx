import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientShell from "@/components/ClientShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "LFC Cloison | Expert en cloisons et aménagement intérieur",
    template: "%s | LFC Cloison",
  },
  description:
    "LFC Cloison, votre spécialiste en pose de cloisons, aménagement intérieur, isolation et faux plafonds. Plus de 15 ans d'expérience au service des professionnels et particuliers en Île-de-France.",
  keywords: [
    "cloison",
    "aménagement intérieur",
    "isolation",
    "faux plafond",
    "BTP",
    "rénovation",
    "Paris",
    "Île-de-France",
    "LFC Cloison",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "LFC Cloison",
    title: "LFC Cloison | Expert en cloisons et aménagement intérieur",
    description:
      "Spécialiste en pose de cloisons, aménagement intérieur, isolation et faux plafonds depuis plus de 15 ans.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
