import { useRef, type CSSProperties, type ReactNode } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { useHeroScroll } from "@/hooks/use-hero-scroll";
import heroImage from "@/assets/hero-serre.jpg";
import { CinematicIntro } from "./CinematicIntro";
import { EmberCanvas } from "./EmberCanvas";
import { OrnamentDivider } from "./Ornament";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;
const MARQUEE = ["Forge", "Estampage", "Matriçage", "Ferronnerie d'art"];

function HeroLine({ index, children }: { index: number; children: ReactNode }) {
  return (
    <span className="-mb-[0.14em] block overflow-y-clip pb-[0.14em]">
      <span className="hero-line block" style={{ "--i": index } as CSSProperties}>
        {children}
      </span>
    </span>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  useHeroScroll(sectionRef, bgRef, contentRef);

  return (
    <>
      <CinematicIntro />
      <section
        ref={sectionRef}
        aria-labelledby="hero-title"
        className="dark grain relative flex min-h-[100svh] items-end overflow-hidden bg-background"
      >
        <div ref={bgRef} className="absolute inset-0 -z-30 will-change-transform">
          <img
            src={heroImage}
            alt="Serre octogonale en fer forgé noir illuminée à la tombée du jour, dans un jardin provençal planté d'oliviers et de lavande"
            width={1920}
            height={1088}
            fetchPriority="high"
            className="hero-kenburns h-full w-full object-cover object-[60%_center]"
          />
        </div>
        <div className="hero-overlay absolute inset-0 -z-20" aria-hidden="true" />
        <div className="ember-glow animate-ember absolute inset-x-0 bottom-0 -z-20 h-1/2" aria-hidden="true" />
        <EmberCanvas className="pointer-events-none absolute inset-0 -z-10 h-full w-full" />

        <div ref={contentRef} className="mx-auto w-full max-w-7xl px-5 pb-36 pt-32 will-change-transform sm:px-8 sm:pb-40 lg:pb-44">
          <div className="max-w-3xl">
            <p className="eyebrow hero-fade" style={delay(550)}>
              Forge & Ferronnerie d'art · Grasse
            </p>
            <h1 id="hero-title" className="mt-6 text-5xl leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
              <HeroLine index={0}>L'art du fer forgé,</HeroLine>{" "}
              <HeroLine index={1}>
                <em className="font-serif italic text-primary">façonné à la main</em>
              </HeroLine>{" "}
              <HeroLine index={2}>à Grasse</HeroLine>
            </h1>
            <div className="hero-draw" style={delay(750)}>
              <OrnamentDivider className="mt-8 justify-start" />
            </div>
            <p className="hero-fade mt-8 max-w-xl text-base leading-relaxed text-foreground/85 sm:text-lg" style={delay(1000)}>
              Forge traditionnelle, estampage et ferronnerie sur mesure : serres, portails, garde-corps et pièces
              d'exception, dessinés et forgés à l'atelier pour les demeures du Pays de Grasse et de la Côte d'Azur.
            </p>
            <div className="hero-fade mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4" style={delay(1200)}>
              <Button asChild variant="brass" size="xl">
                <a href="#contact">Demander un devis</a>
              </Button>
              <Button asChild variant="brassOutline" size="xl">
                <a href={SITE.phoneHref}>
                  <Phone aria-hidden="true" />
                  Appeler — {SITE.phoneDisplay}
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="hero-fade absolute inset-x-0 bottom-0" style={delay(1500)}>
          <a
            href="#savoir-faire"
            className="mx-auto mb-5 hidden w-fit flex-col items-center gap-3 text-[0.65rem] uppercase tracking-[0.3em] text-foreground/70 transition-colors hover:text-primary sm:flex"
          >
            Découvrir
            <span className="relative block h-10 w-px overflow-hidden bg-foreground/20" aria-hidden="true">
              <span className="scroll-cue absolute left-0 top-0 block h-3 w-px bg-primary" />
            </span>
          </a>
          <div className="overflow-hidden border-t border-border/70 bg-background/40 py-3 backdrop-blur-[2px]" aria-hidden="true">
            <div className="hero-marquee flex w-max">
              {[0, 1].map((copy) => (
                <div key={copy} className="flex shrink-0">
                  {Array.from({ length: 4 }).flatMap((_, r) =>
                    MARQUEE.map((word) => (
                      <span
                        key={`${r}-${word}`}
                        className="flex items-center whitespace-nowrap text-[0.65rem] font-semibold uppercase tracking-[0.34em] text-foreground/55"
                      >
                        {word}
                        <span className="mx-6 text-primary">·</span>
                      </span>
                    )),
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
