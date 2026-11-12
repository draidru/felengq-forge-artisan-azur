import type { ReactNode } from "react";
import { FloatingCall } from "./FloatingCall";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function SiteLayout({ children, solidHeader = false }: { children: ReactNode; solidHeader?: boolean }) {
  return (
    <>
      <a
        href="#contenu"
        className="sr-only z-50 bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Aller au contenu
      </a>
      <Header solid={solidHeader} />
      <main id="contenu">{children}</main>
      <Footer />
      <FloatingCall />
    </>
  );
}
