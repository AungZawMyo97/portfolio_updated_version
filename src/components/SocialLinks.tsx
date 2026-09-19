import { profile } from "../data/profile";

const SOCIALS = [
  {
    label: "GitHub",
    href: profile.github,
    path: "M9 19c-4.3 1.3-4.3-2.2-6-2.7m12 5v-3.4a3 3 0 0 0-.8-2.3c2.7-.3 5.5-1.3 5.5-6a4.7 4.7 0 0 0-1.3-3.3 4.3 4.3 0 0 0-.1-3.3S17.2 2.7 15 4.2a11.4 11.4 0 0 0-6 0C6.8 2.7 5.7 3 5.7 3a4.3 4.3 0 0 0-.1 3.3A4.7 4.7 0 0 0 4.3 9.6c0 4.7 2.8 5.7 5.5 6A3 3 0 0 0 9 18v3.3",
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v2a4 4 0 0 1 2-2ZM2 9h4v12H2ZM4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z",
  },
  {
    label: "Email Aung Zaw Myo",
    href: `mailto:${profile.email}`,
    path: "M3 5h18v14H3V5Zm0 0 9 8 9-8",
  },
];

export default function SocialLinks({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`social-links ${className}`}>
      {SOCIALS.map(({ label, href, path }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          target={href.startsWith("https:") ? "_blank" : undefined}
          rel={href.startsWith("https:") ? "noopener noreferrer" : undefined}
        >
          <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d={path} />
          </svg>
        </a>
      ))}
    </div>
  );
}
