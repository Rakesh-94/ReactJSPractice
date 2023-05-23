import React from 'react'
import Login from './Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';


const QuestionnoSeven = () => {
  return (
    <div>
      <Router >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default QuestionnoSeven;
