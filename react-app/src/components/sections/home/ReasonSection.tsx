import { reasonItems } from '../../../data/homeSections';
import { SectionHeading } from '../../common/SectionHeading';

export function ReasonSection() {
  return (
    <section id="reason" className="r-section">
      <div className="r-container">
        <SectionHeading en="Reason" ja="選ばれる理由" />
        <div className="r-reason-grid">
          {reasonItems.map((item) => (
            <article key={item.no} className="r-reason-item">
              <span className="r-reason-item__no">{item.no}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
