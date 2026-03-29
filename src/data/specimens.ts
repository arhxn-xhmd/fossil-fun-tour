import ammoniteImg from "@/assets/fossil-ammonite.jpg";
import trilobiteImg from "@/assets/fossil-trilobite.jpg";
import trexImg from "@/assets/fossil-trex.jpg";
import earlyHumanImg from "@/assets/early-human.jpg";
import neanderthalImg from "@/assets/neanderthal-skull.jpg";
import cavePaintingImg from "@/assets/cave-painting.jpg";
import stoneToolsImg from "@/assets/stone-tools.jpg";

export interface Specimen {
  id: string;
  name: string;
  period: string;
  age: string;
  image: string;
  description: string;
  details: string;
  category: "fossil" | "human";
}

export const specimens: Specimen[] = [
  {
    id: "ammonite",
    name: "Ammonite",
    period: "Devonian – Cretaceous",
    age: "400–66 million years ago",
    image: ammoniteImg,
    description: "Spiral-shelled marine predators that thrived for over 300 million years.",
    details: "Ammonites are extinct marine mollusks with beautiful spiral shells. They were predators that swam through ancient oceans using jet propulsion, similar to modern squids. Their shells contained gas-filled chambers that helped them control buoyancy. Ammonites are important index fossils, helping scientists date rock layers. They went extinct alongside the dinosaurs 66 million years ago.",
    category: "fossil",
  },
  {
    id: "trilobite",
    name: "Trilobite",
    period: "Cambrian – Permian",
    age: "521–252 million years ago",
    image: trilobiteImg,
    description: "Ancient arthropods with compound eyes, among Earth's earliest complex creatures.",
    details: "Trilobites were among the first animals to develop complex eyes. They had hard exoskeletons divided into three lobes, which is how they got their name. Over 20,000 species have been discovered. They lived on the ocean floor, feeding on smaller organisms and organic debris. Trilobites survived for nearly 300 million years before going extinct in the Permian mass extinction.",
    category: "fossil",
  },
  {
    id: "trex",
    name: "Tyrannosaurus Rex",
    period: "Late Cretaceous",
    age: "68–66 million years ago",
    image: trexImg,
    description: "The king of dinosaurs — one of the largest land predators ever.",
    details: "Tyrannosaurus Rex was one of the largest meat-eating dinosaurs, measuring up to 12 meters long and weighing up to 9 tons. Its jaws could crush bone with a force of over 12,000 pounds. Despite its tiny arms, T. Rex was an apex predator with excellent binocular vision and a powerful sense of smell. Recent discoveries suggest they may have had feathers as juveniles.",
    category: "fossil",
  },
  {
    id: "homo-erectus",
    name: "Homo Erectus",
    period: "Pleistocene",
    age: "1.9 million – 110,000 years ago",
    image: earlyHumanImg,
    description: "The first human ancestor to walk fully upright and use fire.",
    details: "Homo erectus was the first human species to have body proportions similar to modern humans. They were the first to use fire, cook food, and create sophisticated stone tools called Acheulean hand axes. They migrated out of Africa and spread across Asia and Europe, making them the first truly global human species. Their brain size was about two-thirds that of modern humans.",
    category: "human",
  },
  {
    id: "neanderthal",
    name: "Neanderthal",
    period: "Pleistocene",
    age: "400,000 – 40,000 years ago",
    image: neanderthalImg,
    description: "Our closest extinct relative — intelligent, social, and adapted to cold climates.",
    details: "Neanderthals were stocky, powerful humans adapted to Ice Age Europe. They had larger brains than modern humans, buried their dead, cared for the sick, and created art. They used complex tools, controlled fire, and likely had language. DNA evidence shows they interbred with Homo sapiens — most non-African people carry 1 to 4 percent Neanderthal DNA today.",
    category: "human",
  },
  {
    id: "cave-art",
    name: "Cave Paintings",
    period: "Upper Paleolithic",
    age: "40,000 – 14,000 years ago",
    image: cavePaintingImg,
    description: "Humanity's first art — handprints and animals painted deep in caves.",
    details: "Cave paintings are among the earliest known forms of human artistic expression. Found in caves across Europe, Indonesia, and Africa, they depict animals, human hands, and abstract symbols. The famous Lascaux cave in France contains over 600 paintings. Artists used pigments made from minerals mixed with animal fat, applied by blowing through hollow bones or using fingers and brushes made from animal hair.",
    category: "human",
  },
  {
    id: "stone-tools",
    name: "Stone Tools",
    period: "Lower Paleolithic",
    age: "3.3 million – 10,000 years ago",
    image: stoneToolsImg,
    description: "The technology that defined early humanity for millions of years.",
    details: "Stone tools represent the longest-lasting technology in human history. The earliest known tools, called Oldowan choppers, were made by striking one rock against another. Over millions of years, our ancestors developed increasingly sophisticated techniques including Acheulean hand axes, Mousterian points, and delicate Solutrean blades. These tools were used for cutting meat, scraping hides, woodworking, and hunting.",
    category: "human",
  },
];

export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    question: "Which fossil is known for its spiral-shaped shell?",
    options: ["Trilobite", "Ammonite", "Brachiopod", "Belemnite"],
    correct: 1,
    explanation: "Ammonites are famous for their beautiful spiral shells, which they used for buoyancy control in ancient oceans.",
  },
  {
    question: "How long ago did Homo erectus first appear?",
    options: ["500,000 years ago", "5 million years ago", "1.9 million years ago", "100,000 years ago"],
    correct: 2,
    explanation: "Homo erectus first appeared around 1.9 million years ago and was the first human species to walk fully upright.",
  },
  {
    question: "What percentage of Neanderthal DNA do most non-African humans carry?",
    options: ["10-15%", "0%", "1-4%", "20-25%"],
    correct: 2,
    explanation: "Most people with non-African ancestry carry 1-4% Neanderthal DNA due to ancient interbreeding.",
  },
  {
    question: "What was special about trilobite eyes?",
    options: ["They could see in the dark", "They were among the first compound eyes", "They could see colors", "They had no eyes"],
    correct: 1,
    explanation: "Trilobites were among the first animals to develop complex compound eyes, made of calcite crystal lenses.",
  },
  {
    question: "Where are the famous Lascaux cave paintings located?",
    options: ["Spain", "Germany", "France", "Italy"],
    correct: 2,
    explanation: "The Lascaux cave in southwestern France contains over 600 paintings dating back about 17,000 years.",
  },
  {
    question: "What is the bite force of a T. Rex estimated at?",
    options: ["2,000 pounds", "6,000 pounds", "12,000 pounds", "500 pounds"],
    correct: 2,
    explanation: "T. Rex had an estimated bite force of over 12,000 pounds — enough to crush solid bone.",
  },
  {
    question: "What are the oldest known stone tools called?",
    options: ["Acheulean", "Mousterian", "Oldowan", "Solutrean"],
    correct: 2,
    explanation: "Oldowan tools, first discovered at Olduvai Gorge in Tanzania, are the oldest known stone tools at around 2.6 million years old.",
  },
  {
    question: "Which early human species was first to use fire?",
    options: ["Homo sapiens", "Homo erectus", "Homo habilis", "Australopithecus"],
    correct: 1,
    explanation: "Homo erectus is believed to be the first human species to control fire, around 1 million years ago.",
  },
];
