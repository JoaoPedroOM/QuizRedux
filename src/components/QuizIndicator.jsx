import React from "react";

const QuizIndicator = ({ currentQuestion, totalQuestions }) => {
  return (
    <div className="flex justify-center space-x-2 mb-4">
      {Array.from({ length: totalQuestions }, (_, index) => (
        <div
          key={index}
          className={`w-4 h-4 rounded-full ${
            index < currentQuestion ? "bg-gradient-to-r from-[#E65895] to-[#BC6BE8]" : "bg-[#373D6D]"
          }`}
        ></div>
      ))}
    </div>
  );
};

export default QuizIndicator;
