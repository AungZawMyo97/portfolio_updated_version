import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useEffect, useState } from "react";

const PROJECTS_ENDPOINT = "/data/projects.json";

type Project = {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  liveLink: string;
  image: string;
};

const fetchProjects = async () => {
  const response = await axios.get<Project[]>(PROJECTS_ENDPOINT);

  return response.data;
};

const hasProjectLink = (link: string) => link.trim() !== "" && link !== "#";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-pubg-panel rounded-sm border border-pubg-dark shadow-xl flex flex-col hover:-translate-y-2 transition-transform duration-300 overflow-hidden group">
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
          {project.techStack.map((tech) => (
            <li
              key={tech}
              className="text-xs font-bold text-pubg-dark bg-pubg-yellow px-2 py-1 rounded-sm uppercase"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex gap-4 mt-auto pt-4 border-t border-gray-700">
          {hasProjectLink(project.githubLink) && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-pubg-text hover:text-pubg-yellow transition-colors font-semibold"
            >
              <FontAwesomeIcon icon={faGithub} className="text-xl" /> Code
            </a>
          )}
          {hasProjectLink(project.liveLink) && (
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
  );
};

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let isMounted = true;

    const loadProjects = async () => {
      try {
        const loadedProjects = await fetchProjects();

        if (isMounted) {
          setProjects(loadedProjects);
        }
      } catch {
        if (isMounted) {
          setErrorMessage("Projects are unavailable right now.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadProjects();

    return () => {
      isMounted = false;
    };
  }, []);

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

        {isLoading && (
          <p className="text-center text-pubg-text opacity-80">
            Loading projects...
          </p>
        )}

        {errorMessage && (
          <p className="text-center text-pubg-text opacity-80">
            {errorMessage}
          </p>
        )}

        {!isLoading && !errorMessage && projects.length === 0 && (
          <p className="text-center text-pubg-text opacity-80">
            No projects found.
          </p>
        )}

        {!isLoading && !errorMessage && projects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-4">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
