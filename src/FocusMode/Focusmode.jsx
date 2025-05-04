import React, { useEffect, useState, useRef } from 'react';
import './FocusMode.css';

const FocusMode = () => {
  const [isFocusMode, setIsFocusMode] = useState(() => localStorage.getItem('focusMode') === 'true');
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const intervalRef = useRef(null);

  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem('focusTasks');
    return stored ? JSON.parse(stored) : [];
  });

  const [newTask, setNewTask] = useState('');

  // Load timer state from localStorage
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

  // Save timer and task state to localStorage
  useEffect(() => {
    localStorage.setItem('focusMode', isFocusMode);
    localStorage.setItem('focusMinutes', minutes);
    localStorage.setItem('focusSeconds', seconds);
    localStorage.setItem('focusRunning', isRunning);
    localStorage.setItem('focusIsBreak', isBreak);
    localStorage.setItem('focusTasks', JSON.stringify(tasks));
  }, [isFocusMode, minutes, seconds, isRunning, isBreak, tasks]);

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
              setMinutes(nextIsBreak ? 5 : 25);
              setSeconds(0);
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

  const toggleFocusMode = () => {
    setIsFocusMode((prev) => !prev);
  };

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };
  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setIsBreak(false);
    setMinutes(25);
    setSeconds(0);
  };

  const handleTaskAdd = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask.trim(), done: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  return (
    <div className="focus-wrapper">
      <h1>Focus Mode</h1>
      <button className="focus-toggle-btn" onClick={toggleFocusMode}>
        Change Theme
      </button>

      <div className="timer-section">
        <h2>{isBreak ? 'Break Time' : 'Focus Time'}</h2>
        <div className="timer">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>
        <div className="timer-controls">
          <button onClick={startTimer}>Start</button>
          <button onClick={pauseTimer}>Pause</button>
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
          />
          <button onClick={handleTaskAdd}>Add</button>
        </div>
        <ul className="task-list">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={task.done ? "done" : ""}
              onClick={() => toggleTask(task.id)}
            >
              {task.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FocusMode;
