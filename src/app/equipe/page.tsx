import type { Metadata } from 'next';
import SectionTitle from '@/components/SectionTitle';
import { Mail, Phone, Linkedin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Notre équipe',
  description: "Rencontrez l'équipe LFC Cloison : des professionnels passionnés et expérimentés au service de vos projets d'aménagement intérieur.",
};

const team = [
  {
    name: 'Laurent Fontaine',
    role: 'Fondateur & Gérant',
    bio: "Fort de plus de 25 ans d'expérience dans le BTP, Laurent a fondé LFC Cloison en 2009 avec l'ambition de créer une entreprise alliant savoir-faire artisanal et exigences du marché professionnel. Il supervise personnellement les projets stratégiques et veille au respect des standards de qualité.",
    email: 'l.fontaine@lfc-cloison.fr',
    phone: '01 23 45 67 89',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Caroline Mercier',
    role: 'Directrice Administrative et Financière',
    bio: "Caroline gère l'ensemble des fonctions administratives et financières de l'entreprise depuis 2012. Son expertise en gestion d'entreprise du BTP permet à LFC Cloison de maintenir une croissance saine et maîtrisée tout en garantissant la satisfaction de nos partenaires financiers.",
    email: 'c.mercier@lfc-cloison.fr',
    phone: '01 23 45 67 90',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Sébastien Moreau',
    role: 'Directeur Technique',
    bio: "Ingénieur de formation, Sébastien apporte son expertise technique à tous nos projets depuis 2014. Il coordonne les études techniques, supervise les méthodes de mise en œuvre et forme nos équipes aux dernières innovations du secteur.",
    email: 's.moreau@lfc-cloison.fr',
    phone: '01 23 45 67 91',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Karim Benali',
    role: 'Responsable de Chantier Senior',
    bio: "Avec 18 ans d'expérience sur les chantiers, Karim est notre chef d'orchestre sur le terrain. Il gère les équipes, coordonne les interventions et s'assure que chaque chantier respecte les normes de qualité et de sécurité les plus strictes.",
    email: 'k.benali@lfc-cloison.fr',
    phone: '01 23 45 67 92',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Marie Dupont',
    role: 'Chargée d\'Affaires',
    bio: "Marie est l'interlocutrice privilégiée de nos clients. Elle suit chaque projet de la prise de contact à la livraison, garantissant une communication fluide et transparente. Sa connaissance du marché et son sens du service font d'elle un atout précieux.",
    email: 'm.dupont@lfc-cloison.fr',
    phone: '01 23 45 67 93',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Thomas Legrand',
    role: 'Responsable Études & Métrés',
    bio: "Thomas réalise les études préalables de faisabilité, les métrés et les chiffrages. Son œil de spécialiste permet d'anticiper les contraintes techniques et d'optimiser les coûts pour proposer les meilleures solutions à nos clients.",
    email: 't.legrand@lfc-cloison.fr',
    phone: '01 23 45 67 94',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face',
  },
];

export default function EquipePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=600&fit=crop)' }}
        >
          <div className="absolute inset-0 bg-primary-dark/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Notre équipe</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Des professionnels passionnés et expérimentés au service de vos projets
          </p>
        </div>
      </section>

      {/* Team Intro */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            subtitle="L'humain avant tout"
            title="Rencontrez les visages de LFC Cloison"
            description="Notre équipe est composée de professionnels qualifiés et passionnés. C'est grâce à leur expertise et leur dévouement que nous réalisons des projets d'exception au quotidien."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                {/* Photo */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${member.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-accent-light font-medium text-sm">{member.role}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                  <div className="space-y-2 pt-4 border-t border-gray-100">
                    <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors">
                      <Mail size={14} />
                      <span>{member.email}</span>
                    </a>
                    <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors">
                      <Phone size={14} />
                      <span>{member.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionTitle
            subtitle="Carrières"
            title="Rejoignez notre équipe"
            description="LFC Cloison est en pleine croissance et recherche des talents passionnés par le BTP. Si vous partagez nos valeurs de qualité et d'excellence, nous serions ravis de vous accueillir."
          />
          <a
            href="mailto:recrutement@lfc-cloison.fr"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg"
          >
            <Mail size={20} />
            Envoyez votre candidature
          </a>
        </div>
      </section>
    </>
  );
}
