import { process } from "@/lib/site-data";
import { Reveal } from "./Reveal";
import { motion } from "motion/react";

export function Process() {
  return (
    <section className="py-28 lg:py-40 bg-charcoal text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <p className="text-xs tracking-[0.35em] uppercase text-gold mb-5">— The Process</p>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight max-w-3xl text-balance">
            From a quiet conversation to <em className="text-gold font-light">a finished home</em>.
          </h2>
        </Reveal>

        <div className="mt-20 relative">
          <div className="absolute left-0 right-0 top-12 h-px bg-background/15 hidden lg:block" />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.7 }}
                className="relative"
              >
                <div className="h-3 w-3 rounded-full bg-gold mb-9 relative z-10 ring-8 ring-charcoal" />
                <p className="font-display text-sm text-gold mb-3">{p.step}</p>
                <h3 className="font-display text-2xl mb-3">{p.title}</h3>
                <p className="text-sm text-background/65 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}