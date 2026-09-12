import ArrowIcon from "./ArrowIcon";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section id="about" className="hero container">
      <div className="hero-intro">
        <span className="eyebrow">
          Software engineer / Backend & full stack
        </span>
        <span className="availability">
          <span /> Open to opportunities
        </span>
      </div>
      <div className="hero-grid">
        <div>
          <p className="hero-name">Hello, I’m Aung Zaw Myo.</p>
          <h1>
            Complex systems.
            <br />
            <span>Clear solutions.</span>
          </h1>
          <p className="hero-description">
            I build reliable backend systems and thoughtful web applications.
            Over 4 years working across financial services, enterprise
            platforms, and the full development lifecycle.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore my work <ArrowIcon />
            </a>
            <a
              className="text-link"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <ArrowIcon diagonal />
            </a>
          </div>
        </div>
        <aside className="profile-note" aria-label="Engineering focus">
          <div className="note-heading">
            <span className="eyebrow">My focus</span>
            <span className="note-symbol" aria-hidden="true">
              {"{ }"}
            </span>
          </div>
          <h2>
            Built with care.
            <br />
            Ready for the real world.
          </h2>
          <p>
            From payment integrations to production deployments, I turn business
            requirements into software people can depend on.
          </p>
          <dl>
            <div>
              <dt>Specialty</dt>
              <dd>C# / .NET / REST APIs</dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>Thailand · Open to remote</dd>
            </div>
          </dl>
          <a
            className="text-link"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn <ArrowIcon diagonal />
          </a>
        </aside>
      </div>
      <div className="hero-summary">
        <div>
          <strong>
            04<span>+</span>
          </strong>
          <span>Years of professional experience</span>
        </div>
        <div>
          <strong>Backend first.</strong>
          <span>Full stack when it matters.</span>
        </div>
        <a href="#experience">
          A closer look at my experience <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
