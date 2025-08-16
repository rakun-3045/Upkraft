import React from 'react';
import '../styles/ReferCard.css';

const ReferCard = () => {
  const handleReferNow = () => {
    console.log('Opening referral system...');
    // Here you would typically open a modal or navigate to referral page
    alert('Referral system would open here!');
  };

  return (
    <div className="refer-card">
      <div className="refer-content">
        <h3>Refer and Earn</h3>
        <p>Invite friends and earn exclusive rewards for every successful referral</p>
        <button className="refer-btn" onClick={handleReferNow}>
          Refer Now →
        </button>
      </div>
      <div className="refer-image">
        <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop" alt="Refer and Earn" />
      </div>
    </div>
  );
};

export default ReferCard;
