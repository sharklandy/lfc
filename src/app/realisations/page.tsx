import type { Metadata } from 'next';
import SectionTitle from '@/components/SectionTitle';
import Link from 'next/link';
import { ArrowRight, MapPin, Calendar, Tag } from 'lucide-react';
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../../keystatic.config';

export const metadata: Metadata = {
  title: 'Nos réalisations',
  description: "Découvrez nos projets récents : aménagement de bureaux, rénovation d'appartements, isolation, faux plafonds. La preuve par l'image de notre savoir-faire.",
};

const reader = createReader(process.cwd(), keystaticConfig);

export default async function RealisationsPage() {
  const entries = await reader.collections.realisations.all();
  const projects = entries.map(({ slug, entry }) => ({
    slug,
    title: entry.title as string,
    category: entry.category,
    location: entry.location,
    year: entry.year,
    surface: entry.surface,
    duration: entry.duration,
    description: entry.description,
    before: entry.beforeImage,
    after: entry.afterImage,
  }));
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&h=600&fit=crop)' }}
        >
          <div className="absolute inset-0 bg-primary-dark/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Nos réalisations</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Découvrez une sélection de nos projets les plus emblématiques
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            subtitle="Portfolio"
            title="Des projets qui parlent d'eux-mêmes"
            description="Chaque projet est unique. Voici quelques-unes de nos réalisations récentes, de l'aménagement tertiaire à la rénovation résidentielle."
          />

          <div className="space-y-20">
            {projects.map((project, index) => (
              <div key={project.slug} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className={`grid grid-cols-1 lg:grid-cols-2`}>
                  {/* Images */}
                  <div className={`${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <div className="p-6 lg:p-8 space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Avant</p>
                          <div
                            className="rounded-xl aspect-[4/3] bg-cover bg-center shadow-sm"
                            style={{ backgroundImage: `url(${project.before})` }}
                          />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Après</p>
                          <div
                            className="rounded-xl aspect-[4/3] bg-cover bg-center shadow-sm ring-2 ring-accent/20"
                            style={{ backgroundImage: `url(${project.after})` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-6 lg:p-8 flex flex-col justify-center ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                    <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin size={16} className="text-accent" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar size={16} className="text-accent" />
                        <span>{project.year}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Tag size={16} className="text-accent" />
                        <span>{project.surface}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Tag size={16} className="text-accent" />
                        <span>{project.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Votre projet sera le prochain
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Faites confiance à notre savoir-faire pour donner vie à votre projet d&apos;aménagement intérieur.
          </p>
          <Link
            href="/devis"
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Demander un devis gratuit
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
