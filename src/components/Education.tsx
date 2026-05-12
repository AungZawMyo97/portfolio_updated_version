import useRemoteData from "../hooks/useRemoteData";

const EDUCATION_ENDPOINT = "/data/education.json";

type EducationRecord = {
  id: number;
  degree: string;
  institution: string;
  date: string;
};

type Certification = {
  id: number;
  title: string;
  issuer: string;
  link: string;
  date: string;
};

type EducationContent = {
  education: EducationRecord[];
  certifications: Certification[];
};

const EMPTY_EDUCATION_CONTENT: EducationContent = {
  education: [],
  certifications: [],
};

type EducationCardProps = {
  education: EducationRecord[];
};

const EducationCard = ({ education }: EducationCardProps) => {
  return (
    <div className="bg-pubg-panel p-8 md:p-10 rounded-sm border border-pubg-dark shadow-xl hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full">
      <h3 className="text-3xl font-bold text-pubg-text uppercase border-b-2 border-pubg-yellow pb-2 inline-block mb-8 self-start">
        Education
      </h3>

      <div className="flex flex-col gap-8">
        {education.map((edu) => (
          <div key={edu.id} className="flex flex-col gap-2">
            <div className="flex justify-between items-start gap-4">
              <h4 className="text-2xl font-bold text-pubg-text tracking-wide">
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
    <div className="bg-pubg-panel p-8 md:p-10 rounded-sm border border-pubg-dark shadow-xl hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full">
      <h3 className="text-3xl font-bold text-pubg-text uppercase border-b-2 border-pubg-yellow pb-2 inline-block mb-8 self-start">
        Certifications
      </h3>

      <div className="flex flex-col gap-6">
        {sortedCertifications.map((cert) => (
          <div
            key={cert.id}
            className="flex flex-col gap-2 pb-6 border-b border-gray-700 last:border-0 last:pb-0"
          >
            <div className="flex justify-between items-start gap-4">
              <h4 className="text-xl font-bold text-pubg-text tracking-wide leading-tight">
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
    <section className="bg-pubg-dark py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="text-center">
          <h2 className="text-5xl lg:text-6xl font-bold tracking-wider text-pubg-yellow uppercase">
            Academy Record
          </h2>
          <p className="text-xl text-pubg-text opacity-90 mt-4">
            Formal education and foundational technical certifications.
          </p>
        </div>

        {isLoading && (
          <p className="text-center text-pubg-text opacity-80">
            Loading education records...
          </p>
        )}

        {errorMessage && (
          <p className="text-center text-pubg-text opacity-80">
            {errorMessage}
          </p>
        )}

        {!isLoading && !errorMessage && !hasEducationRecords && (
          <p className="text-center text-pubg-text opacity-80">
            No education records found.
          </p>
        )}

        {!isLoading && !errorMessage && hasEducationRecords && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
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
