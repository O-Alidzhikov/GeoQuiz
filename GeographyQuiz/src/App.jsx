import { Routes, Route } from "react-router-dom";

import AuthProvider from "./contexts/userContext";
import Header from "./components/header/home/header";
import Home from "./components/home/home";
import Europe from "./components/eu/eu";
import Asia from "./components/asia/asia";
import SouthAmerica from "./components/south-america/southAmerica";
import Africa from "./components/africa/africa";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Logout from "./components/logout/logout";
import Quiz from "./components/custom quizzes/quiz/quiz";
import MapQuizzes from "./components/map quizzes/mapQuizzes";
import QuestionGenerator from "./components/questionGenerator/questionGenerator";
import QuizOptions from "./components/custom quizzes/customQuizOptions";
import QuizEdit from "./components/quiz edit/quizEdit";
import AuthGuard from "./components/guards/AuthGuard";
import PageNotFound from "./components/404/notFound";

function App() {
  return (
    <>
      <AuthProvider>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
           <Route path="*" element={<PageNotFound />}></Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/europe-quiz" element={<Europe />}></Route>
          <Route path="/map-quizzes" element={<MapQuizzes />}></Route>
          <Route element={<AuthGuard />}>
            <Route path="/quiz-create" element={<QuestionGenerator />}></Route>
            <Route path="/quiz-edit/:id" element={<QuizEdit />} />
            <Route path="/logout" element={<Logout />}></Route>
          </Route>
          <Route path="/asia-quiz" element={<Asia />}></Route>
          <Route path="/south-america-quiz" element={<SouthAmerica />}></Route>
          <Route path="/africa-quiz" element={<Africa />}></Route>
          <Route path="/quizzes/:id" element={<Quiz />} />
          <Route path="/custom-quizzes" element={<QuizOptions />}></Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
