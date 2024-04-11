import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserAlt, FaLock } from "react-icons/fa";
import "./Login.css";
import Singup from "./Singup";
const { ethers } = require("ethers");

function Login() {
  const [user, setUser] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    const API_URL = "http://localhost:8000/api/v1/users/login";
    try {
      const response = await fetch(API_URL, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        console.log("loged in successfully");
      }
    } catch (error) {
      console.log("Error: ", error.message);
    }
  };
  return (
    <div className="container">
      <h2>Login</h2>
      <form>
        <div className="formdiv">
          <label htmlFor="email">Username</label>
          <FaUserAlt className="icon1" />
          <input
            type="email"
            name="email"
            value={setUser.email}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={setUser.password}
            onChange={handleInputChange}
            required
          />
          <FaLock className="icon" />
          <button type="submit" className="btn" onClick={submit}>
            Login
          </button>
        </div>
        <div></div>

        <div>
          <p>
            <Link to="/Singup">SingUp</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
