import './home.css';

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="home-feature-card">
          <h2 className="home-feature-title">Feature Two</h2>
          <p className="home-feature-desc">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="home-feature-card">
          <h2 className="home-feature-title">Feature Three</h2>
          <p className="home-feature-desc">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

      <section className="home-about">
        <h2 className="home-section-title">About The Project</h2>
        <div className="home-about-content">
          <p className="home-about-text">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="home-about-text">
          blah blah blah
          </p>
        </div>
      </section>

      <section className="home-cta">
        <h2 className="home-cta-title">Ready to Get Started?</h2>
        <p className="home-cta-text">
          Lorem ipsum
        </p>
        <button className="home-cta-button">Sign Up Today</button>
      </section>
    </div>
  );
}