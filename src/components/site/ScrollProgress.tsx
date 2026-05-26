import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.2 });
  return (
    <motion.div
      style={{ scaleX: x }}
      className="fixed top-0 left-0 right-0 h-[2px] origin-left bg-gold z-[60]"
    />
  );
}