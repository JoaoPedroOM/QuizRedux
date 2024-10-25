import React, { useState } from "react";
import QuizIndicator from "./components/QuizIndicator";
import correto from "./imgs/Check_round_fill.svg"
import errado from "./imgs/Close_round_fill.svg"

const App = () => {
  const totalQuestions = 3;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userAnswer, setUserAnswer] = useState(null);

  const questions = [
    {
      question: "Qual a capital da França?",
      options: ["Paris", "Londres", "Berlim", "Madri"],
      answer: "Paris",
    },
    {
      question: "Qual a capital da Espanha?",
      options: ["Lisboa", "Madrid", "Paris", "Roma"],
      answer: "Madrid",
    },
    {
      question: "Qual a capital da Alemanha?",
      options: ["Berlim", "Oslo", "Copenhague", "Viena"],
      answer: "Berlim",
    },
  ];

  const handleAnswer = (selectedOption) => {
    setUserAnswer(selectedOption);
    setShowAnswer(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowAnswer(false);
      setUserAnswer(null);
    }
  };

  return (
    <main className="flex items-center justify-center h-screen">
      <div className="flex flex-col justify-center items-center bg-bgQuiz text-center w-1/2 h-1/2 rounded-lg shadow-md">
        <h3 className="font-main font-semibold text-secondTextColor">Quiz</h3>
        {/* <QuizIndicator currentQuest={currentQuestion} totalQuestions={totalQuestions}/> */}
        <h2 className="text-[25px] font-main font-semibold text-mainTextColor">
          {questions[currentQuestion]?.question}
        </h2>
        <div className="mt-4 grid grid-cols-2 gap-5 w-[60%]">
          {questions[currentQuestion]?.options.map((option) => {
            const isCorrect = option === questions[currentQuestion].answer;
            const isSelected = option === userAnswer;

            return (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className={`flex gap-2 justify-center items-center w-full font-semibold bg-btnColor text-mainTextColor mt-2 px-4 py-5 rounded hover:bg-btnGradient ${
                  showAnswer ? "opacity-50" : ""
                }`}
                disabled={showAnswer}
              >
                {option}
                {showAnswer && (
                  <>
                    {isCorrect && userAnswer === option && (
                      <img
                        src={correto}
                        alt="Resposta Correta"
                      />
                    )}
                    {isSelected && !isCorrect && (
                      <img
                        src={errado}
                        alt="Resposta Errada"
                      />
                    )}
                  </>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default App;
