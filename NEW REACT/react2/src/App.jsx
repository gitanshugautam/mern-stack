import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ButtonNavigation from "./Navigation/ButtonNavigation";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ButtonNavigation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
