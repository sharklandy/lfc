import type { Metadata } from 'next';
import SectionTitle from '@/components/SectionTitle';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Target, Heart, Clock, Award, Users, Shield, TrendingUp, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'À propos',
  description: "Découvrez l'histoire de LFC Cloison, nos valeurs et notre équipe. Plus de 15 ans d'expérience en aménagement intérieur en Île-de-France.",
};

const values = [
  {
    icon: Award,
    title: 'Qualité',
    description: "Nous utilisons les meilleurs matériaux et techniques pour garantir des finitions irréprochables et une durabilité optimale de nos réalisations.",
  },
  {
    icon: Clock,
    title: 'Respect des délais',
    description: "Chaque projet est planifié avec rigueur. Nous nous engageons sur des délais réalistes et les respectons, même sur les chantiers les plus complexes.",
  },
  {
    icon: Heart,
    title: 'Engagement client',
    description: "Votre satisfaction est notre priorité. Nous vous accompagnons de A à Z, avec un interlocuteur dédié et une communication transparente.",
  },
  {
    icon: Shield,
    title: 'Sécurité',
    description: "La sécurité sur nos chantiers est non négociable. Nos équipes sont formées et respectent scrupuleusement les normes en vigueur.",
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: "Nous investissons continuellement dans la formation de nos équipes et adoptons les techniques les plus avancées du secteur.",
  },
  {
    icon: Users,
    title: 'Esprit d\'équipe',
    description: "Notre force réside dans la cohésion de nos équipes. Chaque collaborateur est valorisé et contribue au succès collectif.",
  },
];

const milestones = [
  { year: '2009', event: "Création de LFC Cloison par Laurent Fontaine à Paris" },
  { year: '2012', event: "Obtention de la certification Qualibat et premiers grands chantiers tertiaires" },
  { year: '2015', event: "Expansion de l'équipe à 25 collaborateurs et ouverture du dépôt logistique" },
  { year: '2018', event: "Certification RGE et développement de l'activité isolation" },
  { year: '2021', event: "50 collaborateurs et lancement de la division grands projets" },
  { year: '2024', event: "500e projet réalisé et extension de la zone d'intervention en Île-de-France" },
];

export default function AProposPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">À propos de LFC Cloison</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Plus de 15 ans d&apos;expertise au service de vos projets d&apos;aménagement intérieur
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle
                subtitle="Notre histoire"
                title="Une aventure humaine au cœur du bâtiment"
                center={false}
              />
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong>LFC Cloison</strong> a été fondée en 2009 par <strong>Laurent Fontaine</strong>,
                  artisan passionné par le second œuvre et l&apos;aménagement intérieur. Après plus de 10 ans
                  d&apos;expérience en tant que chef d&apos;équipe dans de grandes entreprises du BTP, il décide
                  de créer sa propre structure pour offrir un service de proximité et de qualité.
                </p>
                <p>
                  Ce qui a commencé comme une petite équipe de 5 personnes intervenant principalement
                  sur des chantiers résidentiels à Paris s&apos;est rapidement développé. Grâce à la
                  rigueur de son travail et la satisfaction de ses clients, LFC Cloison a su gagner
                  la confiance de maîtres d&apos;ouvrage, architectes et promoteurs immobiliers.
                </p>
                <p>
                  Aujourd&apos;hui, avec plus de <strong>50 collaborateurs</strong> et <strong>500 projets réalisés</strong>,
                  LFC Cloison est devenue une référence en matière de pose de cloisons, isolation et
                  aménagement intérieur en Île-de-France. Notre succès repose sur des valeurs simples :
                  qualité du travail, respect des engagements et satisfaction client.
                </p>
              </div>
            </div>
            <div className="relative">
              <div
                className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-cover bg-center"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1574359411659-15573a27fd0c?w=800&h=600&fit=crop)' }}
              />
              <div className="absolute -bottom-4 -left-4 bg-primary text-white rounded-xl p-4 shadow-lg hidden md:flex items-center gap-3">
                <MapPin size={24} className="text-accent" />
                <div>
                  <div className="font-bold">Île-de-France</div>
                  <div className="text-sm text-blue-200">Zone d&apos;intervention</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            subtitle="Nos valeurs"
            title="Les principes qui guident notre action"
            description="Chez LFC Cloison, nos valeurs ne sont pas de simples mots. Elles se traduisent au quotidien dans notre façon de travailler et de servir nos clients."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="bg-white rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon size={28} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle
            subtitle="Notre parcours"
            title="Les étapes clés de notre développement"
          />
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 hidden md:block ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 inline-block">
                      <p className="text-gray-600">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg shrink-0">
                    <span className="text-white font-bold text-sm">{milestone.year}</span>
                  </div>
                  <div className="flex-1">
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 md:hidden">
                      <p className="text-gray-600">{milestone.event}</p>
                    </div>
                    <div className="hidden md:block" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key figures */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            subtitle="En chiffres"
            title="LFC Cloison en quelques chiffres"
            light
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '2009', label: 'Année de création' },
              { value: '50+', label: 'Collaborateurs' },
              { value: '500+', label: 'Projets livrés' },
              { value: '15+', label: "Années d'expérience" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Prêt à concrétiser votre projet ?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet. Nos équipes se feront un plaisir de vous accompagner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/devis"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Demander un devis
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
