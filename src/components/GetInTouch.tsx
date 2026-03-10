import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GetInTouch = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("");

    if (!form.current) return;

    emailjs
      .sendForm(
        "portfolio_email",
        "template_9khwfpx",
        form.current,
        "jP9jfjKP72QWOO2Ix",
      )
      .then(
        () => {
          setStatusMessage("Transmission Sent Successful! I will reply soon.");
          setIsSending(false);
          form.current?.reset();
        },
        (error) => {
          console.log(error.text);
          setStatusMessage("Transmissino failed. Please try my direct email.");
          setIsSending(false);
        },
      );
  };

  return (
    <section className="bg-pubg-panel py-20 px-6" id="comms">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-5xl lg:text-6xl font-bold tracking-wider text-pubg-yellow uppercase">
            Get In Touch
          </h2>
          <p className="text-2xl opacity-90 tracking-wider leading-relaxed text-pubg-text uppercase font-semibold">
            Ready to deploy your next big idea?
          </p>
          <p className="text-xl opacity-90 text-pubg-text leading-relaxed normal-case max-w-2xl mx-auto">
            Let's sync up and engineer a solution. My comms are open for new
            opportunities and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-2 w-full">
          <div className="bg-pubg-panel p-8 md:p-12 rounded-sm border border-pubg-dark shadow-xl hover:-translate-y-2 transition-transform duration-300 flex flex-col gap-8">
            <div>
              <h3 className="text-3xl font-bold text-pubg-text uppercase border-b-2 border-pubg-yellow pb-2 inline-block mb-4">
                Comms Center
              </h3>
              <p className="text-lg text-pubg-text opacity-90 mb-4">
                Currently based in Thailand. Open for global remote positions.
              </p>
              <ul className="flex flex-col gap-6 text-lg text-pubg-text">
                <li>
                  <a
                    href="mailto:aungzawmyo.azm1997@gmail.com"
                    className="flex items-center gap-4 hover:text-pubg-yellow transition-colors group"
                  >
                    <span className="bg-pubg-dark p-4 rounded-sm text-pubg-yellow group-hover:scale-110 transition-transform">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    aungzawmyo.azm1997@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/aungzawmyo-dev/" // Make sure to add your actual link here!
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 hover:text-pubg-yellow transition-colors group"
                  >
                    <span className="bg-pubg-dark p-4 rounded-sm text-pubg-yellow group-hover:scale-110 transition-transform">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </span>
                    LinkedIn Profile
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <a
                    href="tel:+959966814521"
                    target="_blank"
                    className="flex items-center gap-4 hover:text-pubg-yellow transition-colors group"
                  >
                    <span className="bg-pubg-dark p-4 rounded-sm text-pubg-yellow">
                      <FontAwesomeIcon icon={faPhone} />
                    </span>
                    <span>+959 966-814-521</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-pubg-panel p-8 md:p-12 rounded-sm border border-pubg-dark shadow-xl hover:-translate-y-2 transition-transform duration-300">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col gap-2">
                <label className="text-pubg-text font-semibold uppercase tracking-wide text-sm">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  className="bg-pubg-dark border border-gray-700 text-pubg-text p-3 rounded-sm focus:outline-none focus:border-pubg-yellow transition-colors"
                  placeholder="Please Enter Your Name"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-pubg-text font-semibold uppercase tracking-wide text-sm">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  className="bg-pubg-dark border border-gray-700 text-pubg-text p-3 rounded-sm focus:outline-none focus:border-pubg-yellow transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-pubg-text font-semibold uppercase tracking-wide text-sm">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="bg-pubg-dark border border-gray-700 text-pubg-text p-3 rounded-sm focus:outline-none focus:border-pubg-yellow transition-colors resize-none"
                  placeholder="Let's build something..."
                ></textarea>
              </div>

              {statusMessage && (
                <p
                  className={`text-sm font-bold tracking-wider ${statusMessage.includes("Successful") ? "text-emerald-400" : "text-red-500"}`}
                >
                  {statusMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="mt-4 bg-pubg-yellow text-pubg-dark font-bold text-lg uppercase tracking-widest py-4 px-8 rounded-sm hover:bg-yellow-500 transition-colors hover:-translate-y-1 transform duration-300"
              >
                {isSending ? "Sending..." : "Send Transmission"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
