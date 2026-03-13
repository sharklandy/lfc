'use client';

import { useState, type FormEvent } from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Send, CheckCircle2, Shield, Clock, FileText } from 'lucide-react';

export default function DevisPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Demander un devis</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Gratuit, sans engagement et sous 48h. Décrivez-nous votre projet.
          </p>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: FileText, title: 'Devis gratuit', desc: 'Estimation détaillée sans engagement de votre part' },
              { icon: Clock, title: 'Réponse sous 48h', desc: 'Notre équipe vous recontacte rapidement' },
              { icon: Shield, title: 'Garantie décennale', desc: 'Tous nos travaux sont couverts et assurés' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          {submitted ? (
            <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} className="text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Demande envoyée !</h2>
              <p className="text-gray-600 max-w-lg mx-auto mb-2">
                Merci pour votre demande de devis. Notre équipe l&apos;étudie attentivement
                et vous recontactera sous 48 heures ouvrées.
              </p>
              <p className="text-sm text-gray-400">
                Un email de confirmation a été envoyé à votre adresse.
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Décrivez votre projet</h2>
                <p className="text-gray-600">Plus vous êtes précis, plus notre devis sera adapté à vos besoins.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal info */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                    Vos coordonnées
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Nom <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text" id="lastName" name="lastName" required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                        placeholder="Dupont"
                      />
                    </div>
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        Prénom <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text" id="firstName" name="firstName" required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                        placeholder="Jean"
                      />
                    </div>
                    <div>
                      <label htmlFor="devisEmail" className="block text-sm font-medium text-gray-700 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email" id="devisEmail" name="email" required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                        placeholder="jean.dupont@email.fr"
                      />
                    </div>
                    <div>
                      <label htmlFor="devisPhone" className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel" id="devisPhone" name="phone" required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Société (si professionnel)
                      </label>
                      <input
                        type="text" id="company" name="company"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                        placeholder="Nom de votre entreprise"
                      />
                    </div>
                  </div>
                </div>

                {/* Project info */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                    Votre projet
                  </h3>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                          Type de projet <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="projectType" name="projectType" required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white"
                        >
                          <option value="">Sélectionnez</option>
                          <option value="cloisons">Pose de cloisons</option>
                          <option value="amenagement">Aménagement intérieur</option>
                          <option value="isolation">Isolation</option>
                          <option value="faux-plafonds">Faux plafonds</option>
                          <option value="renovation">Rénovation</option>
                          <option value="multiple">Plusieurs prestations</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="clientType" className="block text-sm font-medium text-gray-700 mb-2">
                          Vous êtes <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="clientType" name="clientType" required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white"
                        >
                          <option value="">Sélectionnez</option>
                          <option value="particulier">Un particulier</option>
                          <option value="professionnel">Un professionnel</option>
                          <option value="architecte">Un architecte</option>
                          <option value="promoteur">Un promoteur</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="surface" className="block text-sm font-medium text-gray-700 mb-2">
                          Surface approximative (m²)
                        </label>
                        <input
                          type="text" id="surface" name="surface"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                          placeholder="ex: 150 m²"
                        />
                      </div>
                      <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                          Lieu du chantier
                        </label>
                        <input
                          type="text" id="location" name="location"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                          placeholder="Ville, code postal"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                        Délai souhaité
                      </label>
                      <select
                        id="timeline" name="timeline"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white"
                      >
                        <option value="">Sélectionnez</option>
                        <option value="urgent">Urgent (sous 2 semaines)</option>
                        <option value="1mois">Sous 1 mois</option>
                        <option value="3mois">Sous 3 mois</option>
                        <option value="6mois">Sous 6 mois</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                        Description du projet <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="description" name="description" required rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-vertical"
                        placeholder="Décrivez votre projet en détail : nature des travaux, contraintes éventuelles, accès au chantier, etc."
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <Send size={20} />
                    Envoyer ma demande de devis
                  </button>
                  <p className="text-xs text-gray-400 mt-3">
                    En soumettant ce formulaire, vous acceptez que vos données soient traitées conformément à notre politique de confidentialité.
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
