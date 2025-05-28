import Card from "./card";
import { motion, AnimatePresence } from "motion/react";
import { container, item } from "../../animation/container";
import experiences from "./experience.json";

const Index = () => {
  return (
    <AnimatePresence>
      <motion.div
        variants={container}
        initial="initial"
        animate="animate"
        exit="exit"
        className="experience scroll right"
      >
        <motion.h2 variants={item} className="title">
          Experience
        </motion.h2>
        {[...experiences].reverse().map((experience) => (
          <Card key={experience.id} {...experience} />
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
