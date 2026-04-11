import { serviceItems } from '../../../data/homeSections';
import { SectionHeading } from '../../common/SectionHeading';

export function ServiceSection() {
  return (
    <section className="r-section r-section--alt">
      <div className="r-container">
        <SectionHeading en="Service" ja="サービス一覧" />
        <div className="r-service-grid">
          {serviceItems.map((item) => (
            <a key={item.title} href={item.href} className="r-service-item">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <span>詳しく見る →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
