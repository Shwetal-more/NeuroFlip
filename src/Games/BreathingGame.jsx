import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';

import './BreathingGame.css';

const BreathingGame = () => {
  const navigate = useNavigate();
  const [cycleCount, setCycleCount] = useState(0);
  const [phase, setPhase] = useState('idle'); // idle, inhale, hold, exhale, complete
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const [settings, setSettings] = useState({
    inhaleTime: 4,
    holdTime: 2,
    exhaleTime: 6,
    cycles: 5
  });

  const timerRef = useRef(null);
  const circleRef = useRef(null);

  const clearTimers = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  const resetAnimation = () => {
    if (circleRef.current) {
      circleRef.current.style.animation = 'none';
      void circleRef.current.offsetWidth; // Force reflow
    }
  };

  const startCycle = () => {
    if (cycleCount >= settings.cycles) {
      setPhase('complete');
      setIsRunning(false);
      return;
    }

    setPhase('inhale');
    resetAnimation();
    if (circleRef.current) {
      circleRef.current.style.animation = `inhale ${settings.inhaleTime}s forwards`;
    }

    timerRef.current = setTimeout(() => {
      setPhase('hold');
      resetAnimation();
      if (circleRef.current) {
        circleRef.current.style.animation = `hold ${settings.holdTime}s forwards`;
      }

      timerRef.current = setTimeout(() => {
        setPhase('exhale');
        resetAnimation();
        if (circleRef.current) {
          circleRef.current.style.animation = `exhale ${settings.exhaleTime}s forwards`;
        }

        timerRef.current = setTimeout(() => {
          setCycleCount(prev => prev + 1);
          startCycle();
        }, settings.exhaleTime * 1000);
      }, settings.holdTime * 1000);
    }, settings.inhaleTime * 1000);
  };

  const startBreathing = () => {
    if (isRunning) return;
    setIsRunning(true);
    setIsPaused(false);
    setCycleCount(0);
    startCycle();
  };

  const pauseResume = () => {
    if (!isRunning) return;

    if (isPaused) {
      setIsPaused(false);
      startCycle();
    } else {
      setIsPaused(true);
      clearTimers();
      if (circleRef.current) {
        const style = window.getComputedStyle(circleRef.current);
        const anim = style.animationName;
        const progress = style.animationDuration;
        resetAnimation();
      }
    }
  };

  const resetGame = () => {
    clearTimers();
    setIsRunning(false);
    setIsPaused(false);
    setCycleCount(0);
    setPhase('idle');
    resetAnimation();
  };

  const handleSettingChange = (e) => {
    const { id, value } = e.target;
    setSettings(prev => ({
      ...prev,
      [id]: parseInt(value)
    }));
  };

  useEffect(() => {
    return () => clearTimers(); // Cleanup on unmount
  }, []);

  const getInstruction = () => {
    if (!isRunning) return 'Ready to start';
    if (phase === 'inhale') return 'Inhale...';
    if (phase === 'hold') return 'Hold...';
    if (phase === 'exhale') return 'Exhale...';
    if (phase === 'complete') return 'Session Complete!';
    return 'Paused';
  };

  return (
    <div className="breathing-game-container">
      <h1>Breathing Focus</h1>

      <div className="circle-container">
        <div className="breath-circle" ref={circleRef}></div>
        <div className="instruction">{getInstruction()}</div>
      </div>

      <div className="counter">Cycle: {cycleCount}/{settings.cycles}</div>

      <div className="controls">
        <button onClick={startBreathing} disabled={isRunning && !isPaused}>
          Start
        </button>
        <button onClick={pauseResume} disabled={!isRunning}>
          {isPaused ? 'Resume' : 'Pause'}
        </button>
        <button onClick={resetGame}>Reset</button>
      </div>

      <div className="settings">
        {['inhaleTime', 'holdTime', 'exhaleTime', 'cycles'].map(field => (
          <div className="setting-row" key={field}>
            <label htmlFor={field}>
              {field.replace('Time', '').charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}:
            </label>
            <input
              type="number"
              id={field}
              value={settings[field]}
              min="1"
              max="15"
              onChange={handleSettingChange}
              disabled={isRunning}
            />
          </div>
        ))}
      </div>

      <button className="back-button" onClick={() => navigate('/gametraining')}>
        Back to Games
      </button>
    </div>
  );
};

export default BreathingGame;
