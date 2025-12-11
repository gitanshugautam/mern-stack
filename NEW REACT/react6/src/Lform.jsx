import React, { useState } from "react";
import "./Rform.css"; 

const Lform = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login Email:", loginData.email);
    console.log("Login Password:", loginData.password);

    setLoginData({
      email: "",
      password: ""
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={loginData.email}
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={loginData.password}
          onChange={handleChange}
        />

        <button type="submit">Login</button>

      </form>
    </div>
  );
};

export default Lform;
