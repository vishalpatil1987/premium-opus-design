import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "motion/react";

const stats = [
  { value: 250, suffix: "+", label: "Projects Delivered" },
  { value: 15, suffix: " yrs", label: "Of Crafted Experience" },
  { value: 40, suffix: "+", label: "Architects & Designers" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(mv, to, { duration: 2.2, ease: [0.22, 1, 0.36, 1] });
    const unsub = mv.on("change", v => setVal(Math.round(v)));
    return () => { ctrl.stop(); unsub(); };
  }, [inView, mv, to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

export function Stats() {
  return (
    <section className="py-24 lg:py-32 border-y hairline border bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <div className="font-display text-5xl md:text-6xl tracking-tight">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}