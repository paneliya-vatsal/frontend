import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  async function connectWallet() {
    if (typeof window.ethereum !== "undefined") {
      const account = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(account);
    } else {
      console.error("MetaMask not detected. Please install it.");
    }
  }
  return (
    <div className="navbar">
      <img src="./logo.png" alt="logo" className="logo" />
      <div className="navbtn">
        <NavLink className="btn" to="/">
          Home
        </NavLink>
        <NavLink className="btn" to="/Project">
          Projects
        </NavLink>
        <NavLink className="btn" to="/contact">
          Contact
        </NavLink>
        <NavLink className="btn" to="/Addproject">
          Add Project
        </NavLink>
        <button className="btn" onClick={connectWallet}>
          Connect Wallet
        </button>
        <NavLink className="btn" to="/Login">
          Login
        </NavLink>
      </div>
    </div>
  );
}
export default Navbar;
