import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const go = (d: number) => setI((i + d + testimonials.length) % testimonials.length);
  return (
    <section className="py-28 lg:py-40">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <Reveal>
          <Quote className="h-10 w-10 text-gold mx-auto mb-8" />
        </Reveal>
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-3xl md:text-5xl leading-[1.2] tracking-tight text-balance"
          >
            “{t.quote}”
          </motion.blockquote>
        </AnimatePresence>
        <div className="mt-12">
          <p className="font-medium">{t.name}</p>
          <p className="text-sm text-muted-foreground">{t.role}</p>
        </div>
        <div className="mt-10 flex justify-center gap-3">
          <button onClick={() => go(-1)} aria-label="previous" className="h-12 w-12 grid place-items-center rounded-full border hairline hover:bg-foreground hover:text-background transition">
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button onClick={() => go(1)} aria-label="next" className="h-12 w-12 grid place-items-center rounded-full border hairline hover:bg-foreground hover:text-background transition">
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}