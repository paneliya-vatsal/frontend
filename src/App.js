import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Landing from "./Landing";
import Projects from "./Projects";
import Login from "./Login";
import Singup from "./Singup";

import Addcredit from "./Addcredit";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Contact" element={<Addcredit />} />
        <Route path="/Project" element={<Projects />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Singup" element={<Singup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
