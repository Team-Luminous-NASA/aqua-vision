import { Button } from "@/components/ui/button";
import React from "react";

interface QuizResultSectionProps {
  score: number;
  totalQuestion: number;
}

const QuizResultSection = ({
  score,
  totalQuestion,
}: QuizResultSectionProps) => {
  return (
    // <div className="mt-8 p-6 bg-white rounded-lg shadow-md border border-gray-200">
    //   <div className="flex items-center space-x-3">
    //     <div className="bg-green-100 p-3 rounded-full">
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         className="h-6 w-6 text-green-600"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //         strokeWidth="2"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           d="M5 13l4 4L19 7"
    //         />
    //       </svg>
    //     </div>
    //     <h2 className="text-2xl font-bold text-gray-800">Quiz Results</h2>
    //   </div>

    //   <p className="mt-4 text-lg text-black">
    //     Your score: <span className="font-semibold text-blue-600">{score}</span>{" "}
    //     out of{" "}
    //     <span className="font-semibold text-gray-600">{totalQuestion}</span>
    //   </p>

    //   <div className="mt-4">
    //     <p className="text-gray-600">
    //       {score / totalQuestion > 0.5
    //         ? "Great job! Keep up the good work!"
    //         : "Don't worry, you can try again!"}
    //     </p>
    //   </div>

    //   <div className="mt-6">
    //     <button
    //       className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-150"
    //       onClick={() => window.location.reload()}
    //     >
    //       Retake Quiz
    //     </button>
    //   </div>
    // </div>
    <div className="mt-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-bold tracking-tight mb-4 animate-pulse">
        🎉 Results
      </h2>
      <div className="flex items-center justify-between">
        <p className="text-lg">Your Score:</p>
        <p className="text-3xl font-semibold">
          {score} / {totalQuestion}
        </p>
      </div>
      <div className="mt-4">
        <progress
          className="w-full h-4 rounded-full bg-red-400 shadow-inner"
          value={score}
          max={totalQuestion}
        />
      </div>
      <div className="mt-6">
        <Button
          variant="default"
          className="text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-150"
          onClick={() => window.location.reload()}
        >
          Retake Quiz
        </Button>
      </div>
    </div>
  );
};

export default QuizResultSection;
