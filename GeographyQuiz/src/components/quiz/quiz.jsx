import React, { useState, useEffect } from 'react';
import "./quiz.css";
import { quiz1Questions } from "../../utils/quizQuestions";
import Questions from './questions/questions';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState(quiz1Questions);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    if (questions.length > 0) {
      setCurrentQuestion(questions[questionIndex]);
    }
  }, [questionIndex, questions]);

  function handleQuizClick(e) {
    if (e.target.textContent === currentQuestion.answer) {
      setScore((score) => score + 1);
    }
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

  

  return (
    <div className="quiz-container">
      {questions.length > 0 && (
        <Questions
          key={currentQuestion.question}
          {...currentQuestion}
          handleQuizClick={handleQuizClick}
          handleNextClick={handleNextClick}
          handlePreviousClick={handlePreviousClick}
        />
      )}

      {questions.length <= 0 && <h5>There has been an error getting your questions</h5>}
    </div>
  );
}