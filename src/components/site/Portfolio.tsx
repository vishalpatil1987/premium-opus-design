import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { projects } from "@/lib/site-data";
import { Reveal } from "./Reveal";
import { ArrowUpRight } from "lucide-react";

export function Portfolio() {
  return (
    <section className="py-28 lg:py-40 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-6 mb-14">
          <Reveal>
            <p className="text-xs tracking-[0.35em] uppercase text-gold mb-5">— Selected Work</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight text-balance">
              Spaces that <em className="text-gold font-light">outlive</em> their trends.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/projects" className="inline-flex items-center gap-2 text-sm border-b border-foreground/30 pb-1 hover:border-gold">
              View all projects <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-5 lg:gap-6 lg:[grid-auto-flow:dense]">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-2xl bg-card ${p.span} ${i === 0 || i === 3 ? "lg:h-auto" : "h-[420px]"} ${i === 0 ? "lg:col-span-1" : ""}`}
            >
              <Link to="/projects" className="block h-full">
                <div className="relative h-full min-h-[420px] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent opacity-90 group-hover:opacity-100 transition" />
                  <div className="absolute top-5 left-5 glass-dark px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-background">
                    {p.category}
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-6 lg:p-8 text-background">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <h3 className="font-display text-3xl lg:text-4xl leading-tight">{p.title}</h3>
                        <p className="text-xs uppercase tracking-widest text-background/70 mt-2">{p.location} · {p.year}</p>
                      </div>
                      <span className="h-12 w-12 grid place-items-center rounded-full bg-background text-foreground translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500">
                        <ArrowUpRight className="h-5 w-5" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}