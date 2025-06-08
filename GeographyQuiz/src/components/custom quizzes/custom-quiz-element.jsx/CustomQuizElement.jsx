import "./CustomQuizElement.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../../contexts/userContext";
import { useContext,useState } from "react";
import { deleteQuiz } from "../../../services/quizService"

export default function CustomElement({ quiz }) {
const { userId } = useContext(UserContext);
const [isDeleted, setIsDeleted] = useState(false)  


 async function  quizDelete(){
    if(userId === quiz.owner){
      const deletedQuiz = await deleteQuiz(quiz._id)
      setIsDeleted(true)
      return deletedQuiz
    } else {
      console.log("this is not the owner")
    }
  }

  return (
    <div className="quiz-element-invitation">
      <h2 className="quiz-element-title">{quiz.title}</h2>
      <p className="quiz-element-description">{quiz.description}</p>

      <Link className="quiz-element-button" to={`/quizzes/${quiz._id}`}>
        Start Quiz Now
      </Link>
      <button className="quiz-element-delete" onClick={quizDelete}>Delete Quiz</button>
      <button className="quiz-element-edit">Edit Quiz</button>
    </div>
  );
}