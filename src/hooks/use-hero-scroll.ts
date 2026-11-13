import { useEffect, type RefObject } from "react";

/** Parallaxe de l'image + estompage du contenu du hero au scroll (désactivé si prefers-reduced-motion). */
export function useHeroScroll(
  sectionRef: RefObject<HTMLElement | null>,
  backgroundRef: RefObject<HTMLElement | null>,
  contentRef: RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const section = sectionRef.current;
      if (!section) return;
      const height = section.offsetHeight || window.innerHeight;
      const y = Math.min(Math.max(window.scrollY, 0), height);
      const bg = backgroundRef.current;
      if (bg) bg.style.transform = `translate3d(0, ${y * 0.35}px, 0)`;
      const content = contentRef.current;
      if (content) {
        const progress = Math.min(y / (height * 0.6), 1);
        content.style.opacity = String(1 - progress);
        content.style.transform = `translate3d(0, ${-y * 0.15}px, 0)`;
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [sectionRef, backgroundRef, contentRef]);
}
