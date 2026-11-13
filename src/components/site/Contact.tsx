import { MapPin, Phone, Compass, Mail, ExternalLink } from "lucide-react";
import { MAPS_URL, SITE, fullAddress } from "@/lib/site";
import { LogoFelenq } from "./LogoFelenq";
import { QuoteForm } from "./QuoteForm";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed`;

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="dark grain relative overflow-hidden bg-background py-24 sm:py-32"
    >
      <div
        className="ember-glow animate-ember absolute inset-x-0 bottom-0 h-1/2"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-10 flex justify-center">
          <LogoFelenq className="aspect-[394/374] h-auto w-[140px]" />
        </Reveal>
        <SectionHeading
          id="contact-title"
          eyebrow="Contact & devis"
          title="Parlons de votre projet"
          intro="Décrivez votre idée en quelques lignes ou appelez directement l'atelier. Chaque demande est étudiée avec attention."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="space-y-8 lg:col-span-5">
            <address className="space-y-6 not-italic">
              <div className="flex gap-4">
                <MapPin
                  className="mt-1 h-5 w-5 shrink-0 text-primary"
                  strokeWidth={1.25}
                  aria-hidden="true"
                />
                <div>
                  <p className="eyebrow !text-[0.65rem]">Atelier</p>
                  <p className="mt-1 text-foreground">{SITE.address.street}</p>
                  <p className="text-foreground">
                    {SITE.address.postalCode} {SITE.address.city}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone
                  className="mt-1 h-5 w-5 shrink-0 text-primary"
                  strokeWidth={1.25}
                  aria-hidden="true"
                />
                <div>
                  <p className="eyebrow !text-[0.65rem]">Téléphone</p>
                  <a
                    href={SITE.phoneHref}
                    className="mt-1 block font-serif text-3xl text-foreground transition-colors hover:text-primary"
                  >
                    {SITE.phoneDisplay}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail
                  className="mt-1 h-5 w-5 shrink-0 text-primary"
                  strokeWidth={1.25}
                  aria-hidden="true"
                />
                <div>
                  <p className="eyebrow !text-[0.65rem]">E-mail</p>
                  <a
                    href={SITE.emailHref}
                    className="mt-1 block break-all text-lg text-foreground transition-colors hover:text-primary"
                  >
                    {SITE.email}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Compass
                  className="mt-1 h-5 w-5 shrink-0 text-primary"
                  strokeWidth={1.25}
                  aria-hidden="true"
                />
                <div>
                  <p className="eyebrow !text-[0.65rem]">Zone d'intervention</p>
                  <p className="mt-1 leading-relaxed text-foreground">{SITE.zone.join(", ")}</p>
                </div>
              </div>
            </address>

            <div className="relative border border-border p-1.5">
              <iframe
                title={`Carte — ${fullAddress}`}
                src={mapSrc}
                className="block h-72 w-full bg-card grayscale-[0.6] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary underline-offset-8 hover:underline"
            >
              Itinéraire vers l'atelier
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="sr-only">(ouvre Google Maps dans un nouvel onglet)</span>
            </a>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-7">
            <div className="border border-border bg-card/80 p-6 shadow-soft backdrop-blur-sm sm:p-10">
              <h3 className="text-3xl text-card-foreground">Demande de devis</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Tous les champs sont obligatoires. Des photos du lieu ou un croquis ? Envoyez-les à{" "}
                <a
                  href={SITE.emailHref}
                  className="text-primary underline-offset-4 hover:underline"
                >
                  {SITE.email}
                </a>
                .
              </p>
              <span className="brass-rule mb-8 mt-5 block w-24" aria-hidden="true" />
              <QuoteForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
