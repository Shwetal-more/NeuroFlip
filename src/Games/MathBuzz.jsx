import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './MathBuzz.css'; // You'll need to create this CSS file

const MathBuzz = () => {
  const navigate = useNavigate();
  const [gameState, setGameState] = useState({
    score: 0,
    streak: 0,
    level: 1,
    timeLeft: 10,
    isRunning: false,
    isGameOver: false,
    problem: '5 + 3',
    feedback: '',
    feedbackClass: '',
    correctAnswer: 8
  });
  
  const [settings, setSettings] = useState({
    baseTime: 10,
    timePerLevel: 1,
    maxTime: 20,
    distractionLevel: 3
  });
  
  const timerRef = useRef(null);
  const distractionIntervalRef = useRef(null);
  const answerInputRef = useRef(null);

  const startGame = () => {
    setGameState({
      score: 0,
      streak: 0,
      level: 1,
      timeLeft: settings.baseTime,
      isRunning: true,
      isGameOver: false,
      problem: '',
      feedback: '',
      feedbackClass: '',
      correctAnswer: 0
    });
    
    generateNewProblem();
    startTimer();
    
    if (answerInputRef.current) {
      answerInputRef.current.focus();
    }
  };
  
  const endGame = () => {
    clearInterval(timerRef.current);
    clearInterval(distractionIntervalRef.current);
    setGameState(prev => ({
      ...prev,
      isRunning: false,
      isGameOver: true
    }));
  };
  
  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setGameState(prev => {
        const newTimeLeft = prev.timeLeft - 1;
        
        if (newTimeLeft <= 0) {
          endGame();
          return prev;
        }
        
        return {
          ...prev,
          timeLeft: newTimeLeft
        };
      });
    }, 1000);
  };
  
  const startDistractions = () => {
    clearInterval(distractionIntervalRef.current);
    
    if (gameState.level >= settings.distractionLevel) {
      distractionIntervalRef.current = setInterval(() => {
        if (Math.random() > 0.7) {
          // You would implement distraction visuals here
          console.log("Distraction appeared!");
        }
      }, 2000);
    }
  };
  
  const generateNewProblem = () => {
    let maxNum = 5 + (gameState.level * 3);
    const operations = ['+', '-', '×'];
    if (gameState.level >= 3) operations.push('÷');
    
    const operation = operations[Math.floor(Math.random() * operations.length)];
    let num1, num2, correctAnswer;
    
    switch(operation) {
      case '+':
        num1 = Math.floor(Math.random() * maxNum) + 1;
        num2 = Math.floor(Math.random() * maxNum) + 1;
        correctAnswer = num1 + num2;
        break;
      case '-':
        num1 = Math.floor(Math.random() * maxNum) + 1;
        num2 = Math.floor(Math.random() * num1) + 1;
        correctAnswer = num1 - num2;
        break;
      case '×':
        num1 = Math.floor(Math.random() * Math.sqrt(maxNum)) + 1;
        num2 = Math.floor(Math.random() * Math.sqrt(maxNum)) + 1;
        correctAnswer = num1 * num2;
        break;
      case '÷':
        correctAnswer = Math.floor(Math.random() * Math.sqrt(maxNum)) + 1;
        num2 = Math.floor(Math.random() * Math.sqrt(maxNum)) + 1;
        num1 = correctAnswer * num2;
        break;
    }
    
    setGameState(prev => ({
      ...prev,
      problem: `${num1} ${operation} ${num2}`,
      correctAnswer,
      feedback: '',
      feedbackClass: ''
    }));
  };
  
  const checkAnswer = (e) => {
    if (e.key !== 'Enter' || !gameState.isRunning) return;
    
    const userAnswer = parseInt(e.target.value);
    e.target.value = '';
    
    if (isNaN(userAnswer)) {
      setGameState(prev => ({
        ...prev,
        feedback: 'Enter a number!',
        feedbackClass: 'incorrect',
        streak: 0
      }));
      return;
    }
    
    if (userAnswer === gameState.correctAnswer) {
      let newScore = gameState.score + 1;
      let newStreak = gameState.streak + 1;
      let feedbackText = 'Correct! +1';
      
      // Bonus for streaks
      if (newStreak % 5 === 0) {
        newScore += 2;
        feedbackText = `🔥 ${newStreak}-STREAK! +3`;
      }
      
      // Calculate new level
      const newLevel = Math.floor(newScore / 5) + 1;
      
      setGameState(prev => ({
        ...prev,
        score: newScore,
        streak: newStreak,
        level: newLevel,
        timeLeft: Math.min(settings.maxTime, prev.timeLeft + 1),
        feedback: feedbackText,
        feedbackClass: 'correct'
      }));
      
      // Start distractions if level increased
      if (newLevel > gameState.level) {
        startDistractions();
      }
      
      generateNewProblem();
    } else {
      setGameState(prev => ({
        ...prev,
        feedback: `Incorrect! Answer: ${prev.correctAnswer}`,
        feedbackClass: 'incorrect',
        streak: 0,
        timeLeft: Math.max(3, prev.timeLeft - 2)
      }));
      
      generateNewProblem();
    }
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
      clearInterval(timerRef.current);
      clearInterval(distractionIntervalRef.current);
    };
  }, []);

  return (
    <div className="mathbuzz-container">
      <h1>Focus Blitz</h1>
      
      {gameState.isGameOver ? (
        <div className="game-over">
          <h2>GAME OVER</h2>
          <div className="final-score">Your Score: {gameState.score}</div>
          <button onClick={startGame}>Play Again</button>
        </div>
      ) : (
        <>
          <div className="stats">
            <div className="stat-box">
              <div>Score</div>
              <div>{gameState.score}</div>
            </div>
            <div className="stat-box">
              <div>Streak</div>
              <div>{gameState.streak}</div>
            </div>
            <div className="stat-box">
              <div>Level</div>
              <div>{gameState.level}</div>
            </div>
          </div>
          
          <div className="time-left">
            Time: {gameState.timeLeft}s
            <div 
              className="progress-bar" 
              style={{ width: `${(gameState.timeLeft / settings.baseTime) * 100}%` }}
            ></div>
          </div>
          
          <div className="problem">{gameState.problem}</div>
          
          <input 
            type="number" 
            className="answer-input" 
            ref={answerInputRef}
            onKeyPress={checkAnswer}
            placeholder="?"
            disabled={!gameState.isRunning}
          />
          
          <div className={`feedback ${gameState.feedbackClass}`}>
            {gameState.feedback}
          </div>
          
          <div className="controls">
            <button 
              onClick={startGame} 
              disabled={gameState.isRunning}
            >
              Start
            </button>
            <button onClick={endGame} disabled={!gameState.isRunning}>
              End Game
            </button>
          </div>
        </>
      )}
      
      <div className="settings">
        <h3>Game Settings</h3>
        <div className="setting-row">
          <label htmlFor="baseTime">Base Time (sec):</label>
          <input 
            type="number" 
            id="baseTime" 
            min="5" 
            max="30" 
            value={settings.baseTime}
            onChange={handleSettingChange}
            disabled={gameState.isRunning}
          />
        </div>
        <div className="setting-row">
          <label htmlFor="timePerLevel">Time per Level (sec):</label>
          <input 
            type="number" 
            id="timePerLevel" 
            min="0" 
            max="5" 
            value={settings.timePerLevel}
            onChange={handleSettingChange}
            disabled={gameState.isRunning}
          />
        </div>
        <div className="setting-row">
          <label htmlFor="maxTime">Max Time (sec):</label>
          <input 
            type="number" 
            id="maxTime" 
            min="10" 
            max="60" 
            value={settings.maxTime}
            onChange={handleSettingChange}
            disabled={gameState.isRunning}
          />
        </div>
        <div className="setting-row">
          <label htmlFor="distractionLevel">Distraction Level:</label>
          <input 
            type="number" 
            id="distractionLevel" 
            min="1" 
            max="10" 
            value={settings.distractionLevel}
            onChange={handleSettingChange}
            disabled={gameState.isRunning}
          />
        </div>
      </div>
      
      <button className="back-button" onClick={() => navigate("/gametraining")}>
        Back to Games
      </button>
    </div>
  );
};

export default MathBuzz;