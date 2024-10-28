import React from "react";
import congrats from "../imgs/congrats.svg";
import { useDispatch, useSelector } from "react-redux";
import { questionActions } from "../store/question-slice";
import App from "../App";

const Congrats = () => {
  const dispatch = useDispatch()
  const totalQuestions = useSelector((state) => state.question.totalQuestions);
  const correctAnswer = useSelector((state) => state.question.correct);
  const resetQuiz = useSelector((state) => state.question.quizCompleted)
  
  function handlePlayAgain(){
    dispatch(questionActions.resetQuiz())
  }

  if(!resetQuiz){
    return <App/>
  }


  return (
    <section className="flex justify-center items-center h-screen">
      <div className="bg-bgQuiz lg:w-1/5 md:w-1/2 w-[70%] lg:h-1/2 h-[60%] px-2 flex flex-col items-center justify-center shadow-md rounded-lg">
        <img src={congrats} alt="Ilustração com confete de festa" />

        <div className="flex flex-col items-center mt-2">
          <h2 className="font-main lg:text-2xl text-base text-center text-white font-semibold">
            Parabéns! Completou o teste.
          </h2>
          <span className="text-white lg:text-base text-[13px] font-main mt-2 text-center">
            Você respondeu {correctAnswer}/{totalQuestions} corretamente.
          </span>
        </div>

        <button className="flex mt-8 text-[15px] justify-center items-center w-[70%] font-semibold text-mainTextColor px-2 py-4 rounded-2xl bg-gradient-to-r from-[#E65895] to-[#BC6BE8]"
        onClick={handlePlayAgain}
        >
          Jogar novamente
        </button>
      </div>
    </section>
  );
};

export default Congrats;
