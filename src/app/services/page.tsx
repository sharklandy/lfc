import type { Metadata } from 'next';
import SectionTitle from '@/components/SectionTitle';
import Link from 'next/link';
import {
  Layers, Home, Shield, Building2, Wrench, PaintBucket,
  ArrowRight, CheckCircle2, Phone
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nos savoir-faire',
  description: "Découvrez nos services : pose de cloisons, aménagement intérieur, isolation, faux plafonds, rénovation. LFC Cloison, expert du second œuvre.",
};

const services = [
  {
    id: 'cloisons',
    icon: Layers,
    title: 'Pose de cloisons',
    subtitle: 'Séparation et structuration de vos espaces',
    description: "La pose de cloisons est notre cœur de métier. Nous intervenons sur tous types de cloisons pour créer, séparer et structurer vos espaces intérieurs selon vos besoins.",
    details: [
      'Cloisons sèches sur ossature métallique (plaques de plâtre)',
      'Cloisons alvéolaires pour séparations légères',
      'Cloisons techniques et coupe-feu (EI 30 à EI 120)',
      'Cloisons acoustiques haute performance',
      'Cloisons semi-humides pour sanitaires et cuisines',
      'Doublages et habillages muraux',
    ],
    advantages: [
      'Rapidité d\'exécution',
      'Performances acoustiques et thermiques',
      'Adaptabilité à toutes les configurations',
      'Finitions soignées et durables',
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=500&fit=crop',
  },
  {
    id: 'amenagement',
    icon: Home,
    title: 'Aménagement intérieur',
    subtitle: 'Conception et réalisation d\'espaces sur mesure',
    description: "Nous concevons et réalisons l'aménagement complet de vos espaces intérieurs : bureaux, commerces, logements. Du plan à la livraison, nous gérons votre projet de A à Z.",
    details: [
      'Aménagement de bureaux et espaces de travail',
      'Création d\'open spaces et salles de réunion',
      'Aménagement de commerces et boutiques',
      'Réaménagement de logements',
      'Création de rangements et placards sur mesure',
      'Coordination tous corps d\'état',
    ],
    advantages: [
      'Interlocuteur unique',
      'Solution clé en main',
      'Respect du budget et des délais',
      'Personnalisation totale',
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop',
  },
  {
    id: 'isolation',
    icon: Shield,
    title: 'Isolation thermique & acoustique',
    subtitle: 'Confort et performance énergétique',
    description: "L'isolation est un enjeu majeur pour le confort et les économies d'énergie. Nous proposons des solutions d'isolation thermique et acoustique adaptées à chaque configuration, conformes aux normes RT 2020.",
    details: [
      'Isolation thermique par l\'intérieur (ITI)',
      'Isolation acoustique des murs et planchers',
      'Isolation des combles et sous-toiture',
      'Traitement des ponts thermiques',
      'Mise en œuvre de pare-vapeur et frein-vapeur',
      'Solutions conformes RT 2020 / RE 2020',
    ],
    advantages: [
      'Certification RGE',
      'Éligibilité aux aides (MaPrimeRénov\', CEE)',
      'Réduction significative des factures énergétiques',
      'Amélioration du confort acoustique',
    ],
    image: 'https://images.unsplash.com/photo-1607400201515-c2c41c07d307?w=800&h=500&fit=crop',
  },
  {
    id: 'faux-plafonds',
    icon: Building2,
    title: 'Faux plafonds',
    subtitle: 'Solutions techniques et esthétiques',
    description: "Nos équipes réalisent tous types de faux plafonds : suspendus, tendus, acoustiques ou décoratifs. Le faux plafond permet de masquer les réseaux techniques tout en améliorant l'esthétique et le confort acoustique de vos espaces.",
    details: [
      'Plafonds suspendus sur ossature apparente ou cachée',
      'Plafonds en dalles minérales et métalliques',
      'Plafonds acoustiques haute absorption',
      'Plafonds décoratifs en bois et matériaux composites',
      'Plafonds coupe-feu et pare-flamme',
      'Intégration éclairage, ventilation et sprinkler',
    ],
    advantages: [
      'Amélioration de l\'acoustique',
      'Intégration discrète des réseaux',
      'Large choix de finitions',
      'Solutions conformes aux normes ERP',
    ],
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=500&fit=crop',
  },
  {
    id: 'renovation',
    icon: Wrench,
    title: 'Travaux de rénovation',
    subtitle: 'Rénovation partielle ou complète',
    description: "Que ce soit pour moderniser un bureau, rénover un appartement ou restructurer un local commercial, nous prenons en charge l'ensemble de vos travaux de rénovation intérieure.",
    details: [
      'Démolition et dépose de l\'existant',
      'Restructuration d\'espaces et modification de plans',
      'Mise aux normes accessibilité PMR',
      'Réfection des sols (parquet, carrelage, PVC)',
      'Peinture et revêtements muraux',
      'Coordination avec les autres corps de métier',
    ],
    advantages: [
      'Prise en charge globale du chantier',
      'Gestion des déchets et recyclage',
      'Intervention en site occupé possible',
      'Planning optimisé pour limiter les nuisances',
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop',
  },
  {
    id: 'pro-particuliers',
    icon: PaintBucket,
    title: 'Professionnels & Particuliers',
    subtitle: 'Des solutions pour tous vos projets',
    description: "LFC Cloison intervient aussi bien auprès des professionnels (bureaux, commerces, ERP, industrie) que des particuliers (appartements, maisons, lofts). Quel que soit votre projet, nous avons la solution adaptée.",
    details: [
      'Aménagement de bureaux et locaux professionnels',
      'Rénovation d\'appartements et maisons',
      'Aménagement de locaux commerciaux',
      'Travaux en ERP (restaurants, hôtels, cliniques)',
      'Transformation de lofts et espaces atypiques',
      'Mise en conformité et mise aux normes',
    ],
    advantages: [
      'Devis gratuit et détaillé',
      'Conseil et accompagnement personnalisé',
      'Garantie décennale',
      'Assurance responsabilité civile professionnelle',
    ],
    image: 'https://images.unsplash.com/photo-1574359411659-15573a27fd0c?w=800&h=500&fit=crop',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=600&fit=crop)' }}
        >
          <div className="absolute inset-0 bg-primary-dark/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Nos savoir-faire</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Des compétences complètes pour tous vos projets d&apos;aménagement intérieur et de rénovation
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <div key={service.id} id={service.id} className="scroll-mt-24">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:direction-rtl' : ''}`}>
                    {/* Image */}
                    <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                      <div
                        className="rounded-2xl overflow-hidden shadow-xl aspect-[16/10] bg-cover bg-center"
                        style={{ backgroundImage: `url(${service.image})` }}
                      />
                    </div>

                    {/* Content */}
                    <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                          <Icon size={24} className="text-accent" />
                        </div>
                        <span className="text-sm font-semibold text-accent uppercase tracking-wider">{service.subtitle}</span>
                      </div>

                      <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                      <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                      <div className="mb-6">
                        <h3 className="font-semibold text-gray-900 mb-3">Ce que nous proposons :</h3>
                        <ul className="space-y-2">
                          {service.details.map((detail) => (
                            <li key={detail} className="flex items-start gap-2">
                              <CheckCircle2 size={16} className="text-accent mt-1 shrink-0" />
                              <span className="text-gray-600 text-sm">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6 mb-6">
                        <h3 className="font-semibold text-gray-900 mb-3">Vos avantages :</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {service.advantages.map((advantage) => (
                            <div key={advantage} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                              <span className="text-gray-700 text-sm font-medium">{advantage}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Link
                        href="/devis"
                        className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                      >
                        Demander un devis
                        <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Un projet en tête ?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Décrivez-nous votre projet et recevez un devis gratuit et personnalisé sous 48 heures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/devis"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg"
            >
              Demander un devis gratuit
              <ArrowRight size={20} />
            </Link>
            <a
              href="tel:+33123456789"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200"
            >
              <Phone size={20} />
              01 23 45 67 89
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
