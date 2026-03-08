const experiencesData = [
  {
    id: 1,
    role: ".NET Core Developer",
    company: "Recsite Design",
    website: "https://www.recsitedesign.com/",
    date: "June 2024 - Present",
    description:
      "Leading the end-to-end development and deployment of enterprise recruitment websites using Umbraco CMS and .NET Core.",
    keyResponsibilities: [
      "Architected custom Umbraco backoffice sections and data fields, seamlessly integrating frontend assets into dynamic Razor views.",
      "Managed the complete deployment pipeline, handling initial IIS test server configurations, client update iterations, and final live production rollouts.",
      "Acted as the primary technical lead on the Support Desk, translating complex client requirements into actionable technical solutions and resolving defects.",
    ],
    techStack: [
      "C#",
      ".NET Core",
      "Umbraco CMS",
      "Razor Pages",
      "IIS",
      "Microsoft SQL Server",
    ],
  },
  {
    id: 2,
    role: "Backend Developer / .NET Specialist",
    company: "uab Bank Myanmar",
    website: "https://www.uab.com.mm/",
    date: "March 2022 - June 2024",
    description:
      "Engineered and maintained mission-critical backend APIs and MVC web portals for major fintech applications, including uabpay and multiple partner mobile wallets.",
    keyResponsibilities: [
      "Spearheaded the end-to-end integration of the AungBarLay lottery payment system into uabpay, handling third-party API communication, dynamic user registration, and secure ticket transactions.",
      "Collaborated heavily with the Core Banking team to integrate secure transaction APIs and engineered an automated Balance Confirmation system with dynamic PDF generation and email delivery.",
      "Developed complex, time-sensitive campaign logic for a user referral reward system that calculated points on monthly, quarterly, and yearly cycles.",
      "Maintained and optimized high-volume financial transaction APIs, ensuring absolute data integrity, correct workflow states, and accurate balance updates across merchant and consumer wallets.",
    ],
    techStack: [
      "C#",
      ".NET Framework",
      ".NET Core",
      "ASP.NET MVC",
      "RESTful APIs",
      "IIS",
      "MySQL",
      "AWS",
    ],
  },
];

const ExperienceTimeline = () => {
  return (
    <section className="bg-pubg-dark py-20 px-6" id="service-record">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        <div className="text-center md:text-left mb-8">
          <h2 className="text-5xl lg:text-6xl font-bold tracking-wider text-pubg-yellow uppercase">
            Service Record
          </h2>
          <p className="text-xl text-pubg-text opacity-90 mt-4">
            A timeline of my professional deployments and enterprise experience.
          </p>
        </div>

        <div className="relative border-l-2 border-pubg-yellow/30 ml-3 md:ml-0">
          {experiencesData.map((exp) => (
            <div
              key={exp.id}
              className="mb-12 relative pl-8 md:pl-12 last:mb-0"
            >
              <div className="absolute w-4 h-4 bg-pubg-yellow rounded-full -left-2.25 top-10 shadow-[0_0_10px_rgba(229,168,35,0.8)]"></div>

              <div className="bg-pubg-panel p-6 md:p-8 rounded-sm border border-pubg-dark shadow-xl hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-pubg-text tracking-wide mb-1">
                      {exp.role}
                    </h3>
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-pubg-yellow font-semibold hover:underline"
                    >
                      {exp.company}
                    </a>
                  </div>
                  <span className="bg-pubg-yellow/10 text-pubg-yellow px-4 py-1.5 rounded-sm text-sm border border-pubg-yellow/20 font-semibold whitespace-nowrap">
                    {exp.date}
                  </span>
                </div>

                <p className="text-pubg-text italic opacity-80 mb-6 border-l-2 border-gray-600 pl-4">
                  {exp.description}
                </p>
                <div className="mb-8">
                  <h4 className="text-pubg-text uppercase tracking-widest text-sm font-bold mb-4 opacity-70">
                    Mission Details
                  </h4>
                  <ul className="flex flex-col gap-3 text-pubg-text opacity-90">
                    {exp.keyResponsibilities.map((resp, index) => (
                      <li key={index} className="flex gap-3 items-start">
                        <span className="text-pubg-yellow mt-1 text-sm">▸</span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 border-t border-gray-700">
                  <ul className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, index) => (
                      <li
                        key={index}
                        className="text-xs font-bold tracking-wider text-pubg-text bg-pubg-dark px-3 py-1.5 rounded-sm uppercase border border-gray-700"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
