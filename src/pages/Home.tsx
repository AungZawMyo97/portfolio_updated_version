import Hero from "../components/Hero";
import Skills from "../components/Skills";
import GetInTouch from "../components/GetInTouch";
import ExperienceTimeline from "../components/ExperienceTimeline";
import Education from "../components/Education";
import Projects from "../components/Projects";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ExperienceTimeline />
      <Education />
      <GetInTouch />
    </>
  );
}
