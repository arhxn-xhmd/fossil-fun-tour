import heroImg from "@/assets/hero-fossils.jpg";
import { speakText } from "@/lib/speakText";

interface HeroSectionProps {
  onExplore: () => void;
}

const HeroSection = ({ onExplore }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Ancient fossils embedded in stone"
          className="w-full h-full object-cover"
          width={1920}
          height={1024}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cave/70 via-cave/50 to-background" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="font-body text-primary uppercase tracking-[0.3em] text-sm mb-6 animate-fade-in-up opacity-0">
          Journey Through Time
        </p>
        <h1
          className="font-display text-5xl sm:text-7xl md:text-8xl font-black text-foreground text-glow leading-tight mb-6 animate-fade-in-up opacity-0 animate-delay-100 cursor-pointer"
          onClick={() => speakText("Ancient Earth. Discover the fascinating world of fossils and early humans. Click on any specimen to hear its story.")}
        >
          Ancient Earth
        </h1>
        <p className="font-body text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up opacity-0 animate-delay-200">
          Discover fossils, explore early human history, and test your knowledge.
          <br />
          <span className="text-primary font-medium">Click anything to hear it speak.</span>
        </p>
        <button
          onClick={() => {
            speakText("Let's explore ancient Earth together!");
            onExplore();
          }}
          className="btn-explore animate-fade-in-up opacity-0 animate-delay-300"
        >
          Start Exploring
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary/70" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
