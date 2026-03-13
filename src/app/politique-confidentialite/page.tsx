import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité de LFC Cloison. Informations sur la collecte et le traitement de vos données personnelles.',
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary-dark" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Politique de confidentialité</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Collecte des données personnelles</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                LFC Cloison collecte des données personnelles dans le cadre de l&apos;utilisation de son site internet,
                notamment via les formulaires de contact et de demande de devis. Les données collectées peuvent inclure :
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Nom de la société (le cas échéant)</li>
                <li>Détails relatifs à votre projet</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Finalité du traitement</h2>
              <p className="text-gray-600 leading-relaxed">
                Les données collectées sont utilisées exclusivement pour répondre à vos demandes, établir des devis,
                vous fournir nos services et, le cas échéant, vous tenir informé de nos actualités. Vos données ne
                sont jamais vendues ou cédées à des tiers à des fins commerciales.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Base légale</h2>
              <p className="text-gray-600 leading-relaxed">
                Le traitement de vos données personnelles est fondé sur votre consentement (envoi du formulaire)
                et/ou l&apos;exécution d&apos;un contrat (établissement d&apos;un devis, réalisation de prestations).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Durée de conservation</h2>
              <p className="text-gray-600 leading-relaxed">
                Vos données personnelles sont conservées pour une durée maximale de 3 ans à compter de votre
                dernier contact avec LFC Cloison, sauf obligation légale de conservation plus longue.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Vos droits</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Droit d&apos;accès à vos données personnelles</li>
                <li>Droit de rectification de vos données</li>
                <li>Droit à l&apos;effacement de vos données</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité de vos données</li>
                <li>Droit d&apos;opposition au traitement</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Pour exercer ces droits, vous pouvez nous contacter à l&apos;adresse : <strong>dpo@lfc-cloison.fr</strong>
                ou par courrier à : LFC Cloison, 12 Rue des Bâtisseurs, 75012 Paris.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Sécurité des données</h2>
              <p className="text-gray-600 leading-relaxed">
                LFC Cloison met en œuvre les mesures techniques et organisationnelles appropriées pour protéger
                vos données personnelles contre la destruction, la perte, l&apos;altération, la divulgation non
                autorisée ou l&apos;accès non autorisé.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                Ce site utilise des cookies techniques nécessaires au bon fonctionnement du site et des cookies
                analytiques pour mesurer l&apos;audience. Vous pouvez configurer votre navigateur pour refuser
                les cookies ou être alerté lorsqu&apos;un cookie est déposé.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact</h2>
              <p className="text-gray-600 leading-relaxed">
                Pour toute question relative à la protection de vos données personnelles, vous pouvez nous
                contacter à l&apos;adresse <strong>dpo@lfc-cloison.fr</strong> ou par téléphone au <strong>01 23 45 67 89</strong>.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-sm text-gray-500">
              <p>Dernière mise à jour : mars 2026</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
