import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, requestQuote } from "@/lib/site";
import { FiligreeVolute } from "./Ornament";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const STEPS = [
  {
    title: "Écoute & conseil",
    text: "Un échange sur votre projet, vos envies, les contraintes du lieu et son esprit.",
  },
  {
    title: "Dessin & conception",
    text: "Esquisses, plans cotés et choix des motifs pour valider chaque détail avant la forge.",
  },
  {
    title: "Forge & fabrication à l'atelier",
    text: "Chaque pièce est forgée, assemblée et préparée à l'atelier de Grasse.",
  },
  {
    title: "Pose & finitions",
    text: "Installation soignée sur site et finitions pour un ouvrage fait pour durer.",
  },
];

export function Demarche() {
  return (
    <section
      id="demarche"
      aria-labelledby="demarche-title"
      className="relative overflow-hidden bg-background py-24 sm:py-32"
    >
      <FiligreeVolute className="absolute -right-10 top-8 w-80 text-primary opacity-[0.1]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="demarche-title"
          eyebrow="Démarche"
          title="Quatre temps, un seul fil conducteur"
          intro="De la première conversation à la pose, un interlocuteur unique suit votre ouvrage."
        />

        <ol className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <span
            className="brass-rule absolute left-0 right-0 top-8 hidden lg:block"
            aria-hidden="true"
          />
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative">
              <Reveal delay={i * 140}>
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-primary/60 bg-background font-serif text-2xl italic text-primary">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-6 text-2xl text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="mt-16 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <Button variant="brass" size="xl" onClick={() => requestQuote()}>
            Démarrer mon projet
          </Button>
          <Button asChild variant="brassOutline" size="xl">
            <a href={SITE.phoneHref}>
              <Phone aria-hidden="true" />
              {SITE.phoneDisplay}
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
