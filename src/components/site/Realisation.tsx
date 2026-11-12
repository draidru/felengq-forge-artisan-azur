import serreImage from "@/assets/serre-octogonale.jpg";
import { OrnamentDivider } from "./Ornament";
import { OctagonPlan } from "./OctagonPlan";
import { Reveal } from "./Reveal";

const SPECS: { label: string; value: string }[] = [
  { label: "Plan", value: "Octogonal, 5,00 m × 5,00 m" },
  { label: "Hauteur totale", value: "≈ 3,20 m" },
  { label: "Vitrage", value: "Hauteur vitrée 2,60 m sur imposte basse pleine isolée de 0,90 m" },
  { label: "Toiture", value: "Vitrée, avec lanterne centrale surélevée et épi de faîtage" },
  { label: "Ornementation", value: "Volutes et frises de style provençal en fer forgé" },
  { label: "Ventilation", value: "Fenêtres lobatantes (oscillo-battantes) dans chaque angle" },
  { label: "Entrée", value: "SAS vitré de 1,00 m avec double porte ornementée" },
  { label: "Finition", value: "Structure métallique peinte noir" },
];

export function Realisation() {
  return (
    <section id="realisation" aria-labelledby="realisation-title" className="dark grain relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="ember-glow absolute inset-x-0 top-0 h-2/3 rotate-180 opacity-70" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <figure className="relative">
              <div className="absolute -inset-3 border border-primary/40 sm:-inset-4" aria-hidden="true" />
              <img
                src={serreImage}
                alt="Serre octogonale provençale en fer forgé noir, avec soubassement plein, lanterne centrale et SAS d'entrée à double porte ornementée"
                width={1280}
                height={1024}
                loading="lazy"
                className="relative w-full object-cover"
              />
            </figure>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={150}>
            <p className="eyebrow">Création phare</p>
            <h2 id="realisation-title" className="mt-4 text-4xl text-foreground sm:text-5xl">
              La Serre octogonale <em className="italic text-primary">provençale</em>
            </h2>
            <OrnamentDivider className="mt-6 justify-start" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Une orangerie de jardin pensée comme un petit pavillon : huit faces vitrées sur un soubassement plein,
              une lanterne qui laisse filer la lumière et l'air, et des volutes forgées qui dessinent l'esprit
              provençal jusqu'à l'épi de faîtage.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary underline-offset-8 hover:underline"
            >
              Imaginer votre serre <span aria-hidden="true">→</span>
            </a>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="h-full border border-border bg-card p-7 sm:p-10">
              <h3 className="text-3xl text-card-foreground">Fiche technique</h3>
              <span className="brass-rule mt-5 block w-24" aria-hidden="true" />
              <dl className="mt-6 divide-y divide-border">
                {SPECS.map((s) => (
                  <div key={s.label} className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
                    <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary">{s.label}</dt>
                    <dd className="text-sm leading-relaxed text-card-foreground sm:text-base">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <figure className="h-full bg-ivory p-5 text-forge shadow-soft sm:p-8">
              <OctagonPlan className="mx-auto w-full max-w-md" />
              <figcaption className="mt-4 border-t border-forge/15 pt-4 text-center font-serif text-lg italic text-forge/80">
                Plan de principe — octogone de 5,00 m, SAS d'entrée de 1,00 m
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
