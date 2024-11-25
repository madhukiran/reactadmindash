import React from 'react';

const Cards = () => {
  const cardsData = [
    { title: '150 New Orders', color: '#14a2b8' }, // Custom color (blue)
    { title: '53% Bounce Rate', color: '#28A745' }, // Custom color (green)
    { title: '44 User Registrations', color: '#FFC007' }, // Custom color (yellow)
    { title: '65 Unique Visitors', color: '#DC3444' }, // Custom color (red)
  ];

  return (
    <div className="row">
      {cardsData.map((card, index) => (
        <div key={index} className={`col-lg-3 col-md-4 col-12 mb-4`}>
          <div className="card small-box text-white shadow" style={{
              backgroundColor: card.color,
              minHeight: '100px',  // Increase height to make cards bigger
              padding: '20px',     // Add more padding for internal spacing
              fontSize: '1.2rem',  // Make font size bigger
              display: 'flex',     // Use flexbox for centering content
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <div className="card-body">{card.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
