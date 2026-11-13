import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Bouton d'appel mobile : n'apparaît qu'une fois le hero dépassé (le hero a déjà son bouton « Appeler »). */
export function FloatingCall() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={SITE.phoneHref}
      aria-label={`Appeler l'atelier au ${SITE.phoneDisplay}`}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={cn(
        "fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-brass text-forge shadow-glow transition-all duration-500 hover:scale-105 active:scale-95 lg:hidden",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
      )}
    >
      <span
        className="absolute inset-0 animate-ping rounded-full bg-brass/30 [animation-duration:2.5s] motion-reduce:hidden"
        aria-hidden="true"
      />
      <Phone className="relative h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
    </a>
  );
}
