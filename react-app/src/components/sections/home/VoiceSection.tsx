import { voiceItems } from '../../../data/homeSections';
import { SectionHeading } from '../../common/SectionHeading';

export function VoiceSection() {
  return (
    <section id="voice" className="r-section r-section--alt">
      <div className="r-container">
        <SectionHeading en="Voice" ja="お客様の声" />
        <div className="r-voice-grid">
          {voiceItems.map((item) => (
            <blockquote key={item.author} className="r-voice-item">
              <p>“{item.quote}”</p>
              <cite>{item.author}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
