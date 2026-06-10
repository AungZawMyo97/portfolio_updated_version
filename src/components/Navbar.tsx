import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const NAV_ITEMS = [
  {
    label: "Basecamp",
    target: "basecamp",
  },
  {
    label: "Loadout",
    target: "loadout",
  },
  {
    label: "Service Record",
    target: "service-record",
  },
  {
    label: "Deployments",
    target: "deployments",
  },
  {
    label: "Comms",
    target: "comms",
  },
];

const SOCIAL_LINKS = [
  {
    href: "https://github.com/AungZawMyo97",
    label: "GitHub",
    icon: faGithub,
  },
  {
    href: "https://www.linkedin.com/in/aungzawmyo-dev/",
    label: "LinkedIn",
    icon: faLinkedinIn,
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-pubg-panel/80 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.34)] border-pubg-yellow/20"
          : "bg-pubg-panel/70 backdrop-blur-md border-pubg-yellow/10 shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <div className="display-title text-2xl font-bold tracking-wider">
          <a href="/" onClick={closeMenu}>
            AZM{" "}
            <span className="text-pubg-yellow inline-block hover:-translate-y-1 transform duration-200">
              nostaLgic
            </span>
          </a>
        </div>

        <ul className="hidden md:flex gap-8 text-md">
          {NAV_ITEMS.map((item) => (
            <li key={item.target}>
              <Link
                to={item.target}
                smooth={true}
                duration={500}
                className="magnetic-link hover:text-pubg-yellow hover:cursor-pointer"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <SocialLinks />

        <button
          type="button"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          className="md:hidden text-2xl text-pubg-text hover:text-pubg-yellow transition-colors"
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
        </button>

        <div
          className={`md:hidden absolute top-full left-0 w-full bg-pubg-panel/95 backdrop-blur-xl border-b border-pubg-yellow/15 shadow-xl flex flex-col items-start px-6 gap-6 text-md overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? "max-h-100 py-6 opacity-100 border-b "
              : "max-h-0 py-0 opacity-0 border-b-0"
          }`}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.target}
              to={item.target}
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="magnetic-link hover:text-pubg-yellow"
            >
              {item.label}
            </Link>
          ))}

          <SocialLinks isMobile />
        </div>
      </div>
    </nav>
  );
};

type SocialLinksProps = {
  isMobile?: boolean;
};

const SocialLinks = ({ isMobile = false }: SocialLinksProps) => {
  return (
    <div
      className={isMobile ? "flex gap-8 mt-4" : "hidden md:flex gap-6 text-2xl"}
    >
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className={
            isMobile
              ? "magnetic-link hover:text-pubg-yellow"
              : "magnetic-link hover:text-pubg-yellow"
          }
        >
          <FontAwesomeIcon
            icon={link.icon}
            className={isMobile ? "text-2xl" : undefined}
          />
        </a>
      ))}
    </div>
  );
};

export default Navbar;
