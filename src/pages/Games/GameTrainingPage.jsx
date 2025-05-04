import React from "react";
import { useNavigate } from "react-router-dom";
import "./GameTrainingPage.css";

const GameTrainingPage = () => {
  const navigate = useNavigate();

  const games = [
    {
      name: "Memory Match",
      path: "/memory_match",
      icon: "🧠",  // Brain emoji
      headingLevel: "h2"
    },
    {
      name: "Number Grid Memory",
      path: "/numbergridmemory",
      icon: "🔢",  // Numbers emoji
      headingLevel: "h3"
    },
    {
      name: "Pattern Mirror",
      path: "/patternmirror",
      icon: "🪞",  // Mirror emoji
      headingLevel: "h3"
    }
  ];

  const handleGameClick = (path) => {
    navigate(path);
  };

  return (
    <div className="game-training-page">
      <div className="game-container">
        <h1 className="main-title">Brain Training Games</h1>
        <p className="subtitle">
          Select a game to improve your cognitive skills, memory, and focus.
        </p>
        
        <div className="games-list">
          {games.map((game) => (
            <div 
              key={game.name} 
              className="game-card"
              onClick={() => handleGameClick(game.path)}
            >
              <span className="game-icon">{game.icon}</span>
              {game.headingLevel === "h2" ? (
                <h2 className="game-title">{game.name}</h2>
              ) : (
                <h3 className="game-title">{game.name}</h3>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameTrainingPage;