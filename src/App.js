import React from "react";
import "./App.css";
import UserLogin from "./UserLogin/UserLogin";
import MainPage from "./UserLogin/main-page";
import NotFound from "./utils/NotFound";
import Tournament from "./Tournament/tournament";
import Info from "./CheckArguments/Info";
import FighterName from "./CheckArguments/FighterName";
import { Link, Routes, Route } from "react-router-dom";

//figure out how to make router inside of router.
//i have router in UserLogin. and index.js has router too.

//home page만들기 그래야 '/'루트 페이지를 생성하자 ->
//UserLogin에서 route를 어떻게 손을 써야함.
//여기 밑에 <Routes><Route path='/' element={<Home />} /> 이런식으로 넣기
function App() {
  return (
    <div className="App">
      {/* <UserLogin /> */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
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
        <Route path="/user" element={<UserLogin />} />
        <Route path="/tournament" element={<Tournament />} />
        <Route path="/register-fighter" element={<FighterName />} />
        <Route path="/fighter-name" element={<Info />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
