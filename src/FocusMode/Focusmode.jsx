// FocusMode.jsx
import React, { useEffect, useState } from 'react';
import './FocusMode.css';

const FocusMode = () => {
  const [isFocusMode, setIsFocusMode] = useState(() => {
    return localStorage.getItem('focusMode') === 'true';
  });

  useEffect(() => {
    if (isFocusMode) {
      document.body.classList.add('focus-mode');
    } else {
      document.body.classList.remove('focus-mode');
    }
    localStorage.setItem('focusMode', isFocusMode);
  }, [isFocusMode]);

  const toggleFocusMode = () => {
    setIsFocusMode((prev) => !prev);
  };

  return (
    <div className="focus-toggle-wrapper">
      <button className="focus-toggle-btn" onClick={toggleFocusMode}>
        {isFocusMode ? 'Exit Focus Mode' : 'Enter Focus Mode'}
      </button>
    </div>
  );
};

export default FocusMode;
