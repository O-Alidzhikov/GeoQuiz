import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./quiz.css";
import Questions from "../quiz/questions/questions";
import { getQuiz } from "../../../services/quizService";

export default function Quiz() {
  const { id } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);
  const [hintsLeft, setHintsLeft] = useState(5);
  const [fiftyFiftyHint, setFiftyFiftyHint] = useState(2);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const fetchQuiz = async () => {
      const quiz = await getQuiz(id);
      if (quiz) {
        setQuestions(quiz.questions);
      }
    };
    fetchQuiz();
  }, [id]);

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
    setQuestionIndex((prevIndex) =>
      Math.min(prevIndex + 1, questions.length - 1)
    );
  }

  function handlePreviousClick() {
    setQuestionIndex((prevIndex) => Math.max(0, prevIndex - 1));
  }

  function handleHintClick() {
    let wrongAnswers = document.querySelectorAll(".answer-button");
    setHintsLeft(hintsLeft - 1);

    for (let answer of wrongAnswers) {
      if (answer.textContent !== currentQuestion.answer) {
        answer.remove();
        break;
      }
    }
  }

  function handleHalfClick() {
    let wrongAnswers = document.querySelectorAll(".answer-button");
    let loops = 0;
    setFiftyFiftyHint(fiftyFiftyHint - 1);
    for (let answer of wrongAnswers) {
      if (answer.textContent !== currentQuestion.answer) {
        answer.remove();
        loops++;
        if (loops >= 2) break;
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
          hintsLeft={hintsLeft}
          fiftyFiftyHint={fiftyFiftyHint}
          score={score}
        />
      )}
    </div>
  );
}
