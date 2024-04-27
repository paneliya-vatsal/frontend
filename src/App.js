import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Addproject from "./Component/Addproject";
import Landing from "./Component/Landing";
import Projects from "./Component/Projects";
import Buycredit from "./Component/Buycredit";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Project" element={<Projects />} />
        <Route path="/Addproject" element={<Addproject />} />
        <Route path="/Buycredit" element={<Buycredit />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
