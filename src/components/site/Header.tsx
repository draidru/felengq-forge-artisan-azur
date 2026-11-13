import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SITE } from "@/lib/site";
import { Logo } from "./Logo";
import { OrnamentDivider } from "./Ornament";

export function Header({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filled = solid || scrolled;

  return (
    <header
      className={cn(
        "dark fixed inset-x-0 top-0 z-40 transition-all duration-500",
        filled ? "border-b border-border bg-background/92 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className={cn("mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 sm:px-8", filled ? "h-16" : "h-20")}>
        <Logo size={filled ? "compact" : "header"} />

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <li key={l.hash}>
                <Link
                  to="/"
                  hash={l.hash}
                  className="relative text-xs font-semibold uppercase tracking-[0.2em] text-foreground/80 transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:text-foreground hover:after:w-full"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="brassOutline" className="hidden h-10 px-4 sm:inline-flex">
            <a href={SITE.phoneHref}>
              <Phone aria-hidden="true" />
              {SITE.phoneDisplay}
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground lg:hidden" aria-label="Ouvrir le menu">
                <Menu className="!size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="dark grain w-full max-w-sm border-border bg-background text-foreground">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="mt-2">
                <Logo onClick={() => setOpen(false)} />
              </div>
              <OrnamentDivider className="mt-8 justify-start" />
              <nav aria-label="Navigation mobile" className="mt-8">
                <ul className="flex flex-col gap-1">
                  {NAV_LINKS.map((l) => (
                    <li key={l.hash}>
                      <Link
                        to="/"
                        hash={l.hash}
                        onClick={() => setOpen(false)}
                        className="block py-3 font-serif text-3xl text-foreground transition-colors hover:text-primary"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <Button asChild variant="brass" size="xl" className="mt-10 w-full">
                <a href={SITE.phoneHref}>
                  <Phone aria-hidden="true" />
                  Appeler — {SITE.phoneDisplay}
                </a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
