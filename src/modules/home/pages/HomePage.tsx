import { FeaturesSection, GetStartedSection, HeroSection } from "../components";

export function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <GetStartedSection />
    </div>
  );
}
