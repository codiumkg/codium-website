"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

interface Props {
  children: ReactNode;
}

function Reveal({ children }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} className="relative">
      <motion.div
        className="relative"
        variants={{
          hidden: { opacity: 0, top: 100 },
          visible: { opacity: 1, top: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8, delay: 0.05 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Reveal;
