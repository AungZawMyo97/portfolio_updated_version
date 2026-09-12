import SectionHeading from "./SectionHeading";
import TechStack from "./TechStack";
import Tools from "./Tools";
import useScrollReveal from "../hooks/useScrollReveal";

const SKILL_GROUPS = [
  {
    title: "Backend engineering",
    description:
      "APIs, financial workflows, and enterprise applications with a focus on reliable data and clear business logic.",
    skills: ["C#", ".NET / ASP.NET Core", "REST APIs", "Umbraco", "SQL"],
  },
  {
    title: "Full stack development",
    description:
      "Responsive interfaces connected to practical backend services, from dashboards to complete web applications.",
    skills: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS"],
  },
  {
    title: "Delivery & collaboration",
    description:
      "Taking work from requirements through deployment, collaborating across teams, and supporting live systems.",
    skills: ["IIS", "AWS", "Git", "API integration", "Production support"],
  },
];
export default function Skills() {
  const reveal = useScrollReveal();
  return (
    <section id="expertise" className="section container">
      <SectionHeading
        eyebrow="03 / Technical expertise"
        title="The right tools. A solid foundation."
        description="A backend foundation, a full stack perspective, and ownership from first requirement to production."
      />
      <div className="skills-grid">
        {SKILL_GROUPS.map((group, index) => (
          <article
            ref={reveal}
            data-reveal-delay={index * 90}
            className="skill-card"
            key={group.title}
          >
            <span className="skill-index">0{index + 1}</span>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <TechStack items={group.skills} />
          </article>
        ))}
      </div>
      <Tools />
    </section>
  );
}
