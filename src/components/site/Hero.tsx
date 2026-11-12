import { ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import heroImage from "@/assets/hero-serre.jpg";
import { OrnamentDivider } from "./Ornament";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="dark grain relative flex min-h-[100svh] items-end overflow-hidden bg-background">
      <img
        src={heroImage}
        alt="Serre octogonale en fer forgé noir illuminée à la tombée du jour, dans un jardin provençal planté d'oliviers et de lavande"
        width={1920}
        height={1088}
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[60%_center]"
      />
      <div className="hero-overlay absolute inset-0 -z-10" aria-hidden="true" />
      <div className="ember-glow animate-ember absolute inset-x-0 bottom-0 -z-10 h-1/2" aria-hidden="true" />

      <div className="mx-auto w-full max-w-7xl px-5 pb-24 pt-32 sm:px-8 sm:pb-28 lg:pb-32">
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <p className="eyebrow">Forge & Ferronnerie d'art · Grasse</p>
          <h1 id="hero-title" className="mt-6 text-5xl leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
            L'art du fer forgé, <em className="font-serif italic text-primary">façonné à la main</em> à Grasse
          </h1>
          <OrnamentDivider className="mt-8 justify-start" />
          <p className="mt-8 max-w-xl text-base leading-relaxed text-foreground/85 sm:text-lg">
            Forge traditionnelle, estampage et ferronnerie sur mesure : serres, portails, garde-corps et pièces
            d'exception, dessinés et forgés à l'atelier pour les demeures du Pays de Grasse et de la Côte d'Azur.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
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

      <a
        href="#savoir-faire"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.65rem] uppercase tracking-[0.3em] text-foreground/70 transition-colors hover:text-primary sm:flex"
      >
        Découvrir
        <ChevronDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}
