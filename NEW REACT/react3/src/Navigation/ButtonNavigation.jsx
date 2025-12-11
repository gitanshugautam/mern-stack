import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonNavigation = () => {
  const navigate = useNavigate();

  return (
    <div>

      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/about")}>About</button>
    </div>
  );
};

export default ButtonNavigation;