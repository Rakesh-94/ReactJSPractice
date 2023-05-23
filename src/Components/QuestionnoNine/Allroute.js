import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";


const Allroute = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Allroute;
  