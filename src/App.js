import React from "react";
import "./App.css";
import UserLogin from "./UserLogin/UserLogin";
import Info from "./CheckArguments/Info";
import FighterName from "./CheckArguments/FighterName";
import Tournament from "./Tournament/tournament";
// import axios from "axios";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/tournament" element={<Tournament />} />
        <Route path="/figtername" element={<FighterName />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
