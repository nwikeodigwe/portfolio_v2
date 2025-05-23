import { motion, AnimatePresence } from "motion/react";
import { container, item } from "../../animation/container";

const Index = () => {
  return (
    <AnimatePresence>
      <motion.div
        variants={container}
        initial="initial"
        animate="animate"
        exit="exit"
        className="about scroll right"
      >
        <motion.h2 variants={item} className="title">
          About Me
        </motion.h2>
        <motion.p variants={item}>
          I am a passionate software developer fueled by curiosity and
          creativity. With a solid technical education and diverse experience, I
          thrive on exploring new horizons and bringing ideas to life using
          various tech stacks
        </motion.p>
        <motion.p variants={item}>
          My journey into software developement began with a simple curiosity
          about video game development, leading me to delve into Java and
          beyond. Over the years, I've honed my skills across different stacks,
          driven by an insatiable desire to push boundaries and discover new
          possibilities.
        </motion.p>
        <motion.p variants={item}>
          These days, my focus lies in crafting elegant and accessible solutions
          for complex systems, always with an unwavering commitment to user
          satisfaction and inclusivity. I've had the privilege of contributing
          to the development of a virtual home startup , real estate ventures,
          and online education platforms . I particularly enjoy the intersection
          of design and developering, where creativity meets functionality.
        </motion.p>
        <motion.p variants={item}>
          Let's connect and create something remarkable!
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
