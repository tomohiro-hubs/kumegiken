type PageHeroProps = {
  label: string;
  title: string;
  description: string;
};

export function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="r-page-hero">
      <span className="r-page-hero__label">{label}</span>
      <h1 className="r-page-hero__title">{title}</h1>
      <p className="r-page-hero__description">{description}</p>
    </section>
  );
}
