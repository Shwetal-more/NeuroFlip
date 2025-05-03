import React from 'react';
import { Link } from 'react-router-dom';
import { FaBell } from 'react-icons/fa';

const NotificationBell = ({ unreadCount = 0 }) => {
  return (
    <Link to="/notifications" className="notification-bell-container">
      <FaBell className="notification-bell-icon" />
      {unreadCount > 0 && (
        <span className="notification-badge">{unreadCount}</span>
      )}
    </Link>
  );
};

export default NotificationBell;