import { X, Volume2 } from "lucide-react";
import { speakText } from "@/lib/speakText";
import type { Specimen } from "@/data/specimens";

interface SpecimenModalProps {
  specimen: Specimen | null;
  onClose: () => void;
}

const SpecimenModal = ({ specimen, onClose }: SpecimenModalProps) => {
  if (!specimen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-cave/80 backdrop-blur-sm" />
      <div
        className="relative bg-card border border-border rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 z-10 btn-speak">
          <X className="w-5 h-5" />
        </button>

        <div className="md:flex">
          <div className="md:w-1/2">
            <img
              src={specimen.image}
              alt={specimen.name}
              className="w-full h-64 md:h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
            />
          </div>
          <div className="p-6 md:p-8 md:w-1/2">
            <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-body font-semibold uppercase tracking-wider mb-4">
              {specimen.category === "fossil" ? "Fossil" : "Early Human"}
            </span>
            <h2 className="font-display text-3xl font-bold text-foreground mb-2">{specimen.name}</h2>
            <p className="font-body text-sm text-muted-foreground mb-1">{specimen.period}</p>
            <p className="font-body text-xs text-primary mb-6">{specimen.age}</p>
            <p className="font-body text-foreground/80 leading-relaxed mb-6">{specimen.details}</p>
            <button
              onClick={() => speakText(`${specimen.name}. ${specimen.details}`)}
              className="btn-explore flex items-center gap-2 text-base"
            >
              <Volume2 className="w-5 h-5" />
              Listen to this
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecimenModal;
