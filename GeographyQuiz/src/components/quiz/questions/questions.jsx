export default function Questions({
  question,
  optionA,
  optionB,
  optionC,
  optionD,
  handleQuizClick,
  handleNextClick,
  handlePreviousClick,
  handleHintClick,
  handleHalfClick,
  userAnswer,
}) {
  return (
    <div className="quiz-box">
      <div className="question-section">
        <div className="question-count">
          <span>Question 1</span>/3
          <div className="hint-buttons">
            <button className="hint-button" onClick={handleHintClick}>
              Hint
            </button>
            <button className="hint-button" onClick={handleHalfClick}>
              50/50
            </button>
          </div>
        </div>
        <h5>{question}</h5>
      </div>
      <div className="all-options">
        <div className="answer-section">
          <button
            className={`answer-button ${
              userAnswer === optionA ? "selected" : ""
            }`}
            onClick={handleQuizClick}
          >
            {optionA}
          </button>
          <button
            className={`answer-button ${
              userAnswer === optionB ? "selected" : ""
            }`}
            onClick={handleQuizClick}
          >
            {optionB}
          </button>
        </div>
        <div className="answer-section">
          <button
            className={`answer-button ${
              userAnswer === optionC ? "selected" : ""
            }`}
            onClick={handleQuizClick}
          >
            {optionC}
          </button>
          <button
            className={`answer-button ${
              userAnswer === optionD ? "selected" : ""
            }`}
            onClick={handleQuizClick}
          >
            {optionD}
          </button>
        </div>
      </div>

      <div className="movement-buttons">
        <button className="previous-btn" onClick={handlePreviousClick}>
          Previous
        </button>
        <button className="next-btn" onClick={handleNextClick}>
          Next
        </button>
        <button className="give-up-btn">Give up</button>
      </div>
    </div>
  );
}
