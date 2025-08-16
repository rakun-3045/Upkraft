import React from 'react';
import '../styles/StatsCard.css';

const StatsCard = ({ data }) => {
  return (
    <div className="stats-card">
      <div className="stats-value" style={{ color: data.color }}>
        {data.value}
      </div>
      <div className="stats-label">
        {data.label}
      </div>
    </div>
  );
};

export default StatsCard;
