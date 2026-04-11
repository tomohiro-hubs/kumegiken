type SectionHeadingProps = {
  en: string;
  ja: string;
};

export function SectionHeading({ en, ja }: SectionHeadingProps) {
  return (
    <div className="r-section-heading">
      <span>{en}</span>
      <h2>{ja}</h2>
    </div>
  );
}
