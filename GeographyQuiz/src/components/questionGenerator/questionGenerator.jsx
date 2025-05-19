import React, { useState } from "react";
import QuizCreate from "./quiz create/QuizCreate";
import "./questionGenerator.css"

export default function QuestionGenerator() {
  const [numberQuestions, setNumberQuestions] = useState(0);
  const [quizTitle, setQuizTitle] = useState("")

  function formHandler(e){
    e.preventDefault();
    const quizData = Object.fromEntries(new FormData(e.currentTarget));

    let questions = []

    for (let i = 1; i <= numberQuestions; i++) {
      questions.push({
        question: quizData[`question - ${i}`],
        optionA: quizData[`optionA - ${i}`],
        optionB: quizData[`optionB - ${i}`],
        optionC: quizData[`optionC - ${i}`],
        optionD: quizData[`optionD - ${i}`],
        answer: quizData[`answer - ${i}`],
      });
    }
  
    console.log(questions);
  }

  return (
    <div className="question-generator-container">
      <div className="controls">
        <label>Welcome! First thing tell us how many questions you would like to have. And the title of your quiz!:</label>
        <input
          type="number"
          min="0"
          value={numberQuestions}
          onChange={(e) => setNumberQuestions(Math.max(0, Number(e.target.value)))}
        />
        <input type="text" value={quizTitle} onChange={(e) => setQuizTitle(String(e.target.value))}/>
      </div>

      <form className="quiz-generator-container" onSubmit={formHandler}>
        {[...Array(numberQuestions)].map((_, i) => (
          <QuizCreate key={i} questionNumber={i + 1} />
        ))}
        <button type="submit" >cool button</button>
      </form>
    </div>
  );
}