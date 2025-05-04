import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './BreathingGame.css'; // You'll need to create this CSS file

const BreathingGame = () => {
  const navigate = useNavigate();
  const [currentCycle, setCurrentCycle] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [settings, setSettings] = useState({
    inhaleTime: 4,
    holdTime: 2,
    exhaleTime: 6,
    cycles: 5
  });
  
  const animationTimeoutRef = useRef(null);
  const breathCircleRef = useRef(null);

  const startBreathing = () => {
    if (isRunning) return;
    
    setIsRunning(true);
    setIsPaused(false);
    setCurrentCycle(0);
    nextCycle();
  };
  
  const togglePause = () => {
    setIsPaused(!isPaused);
    
    if (isPaused) {
      nextCycle();
    } else {
      clearTimeout(animationTimeoutRef.current);
      if (breathCircleRef.current) {
        breathCircleRef.current.style.animation = 'none';
      }
    }
  };
  
  const reset = () => {
    setIsRunning(false);
    setIsPaused(false);
    clearTimeout(animationTimeoutRef.current);
    
    if (breathCircleRef.current) {
      breathCircleRef.current.style.animation = 'none';
    }
    setCurrentCycle(0);
  };
  
  const nextCycle = () => {
    if (!isRunning || isPaused) return;
    
    const { inhaleTime, holdTime, exhaleTime, cycles } = settings;
    
    if (currentCycle >= cycles) {
      reset();
      return;
    }
    
    setCurrentCycle(prev => prev + 1);
    
    // Inhale
    if (breathCircleRef.current) {
      breathCircleRef.current.style.animation = `breatheIn ${inhaleTime * 1000}ms forwards`;
    }
    
    animationTimeoutRef.current = setTimeout(() => {
      if (!isRunning || isPaused) return;
      
      // Hold after inhale
      if (holdTime > 0) {
        if (breathCircleRef.current) {
          breathCircleRef.current.style.animation = `hold ${holdTime * 1000}ms forwards`;
        }
        
        animationTimeoutRef.current = setTimeout(() => {
          if (!isRunning || isPaused) return;
          
          // Exhale
          if (breathCircleRef.current) {
            breathCircleRef.current.style.animation = `breatheOut ${exhaleTime * 1000}ms forwards`;
          }
          
          animationTimeoutRef.current = setTimeout(() => {
            if (!isRunning || isPaused) return;
            nextCycle();
          }, exhaleTime * 1000);
        }, holdTime * 1000);
      } else {
        // Exhale (no hold)
        if (breathCircleRef.current) {
          breathCircleRef.current.style.animation = `breatheOut ${exhaleTime * 1000}ms forwards`;
        }
        
        animationTimeoutRef.current = setTimeout(() => {
          if (!isRunning || isPaused) return;
          nextCycle();
        }, exhaleTime * 1000);
      }
    }, inhaleTime * 1000);
  };
  
  const handleSettingChange = (e) => {
    const { id, value } = e.target;
    setSettings(prev => ({
      ...prev,
      [id]: parseInt(value) || 0
    }));
  };
  
  useEffect(() => {
    return () => {
      // Clean up timeouts when component unmounts
      clearTimeout(animationTimeoutRef.current);
    };
  }, []);

  const getInstructionText = () => {
    if (!isRunning) return 'Ready to begin';
    if (currentCycle >= settings.cycles) return 'Complete!';
    return isPaused ? 'Paused' : 'Follow the circle';
  };

  return (
    <div className="breathing-game-container">
      <h1>Breathing Focus</h1>
      
      <div className="circle">
        <div className="breath-circle" ref={breathCircleRef}></div>
        <div className="instruction">{getInstructionText()}</div>
      </div>
      
      <div className="counter">Cycle: {currentCycle}/{settings.cycles}</div>
      
      <div className="controls">
        <button 
          onClick={startBreathing} 
          disabled={isRunning && !isPaused}
        >
          Start
        </button>
        <button 
          onClick={togglePause} 
          disabled={!isRunning || currentCycle >= settings.cycles}
        >
          {isPaused ? 'Resume' : 'Pause'}
        </button>
        <button onClick={reset}>Reset</button>
      </div>
      
      <div className="settings">
        <div className="setting-row">
          <label htmlFor="inhaleTime">Inhale (sec):</label>
          <input 
            type="number" 
            id="inhaleTime" 
            min="1" 
            max="10" 
            value={settings.inhaleTime}
            onChange={handleSettingChange}
            disabled={isRunning}
          />
        </div>
        <div className="setting-row">
          <label htmlFor="holdTime">Hold (sec):</label>
          <input 
            type="number" 
            id="holdTime" 
            min="0" 
            max="10" 
            value={settings.holdTime}
            onChange={handleSettingChange}
            disabled={isRunning}
          />
        </div>
        <div className="setting-row">
          <label htmlFor="exhaleTime">Exhale (sec):</label>
          <input 
            type="number" 
            id="exhaleTime" 
            min="1" 
            max="10" 
            value={settings.exhaleTime}
            onChange={handleSettingChange}
            disabled={isRunning}
          />
        </div>
        <div className="setting-row">
          <label htmlFor="cycles">Cycles:</label>
          <input 
            type="number" 
            id="cycles" 
            min="1" 
            max="20" 
            value={settings.cycles}
            onChange={handleSettingChange}
            disabled={isRunning}
          />
        </div>
      </div>
      
      <button className="back-button" onClick={() => navigate("/gametraining")}>
        Back to Games
      </button>
    </div>
  );
};

export default BreathingGame;