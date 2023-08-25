import React from "react";
import "./App.css";
import UserLogin from "./UserLogin/UserLogin";
import Info from "./CheckArguments/Info";
import FighterName from "./CheckArguments/FighterName";

function App() {
  return (
    <div>
      <UserLogin />
      <FighterName />
      <Info />
    </div>
  );
}

export default App;
