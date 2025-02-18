import "./mapQuizzes.css"
import { Link } from "react-router-dom"

export default function MapQuizzes() {
    return (
        <>
            <div className="map-container">
                <div className="quizz-map-box">
                    <h2>Map Of Europe</h2>
                    <p>Do you know all the countries of the old continent? Test your knowledge in this quiz!</p>
                    <button className="map-button">
                        <Link to="/europe-quiz" className="map-link">Play the map of Europe here!</Link>
                    </button>
                </div>
                <div className="quizz-map-box">
                    <h2>Map Of Asia</h2>
                    <p>Do you know all the countries of the most populous continent? Test your knowledge in this quiz!</p>
                    <button className="map-button">
                        <Link to="/asia-quiz" className="map-link">Play the map of Asia here!</Link>
                    </button>
                </div>
                <div className="quizz-map-box">
                    <h2>Map Of South America</h2>
                    <p>Do you know all the countries of South America? Test your knowledge in this quiz!</p>
                    <button className="map-button">
                        <Link to="/south-america-quiz" className="map-link">Play the map of South America here!</Link>
                    </button>
                </div>
                <div className="quizz-map-box">
                    <h2>Map Of Africa</h2>
                    <p>Africa has the most countries in the world! Do you know them? Test your knowledge in this quiz!</p>
                    <button className="map-button">
                        <Link to="/africa=quiz" className="map-link">Play the map of Africa here!</Link>
                    </button>
                    </div>
                <div className="quizz-map-box">hello from mapQuizzes</div>
            </div>
        </>
    );
}
