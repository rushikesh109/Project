import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ grouping, sorting, setGrouping, setSorting }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <button className="display-button" onClick={() => setIsOpen(!isOpen)}>
        <span>☰</span>
        <span>Display</span>
        <span>▼</span>
      </button>

      {isOpen && (
        <div className="dropdown">
          <div className="dropdown-item">
            <span>Grouping</span>
            <select value={grouping} onChange={(e) => setGrouping(e.target.value)}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-item">
            <span>Ordering</span>
            <select value={sorting} onChange={(e) => setSorting(e.target.value)}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;