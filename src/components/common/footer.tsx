import { Link } from "react-router";

const links = [
  {
    name: "fb",
    url: "https://www.facebook.com/nwikeodigwe",
  },
  {
    name: "in",
    url: "https://www.instagram.com/nwikeodigwe",
  },
  {
    name: "li",
    url: "https://www.linkedin.com/in/nwikeodigwe",
  },
  {
    name: "tw",
    url: "https://www.twitter.com/nwikeodigwe",
  },
  {
    name: "gh",
    url: "https://www.github.com/nwikeodigwe",
  },
];
const Footer = () => {
  return (
    <div className="mobile-footer w-full">
      <ul>
        {links.map((link, i) => (
          <li key={i}>
            <Link to={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>

      <p>2025 © Nwike Odigwe</p>
    </div>
  );
};

export default Footer;
