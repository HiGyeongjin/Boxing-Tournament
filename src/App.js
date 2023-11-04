import React from "react";
import "./App.css";
import UserLogin from "./UserLogin/UserLogin";
import MainPage from "./UserLogin/main-page";
import NotFound from "./utils/NotFound";
import Tournament from "./Tournament/tournament";
import Info from "./CheckArguments/Info";
import FighterName from "./CheckArguments/FighterName";
import EmailRegister from "./UserLogin/email-register";
import { Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
            <div>&nbsp;/</div>
            <Link to="/register">register</Link>
          </li>
          <li>
            <Link to="/tournament">tournament</Link>
          </li>
          <li>
            <Link to="/register-fighter">Register fighter's name</Link>
          </li>
          <li>
            <Link to="/fighter-name">fighter name</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/tournament" element={<Tournament />} />
        <Route path="/register-fighter" element={<FighterName />} />
        <Route path="/fighter-name" element={<Info />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/register" element={<EmailRegister />} />
      </Routes>
    </div>
  );
}

export default App;
