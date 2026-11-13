import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

import serre from "@/assets/hero-serre.jpg";
import orangerie from "@/assets/galerie-orangerie.jpg";
import portail from "@/assets/galerie-portail.jpg";
import gardecorps from "@/assets/galerie-gardecorps.jpg";
import escalier from "@/assets/galerie-escalier.jpg";
import marquise from "@/assets/galerie-marquise.jpg";
import mobilier from "@/assets/galerie-mobilier.jpg";
import luminaire from "@/assets/galerie-luminaire.jpg";

// Visuels d'illustration : remplacer src / légendes par les photos de l'atelier.
const ITEMS = [
  {
    src: serre,
    w: 1920,
    h: 1088,
    category: "Serres",
    group: "serres",
    caption: "Serre octogonale à la tombée du jour",
    alt: "Serre octogonale en fer forgé illuminée le soir dans un jardin provençal",
  },
  {
    src: portail,
    w: 1024,
    h: 1280,
    category: "Portails",
    group: "portails",
    caption: "Portail à double vantail et volutes",
    alt: "Portail en fer forgé noir à volutes dans un mur en pierre sous les bougainvilliers",
  },
  {
    src: orangerie,
    w: 1024,
    h: 768,
    category: "Orangeries",
    group: "serres",
    caption: "Orangerie adossée à une bastide",
    alt: "Orangerie vitrée à structure en fer noir accolée à une maison en pierre, au coucher du soleil",
  },
  {
    src: escalier,
    w: 1024,
    h: 1024,
    category: "Escaliers",
    group: "portails",
    caption: "Rampe d'escalier, main courante laiton",
    alt: "Rampe d'escalier hélicoïdal en fer forgé à volutes avec main courante en laiton",
  },
  {
    src: gardecorps,
    w: 1024,
    h: 1280,
    category: "Garde-corps",
    group: "portails",
    caption: "Garde-corps de balcon provençal",
    alt: "Garde-corps de balcon en fer forgé à arabesques sur une façade ocre aux volets bleus",
  },
  {
    src: marquise,
    w: 1024,
    h: 768,
    category: "Marquises",
    group: "portails",
    caption: "Marquise vitrée sur consoles forgées",
    alt: "Marquise vitrée en fer forgé à consoles en volute au-dessus d'une porte d'entrée en bois",
  },
  {
    src: luminaire,
    w: 1024,
    h: 1024,
    category: "Luminaires",
    group: "decoration",
    caption: "Lanterne en fer forgé",
    alt: "Lanterne suspendue en fer forgé à volutes, éclairée de bougies dans une salle voûtée",
  },
  {
    src: mobilier,
    w: 1024,
    h: 768,
    category: "Mobilier",
    group: "decoration",
    caption: "Table et chaises de jardin forgées",
    alt: "Table bistrot et deux chaises en fer forgé sur une terrasse provençale ombragée d'oliviers",
  },
];

const FILTERS = [
  { id: "tout", label: "Tout" },
  { id: "portails", label: "Portails, rampes & marquises" },
  { id: "serres", label: "Serres & orangeries" },
  { id: "decoration", label: "Mobilier & luminaires" },
] as const;

type FilterId = (typeof FILTERS)[number]["id"];

export function Galerie() {
  const [filter, setFilter] = useState<FilterId>("tout");
  const items = useMemo(
    () => (filter === "tout" ? ITEMS : ITEMS.filter((it) => it.group === filter)),
    [filter],
  );
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;
  const current = open ? items[index] : null;

  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => setIndex(null), [filter]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, go]);

  return (
    <section id="galerie" aria-labelledby="galerie-title" className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="galerie-title"
          eyebrow="Galerie"
          title="Ouvrages de fer & de lumière"
          intro="Serres, orangeries, portails, garde-corps, escaliers, marquises, mobilier et luminaires : un aperçu de l'univers de la ferronnerie d'art."
        />

        <div
          role="group"
          aria-label="Filtrer les ouvrages"
          className="-mx-5 mt-12 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
        >
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] transition-colors",
                filter === f.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary/60 hover:text-foreground",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <ul className="mt-10 columns-2 gap-3 sm:gap-5 lg:columns-3">
          {items.map((item, i) => (
            <li key={item.caption} className="mb-3 break-inside-avoid sm:mb-5">
              <Reveal delay={(i % 3) * 100}>
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  className="group relative block w-full overflow-hidden bg-forge text-left"
                  aria-label={`Agrandir : ${item.caption}`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    width={item.w}
                    height={item.h}
                    loading="lazy"
                    className="w-full transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-90"
                  />
                  <span className="dark absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-forge/85 via-forge/30 to-transparent p-3 pt-10 sm:via-forge/50 sm:p-5 sm:pt-16">
                    <span>
                      <span className="eyebrow hidden !text-[0.62rem] sm:block">
                        {item.category}
                      </span>
                      <span className="block font-serif text-sm leading-tight text-foreground sm:mt-1 sm:text-xl">
                        {item.caption}
                      </span>
                    </span>
                    <Expand
                      className="h-4 w-4 shrink-0 text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </span>
                </button>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-xs italic text-muted-foreground">
          Visuels d'illustration — les photographies des réalisations de l'atelier arrivent
          prochainement.
        </p>
      </div>

      <Dialog open={open} onOpenChange={(o) => !o && setIndex(null)}>
        <DialogContent className="dark max-w-5xl gap-0 border-border bg-background p-0 text-foreground sm:rounded-none">
          {current && (
            <figure>
              <img
                src={current.src}
                alt={current.alt}
                width={current.w}
                height={current.h}
                className="max-h-[75vh] w-full bg-forge object-contain"
              />
              <figcaption className="flex items-center justify-between gap-4 p-4 sm:p-5">
                <div>
                  <DialogTitle className="font-serif text-2xl font-normal">
                    {current.caption}
                  </DialogTitle>
                  <DialogDescription className="eyebrow mt-1 !text-[0.62rem]">
                    {current.category} · {index! + 1} / {items.length}
                  </DialogDescription>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="brassOutline"
                    size="icon"
                    onClick={() => go(-1)}
                    aria-label="Image précédente"
                  >
                    <ChevronLeft />
                  </Button>
                  <Button
                    variant="brassOutline"
                    size="icon"
                    onClick={() => go(1)}
                    aria-label="Image suivante"
                  >
                    <ChevronRight />
                  </Button>
                </div>
              </figcaption>
            </figure>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
