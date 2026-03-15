import Link from 'next/link';
import SectionTitle from '@/components/SectionTitle';
import {
  Shield, Clock, Award, Users, ChevronRight, Star, Phone,
  Layers, Building2, Wrench, Home,
  ArrowRight, CheckCircle2, Quote, PaintBucket
} from 'lucide-react';
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

const services = [
  {
    icon: Layers,
    title: 'Pose de cloisons',
    description: 'Cloisons sèches, semi-humides et techniques pour tous types de bâtiments.',
  },
  {
    icon: Home,
    title: 'Aménagement intérieur',
    description: 'Conception et réalisation complète de vos espaces intérieurs.',
  },
  {
    icon: Shield,
    title: 'Isolation',
    description: 'Isolation thermique et acoustique performante pour votre confort.',
  },
  {
    icon: Building2,
    title: 'Faux plafonds',
    description: 'Plafonds suspendus, acoustiques et décoratifs sur mesure.',
  },
  {
    icon: Wrench,
    title: 'Rénovation',
    description: 'Travaux de rénovation complète pour transformer vos espaces.',
  },
  {
    icon: PaintBucket,
    title: 'Finitions',
    description: 'Enduits, peintures et finitions de haute qualité.',
  },
];

const reader = createReader(process.cwd(), keystaticConfig);

export default async function HomePage() {
  const [settings, allRealisations, allTemoignages] = await Promise.all([
    reader.singletons.parametres.read(),
    reader.collections.realisations.all(),
    reader.collections.temoignages.all(),
  ]);

  const stats = settings?.stats ?? [];
  const partners = settings?.partners ?? [];

  const realisations = allRealisations.slice(0, 3).map(({ slug, entry }) => ({
    slug,
    title: entry.title as string,
    category: entry.category,
    year: entry.year,
    image: entry.afterImage,
  }));

  const testimonials = allTemoignages.map(({ slug, entry }) => ({
    slug,
    name: entry.name as string,
    role: entry.role,
    content: entry.content,
    rating: entry.rating ?? 5,
  }));
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-accent-light text-sm font-medium">Plus de 15 ans d&apos;expertise</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Votre expert en{' '}
              <span className="text-accent">cloisons</span> et{' '}
              <span className="text-accent">aménagement intérieur</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
              De la conception à la réalisation, LFC Cloison vous accompagne dans tous vos projets
              d&apos;aménagement intérieur avec professionnalisme et savoir-faire.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/devis"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Demander un devis gratuit
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/realisations"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 border border-white/20"
              >
                Voir nos réalisations
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle2 size={18} className="text-accent" />
                <span className="text-sm">Devis gratuit sous 48h</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle2 size={18} className="text-accent" />
                <span className="text-sm">Garantie décennale</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle2 size={18} className="text-accent" />
                <span className="text-sm">Qualibat RGE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-blue-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            subtitle="Nos expertises"
            title="Des solutions complètes pour vos projets"
            description="De la pose de cloisons à la rénovation complète, nous maîtrisons l'ensemble des corps de métier nécessaires à votre aménagement intérieur."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                    <Icon size={28} className="text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 text-primary font-medium text-sm hover:text-accent transition-colors"
                  >
                    En savoir plus
                    <ChevronRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              Découvrir tous nos services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div
                className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop)',
                }}
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-white rounded-2xl p-6 shadow-xl hidden md:block">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">années<br />d&apos;expérience</div>
              </div>
            </div>

            <div>
              <SectionTitle
                subtitle="Qui sommes-nous"
                title="Une entreprise à taille humaine, un savoir-faire reconnu"
                center={false}
              />
              <p className="text-gray-600 leading-relaxed mb-6">
                Fondée en 2009, <strong>LFC Cloison</strong> s&apos;est imposée comme un acteur incontournable
                de l&apos;aménagement intérieur en Île-de-France. Notre expertise couvre l&apos;ensemble
                des travaux de second œuvre : cloisons, isolation, faux plafonds et finitions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Notre force réside dans la qualité de nos équipes et notre capacité à mener
                des projets complexes dans le respect des délais et des budgets.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  'Qualité garantie',
                  'Respect des délais',
                  'Équipe qualifiée',
                  'Prix compétitifs',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-accent shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/a-propos"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                En savoir plus sur LFC Cloison
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            subtitle="Portfolio"
            title="Nos dernières réalisations"
            description="Découvrez une sélection de nos projets les plus récents, témoins de notre savoir-faire et de notre engagement qualité."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {realisations.map((project) => (
              <div
                key={project.slug}
                className="group relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block bg-accent/90 text-white text-xs font-medium px-3 py-1 rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.year}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/realisations"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              Voir toutes nos réalisations
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            subtitle="Témoignages"
            title="Ce que disent nos clients"
            description="La satisfaction de nos clients est notre meilleure carte de visite."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.slug}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <Star key={i} size={18} className="fill-accent text-accent" />
                  ))}
                </div>
                <Quote size={24} className="text-gray-200 mb-4" />
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Nos partenaires et fournisseurs</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partners.map((partner) => (
              <div
                key={partner}
                className="text-2xl font-bold text-gray-300 hover:text-gray-500 transition-colors cursor-default"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
