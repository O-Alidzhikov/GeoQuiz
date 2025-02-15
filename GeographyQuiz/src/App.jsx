
import { Routes, Route } from 'react-router-dom';

import AuthProvider from './contexts/userContext';
import Header from './components/header/home/header'
import Home from './components/home/Home';
import Quiz from './components/eu/eu'
import Asia from './components/asia/asia';
import Login from './components/login/login'
import Register from './components/register/register';
import Logout from './components/logout/logout';
import Quizes from './components/quizzes/quizzes';
import MapQuizzes from './components/map quizzes/mapQuizzes';



 

function App() {

  return (
    <>
      <AuthProvider>
        <Header></Header>
        <Routes>
        <Route path="/" element={<Home />}></Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/europe-quiz" element={<Quiz />}></Route>
          <Route path="/map-quizzes" element={<MapQuizzes />}></Route>
          <Route path="/asia-quiz" element={<Asia />}></Route>
          <Route path="/quizzes" element={<Quizes />}></Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App
