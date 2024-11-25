import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ isCollapsed }: { isCollapsed: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const shouldExpand = isHovered || !isCollapsed;

  return (
    <aside
      className={`sidebar ${shouldExpand ? "expanded" : "collapsed"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="sidebar-header"
        
      >
        {shouldExpand ? <h5>Admin Dashboard</h5> : <h5>AD</h5>}
      </div>
      <ul className="menu-list">
        <li
          className="menu-button"
          onClick={() => setIsDashboardOpen(!isDashboardOpen)}
        >
          {shouldExpand ? "Analytics" : "A"}
        </li>
        {isDashboardOpen && shouldExpand && (
          <ul className="submenu">
            <li>
              <Link to="/dashboard/analytics" className="submenu-item">
                Overview
              </Link>
            </li>
            <li>
              <Link to="/dashboard/reports" className="submenu-item">
                Analytics
              </Link>
            </li>
          </ul>
        )}

        <li
          className="menu-button"
          onClick={() => setIsContactOpen(!isContactOpen)}
        >
          {shouldExpand ? "Reports" : "R"}
        </li>
        {isContactOpen && shouldExpand && (
          <ul className="submenu">
            <li>
              <Link to="/reports/aging" className="submenu-item">
                Aging
              </Link>
            </li>
            <li>
              <Link to="/reports/q1-report" className="submenu-item">
                Q1 Report
              </Link>
            </li>
          </ul>
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
