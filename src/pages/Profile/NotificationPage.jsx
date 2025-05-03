import React, { useState } from 'react';
import './Notifications.css';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'appointment',
      title: 'Upcoming Appointment',
      message: 'You have a therapy session scheduled for tomorrow at 10:00 AM',
      time: '1 hour ago',
      read: false
    },
    {
      id: 2,
      type: 'exercise',
      title: 'Exercise Reminder',
      message: 'Don\'t forget to complete your daily exercises',
      time: '2 hours ago',
      read: false
    },
    {
      id: 3,
      type: 'progress',
      title: 'Progress Update',
      message: 'Great job! You\'ve completed 80% of your weekly goals',
      time: '1 day ago',
      read: true
    },
    {
      id: 4,
      type: 'message',
      title: 'New Message from Dr. Smith',
      message: 'Your latest progress report has been reviewed. Keep up the good work!',
      time: '2 days ago',
      read: true
    }
  ]);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const getIcon = (type) => {
    switch (type) {
      case 'appointment':
        return '📅';
      case 'exercise':
        return '💪';
      case 'progress':
        return '📈';
      case 'message':
        return '✉️';
      default:
        return '🔔';
    }
  };

  return (
    <div className="notifications-container">
      <h1>Notifications</h1>
      <div className="notifications-list">
        {notifications.map(notification => (
          <div 
            key={notification.id} 
            className={`notification-item ${notification.read ? 'read' : 'unread'}`}
            onClick={() => markAsRead(notification.id)}
          >
            <div className="notification-icon">
              {getIcon(notification.type)}
            </div>
            <div className="notification-content">
              <h3>{notification.title}</h3>
              <p>{notification.message}</p>
              <span className="notification-time">{notification.time}</span>
            </div>
            {!notification.read && <div className="unread-dot"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;