import React, { useState } from "react";
import Boxer from "./boxer";

const Tournament = () => {
  const [boxers, setBoxers] = useState([
    { name: "Adrian Cardenas", wins: 0, losses: 0 },
    { name: "Ryan Garcia", wins: 0, losses: 0 },
    { name: "Canelo Alvarez", wins: 0, losses: 0 },
  ]);

  const handleResultUpdate = (index, isWin) => {
    const updatedBoxers = [...boxers];
    if (isWin) {
      updatedBoxers[index].wins += 1;
      console.log(`Index: ${index}, isWin: ${isWin}`);
    } else {
      updatedBoxers[index].losses += 1;
    }
    setBoxers(updatedBoxers);
  };

  return (
    <div className="tournament-container">
      <h1>Boxing Tournament</h1>
      {boxers.map((boxer, index) => (
        <Boxer
          key={index}
          name={boxer.name}
          wins={boxer.wins}
          losses={boxer.losses}
          onResultUpdate={(isWin) => handleResultUpdate(index, isWin)}
        />
      ))}
    </div>
  );
};

export default Tournament;
