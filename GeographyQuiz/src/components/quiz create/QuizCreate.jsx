import React from 'react';
import './QuizCreate.css';

export default function QuizCreate() {
  return (
    <div className="quiz-creator-container">
      <header className="quiz-header">
        <h1>Create Your Custom Quiz</h1>
        <p className="subtitle">Build engaging quizzes with multiple choice questions</p>
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
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="answer">Correct Answer</label>
          <select
            id="answer"
            name="answer"
            required
          >
            <option value="">Select the correct answer</option>
            <option value="optionA">Option A</option>
            <option value="optionB">Option B</option>
            <option value="optionC">Option C</option>
            <option value="optionD">Option D</option>
          </select>
        </div>

        <div className="form-actions">
          <button type="button" className="btn btn-secondary">
            Clear Form
          </button>
          <button type="submit" className="btn btn-primary">
            Add Question
          </button>
        </div>
      </form>

      <div className="question-list">
        <h2>Your Quiz Questions</h2>
        
        <div className="empty-state">
          <p>No questions added yet. Start by adding your first question above!</p>
        </div>

        <div className="questions-container" style={{display: 'none'}}>
          <div className="question-item">
            <div className="question-text">Sample Question</div>
            <div className="options-list">
              <div className="option option-correct">
                <span className="option-label">A:</span>
                <span>Sample Option A</span>
              </div>
              <div className="option">
                <span className="option-label">B:</span>
                <span>Sample Option B</span>
              </div>
              <div className="option">
                <span className="option-label">C:</span>
                <span>Sample Option C</span>
              </div>
              <div className="option">
                <span className="option-label">D:</span>
                <span>Sample Option D</span>
              </div>
            </div>
            <div className="question-actions">
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </div>

        <div className="form-actions bottom-actions" style={{display: 'none'}}>
          <button type="button" className="btn btn-secondary">
            Save as Draft
          </button>
          <button type="button" className="btn btn-success">
            Publish Quiz
          </button>
        </div>
      </div>
    </div>
  );
}