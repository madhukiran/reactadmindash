import React from "react";
import { Link } from "react-router-dom";

const Header = ({ onToggleSidebar }: { onToggleSidebar: () => void }) => {
  return (
    <header className="header">
      <ul className="header-links">
        <li onClick={onToggleSidebar}>
          <a href="#" className="header-link">
            ☰
          </a>
        </li>
        <li>
          <Link to="/dashboard" className="header-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/contact" className="header-link">
            Contact
          </Link>
        </li>
      </ul>
      <button className="btn btn-outline-secondary ms-auto">
        <a href="/" className="header-link">Log Out</a>
      </button>
    </header>
  );
};

export default Header;
