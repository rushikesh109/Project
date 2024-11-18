import React from 'react';
import './Card.css';

const priorityIcons = {
  4: '🔴', // Urgent
  3: '🟠', // High
  2: '🟡', // Medium
  1: '🔵', // Low
  0: '⚪', // No priority
};

const Card = ({ ticket, user }) => {
  return (
    <div className="card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        {user && (
          <div className="user-avatar">
            <span>{user.name[0]}</span>
            <span className={`status-indicator ${user.available ? 'available' : ''}`}></span>
          </div>
        )}
      </div>
      <div className="card-title">
        <span className="priority-icon">{priorityIcons[ticket.priority]}</span>
        <p>{ticket.title}</p>
      </div>
      <div className="card-tags">
        {ticket.tag.map((tag, index) => (
          <span key={index} className="tag">
            <span className="tag-dot">●</span>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;