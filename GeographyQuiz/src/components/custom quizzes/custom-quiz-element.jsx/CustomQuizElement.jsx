import "./CustomQuizElement.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../../contexts/userContext";
import { useContext } from "react";
import { deleteQuiz } from "../../../services/quizService";
import { useNavigate } from "react-router";

export default function CustomElement({ quiz }) {
  const { userId } = useContext(UserContext);
  const navigate = useNavigate();

  async function quizDelete() {
    if (userId === quiz.owner) {
      const deletedQuiz = await deleteQuiz(quiz._id);
      navigate("/");
      return deletedQuiz;
    } else {
      console.log("this is not the owner");
    }
  }

  return (
    <div className="quiz-element-invitation">
      <h2 className="quiz-element-title">{quiz.title}</h2>
      <p className="quiz-element-description">{quiz.description}</p>

      <div className="quiz-element-button-group">
        <Link className="quiz-element-button" to={`/quizzes/${quiz._id}`}>
          Start Quiz Now
        </Link>
        
        {userId === quiz.owner && (
          <div className="quiz-element-owner-actions">
            <Link className="quiz-element-edit-button" to={`/quiz-edit/${quiz._id}`}>
              Edit
            </Link>
            <button className="quiz-element-delete-button" onClick={quizDelete}>
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}