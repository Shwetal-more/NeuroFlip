/**
 * DoctorChat Component - NeuroFlip
 * 
 * NeuroFlip is a dual-purpose web app that combines brain-training mini-games 
 * with focus-enhancing tools like Pomodoro timers and guided task flows.
 * 
 * Target Users: Students and professionals (ages 17–40) dealing with 
 * distraction, burnout, or focus fatigue.
 * 
 * This chat module simulates interactive therapy or coaching-style conversations 
 * with a virtual doctor/coach to help users reflect on their productivity, 
 * mental clarity, and wellness patterns over time.
 */

import React, { useState, useRef, useEffect } from 'react';
import { IoSend } from 'react-icons/io5';
import { FaThumbsUp, FaThumbsDown, FaReply } from 'react-icons/fa';
import '../styles/DoctorChat.css';

const doctorMessages = [
  "Hello! I'm Dr. Smith. How can I assist you today?",
  "Thank you for sharing that. Can you tell me more about how your condition is affecting your daily routine or independence?",
  "What specific movements or activities do you find challenging right now, either physically or mentally?",
  "Have you noticed any changes in your symptoms recently—whether improvement, worsening, or something new?",
  "Are there any moments in the day when the symptoms feel more intense or limiting?",
  "I've reviewed your survey responses. Based on that, could you describe in your own words how your current abilities compare to a few weeks or months ago?",
  "Do you experience any discomfort or pain while performing therapy activities, and if so, where and when does it occur?",
  "Apart from physical symptoms, how have you been feeling emotionally throughout your recovery?",
  "Are there times when you feel unmotivated or hesitant to engage in therapy? What usually triggers that feeling?",
  "When you do complete a therapy session, how do you usually feel afterward—physically and mentally?",
  "What kinds of activities, feedback, or interactions help keep you engaged in therapy?",
  "In your home environment, do you have enough space, comfort, and support to complete your exercises properly?",
  "How is your sleep, energy level, and overall mood throughout the week?",
  "Are there any medications, previous injuries, or medical conditions that I should take into account while planning your therapy?",
  "Lastly, what goals would you personally like to achieve through this program—both short-term and long-term?"
];

const DoctorChat = () => {
  const [replyingTo, setReplyingTo] = useState(null);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const welcomeMessage = {
      text: doctorMessages[0],
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'received',
      reaction: null,
      replyTo: null
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
      replyTo: replyingTo
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputMessage('');
    setReplyingTo(null);

    if (currentMessageIndex < doctorMessages.length - 1) {
      setTimeout(() => {
        const nextIndex = currentMessageIndex + 1;
        const doctorResponse = {
          text: doctorMessages[nextIndex],
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          type: 'received',
          reaction: null,
          replyTo: null
        };
        setMessages(prev => [...prev, doctorResponse]);
        setCurrentMessageIndex(nextIndex);
      }, 1000);
    }
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

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Virtual Coach – NeuroFlip</h2>
        <p className="chat-subtitle">Focus check-in, habit support, and recovery feedback</p>
      </div>

      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.type}`}>
            <div className="message-avatar">
              <div className={`avatar ${msg.type === 'sent' ? 'patient-avatar' : 'doctor-avatar'}`}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
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
              <div className="message-text">{msg.text}</div>

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
            <button onClick={() => setReplyingTo(null)} className="cancel-reply">×</button>
          </div>
        )}
        <div className="input-container">
          <div className="input-outer-grid">
            <input
              id="message-input"
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type a message..."
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

export default DoctorChat;
