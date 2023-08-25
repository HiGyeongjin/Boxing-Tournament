import React, { useState } from "react";

export default function Info() {
  const [age, setAge] = useState("");
  const [age1, setAge1] = useState("");
  const [howManyWin, setHowManyWin] = useState("");
  const [howManyWin1, setHowManyWin1] = useState("");
  const [armReach, setArmReach] = useState("");
  const [armReach1, setArmReach1] = useState("");

  const ageChange = (e) => {
    setAge(e.target.value);
  };
  const ageChange1 = (e) => {
    setAge1(e.target.value);
  };

  const winningAmount = (e) => {
    setHowManyWin(e.target.value);
  };
  const winningAmount1 = (e) => {
    setHowManyWin1(e.target.value);
  };

  const armReachCount = (e) => {
    setArmReach(e.target.value);
  };
  const armReachCount1 = (e) => {
    setArmReach1(e.target.value);
  };

  function AgeCheck() {
    const data = age;
    const data1 = age1;
    return (
      <div>
        {parseInt(data, 10) > parseInt(data1, 10) ? (
          <div>boxer2 is younger</div>
        ) : (
          <div>boxer1 is younger</div>
        )}
      </div>
    );
  }
  function HowManyWin() {
    const data = howManyWin;
    const data1 = howManyWin1;
    return (
      <div>
        {parseInt(data, 10) > parseInt(data1, 10) ? (
          <div>boxer1 is winning</div>
        ) : (
          <div>boxer2 is winning</div>
        )}
      </div>
    );
  }

  function LongerArm() {
    const data = armReach;
    const data1 = armReach1;
    return (
      <div>
        {parseInt(data, 10) > parseInt(data1, 10) ? (
          <div>boxer1 arm is longer</div>
        ) : (
          <div>boxer2 arm is longer</div>
        )}
      </div>
    );
  }

  const winner = () => {
    <div>boxer 1 won!</div>;
  };

  return (
    <div className="App">
      <h1 className="header">Boxing Tournament</h1>
      <hr />
      <h2 className="main">
        <span>Fighter 1 </span>
        <span>vs</span>
        <span> Fighter 2</span>
      </h2>

      <div className="infoForm">
        <span style={{ color: "orangered" }}>Age : </span>
        <input
          className="formInput"
          value={age}
          type="number"
          onChange={ageChange}
          placeholder="Type the number"
        ></input>

        <input
          className="formInput"
          value={age1}
          onChange={ageChange1}
          placeholder="Type the number"
          type="number"
        ></input>

        {<AgeCheck />}
        <div>
          <span>How Many times win : </span>
          <input
            className="formInput"
            type="number"
            placeholder="Type the number"
            onChange={winningAmount}
          ></input>

          <input
            className="formInput"
            type="number"
            placeholder="Type the number"
            onChange={winningAmount1}
          ></input>
          <span>times</span>
        </div>

        {<HowManyWin />}
        <div>
          <span>Arm Reach : </span>
          <input
            className="formInput"
            type="number"
            placeholder="Type the number"
            onChange={armReachCount}
          ></input>

          <input
            className="formInput"
            type="number"
            placeholder="Type the number"
            onChange={armReachCount1}
          ></input>
          <span>cm</span>
          <LongerArm />
          <div>
            <button type="submit">Let's see</button>
            <span>{winner}</span>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}
