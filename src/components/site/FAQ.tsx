import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function FAQ() {
  return (
    <section className="py-28 lg:py-40 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-5">
          <p className="text-xs tracking-[0.35em] uppercase text-gold mb-5">— FAQ</p>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight text-balance">
            Questions, considered <em className="text-gold font-light">in advance</em>.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-7">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b hairline border">
                <AccordionTrigger className="text-left font-display text-xl md:text-2xl py-6 hover:no-underline hover:text-gold">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}