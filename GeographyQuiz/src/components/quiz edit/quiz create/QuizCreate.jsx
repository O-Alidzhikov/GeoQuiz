import React from 'react';
import './QuizCreate.css';

export default function QuizCreate({ 
  questionNumber, 
  initialQuestion = "", 
  initialOptionA = "", 
  initialOptionB = "", 
  initialOptionC = "", 
  initialOptionD = "", 
  initialAnswer = "" 
}) {
  return (
    <div className="quiz-creator-container">
      <header className="quiz-header">
        <h1>Question {questionNumber}</h1>
      </header>

      <div className="quiz-form">
        <div className="form-group">
          <label htmlFor="question">Question</label>
          <input
            type="text"
            id={`question - ${questionNumber}`}
            name={`question - ${questionNumber}`}
            placeholder="Enter your question here"
            required
            defaultValue={initialQuestion}
          />
        </div>

        <div className="form-group">
          <label>Options</label>
          <div className="options-grid">
            <div className="form-group">
              <label htmlFor="optionA">Option A</label>
              <input
                type="text"
                id={`optionA - ${questionNumber}`}
                name={`optionA - ${questionNumber}`}
                placeholder="Enter option A"
                required
                defaultValue={initialOptionA}
              />
            </div>
            <div className="form-group">
              <label htmlFor="optionB">Option B</label>
              <input
                type="text"
                id={`optionB - ${questionNumber}`}
                name={`optionB - ${questionNumber}`}
                placeholder="Enter option B"
                required
                defaultValue={initialOptionB}
              />
            </div>
            <div className="form-group">
              <label htmlFor="optionC">Option C</label>
              <input
                type="text"
                id={`optionC - ${questionNumber}`}
                name={`optionC - ${questionNumber}`}
                placeholder="Enter option C"
                required
                defaultValue={initialOptionC}
              />
            </div>
            <div className="form-group">
              <label htmlFor="optionD">Option D</label>
              <input
                type="text"
                id={`optionD - ${questionNumber}`}
                name={`optionD - ${questionNumber}`}
                placeholder="Enter option D"
                required
                defaultValue={initialOptionD}
              />
            </div>
            <div className="form-group">
              <label htmlFor="answer">Answer</label>
              <input
                type="text"
                id={`answer - ${questionNumber}`}
                name={`answer - ${questionNumber}`}
                placeholder="Write the correct answer here"
                required
                defaultValue={initialAnswer}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
