import React from "react";
import "./App.css";
import UserLogin from "./UserLogin/UserLogin";

//figure out how to make router inside of router.
//i have router in UserLogin. and index.js has router too.

function App() {
  return (
    <div className="App">
      <UserLogin />
    </div>
  );
}

export default App;
