import { flowItems } from '../../../data/homeSections';
import { SectionHeading } from '../../common/SectionHeading';

export function FlowSection() {
  return (
    <section id="flow" className="r-section">
      <div className="r-container">
        <SectionHeading en="Flow" ja="施工の流れ" />
        <ol className="r-flow-list">
          {flowItems.map((item, index) => (
            <li key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
