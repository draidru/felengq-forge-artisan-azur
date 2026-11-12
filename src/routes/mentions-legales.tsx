import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { OrnamentDivider } from "@/components/site/Ornament";
import { SITE, fullAddress } from "@/lib/site";

const TITLE = "Mentions légales | Felenq — Forge & Ferronnerie d'art, Grasse";
const DESCRIPTION =
  "Mentions légales du site de Guillaume Felenq — Ferronnerie d'art & Forge, 107 Vieux Chemin de Sainte-Anne, 06130 Grasse. SIREN 903 067 031.";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/mentions-legales" },
    ],
    links: [{ rel: "canonical", href: "/mentions-legales" }],
  }),
  component: MentionsLegales,
});

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-border py-8">
      <h2 className="text-2xl text-foreground sm:text-3xl">{title}</h2>
      <div className="mt-4 space-y-2 leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

function MentionsLegales() {
  return (
    <SiteLayout solidHeader>
      <div className="mx-auto max-w-3xl px-5 pb-24 pt-36 sm:px-8">
        <p className="eyebrow">Informations légales</p>
        <h1 className="mt-4 text-5xl text-foreground">Mentions légales</h1>
        <OrnamentDivider className="mt-6 justify-start" />

        <div className="mt-12">
          <Block title="Éditeur du site">
            <p className="text-foreground">{SITE.legalName}</p>
            <p>Marque : {SITE.brand} — {SITE.brandTagline}</p>
            <p>SIREN : {SITE.siren}</p>
            <p>Adresse : {fullAddress}</p>
            <p>
              Téléphone :{" "}
              <a href={SITE.phoneHref} className="text-primary underline-offset-4 hover:underline">
                {SITE.phoneDisplay}
              </a>
            </p>
            <p>Directeur de la publication : Guillaume Felenq</p>
          </Block>

          <Block title="Activité">
            <p>{SITE.activity}.</p>
            <p>Zone d'intervention : {SITE.zone.join(", ")}.</p>
          </Block>

          <Block title="Hébergement">
            <p>Informations relatives à l'hébergeur du site : à compléter.</p>
          </Block>

          <Block title="Propriété intellectuelle">
            <p>
              L'ensemble des contenus de ce site (textes, dessins, plans, éléments graphiques) est protégé par le droit
              d'auteur. Toute reproduction sans autorisation préalable est interdite. Certaines images présentées sont
              des visuels d'illustration.
            </p>
          </Block>

          <Block title="Données personnelles">
            <p>
              Les informations saisies dans le formulaire de demande de devis servent uniquement à répondre à votre
              demande. Elles ne sont ni cédées ni revendues. Conformément au RGPD, vous pouvez demander l'accès, la
              rectification ou la suppression de vos données en contactant l'atelier au {SITE.phoneDisplay}.
            </p>
          </Block>
        </div>

        <Link to="/" className="mt-8 inline-block text-xs font-semibold uppercase tracking-[0.22em] text-primary underline-offset-8 hover:underline">
          ← Retour à l'accueil
        </Link>
      </div>
    </SiteLayout>
  );
}
