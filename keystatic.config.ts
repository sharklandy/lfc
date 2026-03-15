import { config, collection, singleton, fields } from '@keystatic/core';

export default config({
  storage:
    process.env.NODE_ENV === 'development' || !process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_CLIENT_ID
      ? { kind: 'local' }
      : {
          kind: 'github',
          repo: {
            owner: 'sharklandy',
            name: 'lfc',
          },
        },

  ui: {
    brand: { name: 'LFC Cloison — Admin' },
  },

  collections: {
    realisations: collection({
      label: 'Réalisations',
      slugField: 'title',
      path: 'content/realisations/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Titre du projet' } }),
        category: fields.text({
          label: 'Catégorie',
          description: 'Ex: Aménagement tertiaire, Résidentiel haut de gamme',
        }),
        location: fields.text({
          label: 'Lieu',
          description: 'Ex: Paris 11e',
        }),
        year: fields.text({ label: 'Année', description: 'Ex: 2025' }),
        surface: fields.text({
          label: 'Surface',
          description: 'Ex: 450 m²',
        }),
        duration: fields.text({
          label: 'Durée des travaux',
          description: 'Ex: 8 semaines',
        }),
        description: fields.text({
          label: 'Description du projet',
          multiline: true,
        }),
        beforeImage: fields.text({
          label: 'Image Avant (URL)',
          description: 'URL complète vers la photo avant travaux',
        }),
        afterImage: fields.text({
          label: 'Image Après (URL)',
          description: 'URL complète vers la photo après travaux',
        }),
      },
    }),

    equipe: collection({
      label: 'Équipe',
      slugField: 'name',
      path: 'content/equipe/*',
      format: { data: 'json' },
      schema: {
        name: fields.slug({ name: { label: 'Nom complet' } }),
        role: fields.text({ label: 'Poste / Fonction' }),
        bio: fields.text({
          label: 'Biographie',
          multiline: true,
        }),
        email: fields.text({ label: 'Adresse email' }),
        phone: fields.text({ label: 'Téléphone' }),
        image: fields.text({
          label: 'Photo (URL)',
          description: 'URL complète vers la photo de profil',
        }),
      },
    }),

    temoignages: collection({
      label: 'Témoignages',
      slugField: 'name',
      path: 'content/temoignages/*',
      format: { data: 'json' },
      schema: {
        name: fields.slug({ name: { label: 'Nom du client' } }),
        role: fields.text({
          label: 'Rôle / Entreprise',
          description: 'Ex: Directrice, Clinique Saint-Louis',
        }),
        content: fields.text({
          label: 'Témoignage',
          multiline: true,
        }),
        rating: fields.integer({
          label: 'Note (1 à 5)',
          validation: { min: 1, max: 5 },
          defaultValue: 5,
        }),
      },
    }),
  },

  singletons: {
    parametres: singleton({
      label: 'Paramètres du site',
      path: 'content/settings/general',
      format: { data: 'json' },
      schema: {
        phone: fields.text({ label: 'Téléphone principal' }),
        email: fields.text({ label: 'Email de contact' }),
        address: fields.text({ label: 'Adresse postale' }),
        stats: fields.array(
          fields.object({
            value: fields.text({ label: 'Valeur affichée', description: 'Ex: 500+' }),
            label: fields.text({ label: 'Libellé', description: 'Ex: Projets réalisés' }),
          }),
          {
            label: 'Statistiques (bandeau chiffres clés)',
            itemLabel: (props) => props.fields.label.value || 'Statistique',
          }
        ),
        partners: fields.array(
          fields.text({ label: 'Nom du partenaire' }),
          {
            label: 'Partenaires / Fournisseurs',
            itemLabel: (props) => props.value || 'Partenaire',
          }
        ),
      },
    }),
  },
});
