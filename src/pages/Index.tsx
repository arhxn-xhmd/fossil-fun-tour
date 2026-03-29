import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SpecimensSection from "@/components/SpecimensSection";
import VirtualTour from "@/components/VirtualTour";
import QuizSection from "@/components/QuizSection";
import { stopSpeaking } from "@/lib/speakText";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const homeRef = useRef<HTMLDivElement>(null);
  const specimensRef = useRef<HTMLDivElement>(null);
  const tourRef = useRef<HTMLDivElement>(null);
  const quizRef = useRef<HTMLDivElement>(null);

  const refs: Record<string, React.RefObject<HTMLDivElement>> = {
    home: homeRef,
    specimens: specimensRef,
    tour: tourRef,
    quiz: quizRef,
  };

  const navigate = (section: string) => {
    stopSpeaking();
    setActiveSection(section);
    refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    Object.values(refs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeSection={activeSection} onNavigate={navigate} />
      <div id="home" ref={homeRef}>
        <HeroSection onExplore={() => navigate("specimens")} />
      </div>
      <div id="specimens" ref={specimensRef}>
        <SpecimensSection />
      </div>
      <div id="tour" ref={tourRef}>
        <VirtualTour />
      </div>
      <div id="quiz" ref={quizRef}>
        <QuizSection />
      </div>
      <footer className="border-t border-border py-8 text-center">
        <p className="font-body text-sm text-muted-foreground">
          Ancient Earth Museum — An interactive learning experience about fossils & early humans
          BY " ARHAAN AHMED "
        </p>
      </footer>
    </div>
  );
};

export default Index;
