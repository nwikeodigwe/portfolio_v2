import { useLocation } from "react-router";
import Nav from "./nav";
import Socials from "./socials";

const Sidebar = () => {
  const location = useLocation();
  return (
    <div
      className={`sidebar left ${
        location.pathname !== "/" && "sidebar-mobile"
      }`}
    >
      <div>
        <h1>Nwike Odigwe</h1>
        <span>Software Developer</span>
        <p>
          I build accessible, user-centric products, prioritizing user
          satisfaction and inclusivity at every stage of the process.
        </p>
        <div className="nav">
          <Nav />
        </div>
      </div>
      <Socials />
    </div>
  );
};

export default Sidebar;
