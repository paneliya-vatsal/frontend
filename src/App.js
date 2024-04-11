import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Landing from "./Component/Landing";
import Projects from "./Component/Projects";
import Login from "./Component/Login";
import Singup from "./Component/Singup";
import Addproject from "./Component/Addproject";
import Addcredit from "./Component/Addcredit";

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
        <Route path="/Addproject" element={<Addproject />} />
        <Route path="/Addcredit" element={<Addcredit />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
