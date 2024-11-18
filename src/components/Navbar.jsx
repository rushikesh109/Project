import { useState } from 'react';
import './Navbar.css';

function Navbar({ grouping, sorting, setGrouping, setSorting }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="display-button" onClick={() => setIsOpen(!isOpen)}>
        <span className="icon">☰</span>
        <span>Display</span>
        <span className="icon">▼</span>
      </div>

      {isOpen && (
        <div className="dropdown">
          <div className="dropdown-item">
            <span>Grouping</span>
            <select 
              value={grouping} 
              onChange={(e) => setGrouping(e.target.value)}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-item">
            <span>Ordering</span>
            <select 
              value={sorting} 
              onChange={(e) => setSorting(e.target.value)}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;