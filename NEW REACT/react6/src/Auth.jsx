import React, { useState } from "react";
import "./Rform.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleRegisterChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value
    });
  };

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify(registerData));

    alert("Registered Successfully ✅ Please Login");

    // ✅ AUTO LOGIN OPEN
    setIsLogin(true);

    setLoginData({
      email: registerData.email,
      password: ""
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (
      savedUser &&
      savedUser.email === loginData.email &&
      savedUser.password === loginData.password
    ) {
      alert("Login Successful ✅");
    } else {
      alert("Invalid Email or Password ❌");
    }
  };

  return (
    <div className="form-container">
      <h2>{isLogin ? "Login" : "Register"}</h2>

      {!isLogin ? (
        <form onSubmit={handleRegisterSubmit}>
          <label>Name</label>
          <input name="name" onChange={handleRegisterChange} required />

          <label>Email</label>
          <input type="email" name="email" onChange={handleRegisterChange} required />

          <label>Phone</label>
          <input name="phone" onChange={handleRegisterChange} required />

          <label>Password</label>
          <input type="password" name="password" onChange={handleRegisterChange} required />

          <button type="submit">Register</button>
        </form>
      ) : (
        <form onSubmit={handleLoginSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleLoginChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleLoginChange}
            required
          />

          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default Auth;
