import React, { useState, useEffect } from 'react';
import "./quiz.css";
import {quiz1Questions} from "../../utils/quizQuestions"


export default function  Quiz() {
 let [currentQuestion, setCurrentQuestion] = useState({});
 let [questionIndex, setQuestionIndex] = useState(0);
 const [questions, setQuestions] = useState(quiz1Questions);
 let [score, setScore] = useState(0);
 let [showScore, setShowScore] = useState(false);
 let [previousQuestion, setPreviousQuestion] = useState({})
 let [nextQuestion, setNextQuestion] = useState({})



 useEffect(() => {
  if (questions.length > 0) {
    setCurrentQuestion(questions[questionIndex]);
    console.log(questions[questionIndex].question); 
    setQuestionIndex = questionIndex + 1
    console.log(questionIndex)
  }
}, [questions]);

  function handleQuizClick(e){
    console.log("you clicked something!")
    console.log(e.target)
  }

  return (
    <div className="quiz-container">
  <div className="quiz-box">
    <div className="question-section">
      <div className="question-count">
        <span>Question 1</span>/3
      </div>
        <h5>{currentQuestion.question}</h5>
    </div>
    <div className="all-options" onClick={handleQuizClick}>
      <div className="answer-section">
        <button className="answer-button">{currentQuestion.optionA}</button>
        <button className="answer-button">{currentQuestion.optionB}</button>
      </div>
    
      <div className="answer-section">
        <button className="answer-button">{currentQuestion.optionC}</button>
        <button className="answer-button">{currentQuestion.optionD}</button>
      </div>
      </div>

      <div className="movement-buttons">
        <button className="previous-btn">Previous</button>
        <button className="next-btn">Next</button>
        <button className="give-up-btn">Give up</button>
      </div>
  </div>
</div>
  );
}

 