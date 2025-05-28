import Card from "./card";
import { motion, AnimatePresence } from "motion/react";
import { container, item } from "../../animation/container";
import projects from "./projects.json";

const Index = () => {
  return (
    <AnimatePresence>
      <motion.div
        variants={container}
        initial="initial"
        animate="animate"
        exit="exit"
        className="projects scroll right"
      >
        <motion.h2 variants={item} className="title">
          Projects
        </motion.h2>
        {projects.map((project) => (
          <Card key={project.id} {...project} />
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
