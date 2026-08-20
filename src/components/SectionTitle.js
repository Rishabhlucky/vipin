export default function SectionTitle({ eyebrow, title, text, align = "center" }) {
  return (
    <div className={`section-title ${align}`}>
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
