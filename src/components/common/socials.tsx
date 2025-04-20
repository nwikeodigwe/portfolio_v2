import { Link } from "react-router";

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
    <div className="socials">
      <h2>Follow me</h2>
      <ul>
        {socials.map((social, i) => (
          <li key={i}>
            <Link to={social.link} className="group">
              <span>{social.name}</span>
              <span className="bg-silver/50 group-hover:bg-shamrock-green after:group-hover:bg-shamrock-green"></span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
