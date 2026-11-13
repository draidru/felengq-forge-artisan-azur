import { useCallback, useEffect, useState, type CSSProperties } from "react";
import { LogoFelenq } from "./LogoFelenq";

/** Clé sessionStorage : l'intro ne se joue qu'une fois par session (lue aussi par le script inline de la page d'accueil). */
export const INTRO_SESSION_KEY = "felenq-intro-vue";
const INTRO_DURATION_MS = 3000;

/** Positions fixes des étincelles (pas d'aléatoire au rendu, pour une hydratation stable). */
const SPARKS = [
  { x: -18, dx: -40, delay: 300 },
  { x: 6, dx: 22, delay: 380 },
  { x: -4, dx: -12, delay: 460 },
  { x: 14, dx: 48, delay: 540 },
  { x: -10, dx: -30, delay: 620 },
  { x: 2, dx: 8, delay: 700 },
  { x: 20, dx: 34, delay: 780 },
  { x: -24, dx: -54, delay: 860 },
  { x: 10, dx: 16, delay: 940 },
  { x: -6, dx: -20, delay: 1020 },
  { x: 16, dx: 40, delay: 1100 },
  { x: -14, dx: -26, delay: 1180 },
];

export function CinematicIntro() {
  const [done, setDone] = useState(false);

  const finish = useCallback(() => {
    document.documentElement.classList.add("intro-skip");
    setDone(true);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (root.classList.contains("intro-skip") || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finish();
      return;
    }
    try {
      sessionStorage.setItem(INTRO_SESSION_KEY, "1");
    } catch {
      /* stockage indisponible : l'intro se rejouera simplement */
    }
    const t = window.setTimeout(finish, INTRO_DURATION_MS);
    return () => window.clearTimeout(t);
  }, [finish]);

  if (done) return null;

  return (
    <div className="cine-intro dark fixed inset-0 z-[60]">
      <div className="cine-stage absolute inset-0 flex items-center justify-center overflow-hidden bg-background">
        <div className="cine-glow absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full" aria-hidden="true" />
        {SPARKS.map((s, i) => (
          <span
            key={i}
            className="cine-spark absolute left-1/2 top-[56%] h-1 w-1 rounded-full"
            style={{ "--x": `${s.x}vmin`, "--dx": `${s.dx}px`, animationDelay: `${s.delay}ms` } as CSSProperties}
            aria-hidden="true"
          />
        ))}
        <div className="relative">
          <div className="cine-halo absolute -inset-10 rounded-full" aria-hidden="true" />
          <LogoFelenq className="cine-logo relative aspect-[394/374] h-auto w-44 sm:w-56" />
        </div>
      </div>
      <div className="cine-bar cine-bar-top absolute inset-x-0 top-0 h-[11vh] bg-letterbox" aria-hidden="true" />
      <div className="cine-bar cine-bar-bottom absolute inset-x-0 bottom-0 h-[11vh] bg-letterbox" aria-hidden="true" />
      <button
        type="button"
        onClick={finish}
        className="cine-skip absolute bottom-[calc(11vh+1rem)] right-5 rounded-sm px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-foreground/60 transition-colors hover:text-primary sm:right-8"
      >
        Passer
      </button>
    </div>
  );
}
