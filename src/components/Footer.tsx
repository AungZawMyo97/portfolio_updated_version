import { profile } from "../data/profile";
export default function Footer() {
  return (
    <footer className="container site-footer">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <p>Built with React & TypeScript. Made with care.</p>
      <a href="#about">Back to top ↑</a>
    </footer>
  );
}
