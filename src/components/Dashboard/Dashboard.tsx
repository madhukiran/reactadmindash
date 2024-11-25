import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import Cards from './Cards';
import Charts from './Charts';
import VisitorMap from './VisitorMap';
import './Dashboard.css';

const Dashboard = () => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSidebarCollapsed(true);
      } else {
        setSidebarCollapsed(false);
      }
    }
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.addEventListener('resize', handleResize);
  }, []);
  

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className={`dashboard-container ${isSidebarCollapsed ? 'collapsed' : ''}`}>
      
      <Sidebar isCollapsed={isSidebarCollapsed} />
      <div className="main-layout">
        <Header onToggleSidebar={toggleSidebar} />
        <main className="main-content">
        <h2>Dashboard</h2>
          <Cards />
          <div className="row mt-4">
            <div className="col-md-6">
              <Charts />
            </div>
            <div className="col-md-6">
              <VisitorMap />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
