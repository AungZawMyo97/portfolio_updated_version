import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import ScrimManagerImg from "../assets/scrim-manager.png";
import SdlBalanceTrackerImg from "../assets/sdl_balance_tracker.png";
import KingOfCoffeeImg from "../assets/king_of_coffee.png";

const projectsData = [
  {
    id: 1,
    title: "Daily Balance Tracker",
    description:
      "A high-performance admin dashboard for exchange system to calculate daily exchange transactions and record In and Out transactions, along with profit calculation.",
    techStack: [
      "Next.js",
      "Postgres SQL",
      "TypeScript",
      "JWT",
      "Authentication",
    ],
    githubLink: "https://github.com/AungZawMyo97/sandar_lin_balance_tracker",
    liveLink: "#",
    image: SdlBalanceTrackerImg,
  },
  {
    id: 2,
    title: "Esports Scrim Manager",
    description:
      "An online management tool for Esports admin in PUBG: Battlegrounds and PUBG: Mobile which can calculate match ranking points just by uploading match result screenshots.",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Postgres SQL",
      "Authentication",
      "JWT",
    ],
    githubLink: "https://github.com/AungZawMyo97/scrim-manager",
    liveLink: "https://scrim-manager-mm.vercel.app/",
    image: ScrimManagerImg,
  },
  {
    id: 3,
    title: "King Of Coffee Pattaya",
    description:
      "A beautiful and eyecatching website for local coffee shop, designed based on the bamboo theme.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Lucide React",
      "Framer Motion",
    ],
    githubLink: "https://github.com/AungZawMyo97/king_of_coffee_pratamnak_soi5",
    liveLink: "#",
    image: KingOfCoffeeImg,
  },
];

const Projects = () => {
  return (
    <section id="deployments" className="bg-pubg-panel py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="text-center">
          <h2 className="text-5xl lg:text-6xl font-bold tracking-wider text-pubg-yellow uppercase">
            Deployments
          </h2>
          <p className="text-xl text-pubg-text opacity-90 mt-4 max-w-2xl mx-auto">
            A selection of my featured personal builds, architectures, and
            open-source contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-4">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-pubg-panel rounded-sm border border-pubg-dark shadow-xl flex flex-col hover:-translate-y-2 transition-transform duration-300 overflow-hidden group"
            >
              <div className="h-48 bg-gray-800 border-b border-pubg-dark relative overflow-hidden">
                <div className="absolute inset-0 bg-pubg-yellow/10 group-hover:bg-transparent transition-colors duration-300"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 md:p-8 flex flex-col grow">
                <h3 className="text-2xl font-bold text-pubg-text tracking-wide mb-3">
                  {project.title}
                </h3>
                <p className="text-pubg-text opacity-80 leading-relaxed mb-6 grow">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, index) => (
                    <li
                      key={index}
                      className="text-xs font-bold text-pubg-dark bg-pubg-yellow px-2 py-1 rounded-sm uppercase"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4 mt-auto pt-4 border-t border-gray-700">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-pubg-text hover:text-pubg-yellow transition-colors font-semibold"
                  >
                    <FontAwesomeIcon icon={faGithub} className="text-xl" /> Code
                  </a>
                  {project.liveLink !== "#" && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-pubg-text hover:text-pubg-yellow transition-colors font-semibold"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
