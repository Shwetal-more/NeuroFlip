import React from "react";
import { useNavigate } from "react-router-dom";
import "./GameTrainingPage.css";

const BrainGamesPage = () => {
  const navigate = useNavigate();

  const gameRoutes = {
    
  };

  const handleGameClick = (gameName) => {
    if (gameRoutes[gameName]) {
      navigate(gameRoutes[gameName]);
    } else {
      alert(`${gameName} is not available yet.`);
    }
  };

  return (
    <div className="rehab-games-container">
      <h2>Brain Training Games</h2>
      <ul className="game-list">
        {Object.keys(gameRoutes).map((gameName) => (
          <li key={gameName}>
            <button onClick={() => handleGameClick(gameName)}>{gameName}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrainGamesPage;
