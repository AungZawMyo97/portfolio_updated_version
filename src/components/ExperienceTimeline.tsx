import SectionHeading from "./SectionHeading";
import TechStack from "./TechStack";
import ArrowIcon from "./ArrowIcon";
import { experiences } from "../data/portfolio";
import useScrollReveal from "../hooks/useScrollReveal";

export default function ExperienceTimeline() {
  const reveal = useScrollReveal();
  return (
    <section id="experience" className="section container">
      <SectionHeading
        eyebrow="04 / The journey so far"
        title="Experience with purpose."
        description="Building and supporting software where reliability, accuracy, and maintainability matter."
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
