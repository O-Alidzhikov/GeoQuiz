import React from 'react';
import './QuizCreate.css';

export default function QuizCreate({ questionNumber }) {
  return (
    <div className="quiz-creator-container">
      <header className="quiz-header">
        <h1>Question {questionNumber}</h1>
      </header>

      <form className="quiz-form">
        <div className="form-group">
          <label htmlFor="question">Question</label>
          <input
            type="text"
            id="question"
            name="question"
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
                id="optionA"
                name="optionA"
                placeholder="Enter option A"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="optionB">Option B</label>
              <input
                type="text"
                id="optionB"
                name="optionB"
                placeholder="Enter option B"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="optionC">Option C</label>
              <input
                type="text"
                id="optionC"
                name="optionC"
                placeholder="Enter option C"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="optionD">Option D</label>
              <input
                type="text"
                id="optionD"
                name="optionD"
                placeholder="Enter option D"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="answer">Answer</label>
              <input
                type="text"
                id="answer"
                name="answer"
                placeholder="Write the correct answer here"
              />
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="btn btn-secondary">
            Clear Form
          </button>
        </div>
      </form>
    </div>
  );
}