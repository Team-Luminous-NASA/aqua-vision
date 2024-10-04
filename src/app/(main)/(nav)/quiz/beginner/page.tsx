import PageTitle from "@/components/common/page_title/PageTitle";
import QuizExam from "@/components/pages/quiz/QuizExam";
import { beginnerQuizData } from "@/data/quiz/beginner";
import React from "react";

const BeginnerQuizPage = () => {
  return (
    <div className="w-full">
      <PageTitle pageTitle="Beginner Quiz" />
      <QuizExam quizData={beginnerQuizData} />
    </div>
  );
};

export default BeginnerQuizPage;
