"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IQuizQuestion } from "@/data/quiz/beginner";
import QuizResultSection from "./QuizResult";

export default function QuizExam({ quizData }: { quizData: IQuizQuestion[] }) {
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerChange = (questionId: number, answerIndex: number) => {
    setUserAnswers((prev) => ({ ...prev, [questionId]: answerIndex }));
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const calculateScore = (): number => {
    return quizData?.reduce((score, question) => {
      return (
        score + (userAnswers[question.id] === question.correctAnswer ? 1 : 0)
      );
    }, 0);
  };

  return (
    <div className="mx-auto py-8">
      <ScrollArea className="rounded-md border p-4">
        {quizData?.length > 0 &&
          quizData?.map((question) => (
            <Card
              key={question.id}
              className="mb-6 bg-white/90 hover:bg-white backdrop-blur-md text-black px-5 py-3"
            >
              <CardHeader>
                <CardTitle className="text-sm text-muted-foreground">
                  Question {question.id}
                </CardTitle>
                <CardDescription className="text-2xl text-black font-semibold">
                  {question.question}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  onValueChange={(value) =>
                    handleAnswerChange(question.id, parseInt(value))
                  }
                  value={userAnswers[question.id]?.toString()}
                >
                  {question.options.map((option, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 mb-2"
                    >
                      <RadioGroupItem
                        value={index.toString()}
                        id={`q${question.id}-option${index}`}
                        className={`transition-colors ${
                          userAnswers[question.id] !== index &&
                          "hover:bg-blue-600"
                        }`} // Ensure hover only applies when it's not selected
                        style={{
                          backgroundColor: showResults
                            ? index === question.correctAnswer
                              ? "green"
                              : userAnswers[question.id] === index
                                ? "red"
                                : ""
                            : userAnswers[question.id] === index
                              ? "blue"
                              : "",
                          color:
                            userAnswers[question.id] === index ? "white" : "", // Change text color to white if selected
                        }}
                      />
                      <Label
                        htmlFor={`q${question.id}-option${index}`}
                        className="hover:bg-gray-300 px-5 py-2 rounded-md cursor-pointer"
                      >
                        {option}
                      </Label>
                      {showResults && (
                        <span
                          className={
                            index === question.correctAnswer
                              ? "text-green-600 ml-2"
                              : userAnswers[question.id] === index
                                ? "text-red-600 ml-2"
                                : ""
                          }
                        >
                          {index === question.correctAnswer
                            ? "✓"
                            : userAnswers[question.id] === index
                              ? "✗"
                              : ""}
                        </span>
                      )}
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>
          ))}
      </ScrollArea>
      <div className="mt-6">
        <Button
          onClick={handleSubmit}
          disabled={showResults}
          className={
            showResults
              ? "bg-green-700"
              : "bg-white text-black hover:bg-gray-200 hover:text-black"
          }
        >
          {showResults ? "Quiz Completed" : "Submit Answers"}
        </Button>
        {showResults && (
          <QuizResultSection
            score={calculateScore()}
            totalQuestion={quizData.length}
          />
        )}
      </div>
    </div>
  );
}
