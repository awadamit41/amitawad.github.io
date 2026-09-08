export function SectionHeading({ eyebrow, title, accent = "green" }: { eyebrow?: string; title: string; accent?: string }) {
  return (
    <div className={`section-heading section-heading--${accent}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
    </div>
  );
}
