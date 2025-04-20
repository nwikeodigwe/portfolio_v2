import Card from "./card";

const experience = [
  {
    id: 1,
    time: "2024 - Present",
    title: "Senior Software Engineer",
    company: "Google",
    link: "#",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    technologies: ["React", "Typescript", "Node.js", "Express", "Heroku"],
  },
  {
    id: 2,
    time: "2023 - 2024",
    title: "Senior Software Engineer",
    company: "Google",
    link: "#",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    technologies: ["React", "Typescript", "Node.js", "Express", "Heroku"],
  },
  {
    id: 3,
    time: "2022 - 2023",
    title: "Senior Software Engineer",
    company: "Google",
    link: "#",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    technologies: ["React", "Typescript", "Node.js", "Express", "Heroku"],
  },
  {
    id: 4,
    time: "2021 - 2022",
    title: "Senior Software Engineer",
    company: "Google",
    link: "#",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    technologies: ["React", "Typescript", "Node.js", "Express", "Heroku"],
  },
];

const Index = () => {
  return (
    <div className="experience scroll right">
      <h2 className="title">Experience</h2>
      {experience.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Index;
