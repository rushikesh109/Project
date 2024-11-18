import './Card.css';

function Card({ ticket, user }) {
  return (
    <div className="card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        <div className="user-avatar">
          {user?.name[0]}
          <span className={`status-dot ${user?.available ? 'available' : 'away'}`}></span>
        </div>
      </div>
      <h3 className="card-title">{ticket.title}</h3>
      <div className="card-tags">
        <div className="tag priority">
          <span className="priority-icon">⚡</span>
          {ticket.priority}
        </div>
        {ticket.tag.map((tag, index) => (
          <div key={index} className="tag">
            <span className="tag-icon">●</span>
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;