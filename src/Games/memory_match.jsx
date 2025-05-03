import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Unity, useUnityContext } from "react-unity-webgl";
import "./Games.css"; // Make sure this file is up-to-date with enhanced styles

const MemoryMatch = () => {
  const navigate = useNavigate();

  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "/unity/Memory_Match/Build/Memory_Match.loader.js",
    dataUrl: "/unity/Memory_Match/Build/Memory_Match.data",
    frameworkUrl: "/unity/Memory_Match/Build/Memory_Match.framework.js",
    codeUrl: "/unity/Memory_Match/Build/Memory_Match.wasm",
  });

  useEffect(() => {
    const handleGameComplete = () => {
      navigate("/rehabilitation-games"); // Navigate back to the game list page
    };

    window.addEventListener("GameComplete", handleGameComplete);
    return () => {
      window.removeEventListener("GameComplete", handleGameComplete);
    };
  }, [navigate]);

  return (
    <div className="unity-game-container">
      <h2 style={{ fontSize: "2rem", color: "#333", marginBottom: "20px" }}>Memory Match Game</h2>

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
        ⬅ Back to Games
      </button>
    </div>
  );
};

export default MemoryMatch;
