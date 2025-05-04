import React, { useState, useRef, useEffect } from 'react';
import { IoSend } from 'react-icons/io5';
import { FaThumbsUp, FaThumbsDown, FaReply } from 'react-icons/fa';
import '../styles/DoctorChat.css';

// Move outside component to avoid unnecessary re-creations
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
    const initialMessage = {
      text: doctorMessages[0],
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'received'
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
        type: 'sent',
        reaction: null,
        replyTo: replyingTo
      };
      setMessages(prev => [...prev, newMessage]);
      setInputMessage('');
      setReplyingTo(null);

      if (currentMessageIndex < doctorMessages.length - 1) {
        setTimeout(() => {
          const nextIndex = currentMessageIndex + 1;
          const doctorResponse = {
            text: doctorMessages[nextIndex],
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            type: 'received',
            reaction: null
          };
          setMessages(prev => [...prev, doctorResponse]);
          setCurrentMessageIndex(nextIndex);
        }, 1000);
      }
    }
  };

  const handleReaction = (messageIndex, reaction) => {
    if (messageIndex >= 0 && messageIndex < messages.length) {
      setMessages(prevMessages => {
        const newMessages = [...prevMessages];
        const currentMessage = newMessages[messageIndex];
        const newReaction = currentMessage.reaction === reaction ? null : reaction;
        newMessages[messageIndex] = {
          ...currentMessage,
          reaction: newReaction
        };
        return newMessages;
      });
    }
  };

  const handleReply = (messageIndex) => {
    if (messageIndex >= 0 && messageIndex < messages.length) {
      setReplyingTo(messageIndex);
      document.getElementById('message-input').focus();
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Chat with Doctor</h2>
      </div>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.type}`}>
            <div className="message-avatar">
              {message.type === 'sent' ? (
                <div className="avatar patient-avatar">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              ) : (
                <div className="avatar doctor-avatar">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 8c0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4-4 1.79-4 4zm9 8c0-2.66-5.33-4-8-4s-8 1.34-8 4v2h16v-2zm-3 0c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2v2h-12v-2z" />
                  </svg>
                </div>
              )}
            </div>
            <div className="message-content">
              {message.replyTo !== null && messages[message.replyTo] && (
                <div className="reply-to">
                  <FaReply />
                  <span>{messages[message.replyTo].text.substring(0, 50)}{messages[message.replyTo].text.length > 50 ? '...' : ''}</span>
                </div>
              )}
              <div className="message-text">{message.text}</div>
              <div className="message-actions">
                <button 
                  onClick={() => handleReaction(index, 'like')} 
                  className={`reaction-btn ${message.reaction === 'like' ? 'active' : ''}`}
                  title="Like"
                >
                  <FaThumbsUp />
                </button>
                <button 
                  onClick={() => handleReaction(index, 'dislike')} 
                  className={`reaction-btn ${message.reaction === 'dislike' ? 'active' : ''}`}
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
              {message.reaction && (
                <div className="message-reaction">
                  {message.reaction === 'like' && <FaThumbsUp />}
                  {message.reaction === 'dislike' && <FaThumbsDown />}
                </div>
              )}
              <div className="timestamp">{message.timestamp}</div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSendMessage}>
        {replyingTo !== null && messages[replyingTo] && (
          <div className="reply-preview">
            <FaReply />
            <span>Replying to: {messages[replyingTo].text.substring(0, 50)}{messages[replyingTo].text.length > 50 ? '...' : ''}</span>
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
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(e)}
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