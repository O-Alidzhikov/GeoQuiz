import React, { useState, useEffect } from 'react';
import "./quizzes.css";


export default function  Quizes() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
 // const [score, setScore] = useState(0);
 // const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      question1: 'What is the capital of France?',
      options: {
        a: {text: "Paris", isCorrect: true },
        b: {text: "Berin", isCorrect: false },
        c: {text: "London", isCorrect: false },
        d: {text: "Moscow", isCorrect: false },
      }
    },
    {
      question2: 'Which planet is closest to the Sun?',
      options: [
        { text: 'Venus', isCorrect: false },
        { text: 'Mars', isCorrect: false },
        { text: 'Mercury', isCorrect: true },
        { text: 'Earth', isCorrect: false },
      ],
    },

  ];


  useEffect(() => {
    let neededQuestion = questions.find(({question1}) => question1 === "What is the capital of France?");
    setCurrentQuestion(neededQuestion)
    console.log(currentQuestion)
    }, [currentQuestion]);
 



  return (
    <div className="quiz-container">
  <div className="quiz-box">
    <div className="question-section">
      <div className="question-count">
        <span>Question 1</span>/3
      </div>
        <h5>What is the capital of Paris</h5>
    </div>
      <div className="answer-section">
        <button className="answer-button">London</button>
        <button className="answer-button">Paris</button>
      </div>
    
      <div className="answer-section">
        <button className="answer-button">London</button>
        <button className="answer-button">Paris</button>
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

 