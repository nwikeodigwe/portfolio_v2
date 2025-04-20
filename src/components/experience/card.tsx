import { Link } from "react-router";
import { GoLinkExternal } from "react-icons/go";

type Props = {
  time: string;
  title: string;
  company: string;
  link: string;
  description: string;
  technologies: string[];
};
const Card = (props: Props) => {
  return (
    <div className="experience-card ">
      <div>
        <h2>{props.time}</h2>
      </div>
      <div>
        <Link to={props.link} target="_blank">
          <h2>{props.title}</h2>
          <span>
            <GoLinkExternal />
          </span>
        </Link>
        <p className="text-sm">{props.description}</p>
        <div className="flex flex-wrap gap-2 items-center">
          {props.technologies.map((technology) => (
            <span
              key={technology}
              className="bg-shamrock-green/20 text-shamrock-green text-xs px-2 py-1 rounded-md cursor-pointer w-fit hover:bg-shamrock-green/30 transition-all duration-300 ease-in-out"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
