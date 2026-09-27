type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  accent?: string;
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  accent = "green",
  id,
}: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${accent}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}

      <h2 id={id}>{title}</h2>
    </div>
  );
}