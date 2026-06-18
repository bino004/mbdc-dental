"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="
        fixed
        top-0
        left-0
        right-0
        z-[9999]
        h-[3px]
        origin-left
        bg-gradient-to-r
        from-cyan-400
        via-sky-400
        to-cyan-300
        shadow-[0_0_20px_rgba(34,211,238,.8)]
      "
    />
  );
}
