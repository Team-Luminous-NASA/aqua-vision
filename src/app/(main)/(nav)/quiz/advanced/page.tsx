import PageTitle from "@/components/common/page_title/PageTitle";
import QuizExam from "@/components/pages/quiz/QuizExam";
import { advancedQuizData } from "@/data/quiz/advanced";
import React from "react";

const AdvancedQuizPage = () => {
  return (
    <div>
      <PageTitle pageTitle="Advaned Quiz" />
      <QuizExam quizData={advancedQuizData} />
    </div>
  );
};

export default AdvancedQuizPage;
