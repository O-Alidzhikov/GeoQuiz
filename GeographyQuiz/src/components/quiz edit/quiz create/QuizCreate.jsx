import React from 'react';
import './QuizCreate.css';

export default function QuizCreate({ questionNumber }) {
  return (
    <div className="quiz-creator-container">
      <header className="quiz-header">
        <h1>Question {questionNumber}</h1>
      </header>

      <div className="quiz-form" >
        <div className="form-group">
          <label htmlFor="question">Question</label>
          <input
            type="text"
            id={`question - ${questionNumber}`}
            name={`question - ${questionNumber}`}
            placeholder="Enter your question here"
            required
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
              />
            </div>
            <div className="form-group">
              <label htmlFor="answer">Answer</label>
              <input
                type="text"
                id={`answer - ${questionNumber}`}
                name={`answer - ${questionNumber}`}
                placeholder="Write the correct answer here"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}