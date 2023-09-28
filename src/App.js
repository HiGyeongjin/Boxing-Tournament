import React from "react";
import "./App.css";
import UserLogin from "./UserLogin/UserLogin";
import Info from "./CheckArguments/Info";
import FighterName from "./CheckArguments/FighterName";
import Tournament from "./Tournament/tournament";
// import axios from "axios";
import { Routes, Link } from "react-router-dom";

//figure out how to make router inside of router.
//i have router in UserLogin. and index.js has router too.

function App() {
  return (
    <div className="app">
      <Routes>
        <Link path="/" element={<UserLogin />} />
        <Link path="/tournament" element={<Tournament />} />
        <Link path="/figtername" element={<FighterName />} />
        <Link path="/info" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
