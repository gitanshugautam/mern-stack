import React, { useState } from "react";
import "./Rform.css";

const Rform = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Local Storage Save
    localStorage.setItem("userFormData", JSON.stringify(formData));

    // Clear Form
    setFormData({
      name: "",
      email: "",
      phone: "",
      password: ""
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />

        <label>Phone</label>
        <input
          type="text"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
        
      </form>
    </div>
  );
};

export default Rform;
