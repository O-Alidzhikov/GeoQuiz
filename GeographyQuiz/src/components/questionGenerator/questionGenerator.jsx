import React, { useState, useContext } from "react";
import QuizCreate from "./quiz create/QuizCreate";
import { createQuiz } from "../../services/quizService";
import { useNavigate } from "react-router";
import { UserContext } from "../../contexts/userContext";
import "./questionGenerator.css";

export default function QuestionGenerator() {
  const [numberQuestions, setNumberQuestions] = useState(0);
  const [quizTitle, setQuizTitle] = useState("");
  const [quizDescription, setDescription] = useState("");
  const [errors, setErrors] = useState({});
  const { userId } = useContext(UserContext);
  const navigate = useNavigate();

  async function formHandler(e) {
    e.preventDefault();
    setErrors({});

    const quizData = Object.fromEntries(new FormData(e.currentTarget));
    const questions = [];

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

    try {
      await createQuiz({
        title: quizTitle,
        questions,
        owner: userId,
        description: quizDescription,
      });
      navigate("/");
    } catch (error) {
      const newErrors = {};

      if (error.data?.errors) {
        error.data.errors.forEach((err) => {
          const questionMatch = err.match(/Question (\d+): (.+)/);
          if (questionMatch) {
            const [, qNum, message] = questionMatch;
            newErrors[qNum] = newErrors[qNum] || [];
            newErrors[qNum].push(message);
          } else {
            newErrors.general = newErrors.general || [];
            newErrors.general.push(err);
          }
        });
      } else {
        newErrors.general = [error.message];
      }

      setErrors(newErrors);
    }
  }

  return (
    <div className="question-generator-container">
      <div className="question-header">
        <h4>Welcome! First tell us about your quiz:</h4>

        {errors.general && (
          <div className="error-messages">
            {errors.general.map((err, i) => (
              <div key={`general-err-${i}`} className="error-message">
                 {err}
              </div>
            ))}
          </div>
        )}
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
            className={errors.general ? "input-error" : ""}
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
        {[...Array(numberQuestions)].map((_, i) => {
          const questionNum = i + 1;
          return (
            <div key={`question-${questionNum}`} className="quiz-wrapper">
              <QuizCreate questionNumber={questionNum} />

              {errors[questionNum] && (
                <div className="question-errors">
                  {errors[questionNum].map((err, j) => (
                    <div
                      key={`q${questionNum}-err-${j}`}
                      className="error-message"
                    >
                      {err}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {numberQuestions > 0 && (
          <button type="submit" className="submit-btn">
            Create Quiz
          </button>
        )}
      </form>
    </div>
  );
}
