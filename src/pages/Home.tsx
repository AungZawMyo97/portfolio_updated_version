import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Tools from "../components/Tools";
import GetInTouch from "../components/GetInTouch";
import ExperienceTimeline from "../components/ExperienceTimeline";
import Education from "../components/Education";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Tools />
      <ExperienceTimeline />
      <Projects />
      <Education />
      <GetInTouch />
    </>
  );
};

export default Home;
