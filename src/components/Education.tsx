import SectionHeading from "./SectionHeading";
import ArrowIcon from "./ArrowIcon";
import { education as data } from "../data/portfolio";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Education() {
  const reveal = useScrollReveal();
  const certifications = [...data.certifications].sort(
    (a, b) =>
      Number(b.date.match(/\d{4}/)?.[0] ?? 0) -
      Number(a.date.match(/\d{4}/)?.[0] ?? 0),
  );
  return (
    <section className="section education-section container">
      <SectionHeading
        eyebrow="05 / Always learning"
        title="Curiosity is a constant."
      />
      <div className="education-grid">
        <div>
          <h3 className="eyebrow">Education</h3>
          {data.education.map((item) => (
            <article ref={reveal} className="education-record" key={item.id}>
              <p className="record-date">{item.date}</p>
              <h4>{item.degree}</h4>
              <p>{item.institution}</p>
            </article>
          ))}
        </div>
        <div>
          <h3 className="eyebrow">Certifications</h3>
          {certifications.map((item) => (
            <a
              ref={reveal}
              className="certification"
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <h4>{item.title}</h4>
                <p>
                  {item.issuer} · {item.date}
                </p>
              </div>
              <ArrowIcon diagonal />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
