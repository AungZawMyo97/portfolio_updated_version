type TechStackProps = { items: string[] };
export default function TechStack({ items }: TechStackProps) {
  return (
    <ul className="tech-stack" aria-label="Technologies">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
