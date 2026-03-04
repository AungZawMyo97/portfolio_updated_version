import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="bg-pubg-dark py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 text-center">
        <div className="max-w-3xl flex flex-col items-center gap-6">
          <h2 className="text-5xl lg:text-6xl font-bold tracking-wider text-pubg-yellow uppercase">
            Technical Arsenal
          </h2>
          <p className="text-xl text-pubg-text opacity-90 leading-relaxed normal-case">
            The complete loadout. A breakdown of the languages, frameworks, and
            interpersonal skills I've equipped through years of deploying
            scalable, full-stack applications in enterprise environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-10">
          <div className="bg-pubg-panel p-8 rounded-sm border border-pubg-dark shadow-xl text-left hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-pubg-text mb-6 uppercase border-b-2 border-pubg-yellow pb-2 inline-block">
              Enterprise Loadout
            </h3>
            <ul className="flex flex-col gap-4 text-lg">
              <li className="flex justify-between items-center text-pubg-yellow">
                <span>C#</span>
                <span>{inView && <CountUp end={90} duration={2} />}%</span>
              </li>
              <li className="flex justify-between items-center text-pubg-yellow">
                <span>.NET/.NET Core</span>
                <span>{inView && <CountUp end={95} duration={2} />}%</span>
              </li>
              <li className="flex justify-between items-center text-pubg-yellow">
                <span>Umbraco</span>
                <span>{inView && <CountUp end={80} duration={2} />}%</span>
              </li>
              <li className="flex justify-between items-center text-pubg-yellow">
                <span>SQL</span>
                <span>{inView && <CountUp end={85} duration={2} />}%</span>
              </li>
            </ul>
          </div>
          <div className="bg-pubg-panel p-8 rounded-sm border border-pubg-dark shadow-xl text-left hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-pubg-text mb-6 uppercase border-b-2 border-pubg-yellow pb-2 inline-block">
              Field Experience
            </h3>
            <ul className="flex flex-col gap-4 text-lg">
              <li className="flex justify-between items-center text-emerald-400">
                <span>React</span>
                <span>{inView && <CountUp end={75} duration={2} />}%</span>
              </li>
              <li className="flex justify-between items-center text-emerald-400">
                <span>Node</span>
                <span>{inView && <CountUp end={80} duration={2} />}%</span>
              </li>
              <li className="flex justify-between items-center text-emerald-400">
                <span>Express</span>
                <span>{inView && <CountUp end={80} duration={2} />}%</span>
              </li>
              <li className="flex justify-between items-center text-emerald-400">
                <span>Next.js</span>
                <span>{inView && <CountUp end={60} duration={2} />}%</span>
              </li>
            </ul>
          </div>

          <div className="bg-pubg-panel p-8 rounded-sm border border-pubg-dark shadow-xl text-left hover:-translate-y-2 transition-transform duration-300 md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold text-pubg-text mb-6 uppercase border-b-2 border-pubg-yellow pb-2 inline-block">
              Tactical Support
            </h3>
            <ul className="flex flex-col gap-4 text-lg text-pubg-text opacity-90">
              <li className="flex items-center gap-2">
                <span className="text-pubg-yellow">▸</span> Effective
                Communication
              </li>
              <li className="flex items-center gap-2">
                <span className="text-pubg-yellow">▸</span> Team Collaboration
              </li>
              <li className="flex items-center gap-2">
                <span className="text-pubg-yellow">▸</span> Problem Solving
              </li>
              <li className="flex items-center gap-2">
                <span className="text-pubg-yellow">▸</span> Time Management
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
