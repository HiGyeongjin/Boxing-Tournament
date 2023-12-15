import React from "react";
import "./App.css";
import UserLogin from "./UserLogin/UserLogin";
import MainPage from "./common/main-page";
import UserDetailPage from "./UserLogin/UserDetailPage";
import Tournament from "./Tournament/tournament";
import Info from "./CheckArguments/Info";
import BoxingBracket from "./Tournament/boxing-bracket";
import FighterName from "./CheckArguments/FighterName";
import Palette from "./color/palette";
import { Routes, Route } from "react-router-dom";
import Header from "./common/Header";
import Nav from "./common/nav";
import TodoApp from "./TodoApp/App";
import UserTable from "./UserTableApp/UserTable";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <UserLogin />
      {/* <UserTable /> */}
      <Routes>
        <Route path="/color" element={<Palette />} />
        <Route path="/tournament" element={<Tournament />} />
        <Route path="/details" element={<UserDetailPage />} />
        <Route path="/bracket" element={<BoxingBracket />} />
        <Route path="/register-fighter" element={<FighterName />} />
        <Route path="/fighter-name" element={<Info />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
