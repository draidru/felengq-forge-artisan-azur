import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { VoluteMark } from "./Ornament";

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link to="/" onClick={onClick} className="group flex items-center gap-3 rounded-sm" aria-label={`${SITE.brand} — ${SITE.brandTagline}, accueil`}>
      <VoluteMark className="h-8 w-8 text-primary transition-transform duration-500 group-hover:rotate-180" />
      <span className="flex flex-col leading-none">
        <span className="font-serif text-2xl tracking-[0.28em] text-foreground">{SITE.brand}</span>
        <span className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.26em] text-muted-foreground">
          {SITE.brandTagline}
        </span>
      </span>
    </Link>
  );
}
