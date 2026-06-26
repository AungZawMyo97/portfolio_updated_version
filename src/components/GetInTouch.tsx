import { type SyntheticEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollReveal from "./ScrollReveal";

const GetInTouch = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      setStatusMessage("Transmission failed. Please try my direct email.");
      return;
    }

    setIsSending(true);
    setStatusMessage("");

    emailjs
      .sendForm(
        "portfolio_email",
        "template_9khwfpx",
        form.current,
        "jP9jfjKP72QWOO2Ix",
      )
      .then(
        () => {
          setStatusMessage("Transmission sent successfully. I will reply soon.");
          setIsSending(false);
          form.current?.reset();
        },
        () => {
          setStatusMessage("Transmission failed. Please try my direct email.");
          setIsSending(false);
        },
      );
  };

  return (
    <section
      className="section-frame section-divider bg-pubg-panel/80 py-20 px-6"
      id="comms"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <ScrollReveal className="text-center flex flex-col gap-4" variant="pop">
          <span className="eyebrow-line justify-center">Open Channel</span>
          <h2 className="display-title text-5xl lg:text-7xl font-bold tracking-wider text-pubg-yellow uppercase">
            Get In Touch
          </h2>
          <p className="text-2xl opacity-90 tracking-wider leading-relaxed text-pubg-text uppercase font-semibold">
            Ready to deploy your next big idea?
          </p>
          <p className="text-xl opacity-90 text-pubg-text leading-relaxed normal-case max-w-2xl mx-auto">
            Let's sync up and engineer a solution. My comms are open for new
            opportunities and collaborations.
          </p>
        </ScrollReveal>

        <ScrollReveal
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 w-full"
          delay={120}
        >
          <div className="tactical-card p-8 md:p-12 rounded-sm hover:-translate-y-2 transition-transform duration-300 flex flex-col gap-8">
            <div>
              <h3 className="display-title text-4xl font-bold text-pubg-text uppercase border-b-2 border-pubg-yellow pb-2 inline-block mb-4">
                Comms Center
              </h3>
              <p className="text-lg text-pubg-text opacity-90 mb-4">
                Currently based in Thailand. Open for global remote positions.
              </p>
              <ul className="flex flex-col gap-6 text-base sm:text-lg text-pubg-text">
                <li>
                  <a
                    href="mailto:aungzawmyo.azm1997@gmail.com"
                    className="magnetic-link flex min-w-0 items-center gap-3 sm:gap-4 hover:text-pubg-yellow group"
                  >
                    <span className="shrink-0 bg-pubg-dark p-4 rounded-sm text-pubg-yellow border border-pubg-yellow/15 group-hover:scale-110 transition-transform">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <span className="min-w-0 break-all leading-snug">
                      aungzawmyo.azm1997@gmail.com
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/aungzawmyo-dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="magnetic-link flex min-w-0 items-center gap-3 sm:gap-4 hover:text-pubg-yellow group"
                  >
                    <span className="shrink-0 bg-pubg-dark p-4 rounded-sm text-pubg-yellow border border-pubg-yellow/15 group-hover:scale-110 transition-transform">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </span>
                    LinkedIn Profile
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <a
                    href="tel:+959966814521"
                    className="magnetic-link flex min-w-0 items-center gap-3 sm:gap-4 hover:text-pubg-yellow group"
                  >
                    <span className="shrink-0 bg-pubg-dark p-4 rounded-sm text-pubg-yellow border border-pubg-yellow/15">
                      <FontAwesomeIcon icon={faPhone} />
                    </span>
                    <span>+959 966-814-521</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="tactical-card p-8 md:p-12 rounded-sm hover:-translate-y-2 transition-transform duration-300">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-name"
                  className="text-pubg-text font-semibold uppercase tracking-wide text-sm"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="user_name"
                  required
                  className="field-input border border-gray-700 text-pubg-text p-3 rounded-sm focus:outline-none focus:border-pubg-yellow transition-colors"
                  placeholder="Please Enter Your Name"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-email"
                  className="text-pubg-text font-semibold uppercase tracking-wide text-sm"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="user_email"
                  required
                  className="field-input border border-gray-700 text-pubg-text p-3 rounded-sm focus:outline-none focus:border-pubg-yellow transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-message"
                  className="text-pubg-text font-semibold uppercase tracking-wide text-sm"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  className="field-input border border-gray-700 text-pubg-text p-3 rounded-sm focus:outline-none focus:border-pubg-yellow transition-colors resize-none"
                  placeholder="Let's build something..."
                ></textarea>
              </div>

              {statusMessage && (
                <p
                  className={`text-sm font-bold tracking-wider ${
                    statusMessage.includes("successfully")
                      ? "text-emerald-400"
                      : "text-red-500"
                  }`}
                >
                  {statusMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="command-button mt-4 bg-pubg-yellow text-pubg-dark font-bold text-lg uppercase tracking-widest py-4 px-8 rounded-sm hover:bg-yellow-500 transition-colors hover:-translate-y-1 transform duration-300 disabled:cursor-not-allowed disabled:opacity-70"
              >
                <span className="relative z-10">
                  {isSending ? "Sending..." : "Send Transmission"}
                </span>
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GetInTouch;
