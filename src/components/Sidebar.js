import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    { icon: '🏠', label: 'Home', active: true },
    { icon: '👥', label: 'My Students' },
    { icon: '📚', label: 'My Courses' },
    { icon: '📅', label: 'Calendar' },
    { icon: '📝', label: 'Assignment' },
    { icon: '🎵', label: 'Music Library' },
    { icon: '🎹', label: 'Practice Studio' },
    { icon: '💳', label: 'Payment Summary' },
    { icon: '💰', label: 'Refer & Earn' },
    { icon: '⚙️', label: 'Settings' }
  ];

  const handleMenuClick = (item) => {
    console.log(`Navigating to ${item.label}`);
  };

  const handleLogout = () => {
    console.log('Logging out...');
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <span className="logo-text">UPKRAFT</span>
        </div>
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <div 
            key={index}
            className={`nav-item ${item.active ? 'active' : ''}`}
            onClick={() => handleMenuClick(item)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </div>
        ))}
      </nav>
      
      <div className="sidebar-footer">
        <div className="nav-item logout" onClick={handleLogout}>
          <span className="nav-icon">🚪</span>
          <span className="nav-label">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
