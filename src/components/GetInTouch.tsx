import { type SyntheticEvent, useRef, useState } from "react";
import { profile } from "../data/profile";
import ArrowIcon from "./ArrowIcon";
import useScrollReveal from "../hooks/useScrollReveal";

type SubmissionStatus = { kind: "success" | "error"; message: string } | null;

export default function GetInTouch() {
  const reveal = useScrollReveal();
  const form = useRef<HTMLFormElement>(null);
  const sending = useRef(false);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<SubmissionStatus>(null);

  const sendEmail = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.current || sending.current) return;
    sending.current = true;
    setIsSending(true);
    setStatus(null);
    try {
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.sendForm(
        "portfolio_email",
        "template_9khwfpx",
        form.current,
        "jP9jfjKP72QWOO2Ix",
      );
      setStatus({
        kind: "success",
        message: "Thanks for reaching out. Your message has been sent.",
      });
      form.current?.reset();
    } catch {
      setStatus({
        kind: "error",
        message:
          "Your message could not be sent. Please try again or email me directly.",
      });
    } finally {
      sending.current = false;
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div ref={reveal} className="container section contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">06 / Let’s build something</p>
          <h2>
            Great work starts
            <br />
            <em>with a conversation.</em>
          </h2>
          <p>
            Looking for a developer to join your team or help bring a project to
            life? I’m open to opportunities and collaborations, including remote
            roles.
          </p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
            <ArrowIcon diagonal />
          </a>
          <div className="contact-links">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <ArrowIcon diagonal />
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub <ArrowIcon diagonal />
            </a>
            <a href={`tel:${profile.phone}`}>+959 966-814-521</a>
          </div>
          <p className="contact-location">
            <span aria-hidden="true">◎</span> Based in Thailand. Working across
            borders.
          </p>
        </div>
        <noscript>
          <p>
            To get in touch,{" "}
            <a className="text-link" href={`mailto:${profile.email}`}>
              email me directly <ArrowIcon diagonal />
            </a>
            .
          </p>
        </noscript>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
          aria-label="Contact Aung Zaw Myo"
          aria-busy={isSending}
        >
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="contact-name">Your name</label>
              <input
                id="contact-name"
                name="user_name"
                autoComplete="name"
                placeholder="Alex Morgan"
                required
                maxLength={120}
                disabled={isSending}
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-email">Email address</label>
              <input
                id="contact-email"
                type="email"
                name="user_email"
                autoComplete="email"
                placeholder="alex@company.com"
                required
                maxLength={254}
                disabled={isSending}
              />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="contact-message">What do you have in mind?</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Tell me a little about your project or opportunity…"
              rows={5}
              required
              maxLength={5000}
              disabled={isSending}
            />
          </div>
          <div role="status" aria-live="polite">
            {status ? (
              <p className={`form-status ${status.kind}`}>{status.message}</p>
            ) : null}
          </div>
          <button className="button" type="submit" disabled={isSending}>
            {isSending ? "Sending message…" : "Send message"}
            <ArrowIcon />
          </button>
        </form>
      </div>
    </section>
  );
}
