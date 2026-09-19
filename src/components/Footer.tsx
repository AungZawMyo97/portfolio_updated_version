import { profile } from "../data/profile";
export default function Footer() {
  return (
    <footer className="container site-footer">
      <p>
        © <span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
        {profile.name}
      </p>
      <p>Built with React & TypeScript. Made with care.</p>
      <a href="#home">Back to top ↑</a>
    </footer>
  );
}
