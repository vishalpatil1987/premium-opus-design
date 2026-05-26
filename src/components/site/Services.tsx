import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { services } from "@/lib/site-data";
import { Reveal, Stagger, staggerItem } from "./Reveal";

export function ServicesSection() {
  return (
    <section className="py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <Reveal>
            <p className="text-xs tracking-[0.35em] uppercase text-gold mb-5">— Our Craft</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight max-w-2xl text-balance">
              A complete studio for <em className="text-gold font-light">considered</em> living.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-md text-muted-foreground leading-relaxed">
              Eight disciplines, one team, one accountable vision — so the architecture, the interiors and the build never argue with each other.
            </p>
          </Reveal>
        </div>

        <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 border-t hairline border">
          {services.map((s) => (
            <motion.div
              key={s.num}
              variants={staggerItem}
              className="group relative p-8 lg:p-10 border-b lg:border-r hairline border min-h-[300px] flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute inset-0 bg-charcoal text-background translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              <div className="relative z-10 transition-colors duration-500 group-hover:text-background">
                <span className="font-display text-sm text-gold">{s.num}</span>
                <h3 className="font-display text-2xl lg:text-3xl mt-6 leading-tight">{s.title}</h3>
              </div>
              <div className="relative z-10 transition-colors duration-500 group-hover:text-background/70">
                <p className="text-sm text-muted-foreground group-hover:text-background/70 leading-relaxed mb-6">{s.desc}</p>
                <Link to="/services" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest">
                  Explore <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}