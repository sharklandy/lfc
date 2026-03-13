'use client';

import { useState, type FormEvent } from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
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
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=600&fit=crop)' }}
        >
          <div className="absolute inset-0 bg-primary-dark/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contactez-nous</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Une question, un projet ? N&apos;hésitez pas à nous contacter
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Nos coordonnées</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Adresse</h3>
                    <p className="text-gray-600 text-sm">12 Rue des Bâtisseurs<br />75012 Paris, France</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Téléphone</h3>
                    <a href="tel:+33123456789" className="text-gray-600 text-sm hover:text-primary transition-colors">01 23 45 67 89</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:contact@lfc-cloison.fr" className="text-gray-600 text-sm hover:text-primary transition-colors">contact@lfc-cloison.fr</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Horaires</h3>
                    <div className="text-gray-600 text-sm space-y-1">
                      <p>Lundi - Vendredi : 7h30 - 18h00</p>
                      <p>Samedi : 8h00 - 12h00</p>
                      <p>Dimanche : Fermé</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.470421754995!2d2.3792160!3d48.8487420!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6720e97d0a0e5%3A0x1!2sParis%2012e!5e0!3m2!1sfr!2sfr!4v1"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation LFC Cloison"
                />
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Envoyez-nous un message</h2>
                <p className="text-gray-600 mb-8">Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.</p>

                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={32} className="text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Message envoyé !</h3>
                    <p className="text-gray-600 max-w-md mx-auto">
                      Merci pour votre message. Notre équipe vous répondra dans un délai de 24 à 48 heures ouvrées.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Nom complet <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                          placeholder="Jean Dupont"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                          placeholder="jean.dupont@email.fr"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                          placeholder="06 12 34 56 78"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Sujet <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white"
                        >
                          <option value="">Sélectionnez un sujet</option>
                          <option value="devis">Demande de devis</option>
                          <option value="info">Demande d&apos;information</option>
                          <option value="partenariat">Partenariat</option>
                          <option value="recrutement">Recrutement</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-vertical"
                        placeholder="Décrivez votre projet ou votre demande..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      <Send size={18} />
                      Envoyer le message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
