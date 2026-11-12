import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function FloatingCall() {
  return (
    <a
      href={SITE.phoneHref}
      aria-label={`Appeler l'atelier au ${SITE.phoneDisplay}`}
      className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-brass text-forge shadow-glow transition-transform duration-300 hover:scale-105 active:scale-95 lg:hidden"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-brass/30 motion-reduce:hidden" aria-hidden="true" />
      <Phone className="relative h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
    </a>
  );
}
