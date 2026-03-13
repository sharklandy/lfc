import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demander un devis',
  description: "Demandez un devis gratuit et sans engagement pour vos travaux de cloisons, aménagement intérieur, isolation et faux plafonds.",
};

export default function DevisLayout({ children }: { children: React.ReactNode }) {
  return children;
}
