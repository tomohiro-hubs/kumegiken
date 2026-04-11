type Crumb = { label: string; href?: string };

type BreadcrumbProps = {
  items: Crumb[];
};

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="r-breadcrumb" aria-label="パンくず">
      <div className="r-container">
        <ol>
          {items.map((item, index) => (
            <li key={`${item.label}-${index}`}>
              {item.href ? <a href={item.href}>{item.label}</a> : <span>{item.label}</span>}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
