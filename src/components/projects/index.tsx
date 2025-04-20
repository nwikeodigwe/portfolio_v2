import Card from "./card";

const projects = [
  {
    id: 1,
    image: "#",
    title: "Game hub utilizing RAWG API and React",
    description:
      "A game hub that allows users to search for games, view game details, and save games to their favorites list. Utilizes the RAWG API to fetch game data.",
    technologies: ["React", "HTML", "Chakra UI"],
    link: "https://game-dev-six.vercel.app/",
    repository: "https://github.com/nwikeodigwe/Game-dev",
  },
  {
    id: 2,
    image: "#",
    title: "Language Learning App",
    description:
      "A modern language learning application that helps users practice pronunciation and vocabulary through speech recognition and text-to-speech capabilities.",
    technologies: ["React", "Tailwind CSS"],
    link: "https://esmee.ws",
    repository: null,
  },
  {
    id: 3,
    image: "#",
    title: "Wardrobe Fitter App API",
    description:
      "Wardrobe Fitter is a modern wardrobe management application that helps users organize, track, and style their clothing items",
    technologies: ["Express", "Node.js", "MYSQL"],
    link: null,
    repository: "https://github.com/nwikeodigwe/fitter",
  },
  {
    id: 4,
    image: "#",
    title: "Language Learning App",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    technologies: ["React", "Express", "MongoDB"],
    link: "https://www.google.com",
    repository: "https://www.github.com",
  },
  {
    id: 5,
    image: "#",
    title: "Syncwave studios",
    description:
      "Syncwave studios is a modern music production studio that helps users create, edit, and share their music.",
    technologies: ["React", "Express", "MongoDB"],
    link: "https://syncwave-phi.vercel.app/",
    repository: null,
  },
];

const Index = () => {
  return (
    <div className="projects scroll right">
      <h2 className="title">Projects</h2>
      {projects.map((project) => (
        <Card key={project.id} {...project} />
      ))}
    </div>
  );
};

export default Index;
