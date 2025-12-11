import React, { useState, useEffect } from "react";

const Forms = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });


  useEffect(() => {
    const savedData = localStorage.getItem("userFormData");

    if (savedData) {
      setFormData(JSON.parse(savedData));  
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  
    localStorage.setItem("userFormData", JSON.stringify(formData));

    console.log("Saved to LocalStorage:", formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="enter your name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="enter your email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="enter your password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Forms;
