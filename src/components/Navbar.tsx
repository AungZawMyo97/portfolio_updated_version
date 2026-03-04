import { useState, useEffect } from "react";
import { Link } from "react-router";
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
          <Link to="/" onClick={closeMenu}>
            AZM{" "}
            <span className="text-pubg-yellow inline-block hover:-translate-y-1 transform duration-200">
              nostaLgic
            </span>
          </Link>
        </div>
        <ul className="hidden md:flex gap-8 text-md">
          <li>
            <Link to="/" className="hover:text-pubg-yellow transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-pubg-yellow transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="hover:text-pubg-yellow transition-colors"
            >
              Projects
            </Link>
          </li>
        </ul>
        <div className="hidden md:flex gap-6 text-md">
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

        {/* Mobile Menu Button */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-pubg-panel border-b border-pubg-dark shadow-xl flex flex-col items-start px-6 py-6 gap-6 text-md overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? "max-h-100 py-6 opacity-100 border-b "
              : "max-h-0 py-0 opacity-0 border-b-0"
          }`}
        >
          <Link
            to="/"
            onClick={closeMenu}
            className="hover:text-pubg-yellow transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={closeMenu}
            className="hover:text-pubg-yellow transition-colors"
          >
            About
          </Link>
          <Link
            to="/projects"
            onClick={closeMenu}
            className="hover:text-pubg-yellow transition-colors"
          >
            Projects
          </Link>

          {/* Mobile Socials */}
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
