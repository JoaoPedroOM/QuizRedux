import React from "react";

const QuizIndicator = ({ currentQuest, totalQuestions }) => {
  return (
    <div className="flex justify-center items-center space-x-2 mb-4">
      {Array.from({ length: totalQuestions }, (_, index) => (
        <div
          key={index}
          className={`w-8 h-8 flex items-center justify-center text-white font-main rounded-full ${
            index === currentQuest || index < currentQuest
              ? "bg-gradient-to-r from-[#E65895] to-[#BC6BE8]"
              : "bg-[#373D6D]" 
          }`}
        >
           {index + 1}
        </div>
      ))}
    </div>
  );
};

export default QuizIndicator;
