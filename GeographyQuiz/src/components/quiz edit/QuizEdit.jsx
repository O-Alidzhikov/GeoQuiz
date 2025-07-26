import React, { useEffect, useState, useContext } from "react";
import QuizCreate from "./quiz create/QuizCreate";
import { editQuiz, getQuiz } from "../../services/quizService";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";


export default function QuizEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { userId } = useContext(UserContext);
  const [errors, setErrors] = useState({});
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
    setErrors({}); 
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

    try {
      await editQuiz(editedQuiz);
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
        <h4>Welcome! Here you can edit your quiz:</h4>

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

      <form className="quiz-generator-container" onSubmit={formHandler}>
        {questions.map((question, index) => {
          const questionNum = index + 1;

          return (
            <div key={question._id || index} className="quiz-wrapper">
              <QuizCreate
                questionNumber={questionNum}
                initialQuestion={question.question}
                initialOptionA={question.optionA}
                initialOptionB={question.optionB}
                initialOptionC={question.optionC}
                initialOptionD={question.optionD}
                initialAnswer={question.answer}
              />

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
        {questions.length > 0 && (
          <button type="submit" className="submit-btn">
            Save Changes
          </button>
        )}
      </form>
    </div>
  );
}
