import { motion } from "motion/react";

export function PageHeader({ kicker, title, subtitle }: { kicker: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <section className="pt-44 pb-20 lg:pt-56 lg:pb-28 border-b hairline border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.4em] uppercase text-gold mb-6"
        >
          — {kicker}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-balance max-w-5xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 max-w-2xl text-muted-foreground text-lg"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}