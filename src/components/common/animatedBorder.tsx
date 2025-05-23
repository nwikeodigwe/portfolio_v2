import React from "react";
import { AnimatePresence, motion } from "motion/react";

const AnimatedBorder = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="layout my-auto"
        initial={{ clipPath: "inset(0% 100% 100% 0%)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{
          staggerChildren: 0.2,
          delayChildren: 0.3,
          duration: 3,
          yoyo: Infinity,
          ease: "easeInOut",
          type: "spring",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedBorder;
