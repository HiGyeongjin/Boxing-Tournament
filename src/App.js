import React from "react";
import "./App.css";
import UserLogin from "./UserLogin/UserLogin";
import Info from "./CheckArguments/Info";
import FighterName from "./CheckArguments/FighterName";
import Tournament from "./Tournament/tournament";

function App() {
  return (
    <div>
      <UserLogin />
      <FighterName />
      <Tournament />
      <Info />
    </div>
  );
}

export default App;
