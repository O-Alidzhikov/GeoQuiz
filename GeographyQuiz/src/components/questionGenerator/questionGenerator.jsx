import React, { useState } from "react";
import QuizCreate from "./quiz create/QuizCreate";
import { createQuiz } from "../../services/quizService";
import { useNavigate } from "react-router";
import { UserContext } from "../../contexts/userContext";
import { useContext } from "react";
import "./questionGenerator.css";

export default function QuestionGenerator() {
  const [numberQuestions, setNumberQuestions] = useState(0);
  const [quizTitle, setQuizTitle] = useState("");
  const [quizDescription, setDescription] = useState("");
  // const { userId} = useContext(UserContext);

  const navigate = useNavigate();

  async function formHandler(e) {
    e.preventDefault();
    const quizData = Object.fromEntries(new FormData(e.currentTarget));

    let questions = [];

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
    const quiz = {
      title: quizTitle,
      questions: questions,
      // owner: userId,
      description:quizDescription,
    };

    console.log(quiz);
    await createQuiz(quiz);
    navigate("/");
  }

  return (
    <div className="question-generator-container">
      <div className="question-header">
        <h4>Welcome! First tell us about your quiz:</h4>
      </div>

      <div className="quiz-settings-card">
        <div className="input-group full-width">
          <label htmlFor="quiz-title">Quiz Title:</label>
          <input
            type="text"
            id="quiz-title"
            value={quizTitle}
            onChange={(e) => setQuizTitle(e.target.value)}
            placeholder="Enter quiz title"
          />
        </div>

        <div className="input-group full-width">
          <label htmlFor="quiz-description">Description:</label>
          <textarea
            id="quiz-description"
            value={quizDescription}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Briefly describe your quiz"
          />
        </div>
      </div>

      <div className="controls">
        <div className="input-group">
          <label htmlFor="question-count">Number of Questions:</label>
          <input
            type="number"
            id="question-count"
            min="0"
            value={numberQuestions}
            onChange={(e) =>
              setNumberQuestions(Math.max(0, Number(e.target.value)))
            }
            onWheel={(e) => e.target.blur()}
          />
        </div>
      </div>

      <form className="quiz-generator-container" onSubmit={formHandler}>
        {[...Array(numberQuestions)].map((_, i) => (
          <QuizCreate key={i} questionNumber={i + 1} />
        ))}
        {numberQuestions > 0 && <button type="submit">Create Quiz</button>}
      </form>
    </div>
  );
}
