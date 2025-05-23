import React from "react";
import { AnimatePresence, motion } from "motion/react";

const AnimatedBorder = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="layout my-auto"
      initial={{ clipPath: "inset(0% 100% 100% 0%)" }}
      animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
      transition={{
        duration: 3,
        yoyo: Infinity,
        ease: "easeInOut",
        type: "spring",
      }}
    >
      <AnimatePresence>{children}</AnimatePresence>
    </motion.div>
  );
};

export default AnimatedBorder;
