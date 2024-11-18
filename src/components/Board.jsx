import { useMemo } from 'react';
import './Board.css';
import Card from './Card';

const priorityLabels = {
  4: 'Urgent',
  3: 'High',
  2: 'Medium',
  1: 'Low',
  0: 'No priority'
};

function Board({ tickets, users, grouping, sorting }) {
  const groupedTickets = useMemo(() => {
    let groups = {};

    if (grouping === 'status') {
      tickets.forEach(ticket => {
        if (!groups[ticket.status]) {
          groups[ticket.status] = [];
        }
        groups[ticket.status].push(ticket);
      });
    } else if (grouping === 'user') {
      users.forEach(user => {
        groups[user.name] = tickets.filter(ticket => 
          ticket.userId === user.id
        );
      });
    } else if (grouping === 'priority') {
      Object.keys(priorityLabels).forEach(priority => {
        groups[priorityLabels[priority]] = tickets.filter(ticket => 
          ticket.priority === parseInt(priority)
        );
      });
    }

    // Sort tickets within each group
    Object.keys(groups).forEach(key => {
      groups[key].sort((a, b) => {
        if (sorting === 'priority') {
          return b.priority - a.priority;
        } else {
          return a.title.localeCompare(b.title);
        }
      });
    });

    return groups;
  }, [tickets, users, grouping, sorting]);

  return (
    <div className="board">
      {Object.entries(groupedTickets).map(([group, tickets]) => (
        <div key={group} className="column">
          <div className="column-header">
            <h2>{group}</h2>
            <span className="ticket-count">{tickets.length}</span>
          </div>
          <div className="tickets">
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
}

export default Board;