import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  life: number;
  max: number;
  seed: number;
  color: string;
};

const COUNT = 40;

/** Particules de braise légères (canvas 2D). Pause quand l'onglet est caché ou le hero hors écran. */
export function EmberCanvas({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const styles = getComputedStyle(canvas);
    const colors = ["--spark-1", "--spark-2", "--spark-3"]
      .map((v) => styles.getPropertyValue(v).trim())
      .filter(Boolean);
    const pick = () => colors[Math.floor(Math.random() * colors.length)] ?? "orange";

    let w = 0;
    let h = 0;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawn = (initial: boolean): Particle => ({
      x: Math.random() * w,
      y: initial ? h * (0.35 + Math.random() * 0.65) : h + 8,
      vx: (Math.random() - 0.5) * 0.25,
      vy: -(0.25 + Math.random() * 0.8),
      r: 0.6 + Math.random() * 1.6,
      life: initial ? Math.random() * 200 : 0,
      max: 220 + Math.random() * 300,
      seed: Math.random() * 1000,
      color: pick(),
    });

    resize();
    const particles = Array.from({ length: COUNT }, () => spawn(true));

    let raf = 0;
    let tabVisible = !document.hidden;
    let onScreen = true;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < particles.length; i++) {
        let p = particles[i]!;
        p.life += 1;
        p.x += p.vx + Math.sin((p.life + p.seed) * 0.02) * 0.25;
        p.y += p.vy;
        if (p.life >= p.max || p.y < -10) {
          p = spawn(false);
          particles[i] = p;
        }
        const alpha = Math.sin((Math.PI * p.life) / p.max);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha * 0.18;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 3.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = alpha * 0.9;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    const sync = () => {
      const shouldRun = tabVisible && onScreen;
      if (shouldRun && !raf) raf = requestAnimationFrame(draw);
      if (!shouldRun && raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };

    const onVisibility = () => {
      tabVisible = !document.hidden;
      sync();
    };
    const io = new IntersectionObserver(([entry]) => {
      onScreen = !!entry?.isIntersecting;
      sync();
    });
    io.observe(canvas);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("resize", resize);
    sync();

    return () => {
      if (raf) cancelAnimationFrame(raf);
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className={className} />;
}
