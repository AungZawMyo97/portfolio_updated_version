import ArrowIcon from "./ArrowIcon";
import SocialLinks from "./SocialLinks";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-label">
            <span /> Software engineer · Based in Thailand
          </p>
          <p className="hero-kicker">Hello! I’m</p>
          <h1>
            Aung{" "}
            <br />
            Zaw Myo<span>.</span>
          </h1>
          <p className="hero-description">
            Thoughtful code. Dependable systems.
            <br />
            Backend engineering, .NET, and full stack experiences
            <br className="desktop-break" /> built for the real world.
          </p>
          <div className="hero-actions">
            <a className="button" href="#projects">
              Explore my work <ArrowIcon />
            </a>
            <a className="text-link" href="#contact">
              Let’s talk <ArrowIcon diagonal />
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="portrait-orbit orbit-outer" aria-hidden="true" />
          <div className="portrait-orbit orbit-inner" aria-hidden="true" />
          <div className="portrait-frame">
            <img
              className="hero-portrait"
              src="/profile/dark-portfolio.png"
              alt={`${profile.name} wearing a dark suit`}
              width={360}
              height={360}
              fetchPriority="high"
            />
          </div>
          <span className="portrait-caption">The person behind the code</span>
          <SocialLinks className="hero-socials" />
        </div>
      </div>
      <div className="container hero-bottom">
        <span className="availability">
          <span /> Open to opportunities
        </span>
        <p>
          Backend first. <span>Full stack when it matters.</span>
        </p>
        <a href="#about" className="scroll-link">
          A little about me <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
