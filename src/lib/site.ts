// Données officielles de l'entreprise — ne rien ajouter qui ne soit fourni par le client.
export const SITE = {
  brand: "FELENQ",
  brandTagline: "Forge & Ferronnerie d'art",
  legalName: "Guillaume Felenq — Ferronnerie d'art & Forge",
  siren: "903 067 031",
  address: {
    street: "107 Vieux Chemin de Sainte-Anne",
    postalCode: "06130",
    city: "Grasse",
    region: "Provence-Alpes-Côte d'Azur",
    country: "FR",
  },
  phoneDisplay: "06 30 42 65 00",
  phoneHref: "tel:+33630426500",
  phoneE164: "+33630426500",
  email: "felenqguillaume@gmail.com",
  emailHref: "mailto:felenqguillaume@gmail.com",
  activity: "Forge, estampage, matriçage ; métallurgie des poudres",
  zone: ["Grasse", "Pays de Grasse", "Cannes", "Antibes", "Nice", "toute la Côte d'Azur"],
  mapQuery: "107 Vieux Chemin de Sainte-Anne, 06130 Grasse",
} as const;

export const fullAddress = `${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.city}`;

export const NAV_LINKS = [
  { hash: "savoir-faire", label: "Savoir-faire" },
  { hash: "realisation", label: "Création phare" },
  { hash: "galerie", label: "Galerie" },
  { hash: "prestations", label: "Prestations" },
  { hash: "demarche", label: "Démarche" },
  { hash: "contact", label: "Contact" },
] as const;

export const PROJECT_TYPES = [
  "Serre ou orangerie",
  "Portail ou clôture",
  "Garde-corps ou rampe",
  "Marquise ou pergola",
  "Grilles et protections",
  "Mobilier ou décoration",
  "Restauration de ferronnerie ancienne",
  "Pièce de forge / estampage / matriçage",
  "Autre projet",
] as const;
