import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "Navigation/Home";     // <<< correct path (no extension needed)
import About from "./Navigation/About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
