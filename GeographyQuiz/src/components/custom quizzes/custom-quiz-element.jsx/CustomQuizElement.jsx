import "./CustomQuizElement.css";
import { Link } from "react-router-dom";

export default function CustomElement({ quiz }) {
  return (
    <div className="quiz-element-invitation">
      <h2 className="quiz-element-title">{quiz.title}</h2>
      <p className="quiz-element-description">{quiz.description}</p>

      <Link className="quiz-element-button" to={`/quizzes/${quiz._id}`}>
        Start Quiz Now
      </Link>
    </div>
  );
}
