import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Unity, useUnityContext } from "react-unity-webgl";
import "./Games.css"; // Make sure this file has the enhanced CSS

const BalloonBurst = () => {
  const navigate = useNavigate();

  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "/unity/Balloon_Burst/Build/Balloon_Burst.loader.js",
    dataUrl: "/unity/Balloon_Burst/Build/Balloon_Burst.data",
    frameworkUrl: "/unity/Balloon_Burst/Build/Balloon_Burst.framework.js",
    codeUrl: "/unity/Balloon_Burst/Build/Balloon_Burst.wasm",
  });

  useEffect(() => {
    // Listen for GameComplete event from Unity
    const handleGameComplete = () => {
      navigate("/rehabilitation-games");
    };

    window.addEventListener("GameComplete", handleGameComplete);
    return () => {
      window.removeEventListener("GameComplete", handleGameComplete);
    };
  }, [navigate]);

  return (
    <div className="unity-game-container">
      <h2 style={{ fontSize: "2rem", color: "#333", marginBottom: "20px" }}>Balloon Burst Game</h2>

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

export default BalloonBurst;
