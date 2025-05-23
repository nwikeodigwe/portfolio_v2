import { NavLink, Link } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { item, nav } from "../../animation/container";

const links = [
  {
    name: "About",
    link: "/",
  },
  {
    name: "Experience",
    link: "/experience",
  },
  {
    name: "Projects",
    link: "/projects",
  },
];

const Nav = () => {
  return (
    <AnimatePresence>
      <nav>
        <motion.ul
          variants={nav}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {links.map((link, i) => (
            <motion.li key={i} variants={item}>
              <NavLink
                to={link.link}
                className={({ isActive }) =>
                  `group nav-link ${isActive ? "text-shamrock-green" : ""}`
                }
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`${
                        isActive ? "bg-shamrock-green w-20" : "bg-silver w-10"
                      }`}
                    ></span>
                    <span
                      className={`${isActive ? "text-shamrock-green" : ""}`}
                    >
                      {link.name}
                    </span>
                  </>
                )}
              </NavLink>
            </motion.li>
          ))}

          <motion.li variants={item}>
            <Link to="mailto:nwikeodigwe@outlook.com" className="btn">
              Get in touch
            </Link>
          </motion.li>
        </motion.ul>
      </nav>
    </AnimatePresence>
  );
};

export default Nav;
