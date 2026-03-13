import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Instagram, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* CTA Band */}
      <div className="bg-gradient-to-r from-primary to-primary-light">
        <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Vous avez un projet ?</h3>
            <p className="text-blue-100 mt-2">Contactez-nous pour obtenir un devis gratuit et personnalisé.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/devis"
              className="bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl text-center"
            >
              Demander un devis
            </Link>
            <a
              href="tel:+33123456789"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 border border-white/20 text-center"
            >
              01 23 45 67 89
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">LFC</span>
              </div>
              <span className="text-xl font-bold text-white">LFC Cloison</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Spécialiste en cloisons, aménagement intérieur et isolation depuis plus de 15 ans.
              Nous accompagnons les professionnels et les particuliers dans tous leurs projets d&apos;aménagement.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Navigation</h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Accueil' },
                { href: '/a-propos', label: 'À propos' },
                { href: '/services', label: 'Nos savoir-faire' },
                { href: '/realisations', label: 'Réalisations' },
                { href: '/equipe', label: 'Équipe' },
                { href: '/contact', label: 'Contact' },
                { href: '/devis', label: 'Demander un devis' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-accent-light transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Nos services</h4>
            <ul className="space-y-3">
              {[
                'Pose de cloisons',
                'Aménagement intérieur',
                'Isolation thermique & acoustique',
                'Faux plafonds',
                'Travaux de rénovation',
                'Travaux professionnels',
              ].map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-gray-400 hover:text-accent-light transition-colors text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                <span className="text-sm">12 Rue des Bâtisseurs<br />75012 Paris, France</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <a href="tel:+33123456789" className="text-sm hover:text-accent-light transition-colors">01 23 45 67 89</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent shrink-0" />
                <a href="mailto:contact@lfc-cloison.fr" className="text-sm hover:text-accent-light transition-colors">contact@lfc-cloison.fr</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-accent mt-0.5 shrink-0" />
                <div className="text-sm">
                  <p>Lun - Ven : 7h30 - 18h00</p>
                  <p>Sam : 8h00 - 12h00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} LFC Cloison. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-gray-300 transition-colors">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="hover:text-gray-300 transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
