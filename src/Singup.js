import React, { useState } from "react";
import "./Singup.css";

function Singup() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    Company_Name: "",
    Name_CEO: "",
    Location: "",
    About: "",
    Project_Valuation: "",
    Credit_Estimation: "",
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSingup = async (e) => {
    e.preventDefault();
    const API_URL = "http://localhost:8000/api/v1/users/singup";
    console.log("API_URL:", API_URL); // Check if API_URL is correct
    console.log("formData:", formData);
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("User signed up successfully");
      }
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  return (
    <div className="maindiv1">
      <div className="container1">
        <h1 class="form-title"> Sign Up</h1>
        <form className="formContainer" onSubmit={handleSingup}>
          <div className="form-group ">
            <label className="form-label">Company Name</label>
            <input
              className="form-input"
              type="text"
              name="Company_Name"
              value={formData.Company_Name}
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="form-group">
            <label className="form-label"> Name CEO </label>
            <input
              className="form-input"
              type="text"
              name="Name_CEO"
              value={formData.Name_CEO}
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="form-group">
            <label className="form-label"> Location </label>
            <input
              className="form-input"
              type="text"
              name="Location"
              value={formData.Location}
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="form-group">
            <label className="form-label"> About </label>
            <textarea
              className="form-input"
              type="text"
              name="About"
              value={formData.About}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label className="form-label"> Project Valuation </label>
            <input
              className="form-input"
              type="text"
              name="Project_Valuation"
              value={formData.Project_Valuation}
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="form-group">
            <label className="form-label"> Credit Estimation </label>
            <input
              className="form-input"
              type="text"
              name="Credit_Estimation"
              value={formData.Credit_Estimation}
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="form-group1">
            <button className="btn">Submit</button>
          </div>
        </form>
      </div>
      <div className="imgContainer">
        <img src="./solar panel.png" alt="sustaina" className="img"></img>
      </div>
    </div>
  );
}

export default Singup;
