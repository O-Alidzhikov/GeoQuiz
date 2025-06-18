import React, { useEffect, useState, useContext } from "react";
import QuizCreate from "./quiz create/QuizCreate";
import { editQuiz, getQuiz } from "../../services/quizService";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

export default function QuizEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { userId } = useContext(UserContext);

  const [questions, setQuestions] = useState([]);
  const [quizTitle, setQuizTitle] = useState("");
  const [quizDescription, setDescription] = useState("");
  const [numberQuestions, setNumberQuestions] = useState(0);

  useEffect(() => {
    const fetchQuiz = async () => {
      const fetchedQuiz = await getQuiz(id);
      if (fetchedQuiz) {
        setQuestions(fetchedQuiz.questions);
        setQuizTitle(fetchedQuiz.title);
        setDescription(fetchedQuiz.description);
        setNumberQuestions(fetchedQuiz.questions.length);
      }
    };
    fetchQuiz();
  }, [id]);

  async function formHandler(e) {
    e.preventDefault();
    const quizData = Object.fromEntries(new FormData(e.currentTarget));

    const updatedQuestions = [];

    for (let i = 1; i <= numberQuestions; i++) {
      updatedQuestions.push({
        question: quizData[`question - ${i}`],
        optionA: quizData[`optionA - ${i}`],
        optionB: quizData[`optionB - ${i}`],
        optionC: quizData[`optionC - ${i}`],
        optionD: quizData[`optionD - ${i}`],
        answer: quizData[`answer - ${i}`],
      });
    }

    const editedQuiz = {
      id: id,
      title: quizTitle,
      description: quizDescription,
      questions: updatedQuestions,
      owner: userId,
    };

    console.log("Sending edited quiz:", editedQuiz);

    try {
      await editQuiz(editedQuiz);
      navigate("/");
    } catch (err) {
      console.error("Error editing quiz:", err);
    }
  }

  return (
    <div className="question-generator-container">
      <div className="question-header">
        <h4>Welcome! Here you can edit your quiz:</h4>
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

      <form className="quiz-generator-container" onSubmit={formHandler}>
        {questions.map((question, index) => (
          <QuizCreate
            key={question._id || index}
            questionNumber={index + 1}
            initialQuestion={question.question}
            initialOptionA={question.optionA}
            initialOptionB={question.optionB}
            initialOptionC={question.optionC}
            initialOptionD={question.optionD}
            initialAnswer={question.answer}
          />
        ))}
        {questions.length > 0 && <button type="submit">Save Changes</button>}
      </form>
    </div>
  );
}
