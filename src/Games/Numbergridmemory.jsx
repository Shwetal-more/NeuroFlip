import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Unity, useUnityContext } from "react-unity-webgl";
import "./Games.css"; // Create this file for styling

const NumberGrid = () => {
  const navigate = useNavigate();
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "/unity/NumberGridMemory/Build/NumberGridMemory.loader.js",
    dataUrl: "/unity/NumberGridMemory/Build/NumberGridMemory.data",
    frameworkUrl: "/unity/NumberGridMemory/Build/NumberGridMemory.framework.js",
    codeUrl: "/unity/NumberGridMemory/Build/NumberGridMemory.wasm",
  });

  // Add event listeners for game completion
  useEffect(() => {
    const handleGameComplete = () => {
      navigate("/gametraining"); // Navigate back to games list
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
      <button className="back-button" onClick={() => navigate("/gametraining")}>
        Back to Games
      </button>
    </div>
  );
};

export default NumberGrid;