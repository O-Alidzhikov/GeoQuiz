import React, { useState, useEffect } from "react";
import "./quiz.css";
import { quiz1Questions } from "../../utils/quizQuestions";
import Questions from "./questions/questions";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState(quiz1Questions);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (questions.length > 0) {
      setCurrentQuestion(questions[questionIndex]);
    }
  }, [questionIndex, questions]);

  useEffect(() => {
    let newScore = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index] === question.answer) {
        newScore += 1;
      }
    });
    setScore(newScore);
  }, [userAnswers, questions]);

  function handleQuizClick(e) {
    const selectedAnswer = e.target.textContent;

    setUserAnswers((prev) => ({
      ...prev,
      [questionIndex]: selectedAnswer,
    }));
  }

  function handleNextClick() {
    setQuestionIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      if (newIndex < questions.length) {
        return newIndex;
      }
      return prevIndex;
    });
  }

  function handlePreviousClick() {
    setQuestionIndex((prevIndex) => {
      const newIndex = Math.max(0, prevIndex - 1);
      return newIndex;
    });
  }

  function handleHintClick() {
    let wrongAnswers = document.querySelectorAll(".answer-button");

    for (let answer of wrongAnswers) {
      if (answer.textContent !== currentQuestion.answer) {
        answer.remove();
        break;
      }
    }
    console.log("Hint clicked");
  }

  function handleHalfClick() {
    let wrongAnswers = document.querySelectorAll(".answer-button");
    let loops = 0;

    for (let answer of wrongAnswers) {
      if (answer.textContent !== currentQuestion.answer) {
        answer.remove();
        loops++;

        if (loops >= 2) {
          break;
        }
      }
    }
  }

  function handleFinishClick() {
    setIsFinished(true);
  }
  return (
    <div className="quiz-container">
      {questions.length > 0 && (
        <Questions
          key={currentQuestion.question}
          {...currentQuestion}
          handleQuizClick={handleQuizClick}
          handleNextClick={handleNextClick}
          handlePreviousClick={handlePreviousClick}
          handleHintClick={handleHintClick}
          handleHalfClick={handleHalfClick}
          handleFinishClick={handleFinishClick}
          userAnswer={userAnswers[questionIndex]}
          isFinished={isFinished}
          questionIndex={questionIndex}
          questions={questions}
          score={score}
        />
      )}
    </div>
  );
}
