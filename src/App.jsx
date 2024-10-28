import React, { useState, useEffect } from "react";
import QuizIndicator from "./components/QuizIndicator";
import correto from "./imgs/Check_round_fill.svg";
import errado from "./imgs/Close_round_fill.svg";
import { useDispatch, useSelector } from "react-redux";
import { questionActions } from "./store/question-slice";
import Congrats from "./components/Congrats"

const App = () => {
  const dispatch = useDispatch();
  const totalQuestions = useSelector((state) => state.question.totalQuestions)
  const quizCompleted = useSelector((state) => state.question.quizCompleted)

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

    const isCorrect = selectedOption === questions[currentQuestion].answer;
    if (isCorrect) {
      dispatch(questionActions.answerCorrect());
    } else {
      dispatch(questionActions.answerWrong());
    }

    setTimeout(() => {
      if (currentQuestion + 1 === totalQuestions) {
       dispatch(questionActions.completedQuiz())
      } else {
        setCurrentQuestion((prev) => prev + 1);
      }
      setUserAnswer(null);
      setShowAnswer(false);
    }, 1000);
  };

  useEffect(() => {
    if (quizCompleted) {
      setCurrentQuestion(0);
    }
  }, [quizCompleted]);

  if (quizCompleted) {
    return <Congrats />;
  }

  return (
    <main className="flex items-center justify-center h-screen">
      <div className="flex flex-col justify-center items-center bg-bgQuiz text-center mx-3 w-full h-[80%] lg:w-1/2 lg:h-1/2 rounded-lg shadow-md">
        <h3 className="font-main font-semibold mb-3 text-secondTextColor">Quiz</h3>
        <QuizIndicator currentQuest={currentQuestion} totalQuestions={totalQuestions}/>
        <h2 className="lg:text-[25px] text-[20px] font-main font-semibold text-mainTextColor">
          {questions[currentQuestion]?.question}
        </h2>
        <div className="mt-4 grid grid-cols-2 gap-5 px-5 lg:px-0 w-full lg:w-[60%]">
          {questions[currentQuestion]?.options.map((option) => {
            const isCorrect = option === questions[currentQuestion].answer;
            const isSelected = option === userAnswer;

            return (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className={`flex gap-2 text-lg justify-center items-center w-full font-semibold bg-btnColor text-mainTextColor mt-2 px-4 py-5 rounded-2xl hover:bg-gradient-to-r from-[#E65895] to-[#BC6BE8] ${isSelected ? "bg-gradient-to-r from-[#E65895] to-[#BC6BE8]" : ""}`}
                disabled={showAnswer}
              >
                {option}
                {showAnswer && (
                  <>
                    {isCorrect && <img src={correto} alt="Resposta Correta" />}
                    {isSelected && !isCorrect && <img src={errado} alt="Resposta Errada" />}
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
