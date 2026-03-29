import { Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
import { speakText, stopSpeaking } from "@/lib/speakText";
import type { Specimen } from "@/data/specimens";

interface SpecimenCardProps {
  specimen: Specimen;
  onSelect: (specimen: Specimen) => void;
}

const SpecimenCard = ({ specimen, onSelect }: SpecimenCardProps) => {
  const [speaking, setSpeaking] = useState(false);

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (speaking) {
      stopSpeaking();
      setSpeaking(false);
    } else {
      setSpeaking(true);
      speakText(`${specimen.name}. ${specimen.description} ${specimen.details}`);
      const checkSpeaking = setInterval(() => {
        if (!window.speechSynthesis.speaking) {
          setSpeaking(false);
          clearInterval(checkSpeaking);
        }
      }, 200);
    }
  };

  return (
    <div className="card-specimen group" onClick={() => onSelect(specimen)}>
      <div className="relative overflow-hidden aspect-square">
        <img
          src={specimen.image}
          alt={specimen.name}
          loading="lazy"
          width={640}
          height={640}
          className="specimen-image w-full h-full object-cover transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cave via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <button
          onClick={handleSpeak}
          className="btn-speak absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label={speaking ? "Stop speaking" : "Listen to description"}
        >
          {speaking ? <VolumeX className="w-5 h-5 text-primary" /> : <Volume2 className="w-5 h-5 text-primary" />}
        </button>
        <span className="absolute bottom-3 left-3 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-body font-semibold uppercase tracking-wider">
          {specimen.period}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font-bold text-foreground mb-1">{specimen.name}</h3>
        <p className="font-body text-xs text-muted-foreground mb-2">{specimen.age}</p>
        <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-2">{specimen.description}</p>
      </div>
    </div>
  );
};

export default SpecimenCard;
