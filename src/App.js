// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Partner from "./pages/Partner";
import ForSchool from "./pages/ForSchool";
import Join from "./pages/Join";
import Login from "./pages/Login";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schools" element={<ForSchool />} />
        <Route path="/login" element = {<Login />} />
        <Route path="/signup" element={<Join/>} />
        <Route path="/about" element={<About />} />
        <Route path="/partner" element={<Partner />} />
      </Routes>
    </Router>
  );
}

export default App;
