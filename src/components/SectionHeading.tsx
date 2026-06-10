import ScrollReveal from "./ScrollReveal";

type SectionHeadingProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  className?: string;
};

const SectionHeading = ({
  title,
  description,
  eyebrow = "Portfolio Intel",
  className = "",
}: SectionHeadingProps) => {
  return (
    <ScrollReveal className={`text-center ${className}`} variant="pop">
      <span className="eyebrow-line mb-3">{eyebrow}</span>
      <h2 className="display-title text-5xl lg:text-7xl font-bold tracking-wider text-pubg-yellow uppercase">
        {title}
      </h2>
      {description ? (
        <p className="text-xl text-pubg-text opacity-90 mt-4 max-w-2xl mx-auto normal-case tracking-normal leading-relaxed">
          {description}
        </p>
      ) : null}
    </ScrollReveal>
  );
};

export default SectionHeading;
