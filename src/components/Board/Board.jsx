import React from 'react';
import Card from '../Card/Card';
import './Board.css';

const priorityLabels = {
  4: 'Urgent',
  3: 'High',
  2: 'Medium',
  1: 'Low',
  0: 'No priority'
};

const Board = ({ tickets, users, grouping, sorting }) => {
  const getGroupedAndSortedTickets = () => {
    let groups = {};

    // Group tickets
    if (grouping === 'status') {
      tickets.forEach(ticket => {
        if (!groups[ticket.status]) groups[ticket.status] = [];
        groups[ticket.status].push(ticket);
      });
    } else if (grouping === 'user') {
      users.forEach(user => {
        groups[user.name] = tickets.filter(ticket => ticket.userId === user.id);
      });
    } else if (grouping === 'priority') {
      Object.entries(priorityLabels).forEach(([priority, label]) => {
        groups[label] = tickets.filter(ticket => ticket.priority === Number(priority));
      });
    }

    // Sort tickets within groups
    Object.keys(groups).forEach(key => {
      groups[key].sort((a, b) => {
        if (sorting === 'priority') {
          return b.priority - a.priority;
        }
        return a.title.localeCompare(b.title);
      });
    });

    return groups;
  };

  const groupedTickets = getGroupedAndSortedTickets();

  return (
    <div className="board">
      {Object.entries(groupedTickets).map(([groupName, tickets]) => (
        <div key={groupName} className="column">
          <div className="column-header">
            <div className="column-title">
              <span>{groupName}</span>
              <span className="ticket-count">{tickets.length}</span>
            </div>
            <button className="add-button">+</button>
          </div>
          <div className="tickets-container">
            {tickets.map(ticket => (
              <Card
                key={ticket.id}
                ticket={ticket}
                user={users.find(u => u.id === ticket.userId)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Board;