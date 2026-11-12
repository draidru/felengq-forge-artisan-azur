import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { SavoirFaire } from "@/components/site/SavoirFaire";
import { Realisation } from "@/components/site/Realisation";
import { Galerie } from "@/components/site/Galerie";
import { Prestations } from "@/components/site/Prestations";
import { Demarche } from "@/components/site/Demarche";
import { Contact } from "@/components/site/Contact";
import { SITE } from "@/lib/site";

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
  identifier: { "@type": "PropertyValue", propertyID: "SIREN", value: SITE.siren.replace(/\s/g, "") },
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    postalCode: SITE.address.postalCode,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    addressCountry: SITE.address.country,
  },
  areaServed: ["Grasse", "Pays de Grasse", "Cannes", "Antibes", "Nice", "Côte d'Azur"].map((name) => ({
    "@type": "Place",
    name,
  })),
  knowsAbout: ["Forge", "Estampage", "Matriçage", "Métallurgie des poudres", "Ferronnerie d'art"],
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
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
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
      <Contact />
    </SiteLayout>
  );
}
