import RemoteDataStatus from "./RemoteDataStatus";
import SectionHeading from "./SectionHeading";
import useRemoteData from "../hooks/useRemoteData";
import type {
  Certification,
  EducationContent,
  EducationRecord,
} from "../types/portfolio";

const EMPTY_EDUCATION_CONTENT: EducationContent = {
  education: [],
  certifications: [],
};

const EDUCATION_ENDPOINT = "/data/education.json";

type EducationCardProps = {
  education: EducationRecord[];
};

const EducationCard = ({ education }: EducationCardProps) => {
  return (
    <div className="tactical-card p-8 md:p-10 rounded-sm hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full">
      <h3 className="display-title text-4xl font-bold text-pubg-text uppercase border-b-2 border-pubg-yellow pb-2 inline-block mb-8 self-start">
        Education
      </h3>

      <div className="flex flex-col gap-8">
        {education.map((edu) => (
          <div key={edu.id} className="flex flex-col gap-2">
            <div className="flex justify-between items-start gap-4">
              <h4 className="display-title text-3xl font-bold text-pubg-text tracking-wide">
                {edu.degree}
              </h4>
              <span className="bg-pubg-yellow/10 text-pubg-yellow px-3 py-1 rounded-sm text-sm border border-pubg-yellow/20 font-semibold whitespace-nowrap mt-1">
                {edu.date}
              </span>
            </div>
            <p className="text-lg text-pubg-yellow font-semibold">
              {edu.institution}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

type CertificationsCardProps = {
  certifications: Certification[];
};

const getCertificationYear = (certification: Certification) => {
  const yearMatch = certification.date.match(/\d{4}/);

  return yearMatch ? Number(yearMatch[0]) : 0;
};

const CertificationsCard = ({ certifications }: CertificationsCardProps) => {
  const sortedCertifications = [...certifications].sort(
    (currentCertification, nextCertification) =>
      getCertificationYear(nextCertification) -
      getCertificationYear(currentCertification),
  );

  return (
    <div className="tactical-card p-8 md:p-10 rounded-sm hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full">
      <h3 className="display-title text-4xl font-bold text-pubg-text uppercase border-b-2 border-pubg-yellow pb-2 inline-block mb-8 self-start">
        Certifications
      </h3>

      <div className="flex flex-col gap-6">
        {sortedCertifications.map((cert) => (
          <div
            key={cert.id}
            className="flex flex-col gap-2 pb-6 border-b border-gray-700 last:border-0 last:pb-0"
          >
            <div className="flex justify-between items-start gap-4">
              <h4 className="display-title text-2xl font-bold text-pubg-text tracking-wide leading-tight">
                {cert.title}
              </h4>
              <span className="bg-pubg-dark text-pubg-text px-3 py-1 rounded-sm text-sm border border-gray-700 font-semibold whitespace-nowrap mt-1">
                {cert.date}
              </span>
            </div>
            <p className="text-pubg-yellow font-semibold opacity-90">
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                {cert.issuer}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Education = () => {
  const {
    data: educationContent,
    isLoading,
    errorMessage,
  } = useRemoteData<EducationContent>(
    EDUCATION_ENDPOINT,
    EMPTY_EDUCATION_CONTENT,
    "Education records are unavailable right now.",
  );

  const hasEducationRecords =
    educationContent.education.length > 0 ||
    educationContent.certifications.length > 0;

  return (
    <section className="section-frame section-divider bg-pubg-dark/95 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <SectionHeading
          title="Academy Record"
          eyebrow="Credentials"
          description="Formal education and foundational technical certifications."
        />

        <RemoteDataStatus
          isLoading={isLoading}
          errorMessage={errorMessage}
          isEmpty={!hasEducationRecords}
          loadingMessage="Loading education records..."
          emptyMessage="No education records found."
        />

        {!isLoading && !errorMessage && hasEducationRecords && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full reveal-up reveal-delay-1">
            <EducationCard education={educationContent.education} />
            <CertificationsCard
              certifications={educationContent.certifications}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;
