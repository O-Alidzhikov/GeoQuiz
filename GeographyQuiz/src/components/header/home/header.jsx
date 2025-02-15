import { Link } from "react-router-dom"
import './header.css'
import { UserContext } from "../../../contexts/userContext"
import { useContext, useEffect } from "react"

export default function Header() {

const {isAuthenticated , username} = useContext(UserContext)

        console.log(username)
    return (
        <header className='header'>
            <h1><Link className="home" to="/">Home</Link></h1>
            <h2>{isAuthenticated && username}</h2>
           
            <nav>
                <Link to="/map-quizzes">Quizzes</Link>

                <div id="user">
                    <Link to="/quizzes">Do More Quizzes</Link>
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