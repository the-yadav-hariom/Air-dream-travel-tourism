import React from 'react';

const DUBAI_ATTRACTIONS = [
  {
    id: 1,
    name: 'Burj Khalifa',
    activities: '145 activities',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=700&q=80',
    price: '$95'
  },
  {
    id: 2,
    name: 'Museum of the Future',
    activities: '92 activities',
    image: 'https://images.unsplash.com/photo-1634148545855-32a8427fefb3?auto=format&fit=crop&w=700&q=80',
    price: '$45'
  },
  {
    id: 3,
    name: 'Desert Safari & Dunes',
    activities: '280 activities',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=700&q=80',
    price: '$55'
  },
  {
    id: 4,
    name: 'The View at The Palm',
    activities: '115 activities',
    image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=700&q=80',
    price: '$38'
  },
  {
    id: 5,
    name: 'Dubai Frame',
    activities: '64 activities',
    image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=700&q=80',
    price: '$22'
  },
  {
    id: 6,
    name: 'Ain Dubai & Marina',
    activities: '48 activities',
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=700&q=80',
    price: '$40'
  },
  {
    id: 7,
    name: 'Atlantis Aquaventure',
    activities: '160 activities',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=700&q=80',
    price: '$85'
  },
  {
    id: 8,
    name: 'Dubai Miracle Garden',
    activities: '52 activities',
    image: 'https://images.unsplash.com/photo-1561571994-3c3915177263?auto=format&fit=crop&w=700&q=80',
    price: '$28'
  }
];

export default function AttractionsSection({ onBookAttraction }) {
  return (
    <section className="section-padding attractions-section" id="attractions">
      <div className="container">
        
        <div className="attractions-header">
          <div className="section-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#E0F2FE', color: '#0369A1', padding: '4px 14px', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
            <i className="fa-solid fa-star text-gold"></i> Must-Visit Landmarks
          </div>
          <h2 className="attractions-title">Top Dubai Attractions</h2>
          <p className="attractions-subtitle">
            Explore iconic landmarks &amp; unforgettable experiences in Dubai &bull; Auto-scrolling &bull; Hover to pause &bull; Click to book
          </p>
        </div>

      </div>

      {/* Single Row Auto-Scrolling Marquee Track (Left to Right) */}
      <div className="attractions-marquee-container">
        <div className="attractions-marquee-track">
          
          {/* First set of Dubai attractions */}
          {DUBAI_ATTRACTIONS.map((attraction) => (
            <div 
              key={`att-1-${attraction.id}`} 
              className="attraction-card"
              onClick={() => onBookAttraction && onBookAttraction(attraction.name, attraction.price)}
            >
              <div className="attraction-img-wrapper">
                <img 
                  src={attraction.image} 
                  alt={attraction.name} 
                  className="attraction-img" 
                  loading="lazy" 
                />
              </div>
              <div className="attraction-info">
                <h3 className="attraction-name">{attraction.name}</h3>
                <p className="attraction-activities">{attraction.activities}</p>
                <div className="attraction-card-footer">
                  <div className="tour-price-box">
                    <span className="tour-price-value">{attraction.price || '$45'}</span>
                    <span className="tour-price-unit">/person</span>
                  </div>
                  <button type="button" className="btn-book-tour">{attraction.btnText || 'Book Now'}</button>
                </div>
              </div>
            </div>
          ))}

          {/* Duplicate set for seamless left-to-right infinite loop */}
          {DUBAI_ATTRACTIONS.map((attraction) => (
            <div 
              key={`att-2-${attraction.id}`} 
              className="attraction-card"
              aria-hidden="true"
              onClick={() => onBookAttraction && onBookAttraction(attraction.name, attraction.price)}
            >
              <div className="attraction-img-wrapper">
                <img 
                  src={attraction.image} 
                  alt={attraction.name} 
                  className="attraction-img" 
                  loading="lazy" 
                />
              </div>
              <div className="attraction-info">
                <h3 className="attraction-name">{attraction.name}</h3>
                <p className="attraction-activities">{attraction.activities}</p>
                <div className="attraction-card-footer">
                  <div className="tour-price-box">
                    <span className="tour-price-value">{attraction.price || '$45'}</span>
                    <span className="tour-price-unit">/person</span>
                  </div>
                  <button type="button" className="btn-book-tour">{attraction.btnText || 'Book Now'}</button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
