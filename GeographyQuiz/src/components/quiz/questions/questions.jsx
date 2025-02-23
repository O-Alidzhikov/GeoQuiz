export default function Questions({
    question,
    optionA,
    optionB,
    optionC,
    optionD,
    answer,
    handleQuizClick,
    handleNextClick,
    handlePreviousClick
  }) {
    return (
      <div className="quiz-box">
        <div className="question-section">
          <div className="question-count">
            <span>Question 1</span>/3
          </div>
          <h5>{question}</h5>
        </div>
        <div className="all-options">
          <div className="answer-section">
            <button className="answer-button" onClick={handleQuizClick}>{optionA}</button>
            <button className="answer-button" onClick={handleQuizClick}>{optionB}</button>
          </div>
          <div className="answer-section">
            <button className="answer-button" onClick={handleQuizClick}>{optionC}</button>
            <button className="answer-button" onClick={handleQuizClick}>{optionD}</button>
          </div>
        </div>
  
        <div className="movement-buttons">
          <button className="previous-btn" onClick={handlePreviousClick}>Previous</button>
          <button className="next-btn" onClick={handleNextClick}>Next</button>
          <button className="give-up-btn">Give up</button>
        </div>
      </div>
    );
  }