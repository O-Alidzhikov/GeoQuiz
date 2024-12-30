import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';

import UserContext from './contexts/userContext';
import Header from './components/header/home/header'
import Quiz from './components/eu/eu'
import Login from './components/login/login'
import Register from './components/register/register';



function App() {
  return (
    <>
      <UserContext.Provider>
        <Header></Header>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/quiz" element={<Quiz />}></Route>
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App
