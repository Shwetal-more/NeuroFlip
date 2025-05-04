/**
 * NeuroFlip Chatbot Component
 * 
 * An AI-powered productivity coach that helps users:
 * - Analyze focus patterns
 * - Suggest brain-training exercises
 * - Provide cognitive performance insights
 * - Offer personalized productivity strategies
 */

import React, { useState, useRef, useEffect } from 'react';
import { IoSend } from 'react-icons/io5';
import { FaThumbsUp, FaThumbsDown, FaReply, FaBrain, FaRegLightbulb } from 'react-icons/fa';
import { GiConcentrationOrb } from 'react-icons/gi';
import '../styles/DoctorChat.css';

const coachMessages = [
  "Welcome to your NeuroFlip Coach! I'm here to help optimize your focus and cognitive performance. What would you like to work on today?",
  "I see you've been using our focus tools. How would you rate your concentration levels this week?",
  "Interesting. Let's analyze your recent brain-training results. Which exercise felt most challenging?",
  "Based on your performance data, I recommend trying our 'Dual N-Back' game to improve working memory. Would you like me to explain how it works?",
  "I notice your productivity peaks in the mornings. Have you considered scheduling deep work sessions before noon?",
  "Your attention stamina has improved by 18% this month! What strategies have been working best for you?",
  "When you experience mental fatigue, do you prefer short breaks with movement or guided breathing exercises?",
  "Let's check your Pomodoro completion rate. How many focused intervals did you complete yesterday?",
  "I can suggest personalized mini-games based on your current cognitive strengths. Interested?",
  "Your reaction time is excellent, but let's work on sustained attention. Try our 'Focus Flow' exercise for 10 minutes daily.",
  "Based on your sleep data, improving sleep quality could boost your focus by 25%. Want sleep optimization tips?",
  "You've earned 3 new NeuroBadges this week! Would you like to review your progress?",
  "Let's set a SMART goal for your next focus session. What would you like to accomplish?",
  "I'm detecting signs of cognitive overload. Would you like to try a 5-minute mental reset exercise?",
  "Congratulations! You've reached a new focus milestone. Ready to level up your challenges?"
];

const productivityTips = [
  "Try the 20-20-20 rule: Every 20 minutes, look at something 20 feet away for 20 seconds.",
  "Pair difficult tasks with your peak energy times for maximum efficiency.",
  "Use 'time blocking' to dedicate specific periods to different types of work.",
  "Practice 'single-tasking' - give your full attention to one task at a time.",
  "Take movement breaks every 45-60 minutes to boost circulation and focus."
];

const NeuroFlipChatbot = () => {
  const [replyingTo, setReplyingTo] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const welcomeMessage = {
      text: coachMessages[0],
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'received',
      reaction: null,
      replyTo: null,
      isTip: false
    };
    setMessages([welcomeMessage]);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    const trimmed = inputMessage.trim();
    if (!trimmed) return;

    const newUserMessage = {
      text: trimmed,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'sent',
      reaction: null,
      replyTo: replyingTo,
      isTip: false
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputMessage('');
    setReplyingTo(null);

    setTimeout(() => {
      const randomResponse = Math.random() > 0.3 
        ? coachMessages[Math.floor(Math.random() * coachMessages.length)]
        : `💡 Productivity Tip: ${productivityTips[currentTipIndex]}`;
      
      const isTip = randomResponse.startsWith('💡');
      if (isTip) {
        setCurrentTipIndex((currentTipIndex + 1) % productivityTips.length);
      }

      const coachResponse = {
        text: randomResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: 'received',
        reaction: null,
        replyTo: null,
        isTip
      };
      
      setMessages(prev => [...prev, coachResponse]);
    }, 800 + Math.random() * 1200);
  };

  const handleReaction = (index, reaction) => {
    setMessages(prev => {
      const updated = [...prev];
      updated[index].reaction = updated[index].reaction === reaction ? null : reaction;
      return updated;
    });
  };

  const handleReply = (index) => {
    setReplyingTo(index);
    document.getElementById('message-input')?.focus();
  };

  const handleQuickAction = (action) => {
    const actionMessages = {
      focus: "I'd like help improving my focus during work sessions.",
      games: "Can you recommend brain-training games based on my recent performance?",
      stats: "Show me my cognitive performance statistics for this week.",
      tips: "Share some productivity tips for my current challenge."
    };

    setInputMessage(actionMessages[action]);
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="chat-title">
          <GiConcentrationOrb className="neuro-icon" />
          <h2>NeuroFlip Productivity Coach</h2>
        </div>
        <p className="chat-subtitle">Your AI-powered cognitive performance assistant</p>
      </div>

      <div className="quick-actions">
        <button onClick={() => handleQuickAction('focus')} className="quick-btn">
          <FaBrain /> Focus Help
        </button>
        <button onClick={() => handleQuickAction('games')} className="quick-btn">
          <GiConcentrationOrb /> Game Recs
        </button>
        <button onClick={() => handleQuickAction('stats')} className="quick-btn">
          📊 My Stats
        </button>
        <button onClick={() => handleQuickAction('tips')} className="quick-btn">
          <FaRegLightbulb /> Get Tips
        </button>
      </div>

      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.type} ${msg.isTip ? 'tip-message' : ''}`}>
            <div className="message-avatar">
              <div className={`avatar ${msg.type === 'sent' ? 'user-avatar' : 'coach-avatar'}`}>
                {msg.type === 'received' ? (
                  <GiConcentrationOrb />
                ) : (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                )}
              </div>
            </div>

            <div className="message-content">
              {msg.replyTo !== null && messages[msg.replyTo] && (
                <div className="reply-to">
                  <FaReply />
                  <span>
                    {messages[msg.replyTo].text.slice(0, 50)}
                    {messages[msg.replyTo].text.length > 50 ? '...' : ''}
                  </span>
                </div>
              )}
              <div className="message-text">
                {msg.text}
                {msg.isTip && <span className="tip-badge">PRO TIP</span>}
              </div>

              <div className="message-actions">
                <button
                  onClick={() => handleReaction(index, 'like')}
                  className={`reaction-btn ${msg.reaction === 'like' ? 'active' : ''}`}
                  title="Like"
                >
                  <FaThumbsUp />
                </button>
                <button
                  onClick={() => handleReaction(index, 'dislike')}
                  className={`reaction-btn ${msg.reaction === 'dislike' ? 'active' : ''}`}
                  title="Dislike"
                >
                  <FaThumbsDown />
                </button>
                <button
                  onClick={() => handleReply(index)}
                  className="reaction-btn reply-btn"
                  title="Reply"
                >
                  <FaReply />
                </button>
              </div>

              {msg.reaction && (
                <div className="message-reaction">
                  {msg.reaction === 'like' && <FaThumbsUp />}
                  {msg.reaction === 'dislike' && <FaThumbsDown />}
                </div>
              )}

              <div className="timestamp">{msg.timestamp}</div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSendMessage}>
        {replyingTo !== null && messages[replyingTo] && (
          <div className="reply-preview">
            <FaReply />
            <span>
              Replying to: {messages[replyingTo].text.slice(0, 50)}
              {messages[replyingTo].text.length > 50 ? '...' : ''}
            </span>
            <button type="button" onClick={() => setReplyingTo(null)} className="cancel-reply">×</button>
          </div>
        )}
        <div className="input-container">
          <div className="input-outer-grid">
            <input
              id="message-input"
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask about focus strategies, brain games, or productivity..."
            />
            <button type="submit" className="send-button" disabled={!inputMessage.trim()}>
              <IoSend />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NeuroFlipChatbot;