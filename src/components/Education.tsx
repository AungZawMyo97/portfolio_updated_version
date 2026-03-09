const educationData = [
  {
    id: 1,
    degree: "Bachelor's Degree",
    institution: "Yangon Technological University (YTU)",
    date: "2014 - 2020",
  },
];

const certificationsData = [
  {
    id: 1,
    title: "Dynamic Web Development with PHP",
    issuer: "GUSTO College",
    link: "https://www.gusto-education.com/",
    date: "2019",
  },
  {
    id: 2,
    title: "OOP Programming with C++",
    issuer: "KMD College",
    link: "https://kmd.edu.mm/",
    date: "2015",
  },
];

const Education = () => {
  return (
    <section className="bg-pubg-panel py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="text-center">
          <h2 className="text-5xl lg:text-6xl font-bold tracking-wider text-pubg-yellow uppercase">
            Academy Record
          </h2>
          <p className="text-xl text-pubg-text opacity-90 mt-4">
            Formal education and foundational technical certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div className="bg-pubg-panel p-8 md:p-10 rounded-sm border border-pubg-dark shadow-xl hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full">
            <h3 className="text-3xl font-bold text-pubg-text uppercase border-b-2 border-pubg-yellow pb-2 inline-block mb-8 self-start">
              Education
            </h3>

            <div className="flex flex-col gap-8">
              {educationData.map((edu) => (
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

          <div className="bg-pubg-panel p-8 md:p-10 rounded-sm border border-pubg-dark shadow-xl hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full">
            <h3 className="text-3xl font-bold text-pubg-text uppercase border-b-2 border-pubg-yellow pb-2 inline-block mb-8 self-start">
              Certifications
            </h3>

            <div className="flex flex-col gap-6">
              {certificationsData.map((cert) => (
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
                    <a href={cert.link} target="_blank">
                      {cert.issuer}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
