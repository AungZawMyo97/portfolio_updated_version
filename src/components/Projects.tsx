import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import RemoteDataStatus from "./RemoteDataStatus";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import useRemoteData from "../hooks/useRemoteData";
import type { Project } from "../types/portfolio";

const PROJECTS_ENDPOINT = "/data/projects.json";

const hasProjectLink = (link: string) => link.trim() !== "" && link !== "#";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="tactical-card rounded-sm flex flex-col hover:-translate-y-2 transition-transform duration-300 group">
      <div className="h-48 bg-gray-800 border-b border-pubg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-pubg-yellow/12 mix-blend-screen group-hover:bg-transparent transition-colors duration-300"></div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
      </div>

      <div className="p-6 md:p-8 flex flex-col grow">
        <h3 className="display-title text-3xl font-bold text-pubg-text tracking-wide mb-3">
          {project.title}
        </h3>
        <p className="text-pubg-text opacity-80 leading-relaxed mb-6 grow">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech) => (
            <li
              key={tech}
              className="text-xs font-bold text-pubg-dark bg-pubg-yellow px-2 py-1 rounded-sm uppercase shadow-[0_0_16px_rgba(243,183,59,0.12)]"
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
              className="magnetic-link flex items-center gap-2 text-pubg-text hover:text-pubg-yellow font-semibold"
            >
              <FontAwesomeIcon icon={faGithub} className="text-xl" /> Code
            </a>
          )}
          {hasProjectLink(project.liveLink) && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-link flex items-center gap-2 text-pubg-text hover:text-pubg-yellow font-semibold"
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
  const {
    data: projects,
    isLoading,
    errorMessage,
  } = useRemoteData<Project[]>(
    PROJECTS_ENDPOINT,
    [],
    "Projects are unavailable right now.",
  );

  return (
    <section id="deployments" className="section-frame section-divider bg-pubg-panel/80 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <SectionHeading
          title="Deployments"
          eyebrow="Selected Builds"
          description="A selection of my featured personal builds, architectures, and open-source contributions."
        />

        <RemoteDataStatus
          isLoading={isLoading}
          errorMessage={errorMessage}
          isEmpty={projects.length === 0}
          loadingMessage="Loading projects..."
          emptyMessage="No projects found."
        />

        {!isLoading && !errorMessage && projects.length > 0 && (
          <ScrollReveal
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-4"
            delay={120}
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </ScrollReveal>
        )}
      </div>
    </section>
  );
};

export default Projects;
