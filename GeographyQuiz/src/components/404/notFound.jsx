import { Link } from "react-router-dom";
import "./notFound.css";

export default function PageNotFound() {
  return (
    <div className="not-found-container">
      <h1 className="glitch" data-text="404">404</h1>
      <p className="not-found-text">This page wandered off into the unknown.</p>
      <Link to="/" className="home-button">⟵ Return to safety</Link>
    </div>
  );
}
