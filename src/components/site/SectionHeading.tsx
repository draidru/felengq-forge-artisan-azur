import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { OrnamentDivider } from "./Ornament";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
  align = "center",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  id?: string;
  align?: "center" | "left";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <Reveal className={cn("max-w-2xl", centered && "mx-auto text-center", className)}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="mt-4 text-4xl text-foreground sm:text-5xl">
        {title}
      </h2>
      <OrnamentDivider className={cn("mt-6", !centered && "justify-start")} />
      {intro && <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">{intro}</p>}
    </Reveal>
  );
}
