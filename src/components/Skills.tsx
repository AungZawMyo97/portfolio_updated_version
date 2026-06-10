import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import ScrollReveal from "./ScrollReveal";

type SkillScore = {
  label: string;
  score: number;
};

type SkillGroup = {
  title: string;
  textClassName: string;
  skills: SkillScore[];
};

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Enterprise Loadout",
    textClassName: "text-pubg-yellow",
    skills: [
      { label: "C#", score: 90 },
      { label: ".NET/.NET Core", score: 95 },
      { label: "Umbraco", score: 80 },
      { label: "SQL", score: 85 },
    ],
  },
  {
    title: "Field Experience",
    textClassName: "text-emerald-400",
    skills: [
      { label: "React", score: 75 },
      { label: "Node", score: 80 },
      { label: "Express", score: 80 },
      { label: "Next.js", score: 60 },
    ],
  },
];

const SUPPORT_SKILLS = [
  "Effective Communication",
  "Team Collaboration",
  "Problem Solving",
  "Time Management",
];

type SkillGroupCardProps = {
  group: SkillGroup;
  shouldAnimate: boolean;
};

const SkillGroupCard = ({ group, shouldAnimate }: SkillGroupCardProps) => {
  return (
    <div className="tactical-card p-8 rounded-sm text-left hover:-translate-y-2 transition-transform duration-300">
      <h3 className="display-title text-3xl font-bold text-pubg-text mb-6 uppercase border-b-2 border-pubg-yellow pb-2 inline-block">
        {group.title}
      </h3>
      <ul className="flex flex-col gap-4 text-lg">
        {group.skills.map((skill) => (
          <li
            key={skill.label}
            className={`flex justify-between items-center ${group.textClassName}`}
          >
            <span>{skill.label}</span>
            <span>
              {shouldAnimate ? <CountUp end={skill.score} duration={2} /> : 0}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className="section-frame section-divider bg-pubg-dark/95 py-20 px-6"
      id="loadout"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 text-center">
        <ScrollReveal className="max-w-3xl flex flex-col items-center gap-6" variant="pop">
          <span className="eyebrow-line">Capability Matrix</span>
          <h2 className="display-title text-5xl lg:text-7xl font-bold tracking-wider text-pubg-yellow uppercase">
            Technical Arsenal
          </h2>
          <p className="text-xl text-pubg-text opacity-90 leading-relaxed normal-case">
            The complete loadout. A breakdown of the languages, frameworks, and
            interpersonal skills I've equipped through years of deploying
            scalable, full-stack applications in enterprise environments.
          </p>
        </ScrollReveal>

        <ScrollReveal
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-10"
          delay={120}
        >
          {SKILL_GROUPS.map((group) => (
            <SkillGroupCard
              key={group.title}
              group={group}
              shouldAnimate={inView}
            />
          ))}

          <div className="tactical-card p-8 rounded-sm text-left hover:-translate-y-2 transition-transform duration-300 md:col-span-2 lg:col-span-1">
            <h3 className="display-title text-3xl font-bold text-pubg-text mb-6 uppercase border-b-2 border-pubg-yellow pb-2 inline-block">
              Tactical Support
            </h3>
            <ul className="flex flex-col gap-4 text-lg text-pubg-text opacity-90">
              {SUPPORT_SKILLS.map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <span className="text-pubg-yellow">▸</span> {skill}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Skills;
