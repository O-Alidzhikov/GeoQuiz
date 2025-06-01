import { Link } from "react-router-dom";
import { getQuizzes } from "../../services/quizService";
import CustomElement from "./custom-quiz-element.jsx/CustomQuizElement";
import { useState, useEffect } from "react";

export default function QuizOptions() {
  const [customQuizzes, setCustomQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuiz = async () => {
      const quizzesData = await getQuizzes();
      setCustomQuizzes(quizzesData);
      console.log(customQuizzes);
    };

    fetchQuiz();
  }, []);

  return (
    <>
      <div className="quiz-page-container">
        <h1 className="quiz-page-heading">Select a Quiz</h1>

        <div className="quiz-element-scroll-wrapper">
          {customQuizzes.map((quiz) => (
            <CustomElement key={quiz._id} quiz={quiz} />
          ))}
        </div>
      </div>
    </>
  );
}
