
import { Routes, Route } from 'react-router-dom';

import AuthProvider from './contexts/userContext';
import Header from './components/header/home/header'
import Quiz from './components/eu/eu'
import Asia from './components/asia/asia';
import Login from './components/login/login'
import Register from './components/register/register';
import Logout from './components/logout/logout';
import Quizes from './components/quizzes/quizzes';



 

function App() {

  return (
    <>
      <AuthProvider>
        <Header></Header>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/quiz" element={<Quiz />}></Route>
          <Route path="/asia" element={<Asia />}></Route>
          <Route path="/quizzes" element={<Quizes />}></Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App
