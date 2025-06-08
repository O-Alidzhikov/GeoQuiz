import { Link } from "react-router-dom";
import "./header.css";
import { UserContext } from "../../../contexts/userContext";
import { useContext } from "react";

export default function Header() {
  const { isAuthenticated, username, userId } = useContext(UserContext);

  return (
    <header className="header">
      <h1>
        <Link className="home" to="/">
          Home
        </Link>
      </h1>
      <h2>{isAuthenticated && username}</h2>

      <nav>
        <Link to="/map-quizzes">Map Quizzes</Link>

        <div id="user">
          <Link to="/custom-quizzes">Do More Quizzes</Link>
          {isAuthenticated && <Link to="/logout">Logout</Link>}
          {isAuthenticated && (
            <Link to="/quiz-create">Create Your Own Quiz!</Link>
          )}
        </div>
        <div id="guest">
          {isAuthenticated === false && <Link to="/login">Login</Link>}
          {isAuthenticated === false && <Link to="/register">Register</Link>}
        </div>
      </nav>
    </header>
  );
}
