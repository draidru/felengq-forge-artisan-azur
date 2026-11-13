import { ArrowUpRight } from "lucide-react";
import forgeImage from "@/assets/forge-atelier.jpg";
import { Button } from "@/components/ui/button";
import { requestQuote, type ProjectType } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const SERVICES: { title: string; text: string; type: ProjectType }[] = [
  {
    title: "Portails & clôtures",
    text: "Portails battants ou coulissants, portillons et clôtures ornementées.",
    type: "Portail ou clôture",
  },
  {
    title: "Garde-corps & rampes",
    text: "Balcons, terrasses et escaliers : la sécurité alliée à l'élégance du trait.",
    type: "Garde-corps ou rampe",
  },
  {
    title: "Grilles & protections",
    text: "Grilles de défense, de fenêtre ou de soupirail, discrètes et robustes.",
    type: "Grilles et protections",
  },
  {
    title: "Marquises & pergolas",
    text: "Auvents vitrés, pergolas et treilles pour habiller façades et jardins.",
    type: "Marquise ou pergola",
  },
  {
    title: "Serres & orangeries",
    text: "Structures vitrées sur mesure, du plan au faîtage de la lanterne.",
    type: "Serre ou orangerie",
  },
  {
    title: "Mobilier & décoration",
    text: "Tables, sièges, luminaires et pièces décoratives forgés à la main.",
    type: "Mobilier ou décoration",
  },
  {
    title: "Restauration de ferronneries anciennes",
    text: "Remise en état dans le respect des techniques et des motifs d'origine.",
    type: "Restauration de ferronnerie ancienne",
  },
];

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII"];

export function Prestations() {
  return (
    <section
      id="prestations"
      aria-labelledby="prestations-title"
      className="dark grain relative overflow-hidden bg-background py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              id="prestations-title"
              align="left"
              eyebrow="Prestations"
              title="Du portail à la serre, tout se forge à l'atelier"
              intro="Créations neuves ou restauration, pour particuliers, architectes et décorateurs à Grasse, Cannes, Antibes, Nice et sur toute la Côte d'Azur."
            />
            <Reveal delay={100} className="mt-8">
              <Button variant="brass" size="xl" onClick={() => requestQuote()}>
                Parler de mon projet
              </Button>
            </Reveal>
            <Reveal delay={150} className="relative mt-10 hidden lg:block">
              <img
                src={forgeImage}
                alt="Forgeron martelant un fer incandescent sur l'enclume, dans une gerbe d'étincelles"
                width={1024}
                height={1280}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div
                className="ember-glow animate-ember pointer-events-none absolute inset-0"
                aria-hidden="true"
              />
            </Reveal>
          </div>
        </div>

        <ol className="border-t border-border lg:col-span-7">
          {SERVICES.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 60}>
                <div className="group relative grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 border-b border-border py-7 transition-colors hover:bg-foreground/[0.02] sm:grid-cols-[4.5rem_1fr_auto] sm:py-8">
                  <span className="font-serif text-2xl italic text-primary/80 transition-colors group-hover:text-primary sm:text-3xl">
                    {ROMAN[i]}.
                  </span>
                  <div>
                    <h3 className="text-2xl text-foreground transition-transform duration-500 group-hover:translate-x-1 sm:text-3xl">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {s.text}
                    </p>
                    {/* Le bouton couvre toute la ligne (after:inset-0) pour la rendre cliquable. */}
                    <button
                      type="button"
                      onClick={() => requestQuote(s.type)}
                      className="mt-3 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-primary opacity-80 transition-opacity after:absolute after:inset-0 after:content-[''] group-hover:opacity-100"
                    >
                      Demander un devis<span className="sr-only"> : {s.title}</span>
                    </button>
                  </div>
                  <ArrowUpRight
                    className="h-5 w-5 self-center text-primary/60 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                    strokeWidth={1.25}
                    aria-hidden="true"
                  />
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
