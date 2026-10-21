import React from 'react';

const VEHICLES_DATA = [
  {
    id: 1,
    title: 'Toyota Land Cruiser – 4WD SUV',
    passengers: 4,
    luggage: 4,
    price: '65$',
    image: 'assets/vehicles/toyota-land-cruiser.svg'
  },
  {
    id: 2,
    title: 'Toyota Prado – Premium SUV',
    passengers: 4,
    luggage: 3,
    price: '55$',
    image: 'assets/vehicles/toyota-prado.svg'
  },
  {
    id: 3,
    title: 'Nissan Altima – Sedan Car',
    passengers: 3,
    luggage: 3,
    price: '45$',
    image: 'assets/vehicles/nissan-altima.svg'
  },
  {
    id: 4,
    title: 'Toyota Land Cruiser – 4WD SUV',
    passengers: 4,
    luggage: 4,
    price: '65$',
    image: 'assets/vehicles/toyota-land-cruiser.svg'
  },
  {
    id: 5,
    title: 'Mercedes V-Class – VIP Chauffeur Van',
    passengers: 7,
    luggage: 7,
    price: '120$',
    image: 'assets/vehicles/mercedes-v-class.svg'
  }
];

export default function AirportTransferSection({ onBookTransfer }) {
  return (
    <section className="airport-transfer-section" id="transfers">
      <div className="container">
        <div className="section-badge-center">
          <span className="pill-badge-outline">Airport transfer</span>
        </div>
      </div>

      {/* Left to Right Auto Scrolling Marquee Track */}
      <div className="transfers-marquee-container">
        <div className="transfers-marquee-track">
          {/* Set 1 */}
          {VEHICLES_DATA.map((v) => (
            <div 
              key={`v1-${v.id}`} 
              className="transfer-vehicle-card"
              onClick={() => onBookTransfer && onBookTransfer(v.title, v.price)}
            >
              <div className="transfer-vehicle-img-wrap">
                <img src={v.image} alt={v.title} className="transfer-vehicle-img" loading="lazy" />
              </div>
              <h3 className="transfer-vehicle-title">{v.title}</h3>
              <div className="transfer-vehicle-specs">
                <span className="transfer-spec-item"><i className="fa-solid fa-users"></i> : {v.passengers}</span>
                <span className="transfer-spec-item"><i className="fa-solid fa-suitcase"></i> : {v.luggage}</span>
              </div>
              <div className="transfer-price-row">
                <span className="transfer-price-val">{v.price}</span>
                <span className="transfer-price-sub">/Per person</span>
              </div>
              <button type="button" className="btn-book-transfer">Book Now</button>
            </div>
          ))}

          {/* Set 2 (Identical Duplicate for Infinite Loop) */}
          {VEHICLES_DATA.map((v) => (
            <div 
              key={`v2-${v.id}`} 
              className="transfer-vehicle-card"
              aria-hidden="true"
              onClick={() => onBookTransfer && onBookTransfer(v.title, v.price)}
            >
              <div className="transfer-vehicle-img-wrap">
                <img src={v.image} alt={v.title} className="transfer-vehicle-img" loading="lazy" />
              </div>
              <h3 className="transfer-vehicle-title">{v.title}</h3>
              <div className="transfer-vehicle-specs">
                <span className="transfer-spec-item"><i className="fa-solid fa-users"></i> : {v.passengers}</span>
                <span className="transfer-spec-item"><i className="fa-solid fa-suitcase"></i> : {v.luggage}</span>
              </div>
              <div className="transfer-price-row">
                <span className="transfer-price-val">{v.price}</span>
                <span className="transfer-price-sub">/Per person</span>
              </div>
              <button type="button" className="btn-book-transfer">Book Now</button>
            </div>
          ))}
        </div>
      </div>

      <div className="section-readmore-footer">
        <a href="#contact" className="section-footer-readmore-link">READ MORE</a>
      </div>
    </section>
  );
}
