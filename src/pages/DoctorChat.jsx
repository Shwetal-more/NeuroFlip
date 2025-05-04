import React, { useState, useRef, useEffect } from 'react';
import { IoSend } from 'react-icons/io5';
import { FaLightbulb, FaTasks, FaBrain, FaRegClock } from 'react-icons/fa';
import '../styles/DoctorChat.css';

const assistantMessages = [
  "Welcome to your NeuroFlip Assistant! How can I help you focus today?",
  "Would you like to start a Focus Session or try a Brain Game?",
  "Remember to take short breaks between focus sessions for optimal performance.",
  "Your current streak: 3 days! Keep up the great work!",
  "Pro tip: Try the 'Memory Matrix' game when you need a cognitive boost.",
  "I notice you've been focusing for a while. Would you like to schedule a break?",
  "Your productivity stats show improvement in concentration duration this week!",
  "Need help prioritizing tasks? I can help you break them into manageable chunks.",
  "The 'Rhythm Recall' game is great for overcoming afternoon slumps.",
  "Would you like me to set up a Pomodoro timer for your current task?",
  "Your cognitive flexibility score has improved by 12% this month!",
  "Try the 'Word Chain' game to give your brain a quick warm-up.",
  "Don't forget to hydrate! Your last water break was 90 minutes ago.",
  "I can see you're working on a big project. Need help staying on track?",
  "Your focus endurance is building nicely. Ready for a challenge?"
];

const DoctorChat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const initialMessage = {
      text: assistantMessages[0],
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'received',
      quickActions: ['Start Focus Session', 'Play Brain Game', 'View Stats']
    };
    setMessages([initialMessage]);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      const newMessage = {
        text: inputMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: 'sent'
      };
      setMessages(prev => [...prev, newMessage]);
      setInputMessage('');

      if (currentMessageIndex < assistantMessages.length - 1) {
        setTimeout(() => {
          const nextIndex = currentMessageIndex + 1;
          const assistantResponse = {
            text: assistantMessages[nextIndex],
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            type: 'received',
            quickActions: getQuickActions(nextIndex)
          };
          setMessages(prev => [...prev, assistantResponse]);
          setCurrentMessageIndex(nextIndex);
        }, 800);
      }
    }
  };

  const getQuickActions = (index) => {
    if (index % 3 === 0) return ['25-min Focus', '5-min Break', 'Game Suggestion'];
    if (index % 3 === 1) return ['View Progress', 'Set Reminder', 'Hydration Check'];
    return ['Task Help', 'Brain Boost', 'Motivation'];
  };

  const handleQuickAction = (action) => {
    const newMessage = {
      text: action,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'sent'
    };
    setMessages(prev => [...prev, newMessage]);

    setTimeout(() => {
      let response = "";
      if (action.includes('Focus')) response = "Starting a 25-minute focus session now. You've got this!";
      else if (action.includes('Game')) response = "Great choice! Which game would you like: Memory Matrix or Rhythm Recall?";
      else if (action.includes('Break')) response = "Starting a 5-minute break timer. Stretch and relax!";
      else response = "I can help with that. Tell me more about what you need.";

      const assistantResponse = {
        text: response,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: 'received',
        quickActions: getQuickActions(currentMessageIndex + 1)
      };
      setMessages(prev => [...prev, assistantResponse]);
    }, 800);
  };

  const getActionIcon = (action) => {
    if (action.includes('Focus') || action.includes('Session')) return <FaRegClock />;
    if (action.includes('Game') || action.includes('Brain')) return <FaBrain />;
    if (action.includes('Task') || action.includes('Help')) return <FaTasks />;
    return <FaLightbulb />;
  };

  return (
    <div className="assistant-container">
      <div className="assistant-header">
        <h2>NeuroFlip Assistant</h2>
        <div className="assistant-subtitle">Your cognitive wellness companion</div>
      </div>
      <div className="assistant-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.type}`}>
            <div className="message-content">
              <div className="message-text">{message.text}</div>
              {message.quickActions && message.type === 'received' && (
                <div className="quick-actions">
                  {message.quickActions.map((action, i) => (
                    <button 
                      key={i} 
                      onClick={() => handleQuickAction(action)}
                      className="quick-action-btn"
                    >
                      {getActionIcon(action)} {action}
                    </button>
                  ))}
                </div>
              )}
              <div className="timestamp">{message.timestamp}</div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSendMessage}>
        <div className="input-container">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Ask your assistant about focus, games, or productivity..."
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(e)}
          />
          <button type="submit" className="send-button" disabled={!inputMessage.trim()}>
            <IoSend />
          </button>
        </div>
      </form>
    </div>
  );
};

export default DoctorChat;