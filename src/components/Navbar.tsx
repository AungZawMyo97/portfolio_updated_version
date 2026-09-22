import { useRef, useState } from "react";
import ArrowIcon from "./ArrowIcon";

const NAV_ITEMS = [
  { label: "About", target: "about" },
  { label: "Expertise", target: "expertise" },
  { label: "Work", target: "projects" },
  { label: "Experience", target: "experience" },
  { label: "Contact", target: "contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && isMenuOpen) {
          setIsMenuOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <div className="container nav-inner">
        <a
          className="wordmark"
          href="#home"
          aria-label="Aung Zaw Myo, home"
          onClick={() => setIsMenuOpen(false)}
        >
          azm<span>.</span>
        </a>
        <nav aria-label="Main navigation" className="desktop-nav">
          {NAV_ITEMS.map((item) => (
            <a key={item.target} href={`#${item.target}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="nav-contact">
          Let’s talk <ArrowIcon diagonal />
        </a>
        <button
          ref={menuButton}
          className="menu-button"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "Close" : "Menu"}{" "}
          <span aria-hidden="true">{isMenuOpen ? "−" : "+"}</span>
        </button>
      </div>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className="mobile-nav"
        data-open={isMenuOpen}
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.target}
            href={`#${item.target}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
            <ArrowIcon diagonal />
          </a>
        ))}
      </nav>
    </header>
  );
}
