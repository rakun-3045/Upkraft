import React from 'react';
import '../styles/PerformanceCard.css';

const PerformanceCard = ({ title, score, maxScore, color }) => {
  const percentage = (parseFloat(score) / parseFloat(maxScore)) * 100;
  
  // Semi-circle sizes
  const radius = 70;
  const circumference = Math.PI * radius; // half of full circle
  const dash = (percentage / 100) * circumference;

  return (
    <div className="performance-card">
      <h4>{title}</h4>
      <div className="performance-chart half">
        <div className="chart-container">
          <svg width="200" height="120" viewBox="0 0 200 120" className="semi-chart">
            {/* Track */}
            <path
              d="M20 100 A80 80 0 0 1 180 100"
              fill="none"
              stroke="#f3f4f6"
              strokeWidth="14"
              strokeLinecap="round"
            />
            {/* Progress */}
            <path
              d="M20 100 A80 80 0 0 1 180 100"
              fill="none"
              stroke={color}
              strokeWidth="14"
              strokeLinecap="round"
              strokeDasharray={`${dash} ${circumference}`}
            />
          </svg>
          <div className="chart-score">
            <span className="score-value">{score}</span>
            <span className="score-max">/{maxScore}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceCard;
