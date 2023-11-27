import React from "react";
import "./tournament.css";

const Boxer = ({ name, wins, losses, onResultUpdate }) => {
  return (
    <div>
      <div className="boxer-container">
        <h3 className="boxer-name">{name}</h3>
        <p className="boxer-record">
          Record: {wins} Wins - {losses} Losses
        </p>
        <div className="result-buttons">
          <button className="win-btn" onClick={() => onResultUpdate(true)}>
            Win
          </button>
          <button className="loss-btn" onClick={() => onResultUpdate(false)}>
            Lose
          </button>
        </div>
      </div>

      <div>
        <div>Winner</div>
      </div>
      <div>
        <div>Winner</div>
      </div>
      <div>
        <div>Winner</div>
      </div>
    </div>
  );
};

export default Boxer;
