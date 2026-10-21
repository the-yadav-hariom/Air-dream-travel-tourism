import React from 'react';

export default function Footer({ onOpenQuote }) {
  return (
    <footer className="main-footer" style={{ background: '#061226', color: '#CDE8FF', padding: '60px 0 30px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          
          {/* Col 1 */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <img src="/assets/borderlink-logo.svg" alt="Borderlink Travel & Tours" style={{ height: '48px', filter: 'brightness(0) invert(1)' }} />
            </div>
            <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '20px' }}>
              Your trusted travel partner for cheap international flights, 5-star VIP Umrah &amp; Hajj packages, bespoke holiday tours, and fast visa assistance.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="#hero" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#hero" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#hero" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <li><a href="#hero" style={{ color: '#94A3B8' }}>Home</a></li>
              <li><a href="#why-choose" style={{ color: '#94A3B8' }}>Why Choose Us</a></li>
              <li><a href="#packages" style={{ color: '#94A3B8' }}>Umrah Packages</a></li>
              <li><a href="#packages" style={{ color: '#94A3B8' }}>Air Ticketing</a></li>
              <li><a href="#packages" style={{ color: '#94A3B8' }}>World Tours</a></li>
              <li><a href="#packages" style={{ color: '#94A3B8' }}>Visa Services</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px' }}>Our Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <li><span style={{ color: '#94A3B8' }}>Worldwide Flight Booking</span></li>
              <li><span style={{ color: '#94A3B8' }}>5-Star Executive Umrah Packages</span></li>
              <li><span style={{ color: '#94A3B8' }}>Customized Honeymoon &amp; Family Tours</span></li>
              <li><span style={{ color: '#94A3B8' }}>Schengen, UK &amp; US Visa Assistance</span></li>
              <li><span style={{ color: '#94A3B8' }}>24/7 Travel Concierge Support</span></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px' }}>Contact &amp; Support</h4>
            <p style={{ fontSize: '0.9rem', color: '#94A3B8', marginBottom: '10px' }}>
              <i className="fa-solid fa-phone text-gold" style={{ marginRight: '8px' }}></i> +971 58 833 8927
            </p>
            <p style={{ fontSize: '0.9rem', color: '#94A3B8', marginBottom: '10px' }}>
              <i className="fa-solid fa-envelope text-gold" style={{ marginRight: '8px' }}></i> info@airdreamtravel.com
            </p>
            <p style={{ fontSize: '0.9rem', color: '#94A3B8', marginBottom: '18px' }}>
              <i className="fa-solid fa-location-dot text-gold" style={{ marginRight: '8px' }}></i> Dubai, United Arab Emirates
            </p>
            <button 
              type="button" 
              className="btn btn-gold btn-sm" 
              onClick={() => onOpenQuote('Consultation')}
              style={{ width: '100%' }}
            >
              Get Free Consultation
            </button>
          </div>

        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', fontSize: '0.85rem', color: '#64748B' }}>
          <div>&copy; {new Date().getFullYear()} Borderlink Travel &amp; Tours (Pvt.) Ltd. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>IATA Certified Agency</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
