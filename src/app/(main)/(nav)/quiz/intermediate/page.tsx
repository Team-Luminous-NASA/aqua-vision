import PageTitle from "@/components/common/page_title/PageTitle";
import QuizExam from "@/components/pages/quiz/QuizExam";
import { intermediateQuizData } from "@/data/quiz/intermediate";
import React from "react";

const IntermediateQuizPage = () => {
  return (
    <div>
      <PageTitle pageTitle="Intermediate Quiz" />
      <QuizExam quizData={intermediateQuizData} />
    </div>
  );
};

export default IntermediateQuizPage;
