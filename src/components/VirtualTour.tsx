import { useState } from "react";
import { ChevronLeft, ChevronRight, Volume2, MapPin } from "lucide-react";
import { speakText } from "@/lib/speakText";
import { specimens } from "@/data/specimens";

const tourStops = [
  {
    specimen: specimens[0], // Ammonite
    label: "Hall of Ancient Seas",
    narration: "Welcome to the Hall of Ancient Seas. Here you'll find ammonites — spiral-shelled marine predators that ruled the oceans for over 300 million years. Notice the intricate chambers inside the shell, each one sealed with gas to help the creature float.",
  },
  {
    specimen: specimens[1], // Trilobite
    label: "Cambrian Gallery",
    narration: "You've entered the Cambrian Gallery. Trilobites were among the first animals on Earth with complex eyes. Over 20,000 species evolved during their 300 million year reign. Look at the three distinct lobes that give them their name.",
  },
  {
    specimen: specimens[2], // T-Rex
    label: "Dinosaur Hall",
    narration: "The Dinosaur Hall. Standing before you is the skull of Tyrannosaurus Rex, the king of dinosaurs. With a bite force of over 12,000 pounds and keen binocular vision, this was the ultimate predator of the Late Cretaceous period.",
  },
  {
    specimen: specimens[3], // Homo erectus
    label: "Human Origins Wing",
    narration: "Welcome to the Human Origins Wing. Homo erectus was the first human species to walk fully upright, use fire, and migrate out of Africa. They survived for nearly 2 million years — far longer than modern humans have existed.",
  },
  {
    specimen: specimens[5], // Cave paintings
    label: "Art of the Ancients",
    narration: "The Art of the Ancients gallery. These cave paintings represent humanity's first artistic expressions. Our ancestors used pigments from minerals, blown through hollow bones, to create images that have survived for over 30,000 years.",
  },
  {
    specimen: specimens[6], // Stone tools
    label: "Technology Through Time",
    narration: "Our final stop: Technology Through Time. Stone tools represent the longest-lasting technology in human history, spanning over 3 million years. From crude Oldowan choppers to elegant Solutrean blades, each tool tells a story of growing intelligence.",
  },
];

const VirtualTour = () => {
  const [currentStop, setCurrentStop] = useState(0);
  const stop = tourStops[currentStop];

  const goNext = () => setCurrentStop((p) => (p + 1) % tourStops.length);
  const goPrev = () => setCurrentStop((p) => (p - 1 + tourStops.length) % tourStops.length);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2
          className="section-title cursor-pointer"
          onClick={() => speakText("Virtual Museum Tour. Navigate through our exhibits using the arrows, and click the speaker button to hear a guided narration.")}
        >
          Virtual Tour
        </h2>
        <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
          Walk through our museum exhibits. Click 🔊 for guided narration.
        </p>
      </div>

      <div className="relative bg-card border border-border rounded-2xl overflow-hidden max-w-4xl mx-auto">
        <div className="relative aspect-video">
          <img
            src={stop.specimen.image}
            alt={stop.label}
            className="w-full h-full object-cover transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cave via-cave/30 to-transparent" />

          {/* Tour info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <div className="flex items-center gap-2 text-primary mb-2">
              <MapPin className="w-4 h-4" />
              <span className="font-body text-sm font-semibold uppercase tracking-wider">
                Stop {currentStop + 1} of {tourStops.length}
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">{stop.label}</h3>
            <p className="font-body text-foreground/70 text-sm sm:text-base max-w-2xl">{stop.narration}</p>
          </div>

          {/* Navigation */}
          <button
            onClick={goPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-cave/70 hover:bg-cave border border-border rounded-full p-2 transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <button
            onClick={goNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-cave/70 hover:bg-cave border border-border rounded-full p-2 transition-all"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>
        </div>

        {/* Controls bar */}
        <div className="flex items-center justify-between p-4 border-t border-border">
          <div className="flex gap-2">
            {tourStops.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentStop(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === currentStop ? "bg-primary scale-125" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => speakText(stop.narration)}
            className="btn-explore text-sm px-5 py-2 flex items-center gap-2"
          >
            <Volume2 className="w-4 h-4" />
            Narrate
          </button>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;
