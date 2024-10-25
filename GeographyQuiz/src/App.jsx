import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';


import Header from './components/header/home/header'
import Quiz from './components/eu/eu'
import Login from './components/login/login'



function App() {
  return (
    <>
  <Header></Header>
    <Routes>
     <Route path="/login" element={<Login />}></Route>
     <Route path="/quiz" element={<Quiz />}></Route>
      
     </Routes>
  
    </>
  )
}

export default App
