import { useState } from "react";
import { specimens } from "@/data/specimens";
import SpecimenCard from "./SpecimenCard";
import SpecimenModal from "./SpecimenModal";
import type { Specimen } from "@/data/specimens";
import { speakText } from "@/lib/speakText";

const SpecimensSection = () => {
  const [selected, setSelected] = useState<Specimen | null>(null);
  const [filter, setFilter] = useState<"all" | "fossil" | "human">("all");

  const filtered = filter === "all" ? specimens : specimens.filter((s) => s.category === filter);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2
          className="section-title cursor-pointer"
          onClick={() => speakText("Explore our collection of ancient specimens. Click on any card to learn more, or click the speaker icon to hear its story.")}
        >
          Explore Specimens
        </h2>
        <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
          Click on any specimen to learn more. Hit the 🔊 icon to hear it speak.
        </p>
      </div>

      <div className="flex justify-center gap-3 mb-12">
        {(["all", "fossil", "human"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-5 py-2 rounded-full font-body text-sm font-medium transition-all duration-300 ${
              filter === f
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            {f === "all" ? "All" : f === "fossil" ? "Fossils" : "Early Humans"}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((specimen) => (
          <SpecimenCard key={specimen.id} specimen={specimen} onSelect={setSelected} />
        ))}
      </div>

      <SpecimenModal specimen={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default SpecimensSection;
