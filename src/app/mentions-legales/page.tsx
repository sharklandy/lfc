import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site LFC Cloison. Informations sur l\'éditeur, l\'hébergeur et les conditions d\'utilisation.',
};

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary-dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Mentions légales</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-gray max-w-none">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Éditeur du site</h2>
              <div className="bg-gray-50 rounded-xl p-6 text-gray-600 space-y-2">
                <p><strong>Raison sociale :</strong> LFC Cloison SARL</p>
                <p><strong>Siège social :</strong> 12 Rue des Bâtisseurs, 75012 Paris, France</p>
                <p><strong>SIRET :</strong> 123 456 789 00012</p>
                <p><strong>RCS :</strong> Paris B 123 456 789</p>
                <p><strong>Capital social :</strong> 50 000 €</p>
                <p><strong>Téléphone :</strong> 01 23 45 67 89</p>
                <p><strong>Email :</strong> contact@lfc-cloison.fr</p>
                <p><strong>Directeur de la publication :</strong> Laurent Fontaine, Gérant</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Hébergeur</h2>
              <div className="bg-gray-50 rounded-xl p-6 text-gray-600 space-y-2">
                <p><strong>Raison sociale :</strong> Vercel Inc.</p>
                <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
                <p><strong>Site web :</strong> vercel.com</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Propriété intellectuelle</h2>
              <p className="text-gray-600 leading-relaxed">
                L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.) est la propriété
                exclusive de LFC Cloison SARL ou de ses partenaires. Toute reproduction, représentation, modification,
                publication, adaptation ou exploitation de tout ou partie des éléments du site est interdite sans
                l&apos;autorisation écrite préalable de LFC Cloison.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Limitation de responsabilité</h2>
              <p className="text-gray-600 leading-relaxed">
                LFC Cloison s&apos;efforce de fournir des informations exactes et à jour. Toutefois, la société ne
                saurait être tenue responsable des erreurs, omissions ou résultats qui pourraient être obtenus par
                un mauvais usage de ces informations. Les informations présentes sur ce site sont données à titre
                indicatif et sont susceptibles d&apos;évoluer.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                Ce site utilise des cookies pour améliorer l&apos;expérience de navigation. En continuant à naviguer
                sur ce site, vous acceptez l&apos;utilisation de cookies conformément à notre politique de
                confidentialité.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Droit applicable</h2>
              <p className="text-gray-600 leading-relaxed">
                Le présent site est soumis au droit français. En cas de litige, les tribunaux de Paris seront
                seuls compétents.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
