import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Unity, useUnityContext } from "react-unity-webgl";
import "./Games.css"; // Make sure this file has the enhanced CSS

const PatternMirror = () => {
  const navigate = useNavigate();

  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "/unity/PatternMirror/Build/PatternMirror.loader.js",
    dataUrl: "/unity/PatternMirror/Build/PatternMirror.data",
    frameworkUrl: "/unity/PatternMirror/Build/PatternMirror.framework.js",
    codeUrl: "/unity/PatternMirror/Build/PatternMirror.wasm",
  });

  useEffect(() => {
    // Listen for GameComplete event from Unity
    const handleGameComplete = () => {
      navigate("/gametraining");
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

      <button className="back-button" onClick={() => navigate("/gametraining")}>
        ⬅ Back to Games
      </button>
    </div>
  );
};

export default PatternMirror;
