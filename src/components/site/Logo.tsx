import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { LogoFelenq } from "./LogoFelenq";

const MARK_SIZE = {
  header: "h-12",
  compact: "h-11",
  footer: "h-[72px]",
} as const;

export function Logo({ onClick, size = "header" }: { onClick?: () => void; size?: keyof typeof MARK_SIZE }) {
  return (
    <Link to="/" onClick={onClick} className="group flex items-center gap-3 rounded-sm" aria-label={`${SITE.brand} — ${SITE.brandTagline}, accueil`}>
      <LogoFelenq className={cn("aspect-[394/374] w-auto shrink-0 transition-all duration-500", MARK_SIZE[size])} />
      <span className="flex flex-col leading-none">
        <span className="font-serif text-2xl tracking-[0.28em] text-foreground">{SITE.brand}</span>
        <span className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.26em] text-muted-foreground">
          {SITE.brandTagline}
        </span>
      </span>
    </Link>
  );
}
