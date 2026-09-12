import Hero from "../components/Hero";
import Skills from "../components/Skills";
import GetInTouch from "../components/GetInTouch";
import ExperienceTimeline from "../components/ExperienceTimeline";
import Education from "../components/Education";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <ExperienceTimeline />
      <Projects />
      <Skills />
      <Education />
      <GetInTouch />
    </>
  );
}
