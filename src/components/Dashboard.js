import React from 'react';
import '../styles/Dashboard.css';
import ProfileCard from './ProfileCard';
import StatsCard from './StatsCard';
import UpcomingLessons from './UpcomingLessons';
import PerformanceCard from './PerformanceCard';
import ReferCard from './ReferCard';

const Dashboard = () => {
  const statsData = [
    { label: 'Total Active Students', value: '30', color: '#7c3aed' },
    { label: 'Total Active Students', value: '30', color: '#7c3aed' },
    { label: 'Tutor CSAT Score', value: '80%', color: '#7c3aed' },
    { label: 'Tutor CSAT Score', value: '80%', color: '#7c3aed' },
    { label: 'Assignment Completion Rate', value: '15%', color: '#7c3aed' },
    { label: 'Assignment Completion Rate', value: '15%', color: '#7c3aed' }
  ];

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="search-bar">
          <input type="text" placeholder="Search here" />
          <button className="search-btn">🔍</button>
        </div>
        <div className="header-actions">
          <button className="notification-btn">🔔</button>
          <button className="settings-btn">⚙️</button>
          <div className="user-info">
            <img src="https://i.pravatar.cc/40?img=47" alt="Sherry Wolf" className="user-avatar" />
            <span className="user-name">Sherry Wolf</span>
            <span className="user-role">Tutor</span>
          </div>
        </div>
      </header>

      <main className="dashboard-content">
        <div className="dashboard-row">
          <ProfileCard />
          <div className="stats-grid">
            {statsData.map((stat, index) => (
              <StatsCard key={index} data={stat} />
            ))}
          </div>
          <ReferCard />
        </div>

        <div className="dashboard-row lower-row">
          <UpcomingLessons />
          <div className="perf-stack">
            <PerformanceCard 
              title="Overall Course Performance" 
              score="7.6" 
              maxScore="10"
              color="#fbbf24"
            />
            <PerformanceCard 
              title="Overall Student Performance" 
              score="6.6" 
              maxScore="10"
              color="#fbbf24"
            />
          </div>
          <div className="feedback-column">
            <div className="feedback-card">
              <h3>Feedback Pending</h3>
              <div className="feedback-count">12</div>
              <p>Feedback Pending</p>
              <button className="give-feedback-btn">Give Feedback →</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
