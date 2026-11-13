import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "@/lib/faq";
import { SITE } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          id="faq-title"
          eyebrow="Questions fréquentes"
          title="Avant de nous écrire"
          intro="Les réponses aux questions que l'on nous pose le plus souvent."
        />

        <Reveal className="mt-12">
          <Accordion type="single" collapsible className="border-t border-border">
            {FAQ.map((item, i) => (
              <AccordionItem key={item.q} value={`q${i}`} className="border-border">
                <AccordionTrigger className="gap-6 py-6 font-serif text-xl font-normal text-foreground hover:no-underline hover:text-primary sm:text-2xl [&>svg]:text-primary">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 pr-10 text-base leading-relaxed text-muted-foreground">
                  {item.a}
                  {i === FAQ.length - 1 && (
                    <>
                      {" "}
                      <a
                        href={SITE.emailHref}
                        className="text-primary underline-offset-4 hover:underline"
                      >
                        {SITE.email}
                      </a>
                    </>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
