import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-pubg-panel/80 backdrop-blur-md shadow-lg border-pubg-dark"
          : "bg-pubg-panel border-pubg-panel shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wider">
          <a href="#basecamp" onClick={closeMenu}>
            AZM{" "}
            <span className="text-pubg-yellow inline-block hover:-translate-y-1 transform duration-200">
              nostaLgic
            </span>
          </a>
        </div>

        <ul className="hidden md:flex gap-8 text-md">
          <li>
            <a href="/" className="hover:text-pubg-yellow transition-colors">
              Basecamp
            </a>
          </li>
          <li>
            <a
              href="#loadout"
              className="hover:text-pubg-yellow transition-colors"
            >
              Loadout
            </a>
          </li>
          <li>
            <a
              href="#service-record"
              className="hover:text-pubg-yellow transition-colors"
            >
              Service Record
            </a>
          </li>
          <li>
            <a
              href="#deployments"
              className="hover:text-pubg-yellow transition-colors"
            >
              Deployments
            </a>
          </li>
          <li>
            <a
              href="#comms"
              className="hover:text-pubg-yellow transition-colors"
            >
              Comms
            </a>
          </li>
        </ul>

        <div className="hidden md:flex gap-6 text-2xl">
          <a
            href="https://github.com/AungZawMyo97"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pubg-yellow transition-colors hover:-translate-y-1 transform duration-200"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/aungzawmyo-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pubg-yellow transition-colors hover:-translate-y-1 transform duration-200"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>

        <button
          className="md:hidden text-2xl text-pubg-text hover:text-pubg-yellow transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
        </button>

        <div
          className={`md:hidden absolute top-full left-0 w-full bg-pubg-panel border-b border-pubg-dark shadow-xl flex flex-col items-start px-6 gap-6 text-md overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? "max-h-100 py-6 opacity-100 border-b "
              : "max-h-0 py-0 opacity-0 border-b-0"
          }`}
        >
          <a
            href="#basecamp"
            onClick={closeMenu}
            className="hover:text-pubg-yellow transition-colors"
          >
            Basecamp
          </a>
          <a
            href="#loadout"
            onClick={closeMenu}
            className="hover:text-pubg-yellow transition-colors"
          >
            Loadout
          </a>
          <a
            href="#service-record"
            onClick={closeMenu}
            className="hover:text-pubg-yellow transition-colors"
          >
            Service Record
          </a>
          <a
            href="#deployments"
            onClick={closeMenu}
            className="hover:text-pubg-yellow transition-colors"
          >
            Deployments
          </a>
          <a
            href="#comms"
            onClick={closeMenu}
            className="hover:text-pubg-yellow transition-colors"
          >
            Comms
          </a>

          <div className="flex gap-8 mt-4">
            <a
              href="https://github.com/AungZawMyo97"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pubg-yellow transition-colors"
            >
              <FontAwesomeIcon icon={faGithub} className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/aungzawmyo-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pubg-yellow transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
