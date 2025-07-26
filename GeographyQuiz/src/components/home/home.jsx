import "./home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <header className="home-hero">
        <h1 className="home-title">Welcome to My Project</h1>
        <p className="home-subtitle">Fun Quizzes</p>
      </header>

      <section className="home-features">
        <div className="home-feature-card">
          <h2 className="home-feature-title">Feature One</h2>
          <p className="home-feature-desc">
            Users can play map-based quizzes for Europe, Asia, Africa, and South America.
            When you press play, the name of a country will appear, and you must click on the correct country!
          </p>
        </div>

        <div className="home-feature-card">
          <h2 className="home-feature-title">Feature Two</h2>
          <p className="home-feature-desc">
            There’s a quiz system where you get four answer options—three incorrect and one correct.
            You also have access to hints like 50/50 and removing one wrong answer.
          </p>
        </div>

        <div className="home-feature-card">
          <h2 className="home-feature-title">Feature Three</h2>
          <p className="home-feature-desc">
            Logged-in users can create, edit, and delete their own custom quizzes.
          </p>
        </div>
      </section>

      <section className="home-about">
        <h2 className="home-section-title">About The Project</h2>
        <div className="home-about-content">
          <p className="home-about-text">
            This project was built for fun and to practice key React concepts.
            I also wanted to build a full-stack application from scratch—handling both the client and the server.
            I hope you enjoy it!
          </p>
          <p className="home-about-text">feel free to test or break the project in any way i want to keep improving my developer skills</p>
        </div>
      </section>

      <section className="home-cta">
        <h2 className="home-cta-title">Ready to Get Started?</h2>
        <p className="home-cta-text"></p>
        <Link to="/register">
          <button className="home-cta-button">Sign Up Today</button>
        </Link>
      </section>
    </div>
  );
}
