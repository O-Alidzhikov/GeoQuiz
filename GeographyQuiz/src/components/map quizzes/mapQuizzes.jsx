import "./mapQuizzes.css"
import { Link } from "react-router-dom"

export default function MapQuizzes() {
    return (
        <div className="map-quizzes-container">
            <h1 className="map-quizzes-title">Explore the World Through Quizzes</h1>
            <div className="map-grid">
                <div className="quizz-map-box europe">
                    <div className="map-content">
                        <h2>Europe</h2>
                        <p>Test your knowledge of the old continent's countries!</p>
                        <button className="map-button">
                            <Link to="/europe-quiz" className="map-link">Start Quiz</Link>
                        </button>
                    </div>
                </div>
                
                <div className="quizz-map-box asia">
                    <div className="map-content">
                        <h2>Asia</h2>
                        <p>Can you name all countries in the most populous continent?</p>
                        <button className="map-button">
                            <Link to="/asia-quiz" className="map-link">Start Quiz</Link>
                        </button>
                    </div>
                </div>
                
                <div className="quizz-map-box south-america">
                    <div className="map-content">
                        <h2>South America</h2>
                        <p>How well do you know the countries of this diverse continent?</p>
                        <button className="map-button">
                            <Link to="/south-america-quiz" className="map-link">Start Quiz</Link>
                        </button>
                    </div>
                </div>
                
                <div className="quizz-map-box africa">
                    <div className="map-content">
                        <h2>Africa</h2>
                        <p>Challenge yourself with the continent that has the most countries!</p>
                        <button className="map-button">
                            <Link to="/africa-quiz" className="map-link">Start Quiz</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}