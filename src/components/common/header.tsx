import React, { useEffect } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";
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

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-30">
        <div className="flex justify-end items-center">
          <button
            onClick={handleClick}
            className={`text-2xl mr-10 mt-10 ${
              isOpen ? "text-white" : "text-shamrock-green"
            }`}
          >
            {isOpen ? <MdClose /> : <RiMenu3Line />}
          </button>
        </div>
      </header>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-10" onClick={handleClick} />
      )}
      <div
        className={`fixed flex flex-col justify-start items-center top-0 right-0 h-screen w-[60vw] bg-shamrock-green z-20 drop-shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center gap-10 mt-[20vh] text-white">
          {links.map((link, i) => (
            <li key={i}>
              <NavLink
                to={link.link}
                className="hover:border-b-2 border-white transition-all duration-300 ease-in-out"
                onClick={handleLinkClick}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              to="mailto:nwikeodigwe@outlook.com"
              className="bg-white text-shamrock-green py-3 px-4"
              onClick={handleLinkClick}
            >
              Get in touch
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
