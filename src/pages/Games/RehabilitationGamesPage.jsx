import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RehabilitationGamesPage.css";

const RehabilitationGamesPage = () => {
  const [openCategory, setOpenCategory] = useState(null);
  const navigate = useNavigate();

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  const gameRoutes = {
    "Balloon Burst": "/balloonburst",
    "Trace and Train": "/trace_train",
    "Trace & Train": "/trace_train", // handles both variations
    "Memory Match": "/memory_match"
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
      <h2>Rehabilitation Games</h2>

      {/* Category 1 */}
      <div className="category">
        <div className="category-header" onClick={() => toggleCategory(0)}>
          <h3>Cognitive & Coordination</h3>
          <span>{openCategory === 0 ? "−" : "+"}</span>
        </div>
        {openCategory === 0 && (
          <ul className="game-list">
            <li><button onClick={() => handleGameClick("Balloon Burst")}>Balloon Burst</button></li>
            <li><button onClick={() => handleGameClick("Trace and Train")}>Trace and Train</button></li>
            <li><button onClick={() => handleGameClick("Memory Match")}>Memory Match</button></li>
            <li><button onClick={() => handleGameClick("Hand-Eye Coordination Games")}>Hand-Eye Coordination Games</button></li>
            <li><button onClick={() => handleGameClick("Focus & Recall")}>Focus & Recall</button></li>
          </ul>
        )}
      </div>

      {/* Category 2 */}
      <div className="category">
        <div className="category-header" onClick={() => toggleCategory(1)}>
          <h3>Upper Body Rehabilitation</h3>
          <span>{openCategory === 1 ? "−" : "+"}</span>
        </div>
        {openCategory === 1 && (
          <ul className="game-list">
            <li><button onClick={() => handleGameClick("Shoulder Game")}>Shoulder Game</button></li>
            <li><button onClick={() => handleGameClick("Arm Strength Games")}>Arm Strength Games</button></li>
            <li><button onClick={() => handleGameClick("Grip Strength Games")}>Grip Strength Games</button></li>
            <li><button onClick={() => handleGameClick("Resistance Band Pulls")}>Resistance Band Pulls</button></li>
            <li><button onClick={() => handleGameClick("Wall Push-Ups")}>Wall Push-Ups</button></li>
          </ul>
        )}
      </div>

      {/* Category 3 */}
      <div className="category">
        <div className="category-header" onClick={() => toggleCategory(2)}>
          <h3>Lower Body Rehabilitation</h3>
          <span>{openCategory === 2 ? "−" : "+"}</span>
        </div>
        {openCategory === 2 && (
          <ul className="game-list">
            <li><button onClick={() => handleGameClick("Knee Flexibility Challenge")}>Knee Flexibility Challenge</button></li>
            <li><button onClick={() => handleGameClick("Ankle Balance Games")}>Ankle Balance Games</button></li>
            <li><button onClick={() => handleGameClick("Leg Stretch Games")}>Leg Stretch Games</button></li>
            <li><button onClick={() => handleGameClick("Heel Raises")}>Heel Raises</button></li>
            <li><button onClick={() => handleGameClick("Side Leg Lifts")}>Side Leg Lifts</button></li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default RehabilitationGamesPage;
