import { Link } from "@tanstack/react-router";
import { NAV_LINKS, SITE } from "@/lib/site";
import { Logo } from "./Logo";
import { OrnamentDivider } from "./Ornament";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="dark grain border-t border-border bg-card pb-24 pt-16 text-card-foreground lg:pb-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Logo size="footer" />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{SITE.legalName}</p>
            <p className="mt-1 text-sm text-muted-foreground">SIREN {SITE.siren}</p>
          </div>

          <div>
            <p className="eyebrow">Coordonnées</p>
            <address className="mt-4 space-y-1 text-sm not-italic leading-relaxed text-muted-foreground">
              <p>{SITE.address.street}</p>
              <p>
                {SITE.address.postalCode} {SITE.address.city}
              </p>
              <p className="pt-2">
                <a href={SITE.phoneHref} className="text-foreground transition-colors hover:text-primary">
                  {SITE.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={SITE.emailHref} className="break-all text-foreground transition-colors hover:text-primary">
                  {SITE.email}
                </a>
              </p>
            </address>
          </div>

          <nav aria-label="Liens du pied de page">
            <p className="eyebrow">Navigation</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.hash}>
                  <Link to="/" hash={l.hash} className="text-muted-foreground transition-colors hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/mentions-legales" className="text-muted-foreground transition-colors hover:text-primary">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <OrnamentDivider className="mt-14" />
        <p className="mt-6 text-center text-xs tracking-wide text-muted-foreground">
          © {year} {SITE.brand} — {SITE.brandTagline} · Grasse, Côte d'Azur
        </p>
      </div>
    </footer>
  );
}
