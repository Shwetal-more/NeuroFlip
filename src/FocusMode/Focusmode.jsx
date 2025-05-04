import React, { useEffect, useState, useRef } from 'react';
import './FocusMode.css';
import io from 'socket.io-client';

const FocusMode = () => {
  const [isFocusMode, setIsFocusMode] = useState(() => localStorage.getItem('focusMode') === 'true');
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [focusSessions, setFocusSessions] = useState(() => parseInt(localStorage.getItem('focusSessions')) || 0);
  const [totalFocusTime, setTotalFocusTime] = useState(() => parseInt(localStorage.getItem('totalFocusTime')) || 0);
  const [streak, setStreak] = useState(() => parseInt(localStorage.getItem('focusStreak')) || 0);
  const [sound, setSound] = useState('none');
  const [sessionCode] = useState(() => Math.random().toString(36).substring(2, 8));
  const [isFreezeMode, setIsFreezeMode] = useState(false);
  const [connectedMembers, setConnectedMembers] = useState([]);

  const [joinCode, setJoinCode] = useState('');
  const [connected, setConnected] = useState(false);

  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem('focusTasks');
    return stored ? JSON.parse(stored) : [];
  });

  const [newTask, setNewTask] = useState('');
  
  const audioRef = useRef(null);
  const socketRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Connect to the server
    socketRef.current = io('http://localhost:5000');
    
    socketRef.current.on('receive-timer', ({ minutes, seconds, isRunning, isBreak }) => {
      setMinutes(minutes);
      setSeconds(seconds);
      setIsRunning(isRunning);
      setIsBreak(isBreak);
    });

    socketRef.current.on('receive-tasks', (tasks) => {
      setTasks(tasks);
    });

    socketRef.current.on('member-update', (members) => {
      setConnectedMembers(members);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  // Initial load
  useEffect(() => {
    const storedMinutes = localStorage.getItem('focusMinutes');
    const storedSeconds = localStorage.getItem('focusSeconds');
    const storedRunning = localStorage.getItem('focusRunning');
    const storedBreak = localStorage.getItem('focusIsBreak');

    if (storedMinutes !== null) setMinutes(parseInt(storedMinutes));
    if (storedSeconds !== null) setSeconds(parseInt(storedSeconds));
    if (storedRunning === 'true') setIsRunning(true);
    if (storedBreak === 'true') setIsBreak(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('focusMode', isFocusMode);
    localStorage.setItem('focusMinutes', minutes);
    localStorage.setItem('focusSeconds', seconds);
    localStorage.setItem('focusRunning', isRunning);
    localStorage.setItem('focusIsBreak', isBreak);
    localStorage.setItem('focusTasks', JSON.stringify(tasks));
    localStorage.setItem('focusSessions', focusSessions);
    localStorage.setItem('focusStreak', streak);
    localStorage.setItem('totalFocusTime', totalFocusTime);
  }, [isFocusMode, minutes, seconds, isRunning, isBreak, tasks, focusSessions, streak, totalFocusTime]);

  useEffect(() => {
    if (isFocusMode) {
      document.body.classList.add('focus-mode');
    } else {
      document.body.classList.remove('focus-mode');
    }
  }, [isFocusMode]);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prevSec) => {
          if (prevSec === 0) {
            if (minutes === 0) {
              clearInterval(intervalRef.current);
              const nextIsBreak = !isBreak;
              setIsBreak(nextIsBreak);

              if (!isBreak) {
                const newSessions = focusSessions + 1;
                const newTotalTime = totalFocusTime + 25;
                const newStreak = streak + 1;
                
                setFocusSessions(newSessions);
                setStreak(newStreak);
                setTotalFocusTime(newTotalTime);
                
                // Update progress in localStorage
                updateProgress(newSessions, newTotalTime, newStreak);
              }

              setMinutes(nextIsBreak ? 5 : 25);
              setSeconds(0);

              if (sound !== 'none') playSound();
              alert(nextIsBreak ? 'Break Time Started!' : 'Focus Time Started!');
              return 0;
            } else {
              setMinutes((m) => m - 1);
              return 59;
            }
          } else {
            return prevSec - 1;
          }
        });
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, minutes, isBreak]);

  const updateProgress = (sessions, time, currentStreak) => {
    // Get current date
    const today = new Date().toDateString();
    const lastSessionDate = localStorage.getItem('lastSessionDate');
    
    // Reset streak if not consecutive day
    if (lastSessionDate && lastSessionDate !== today) {
      currentStreak = 1;
    }
    
    localStorage.setItem('lastSessionDate', today);
    localStorage.setItem('focusSessions', sessions);
    localStorage.setItem('totalFocusTime', time);
    localStorage.setItem('focusStreak', currentStreak);
  };

  const toggleFocusMode = () => setIsFocusMode(prev => !prev);
  
  const startTimer = () => {
    setIsRunning(true);
    if (isFreezeMode) {
      document.body.classList.add('freeze-mode');
      alert('Freeze Mode Activated! Only essential apps will be available during focus time.');
    }
    socketRef.current.emit('update-timer', { minutes, seconds, isRunning: true, isBreak, session: sessionCode });
  };
  
  const pauseTimer = () => { 
    clearInterval(intervalRef.current); 
    setIsRunning(false);
    if (isFreezeMode) {
      document.body.classList.remove('freeze-mode');
    }
    socketRef.current.emit('update-timer', { minutes, seconds, isRunning: false, isBreak, session: sessionCode });
  };
  
  const resetTimer = () => { 
    clearInterval(intervalRef.current); 
    setIsRunning(false); 
    setIsBreak(false); 
    setMinutes(25); 
    setSeconds(0);
    if (isFreezeMode) {
      document.body.classList.remove('freeze-mode');
    }
    socketRef.current.emit('update-timer', { minutes: 25, seconds: 0, isRunning: false, isBreak: false, session: sessionCode });
  };

  const handleTaskAdd = () => {
    if (newTask.trim()) {
      const newTaskItem = { id: Date.now(), text: newTask.trim(), done: false, priority: false };
      const updatedTasks = [...tasks, newTaskItem];
      setTasks(updatedTasks);
      setNewTask('');
      socketRef.current.emit('update-tasks', { tasks: updatedTasks, session: sessionCode });
    }
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map(task => task.id === id ? { ...task, done: !task.done } : task);
    setTasks(updatedTasks);
    socketRef.current.emit('update-tasks', { tasks: updatedTasks, session: sessionCode });
  };

  const deleteCompletedTasks = () => {
    const incompleteTasks = tasks.filter(task => !task.done);
    setTasks(incompleteTasks);
    socketRef.current.emit('update-tasks', { tasks: incompleteTasks, session: sessionCode });
  };

  const togglePriority = (id) => {
    const updatedTasks = tasks.map(task => task.id === id ? { ...task, priority: !task.priority } : task);
    setTasks(updatedTasks);
    socketRef.current.emit('update-tasks', { tasks: updatedTasks, session: sessionCode });
  };

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  const handleConnect = () => {
    if (joinCode.trim()) {
      setConnected(true);
      socketRef.current.emit('join', joinCode);
    } else {
      alert('Please enter a session code');
    }
  };

  const toggleFreezeMode = () => {
    setIsFreezeMode(!isFreezeMode);
    if (!isFreezeMode && isRunning) {
      document.body.classList.add('freeze-mode');
    } else {
      document.body.classList.remove('freeze-mode');
    }
  };

  return (
    <div className="focus-wrapper">
      <h1>Focus Mode</h1>
      <div className="mode-controls">
        <button className="focus-toggle-btn" onClick={toggleFocusMode}>
          {isFocusMode ? 'Light Mode' : 'Focus Mode'}
        </button>
        <label className="freeze-toggle">
          <input 
            type="checkbox" 
            checked={isFreezeMode} 
            onChange={toggleFreezeMode} 
          />
          Freeze Mode
        </label>
      </div>

      {/* Collaborative Mode Section */}
      <div className="collaborative-section">
        <h2>Collaborative Mode</h2>
        
        <div className="session-info">
          <div className="code-display">
            <span>Your Session Code:</span>
            <strong>{sessionCode}</strong>
          </div>
          
          {connectedMembers.length > 0 && (
            <div className="members-list">
              <h4>Connected Members:</h4>
              <ul>
                {connectedMembers.map((member, index) => (
                  <li key={index}>{member}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <div className="divider"></div>
        
        <div className="join-section">
          <input 
            type="text" 
            className="join-input" 
            placeholder="Enter code to join..."
            value={joinCode}
            onChange={(e) => setJoinCode(e.target.value)}
          />
          <button className="connect-btn" onClick={handleConnect}>
            {connected ? 'Connected' : 'Connect'}
          </button>
        </div>
      </div>

      <div className="timer-section">
        <h2>{isBreak ? 'Break Time' : 'Focus Time'}</h2>
        <div className="timer">{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</div>
        <div className="timer-controls">
          <button onClick={startTimer} disabled={isRunning}>Start</button>
          <button onClick={pauseTimer} disabled={!isRunning}>Pause</button>
          <button onClick={resetTimer}>Reset</button>
        </div>
      </div>

      <div className="task-section">
        <h3>Guided Tasks</h3>
        <div className="task-input">
          <input 
            type="text" 
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)} 
            placeholder="Add new task..." 
            onKeyPress={(e) => e.key === 'Enter' && handleTaskAdd()}
          />
          <button onClick={handleTaskAdd}>Add</button>
        </div>
        <div className="task-actions">
          <button onClick={deleteCompletedTasks} disabled={!tasks.some(t => t.done)}>
            Clear Completed
          </button>
        </div>
        <ul className="task-list">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`${task.done ? "done" : ""} ${task.priority ? "priority" : ""}`}
              onClick={() => toggleTask(task.id)}
            >
              {task.text}
              <button className="priority-btn" onClick={(e) => { e.stopPropagation(); togglePriority(task.id); }}>
                {task.priority ? "★" : "☆"}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="sound-section">
        <h4>Background Sound</h4>
        <select value={sound} onChange={(e) => setSound(e.target.value)}>
          <option value="none">None</option>
          <option value="rain">Rain</option>
          <option value="forest">Forest</option>
          <option value="waves">Ocean Waves</option>
          <option value="coffee">Coffee Shop</option>
          <option value="white-noise">White Noise</option>
        </select>
        <audio ref={audioRef} loop>
          {sound === 'rain' && <source src="/sounds/rain.mp3"  />}
          {sound === 'forest' && <source src="/sounds/forest.mp3"  />}
          {sound === 'waves' && <source src="/sounds/waves.mp3"  />}
          {sound === 'coffee' && <source src="/sounds/coffee-shop.mp3"  />}
          {sound === 'white-noise' && <source src="/sounds/white-noise.mp3" />}
        </audio>
      </div>

      <div className="stats-section">
        <h4>Progress Insights</h4>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-value">{focusSessions}</div>
            <div className="stat-label">Sessions</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{totalFocusTime}</div>
            <div className="stat-label">Minutes</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{streak}</div>
            <div className="stat-label">Day Streak</div>
          </div>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${Math.min(100, (focusSessions * 20))}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default FocusMode;