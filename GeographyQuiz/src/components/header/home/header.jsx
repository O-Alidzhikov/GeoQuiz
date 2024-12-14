import { Link } from "react-router-dom"
import './header.css'

export default function Header() {



    return (
        <header className='header'>
            <h1><Link className="home" to="/">Home</Link></h1>
            <nav>
                <Link to="/quiz">Quiz</Link>

                <div id="user">
                    <Link to="/create">Create Game</Link>
                    <Link to="/logout">Logout</Link>

                </div>
                <div id="guest">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </nav>
        </header>
    )
}