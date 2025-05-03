import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Unity, useUnityContext } from "react-unity-webgl";
import "./Games.css"; // Create this file for styling

const TraceTrain = () => {
  const navigate = useNavigate();
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "/unity/Trace&Train/Build/Trace&Train.loader.js",
    dataUrl: "/unity/Trace&Train/Build/Trace&Train.data",
    frameworkUrl: "/unity/Trace&Train/Build/Trace&Train.framework.js",
    codeUrl: "/unity/Trace&Train/Build/Trace&Train.wasm",
  });

  // Add event listeners for game completion
  useEffect(() => {
    const handleGameComplete = () => {
      navigate("/rehabilitation-games"); // Navigate back to games list
    };

    window.addEventListener("GameComplete", handleGameComplete);
    return () => {
      window.removeEventListener("GameComplete", handleGameComplete);
    };
  }, [navigate]);

  return (
    <div className="unity-game-container">
      <h2>Trace & Train Game</h2>
      {!isLoaded && (
        <div className="loading-overlay">
          <p>Loading... {Math.round(loadingProgression * 100)}%</p>
        </div>
      )}
      <Unity
        unityProvider={unityProvider}
        className="unity-canvas"
        style={{ width: "960px", height: "600px" }}
      />
      <button className="back-button" onClick={() => navigate("/rehabilitation-games")}>
        Back to Games
      </button>
    </div>
  );
};

export default TraceTrain;