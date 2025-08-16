import React from 'react';
import '../styles/ProfileCard.css';

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <span>Profile</span>
      </div>
      
      <div className="profile-content">
        <div className="profile-avatar">
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop" alt="Sherry Wolf" />
        </div>
        
        <div className="profile-info">
          <h2 className="profile-name">Sherry Wolf</h2>
          <p className="profile-title">Piano Tutor</p>
        </div>
        
        <div className="profile-stats">
          <div className="stat-item">
            <span className="stat-icon">👥</span>
            <span className="stat-label">Students</span>
            <span className="stat-value">30</span>
          </div>
          
          <div className="stat-item">
            <span className="stat-icon">📚</span>
            <span className="stat-label">Course</span>
            <span className="stat-value">8</span>
          </div>
          
          <div className="stat-item">
            <span className="stat-icon">🏆</span>
            <span className="stat-label">Reward</span>
            <span className="stat-value">3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
