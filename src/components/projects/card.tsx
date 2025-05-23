import { Link } from "react-router";
import { GoLinkExternal } from "react-icons/go";
import { FiGithub } from "react-icons/fi";
import { motion, AnimatePresence } from "motion/react";
import { container, item } from "../../animation/container";

type Props = {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  link: string | null;
  repository: string | null;
};

const Card = (props: Props) => {
  return (
    <AnimatePresence>
      <motion.div
        variants={container}
        initial="initial"
        animate="animate"
        exit="exit"
        className="project-card"
      >
        <motion.div variants={item}>
          <div className="w-full h-[100px] bg-shamrock-green"></div>
        </motion.div>
        <motion.div variants={item}>
          <div className="flex justify-between items-start">
            <h2>{props.title}</h2>
            <div className="flex items-center gap-3">
              {props.repository && (
                <Link to={props.repository} target="_blank">
                  <FiGithub />
                </Link>
              )}
              {props.link && (
                <Link to={props.link} target="_blank">
                  <GoLinkExternal />
                </Link>
              )}
            </div>
          </div>
          <p className="text-sm">{props.description}</p>
          <div className="flex flex-wrap gap-4">
            {props.technologies.map((technology) => (
              <span className="bg-shamrock-green/20 text-shamrock-green text-xs px-2 py-1 rounded-md cursor-pointer w-fit hover:bg-shamrock-green/30 transition-all duration-300 ease-in-out">
                {technology}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Card;
