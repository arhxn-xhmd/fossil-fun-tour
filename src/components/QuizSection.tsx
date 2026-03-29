import { useState } from "react";
import { quizQuestions } from "@/data/specimens";
import { speakText } from "@/lib/speakText";
import { CheckCircle, XCircle, RotateCcw, Volume2, Trophy, BrainCircuit, HelpCircle } from "lucide-react";
import AskAI from "@/components/AskAI";

type Tab = "quiz" | "ask";

const QuizSection = () => {
  const [tab, setTab] = useState<Tab>("quiz");
  const [current, setCurrent] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = quizQuestions[current];

  const handleAnswer = (idx: number) => {
    if (answered) return;
    setSelectedOption(idx);
    setAnswered(true);
    const isCorrect = idx === question.correct;
    if (isCorrect) setScore((s) => s + 1);
    speakText(isCorrect ? `Correct! ${question.explanation}` : `Not quite. ${question.explanation}`);
  };

  const handleNext = () => {
    if (current + 1 >= quizQuestions.length) {
      setFinished(true);
      speakText(`Quiz complete! You scored ${score} out of ${quizQuestions.length}.`);
    } else {
      setCurrent((c) => c + 1);
      setSelectedOption(null);
      setAnswered(false);
    }
  };

  const restart = () => {
    setCurrent(0);
    setSelectedOption(null);
    setAnswered(false);
    setScore(0);
    setFinished(false);
    speakText("Quiz restarted. Good luck!");
  };

  if (finished) {
    const pct = Math.round((score / quizQuestions.length) * 100);
    return (
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
        <Trophy className="w-16 h-16 text-primary mx-auto mb-6" />
        <h2 className="section-title mb-4">Quiz Complete!</h2>
        <p className="font-body text-2xl text-foreground mb-2">
          You scored <span className="text-primary font-bold">{score}/{quizQuestions.length}</span>
        </p>
        <p className="font-body text-muted-foreground mb-8">
          {pct >= 80 ? "Amazing! You're a paleontology expert! 🦕" : pct >= 50 ? "Good job! Keep exploring to learn more! 🔍" : "Keep studying — the ancient world has so much to teach! 📚"}
        </p>
        <button onClick={restart} className="btn-explore flex items-center gap-2 mx-auto">
          <RotateCcw className="w-5 h-5" />
          Try Again
        </button>
      </section>
    );
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2
          className="section-title cursor-pointer"
          onClick={() => speakText("Test your knowledge about fossils and early humans!")}
        >
          Test Your Knowledge
        </h2>

        {/* Tab toggle */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <button
            onClick={() => setTab("quiz")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-body text-sm font-semibold transition-all ${
              tab === "quiz"
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            Quiz
          </button>
          <button
            onClick={() => setTab("ask")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-body text-sm font-semibold transition-all ${
              tab === "ask"
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            <BrainCircuit className="w-4 h-4" />
            Ask AI
          </button>
        </div>
      </div>

      {tab === "ask" ? (
        <AskAI />
      ) : (
        {/* Progress */}
        <div className="flex items-center justify-between mb-6">
          <span className="font-body text-sm text-muted-foreground">
            Question {current + 1} of {quizQuestions.length}
          </span>
          <span className="font-body text-sm text-primary font-semibold">
            Score: {score}
          </span>
        </div>
        <div className="w-full h-1.5 bg-muted rounded-full mb-8">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500"
            style={{ width: `${((current + 1) / quizQuestions.length) * 100}%` }}
          />
        </div>

        <h3
          className="font-display text-xl sm:text-2xl font-bold text-foreground mb-8 cursor-pointer"
          onClick={() => speakText(question.question)}
        >
          <Volume2 className="w-5 h-5 inline mr-2 text-primary" />
          {question.question}
        </h3>

        <div className="space-y-3 mb-8">
          {question.options.map((opt, idx) => {
            let stateClass = "";
            if (answered) {
              if (idx === question.correct) stateClass = "correct";
              else if (idx === selectedOption) stateClass = "wrong";
            } else if (idx === selectedOption) {
              stateClass = "selected";
            }

            return (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                className={`quiz-option w-full text-left flex items-center gap-3 ${stateClass}`}
                disabled={answered}
              >
                <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-body font-bold shrink-0">
                  {String.fromCharCode(65 + idx)}
                </span>
                {opt}
                {answered && idx === question.correct && <CheckCircle className="w-5 h-5 text-green-500 ml-auto shrink-0" />}
                {answered && idx === selectedOption && idx !== question.correct && <XCircle className="w-5 h-5 text-destructive ml-auto shrink-0" />}
              </button>
            );
          })}
        </div>

        {answered && (
          <div className="bg-muted rounded-xl p-4 mb-6">
            <p className="font-body text-sm text-foreground/80">{question.explanation}</p>
          </div>
        )}

        {answered && (
          <button onClick={handleNext} className="btn-explore w-full">
            {current + 1 >= quizQuestions.length ? "See Results" : "Next Question"}
          </button>
        )}
      </div>
    </section>
  );
};

export default QuizSection;
