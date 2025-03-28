import React, { useState } from "react";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    alert("Form Data Submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
        <h1 className="m-3">From Submission</h1>

      <label>
        Name:
        <input
        className="m-3"
          type="text"
          name="name"
          placeholder="Enter your name"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      

      <label>
        Email:
        <input
        className="m-1"
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <button className="m-3 bg-primary rounded" type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
