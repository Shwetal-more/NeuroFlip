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

  const [mockConnectedCode, setMockConnectedCode] = useState('');
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
                setFocusSessions(prev => prev + 1);
                setStreak(prev => prev + 1);
                setTotalFocusTime(prev => prev + 25);
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

  const toggleFocusMode = () => setIsFocusMode(prev => !prev);
  const startTimer = () => {
    setIsRunning(true);
    socketRef.current.emit('update-timer', { minutes, seconds, isRunning: true, isBreak, session: sessionCode });
  };
  const pauseTimer = () => { 
    clearInterval(intervalRef.current); 
    setIsRunning(false);
    socketRef.current.emit('update-timer', { minutes, seconds, isRunning: false, isBreak, session: sessionCode });
  };
  const resetTimer = () => { 
    clearInterval(intervalRef.current); 
    setIsRunning(false); 
    setIsBreak(false); 
    setMinutes(25); 
    setSeconds(0);
    socketRef.current.emit('update-timer', { minutes: 25, seconds: 0, isRunning: false, isBreak: false, session: sessionCode });
  };

  const handleTaskAdd = () => {
    if (newTask.trim()) {
      const newTaskItem = { id: Date.now(), text: newTask.trim(), done: false, priority: false };
      setTasks([...tasks, newTaskItem]);
      setNewTask('');
      socketRef.current.emit('update-tasks', { tasks: [...tasks, newTaskItem], session: sessionCode });
    }
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map(task => task.id === id ? { ...task, done: !task.done } : task);
    setTasks(updatedTasks);
    socketRef.current.emit('update-tasks', { tasks: updatedTasks, session: sessionCode });
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

  const handleMockConnect = () => {
    if (mockConnectedCode.trim() === sessionCode) {
      setConnected(true);
      socketRef.current.emit('join', sessionCode);
    } else {
      alert('Invalid Session Code');
    }
  };

  return (
    <div className="focus-wrapper">
      {/* Sidebar */}
      <div className="sidebar">
        <h3>Collaborative Mode</h3>
        <p><strong>Your Code:</strong><br />{sessionCode}</p>
        <input
          type="text"
          placeholder="Enter code to join..."
          value={mockConnectedCode}
          onChange={(e) => setMockConnectedCode(e.target.value)}
        />
        <button onClick={handleMockConnect}>Connect</button>
        {connected && <p style={{ color: 'green' }}>Connected!</p>}
        <small>(Mock collaboration – needs backend for real-time)</small>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1>Focus Mode</h1>
        <button className="focus-toggle-btn" onClick={toggleFocusMode}>Change Theme</button>

        <div className="timer-section">
          <h2>{isBreak ? 'Break Time' : 'Focus Time'}</h2>
          <div className="timer">{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</div>
          <div className="timer-controls">
            <button onClick={startTimer}>Start</button>
            <button onClick={pauseTimer}>Pause</button>
            <button onClick={resetTimer}>Reset</button>
          </div>
        </div>

        <div className="task-section">
          <h3>Guided Tasks</h3>
          <div className="task-input">
            <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Add new task..." />
            <button onClick={handleTaskAdd}>Add</button>
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
          </select>
          <audio ref={audioRef} loop>
            {sound === 'rain' && <source src="/sounds/rain.mp3" type="audio/mpeg" />}
            {sound === 'forest' && <source src="/sounds/forest.mp3" type="audio/mpeg" />}
          </audio>
        </div>

        <div className="stats-section">
          <h4>Progress Insights</h4>
          <p>Focus Sessions: {focusSessions}</p>
          <p>Daily Focus Time: {totalFocusTime} min</p>
          <p>Streak: {streak} sessions in a row</p>
        </div>
      </div>
    </div>
  );
};

export default FocusMode;
