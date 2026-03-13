import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: "Contactez LFC Cloison pour vos projets d'aménagement intérieur. Formulaire de contact, téléphone, email et adresse à Paris.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
