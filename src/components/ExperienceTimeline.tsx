import RemoteDataStatus from "./RemoteDataStatus";
import SectionHeading from "./SectionHeading";
import useRemoteData from "../hooks/useRemoteData";
import type { Experience } from "../types/portfolio";

const EXPERIENCES_ENDPOINT = "/data/experiences.json";

type ExperienceCardProps = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <div className="mb-12 relative pl-8 md:pl-12 last:mb-0 reveal-up">
      <div className="absolute w-4 h-4 bg-pubg-yellow rounded-full -left-2.25 top-10 shadow-[0_0_18px_rgba(243,183,59,0.8)]"></div>

      <div className="tactical-card p-6 md:p-8 rounded-sm hover:-translate-y-1 transition-transform duration-300">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
          <div>
            <h3 className="display-title text-3xl font-bold text-pubg-text tracking-wide mb-1">
              {experience.role}
            </h3>
            <a
              href={experience.website}
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-link text-lg text-pubg-yellow font-semibold hover:underline"
            >
              {experience.company}
            </a>
          </div>
          <span className="bg-pubg-yellow/10 text-pubg-yellow px-4 py-1.5 rounded-sm text-sm border border-pubg-yellow/20 font-semibold whitespace-nowrap">
            {experience.date}
          </span>
        </div>

        <p className="text-pubg-text italic opacity-80 mb-6 border-l-2 border-gray-600 pl-4">
          {experience.description}
        </p>

        <div className="mb-8">
          <h4 className="text-pubg-text uppercase tracking-widest text-sm font-bold mb-4 opacity-70">
            Mission Details
          </h4>
          <ul className="flex flex-col gap-3 text-pubg-text opacity-90">
            {experience.keyResponsibilities.map((responsibility) => (
              <li key={responsibility} className="flex gap-3 items-start">
                <span className="text-pubg-yellow mt-1 text-sm">{">"}</span>
                <span className="leading-relaxed">{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-6 border-t border-gray-700">
          <ul className="flex flex-wrap gap-2">
            {experience.techStack.map((tech) => (
              <li
                key={tech}
                className="text-xs font-bold tracking-wider text-pubg-text bg-pubg-dark px-3 py-1.5 rounded-sm uppercase border border-gray-700"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ExperienceTimeline = () => {
  const {
    data: experiences,
    isLoading,
    errorMessage,
  } = useRemoteData<Experience[]>(
    EXPERIENCES_ENDPOINT,
    [],
    "Experience records are unavailable right now.",
  );

  return (
    <section
      className="section-frame section-divider bg-pubg-dark/95 py-20 px-6"
      id="service-record"
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        <SectionHeading
          title="Service Record"
          eyebrow="Career Timeline"
          description="A timeline of my professional deployments and enterprise experience."
          className="mb-8"
        />

        <RemoteDataStatus
          isLoading={isLoading}
          errorMessage={errorMessage}
          isEmpty={experiences.length === 0}
          loadingMessage="Loading experience records..."
          emptyMessage="No experience records found."
        />

        {!isLoading && !errorMessage && experiences.length > 0 && (
          <div className="relative border-l-2 border-pubg-yellow/30 ml-3 md:ml-0">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
