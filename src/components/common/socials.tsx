import { Link } from "react-router";
import { motion } from "motion/react";
import { container, item } from "../../animation/container";

const socials = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/nwikeodigwe",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/nwikeodigwe",
  },
  {
    name: "Twitter",
    link: "https://www.twitter.com/nwikeodigwe",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nwikeodigwe",
  },
  {
    name: "GitHub",
    link: "https://www.github.com/nwikeodigwe",
  },
];

const Socials = () => {
  return (
    <motion.div
      variants={container}
      initial="initial"
      animate="animate"
      exit="exit"
      className="socials"
    >
      <motion.h2 variants={item}>Follow me</motion.h2>
      <motion.ul variants={item}>
        {socials.map((social, i) => (
          <motion.li key={i} variants={item}>
            <Link to={social.link} className="group">
              <span>{social.name}</span>
              <span className="bg-silver/50 group-hover:bg-shamrock-green after:group-hover:bg-shamrock-green"></span>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Socials;
