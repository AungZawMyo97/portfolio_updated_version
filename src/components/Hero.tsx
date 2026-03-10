import {
  faFacebook,
  faYoutube,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeroImage from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10 lg:py-30">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        <div className="order-2 lg:order-1 flex flex-col gap-6 text-center lg:text-left">
          <h1 className="text-3xl font-bold tracking-wide">
            I'm <br />
            <span className="text-6xl text-pubg-yellow">Aung Zaw Myo</span>
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
            . Experienced in cloud deployment and modern development workfl ows,
            leveraging AI-assisted tools to accelerate delivery and improve code
            quality.
          </p>
        </div>
        <div className="order-1 lg:order-2 flex justify-center relative z-10 lg:scale-125 transform transition-transform duration-500 hover:scale-150">
          <img
            src={HeroImage}
            alt="Hero Image"
            className="w-64 lg:w-full max-w-sm object-contain drop-shadow-[0_20px_20px_rgba(229,168,35,0.15)]"
          />
        </div>
        <div className="order-3 lg:order-3 flex flex-col gap-6 text-center lg:text-right lg:items-end">
          <p className="text-3xl font-bold text-pubg-yellow">Let's connect!</p>
          <p className="text-xl text-pubg-text opacity-90 normal-case tracking-normal">
            I'm open to new opportunities and collaborations. Let's build
            quality software together and make an impact in the tech world. Feel
            free to reach out to me on LinkedIn or check out my projects on
            GitHub!
          </p>
          <ul className="flex gap-8 justify-center lg:justify-end text-4xl mt-4">
            <li>
              <a
                href="https://www.facebook.com/jeraxthefk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pubg-text hover:text-pubg-yellow transitio-colors inline-block hover:translate-y-2 transform duration-300"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@nostaLgic_pubg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pubg-text hover:text-pubg-yellow transitio-colors inline-block hover:translate-y-2 transform duration-300"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </li>
            <li>
              <a
                href="https://discord.com/users/938751367978291240"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pubg-text hover:text-pubg-yellow transitio-colors inline-block hover:translate-y-2 transform duration-300"
              >
                <FontAwesomeIcon icon={faDiscord} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
