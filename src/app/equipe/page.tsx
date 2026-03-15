import type { Metadata } from 'next';
import SectionTitle from '@/components/SectionTitle';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../../keystatic.config';

export const metadata: Metadata = {
  title: 'Notre équipe',
  description: "Rencontrez l'équipe LFC Cloison : des professionnels passionnés et expérimentés au service de vos projets d'aménagement intérieur.",
};

const reader = createReader(process.cwd(), keystaticConfig);

export default async function EquipePage() {
  const entries = await reader.collections.equipe.all();
  const team = entries.map(({ slug, entry }) => ({
    slug,
    name: entry.name as string,
    role: entry.role,
    bio: entry.bio,
    email: entry.email,
    phone: entry.phone,
    image: entry.image,
  }));
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
              <div key={member.slug} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
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
