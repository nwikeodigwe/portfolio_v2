import { useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import Nav from "./nav";
import Socials from "./socials";
import { container, item } from "../../animation/container";

const Sidebar = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <div
        className={`sidebar left ${
          location.pathname !== "/" && "sidebar-mobile"
        }`}
      >
        <motion.div
          variants={container}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.h1 variants={item}>Nwike Odigwe</motion.h1>
          <motion.span variants={item}>Software Developer</motion.span>
          <motion.p variants={item}>
            I build accessible, user-centric products, prioritizing user
            satisfaction and inclusivity at every stage of the process.
          </motion.p>
          <div className="nav">
            <Nav />
          </div>
        </motion.div>
        <Socials />
      </div>
    </AnimatePresence>
  );
};

export default Sidebar;
