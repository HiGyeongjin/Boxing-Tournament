// BoxingTournament.js
import React, { useState } from "react";
import Boxer from "../Tournament/boxer";
import "./style.css";

const BoxingTournament = () => {
  const initialBoxers = [
    { name: "Boxer A", id: 1 },
    { name: "Boxer B", id: 2 },
    { name: "Boxer C", id: 3 },
    { name: "Boxer D", id: 4 },
  ];

  const [boxers, setBoxers] = useState(initialBoxers);
  const [matches, setMatches] = useState([]);

  // Function to generate the initial matches
  const generateMatches = () => {
    const initialMatches = [];
    for (let i = 0; i < initialBoxers.length / 2; i++) {
      initialMatches.push({
        id: i + 1,
        boxer1: initialBoxers[i * 2],
        boxer2: initialBoxers[i * 2 + 1],
        winner: null,
      });
    }
    setMatches(initialMatches);
  };

  // Function to handle match result
  const handleResultUpdate = (matchId, winnerId) => {
    const updatedMatches = matches.map((match) => {
      if (match.id === matchId) {
        return { ...match, winner: winnerId };
      }
      return match;
    });
    setMatches(updatedMatches);

    // If all matches in the round have winners, generate the next round matches
    if (updatedMatches.every((match) => match.winner !== null)) {
      const winners = updatedMatches.map((match) =>
        boxers.find((boxer) => boxer.id === match.winner)
      );
      setBoxers(winners);
      setMatches([]);
      generateMatches();
    }
  };

  // Initial generation of matches
  if (matches.length === 0 && boxers.length > 1) {
    generateMatches();
  }

  return (
    <div className="tournament-container">
      <h1>Boxing Tournament Bracket</h1>
      <div className="bracket">
        {matches.map((match) => (
          <div key={match.id} className="match">
            <Boxer
              name={match.boxer1.name}
              id={match.boxer1.id}
              onResultUpdate={(winnerId) =>
                handleResultUpdate(match.id, winnerId)
              }
            />
            <span>vs</span>
            <Boxer
              name={match.boxer2.name}
              id={match.boxer2.id}
              onResultUpdate={(winnerId) =>
                handleResultUpdate(match.id, winnerId)
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxingTournament;
