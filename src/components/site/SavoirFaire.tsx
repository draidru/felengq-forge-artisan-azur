import { Flame, Hammer, Layers, PenTool, type LucideIcon } from "lucide-react";
import { FiligreeVolute } from "./Ornament";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const SKILLS: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Flame,
    title: "Forge traditionnelle",
    text: "Le fer est chauffé, étiré, refoulé et cintré à la main sur l'enclume, selon les gestes séculaires du forgeron.",
  },
  {
    icon: Hammer,
    title: "Estampage & matriçage",
    text: "Mise en forme du métal à chaud par outillage dédié, pour des pièces précises, régulières et d'une grande tenue.",
  },
  {
    icon: Layers,
    title: "Métallurgie des poudres",
    text: "Une technique de pointe pour obtenir des pièces métalliques complexes et denses, en complément du travail de forge.",
  },
  {
    icon: PenTool,
    title: "Ferronnerie d'art sur mesure",
    text: "Chaque ouvrage est dessiné pour son lieu : proportions, motifs et finitions accordés à votre architecture.",
  },
];

export function SavoirFaire() {
  return (
    <section id="savoir-faire" aria-labelledby="savoir-faire-title" className="relative overflow-hidden bg-background py-24 sm:py-32">
      <FiligreeVolute className="absolute -left-16 top-10 w-72 text-primary opacity-[0.12] sm:w-96" />
      <FiligreeVolute className="absolute -right-16 bottom-0 w-72 rotate-180 text-primary opacity-[0.12] sm:w-96" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="savoir-faire-title"
          eyebrow="Savoir-faire"
          title="Le geste du forgeron, la précision de l'atelier"
          intro="Du feu de forge aux techniques de mise en forme les plus précises, chaque pièce naît d'une même exigence : la justesse du trait et la durabilité du métal."
        />

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 120} className="h-full">
                <article className="group relative h-full border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/60 hover:shadow-soft">
                  <span className="absolute inset-x-8 top-0 h-px origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
                  <s.icon className="h-9 w-9 text-primary" strokeWidth={1} aria-hidden="true" />
                  <h3 className="mt-6 text-2xl text-card-foreground">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
