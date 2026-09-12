import useScrollReveal from "../hooks/useScrollReveal";

type SectionHeadingProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  className?: string;
};
export default function SectionHeading({
  title,
  description,
  eyebrow,
  className = "",
}: SectionHeadingProps) {
  const reveal = useScrollReveal();
  return (
    <div ref={reveal} className={`section-heading ${className}`}>
      <div>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
      </div>
      {description ? (
        <p className="section-description">{description}</p>
      ) : null}
    </div>
  );
}
