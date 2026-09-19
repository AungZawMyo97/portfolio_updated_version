import useScrollReveal from "../hooks/useScrollReveal";

export default function About() {
  const reveal = useScrollReveal();
  return (
    <section
      id="about"
      className="container section about-section"
      ref={reveal}
    >
      <div>
        <p className="eyebrow">01 / A little about me</p>
        <h2>
          Complex systems.
          <br />
          <em>Clear solutions.</em>
        </h2>
      </div>
      <div className="about-copy">
        <p>
          I’m a software engineer who cares about what happens behind the
          interface. I turn complex business requirements into reliable,
          maintainable software.
        </p>
        <p>
          From financial transaction APIs to enterprise recruitment platforms,
          my work connects thoughtful engineering with everyday needs. I bring a
          backend foundation and ownership from the first requirement to
          production.
        </p>
        <div className="about-facts">
          <div>
            <strong>
              04<span>+</span>
            </strong>
            <span>Years of experience</span>
          </div>
          <div>
            <strong>.NET</strong>
            <span>My engineering foundation</span>
          </div>
          <div>
            <strong>End to end</strong>
            <span>From idea to deployment</span>
          </div>
        </div>
      </div>
    </section>
  );
}
