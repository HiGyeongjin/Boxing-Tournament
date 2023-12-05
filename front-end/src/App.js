import React from "react";
import "./App.css";
import UserLogin from "./UserLogin/UserLogin";
import MainPage from "./UserLogin/main-page";
import NotFound from "./utils/NotFound";
import Tournament from "./Tournament/tournament";
import Info from "./CheckArguments/Info";
import BoxingBracket from "./Bracket/boxing-bracket";
import FighterName from "./CheckArguments/FighterName";
import EmailRegister from "./UserLogin/email-register";
import Palette from "./color/palette";
import { Routes, Route } from "react-router-dom";
import Header from "./common/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/color" element={<Palette />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/tournament" element={<Tournament />} />
        <Route path="/bracket" element={<BoxingBracket />} />
        <Route path="/register-fighter" element={<FighterName />} />
        <Route path="/fighter-name" element={<Info />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/register" element={<EmailRegister />} />
      </Routes>
    </div>
  );
}

export default App;