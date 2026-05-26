import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Play } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

const words = ["Designing", "Spaces", "That", "Define", "Luxury"];

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <motion.img
        src={heroImg}
        alt="Luxury interior architecture"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-charcoal/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-44 pb-24 min-h-screen flex flex-col justify-end">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-gold text-xs tracking-[0.4em] uppercase mb-8"
        >
          — Architecture · Interiors · Construction
        </motion.p>

        <h1 className="font-display text-background text-[clamp(2.5rem,8vw,7.5rem)] leading-[0.95] tracking-tight max-w-5xl">
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.12, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block mr-[0.25em]"
            >
              {w === "Luxury" ? <em className="text-gold not-italic font-light">{w}</em> : w}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-10 max-w-xl text-background/75 text-lg leading-relaxed"
        >
          Architecture, interiors, and construction crafted with timeless elegance — for those who consider their home a quiet masterpiece.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link to="/contact" className="group inline-flex items-center gap-3 bg-background text-foreground pl-7 pr-3 h-14 rounded-full text-sm tracking-wide hover:bg-gold transition-all">
            Book a Consultation
            <span className="h-10 w-10 grid place-items-center rounded-full bg-foreground text-background transition group-hover:translate-x-0.5">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
          <Link to="/projects" className="group inline-flex items-center gap-3 text-background h-14 px-6 rounded-full glass-dark hover:bg-background/10 transition">
            <span className="h-8 w-8 grid place-items-center rounded-full bg-gold text-charcoal">
              <Play className="h-3.5 w-3.5 fill-current" />
            </span>
            View Projects
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 right-8 lg:right-12 z-10 text-background/60 text-xs tracking-widest uppercase rotate-180 [writing-mode:vertical-rl]"
      >
        Scroll · Discover
      </motion.div>
    </section>
  );
}