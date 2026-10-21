import React, { useState } from 'react';

export default function BookingModal({ isOpen, title, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="modal-backdrop-fade" onClick={onClose}>
      <div className="modal-dialog-box" onClick={(e) => e.stopPropagation()}>
        <button 
          type="button" 
          className="card-close-x" 
          onClick={onClose} 
          style={{ top: '16px', right: '16px' }}
        >
          &times;
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <div style={{ fontSize: '3rem', marginBottom: '12px' }}>✅</div>
            <h3 style={{ fontSize: '1.4rem', color: '#0A1F44', marginBottom: '8px' }}>Thank You!</h3>
            <p style={{ color: '#556987', fontSize: '0.95rem' }}>
              Your request for <strong>{title}</strong> has been received. Our concierge will contact you within 15 minutes!
            </p>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <span style={{ fontSize: '1.6rem' }}>✈️</span>
              <h3 style={{ fontSize: '1.35rem', color: '#0A1F44', margin: 0, fontWeight: 800 }}>
                {title || 'Request Information'}
              </h3>
            </div>
            <p style={{ fontSize: '0.88rem', color: '#64748B', marginBottom: '20px' }}>
              Fill in your details below and our travel consultants will find you the best market rates.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#1E293B', display: 'block', marginBottom: '5px' }}>
                  Your Full Name
                </label>
                <input 
                  type="text" 
                  required 
                  value={formData.name} 
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. John Doe"
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1.5px solid #CBD5E1' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#1E293B', display: 'block', marginBottom: '5px' }}>
                  Phone / WhatsApp
                </label>
                <input 
                  type="tel" 
                  required 
                  value={formData.phone} 
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+971 58 833 8927"
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1.5px solid #CBD5E1' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#1E293B', display: 'block', marginBottom: '5px' }}>
                  Email Address
                </label>
                <input 
                  type="email" 
                  required 
                  value={formData.email} 
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1.5px solid #CBD5E1' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#1E293B', display: 'block', marginBottom: '5px' }}>
                  Specific Notes / Requests
                </label>
                <textarea 
                  rows={3} 
                  value={formData.message} 
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Number of passengers, preferred airlines, dates, or hotels..."
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1.5px solid #CBD5E1', resize: 'vertical' }}
                />
              </div>

              <button 
                type="submit" 
                className="btn btn-gold" 
                style={{ width: '100%', padding: '12px', marginTop: '6px' }}
              >
                Submit Request
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
