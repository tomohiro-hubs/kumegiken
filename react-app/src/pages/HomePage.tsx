import { HomeHero } from '../components/sections/home/HomeHero';
import { FlowSection } from '../components/sections/home/FlowSection';
import { ReasonSection } from '../components/sections/home/ReasonSection';
import { ServiceSection } from '../components/sections/home/ServiceSection';
import { VoiceSection } from '../components/sections/home/VoiceSection';

export function HomePage() {
  return (
    <>
      <HomeHero />
      <ReasonSection />
      <ServiceSection />
      <FlowSection />
      <VoiceSection />
    </>
  );
}
