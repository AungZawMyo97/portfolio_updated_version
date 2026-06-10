import {
  faFacebook,
  faYoutube,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeroImage from "../assets/hero.png";

const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/jeraxthefk/",
    label: "Facebook",
    icon: faFacebook,
  },
  {
    href: "https://www.youtube.com/@nostaLgic_pubg",
    label: "YouTube",
    icon: faYoutube,
  },
  {
    href: "https://discord.com/users/938751367978291240",
    label: "Discord",
    icon: faDiscord,
  },
];

const Hero = () => {
  return (
    <section
      id="basecamp"
      className="section-frame section-divider px-6 py-14 lg:py-30"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        <div className="order-2 lg:order-1 flex flex-col gap-6 text-center lg:text-left reveal-up">
          <span className="eyebrow-line justify-center lg:justify-start">
            Backend / Full Stack
          </span>
          <h1 className="display-title text-4xl font-bold tracking-wide">
            I'm <br />
            <span className="text-6xl md:text-8xl text-pubg-yellow">
              Aung Zaw Myo
            </span>
          </h1>
          <p className="text-xl text-pubg-text opacity-90 leading-relaxed normal-case tracking-normal">
            Software Engineer with 4+ years of experience designing and building
            scalable enterprise backend systems and RESTful APIs using{" "}
            <span className="text-pubg-yellow">C#, .NET / ASP.NET Core,</span>{" "}
            and relational databases. Proven ability to translate complex
            financial and data-intensive business logic into high-performance
            full-stack solutions using{" "}
            <span className="text-pubg-yellow">
              React.js, Node.js and Next.js
            </span>
            . Experienced in cloud deployment and modern development workflows,
            leveraging AI-assisted tools to accelerate delivery and improve code
            quality.
          </p>
        </div>
        <div className="hero-portrait order-1 lg:order-2 flex justify-center relative z-10 lg:scale-[1.15] transform transition-transform duration-500 hover:scale-125 reveal-up reveal-delay-1">
          <img
            src={HeroImage}
            alt="Hero Image"
            className="hero-image w-64 lg:w-full max-w-sm object-contain"
          />
        </div>
        <div className="order-3 lg:order-3 flex flex-col gap-6 text-center lg:text-right lg:items-end reveal-up reveal-delay-2">
          <p className="display-title text-4xl font-bold text-pubg-yellow">
            Let's connect!
          </p>
          <p className="text-xl text-pubg-text opacity-90 normal-case tracking-normal">
            I'm open to new opportunities and collaborations. Let's build
            quality software together and make an impact in the tech world. Feel
            free to reach out to me on LinkedIn or check out my projects on
            GitHub!
          </p>
          <ul className="flex gap-8 justify-center lg:justify-end text-4xl mt-4">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="magnetic-link text-pubg-text hover:text-pubg-yellow inline-block"
                >
                  <FontAwesomeIcon icon={link.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
