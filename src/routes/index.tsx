import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { SavoirFaire } from "@/components/site/SavoirFaire";
import { Realisation } from "@/components/site/Realisation";
import { Galerie } from "@/components/site/Galerie";
import { Prestations } from "@/components/site/Prestations";
import { Demarche } from "@/components/site/Demarche";
import { Contact } from "@/components/site/Contact";
import { Faq } from "@/components/site/Faq";
import { FAQ } from "@/lib/faq";
import { SITE } from "@/lib/site";
import { INTRO_SESSION_KEY } from "@/components/site/CinematicIntro";

// Masque l'intro avant le premier affichage si elle a déjà été vue dans la session ou si les animations sont réduites.
const introGate = `try{var d=document.documentElement;if(sessionStorage.getItem("${INTRO_SESSION_KEY}")||matchMedia("(prefers-reduced-motion: reduce)").matches)d.classList.add("intro-skip")}catch(e){}`;

const TITLE = "Ferronnier d'art à Grasse — Forge, serres et ferronnerie sur mesure | Felenq";
const DESCRIPTION =
  "Guillaume Felenq, forgeron-ferronnier d'art à Grasse : forge, estampage, matriçage, serres et orangeries, portails, garde-corps et restauration sur la Côte d'Azur. Devis sur demande.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: `${SITE.brand} — ${SITE.brandTagline}`,
  legalName: SITE.legalName,
  description: DESCRIPTION,
  telephone: SITE.phoneE164,
  email: SITE.email,
  identifier: {
    "@type": "PropertyValue",
    propertyID: "SIREN",
    value: SITE.siren.replace(/\s/g, ""),
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    postalCode: SITE.address.postalCode,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    addressCountry: SITE.address.country,
  },
  areaServed: ["Grasse", "Pays de Grasse", "Cannes", "Antibes", "Nice", "Côte d'Azur"].map(
    (name) => ({
      "@type": "Place",
      name,
    }),
  ),
  knowsAbout: ["Forge", "Estampage", "Matriçage", "Métallurgie des poudres", "Ferronnerie d'art"],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { children: introGate },
      { type: "application/ld+json", children: JSON.stringify(jsonLd) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <SavoirFaire />
      <Realisation />
      <Galerie />
      <Prestations />
      <Demarche />
      <Faq />
      <Contact />
    </SiteLayout>
  );
}
