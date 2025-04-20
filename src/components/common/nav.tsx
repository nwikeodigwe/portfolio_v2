import { NavLink, Link } from "react-router";

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
    <nav>
      <ul>
        {links.map((link, i) => (
          <li key={i}>
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
                  <span className={`${isActive ? "text-shamrock-green" : ""}`}>
                    {link.name}
                  </span>
                </>
              )}
            </NavLink>
          </li>
        ))}

        <li>
          <Link to="mailto:nwikeodigwe@outlook.com" className="btn">
            Get in touch
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
