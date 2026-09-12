import RemoteDataStatus from "./RemoteDataStatus";
import SectionHeading from "./SectionHeading";
import TechStack from "./TechStack";
import ArrowIcon from "./ArrowIcon";
import useRemoteData from "../hooks/useRemoteData";
import useScrollReveal from "../hooks/useScrollReveal";
import type { Experience } from "../types/portfolio";

export default function ExperienceTimeline() {
  const reveal = useScrollReveal();
  const {
    data: experiences,
    isLoading,
    errorMessage,
  } = useRemoteData<Experience[]>(
    "/data/experiences.json",
    [],
    "Experience records are unavailable right now.",
  );
  return (
    <section id="experience" className="section container">
      <SectionHeading
        eyebrow="01 / Professional experience"
        title="Experience that ships."
        description="Building and supporting software where reliability, accuracy, and maintainability matter."
      />
      <RemoteDataStatus
        isLoading={isLoading}
        errorMessage={errorMessage}
        isEmpty={!experiences.length}
        loadingMessage="Loading experience…"
        emptyMessage="No experience records found."
      />
      {experiences.map((experience) => (
        <article ref={reveal} className="experience-row" key={experience.id}>
          <div className="experience-meta">
            <p className="eyebrow">{experience.date}</p>
            <a
              href={experience.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {experience.company}
              <ArrowIcon diagonal />
            </a>
          </div>
          <div className="experience-detail">
            <h3>{experience.role}</h3>
            <p>{experience.description}</p>
            <ul className="responsibilities">
              {experience.keyResponsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <TechStack items={experience.techStack} />
          </div>
        </article>
      ))}
    </section>
  );
}
