import { useState } from "react";
import RemoteDataStatus from "./RemoteDataStatus";
import SectionHeading from "./SectionHeading";
import TechStack from "./TechStack";
import ArrowIcon from "./ArrowIcon";
import useRemoteData from "../hooks/useRemoteData";
import useScrollReveal from "../hooks/useScrollReveal";
import type { Project } from "../types/portfolio";

const hasProjectLink = (link: string) => /^https?:\/\//i.test(link.trim());

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reveal = useScrollReveal((index % 2) * 100);
  return (
    <article ref={reveal} className="project-card">
      <div className="project-image">
        <img
          src={project.image}
          alt={`${project.title} application screenshot`}
          loading="lazy"
          decoding="async"
        />
        <span className="project-number">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <TechStack items={project.techStack} />
        {project.demoCredentials ? (
          <details className="demo-credentials">
            <summary>Demo account</summary>
            <p>
              Username: <code>{project.demoCredentials.username}</code>
              <br />
              Password: <code>{project.demoCredentials.password}</code>
            </p>
          </details>
        ) : null}
        <div className="project-links">
          {hasProjectLink(project.githubLink) ? (
            <a
              className="text-link"
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source for ${project.title}`}
            >
              View source <ArrowIcon diagonal />
            </a>
          ) : null}
          {hasProjectLink(project.liveLink) ? (
            <a
              className="text-link"
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo of ${project.title}`}
            >
              Live demo <ArrowIcon diagonal />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const {
    data: projects,
    isLoading,
    errorMessage,
  } = useRemoteData<Project[]>(
    "/data/projects.json",
    [],
    "Projects are unavailable right now.",
  );
  const visibleProjects = showAll ? projects : projects.slice(0, 4);
  return (
    <section id="projects" className="projects-section">
      <div className="section container">
        <SectionHeading
          eyebrow="02 / Selected projects"
          title="Ideas, put into practice."
          description="Independent projects exploring business workflows, useful tools, and experiences for the web."
        />
        <RemoteDataStatus
          isLoading={isLoading}
          errorMessage={errorMessage}
          isEmpty={!projects.length}
          loadingMessage="Loading projects…"
          emptyMessage="No projects found."
        />
        <div className="project-grid" id="project-list">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        {projects.length > 4 ? (
          <div className="projects-more">
            <button
              type="button"
              className="button button-outline"
              aria-expanded={showAll}
              aria-controls="project-list"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll
                ? "Show selected projects"
                : `View all ${projects.length} projects`}
              <span aria-hidden="true">{showAll ? "−" : "+"}</span>
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
