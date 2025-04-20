import React, { useState } from "react";
import QuizCreate from "./quiz create/QuizCreate";
import "./questionGenerator.css"

export default function QuestionGenerator() {
  const [numberQuestions, setNumberQuestions] = useState(0);

  return (
    <div className="question-generator-container">
      <div className="controls">
        <label>Welcome! First thing tell us how many questions you would like to have:</label>
        <input
          type="number"
          min="0"
          value={numberQuestions}
          onChange={(e) => setNumberQuestions(Math.max(0, Number(e.target.value)))}
        />
      </div>

      <div className="quiz-generator-container">
        {[...Array(numberQuestions)].map((_, i) => (
          <QuizCreate key={i} questionNumber={i + 1} />
        ))}
      </div>
    </div>
  );
}