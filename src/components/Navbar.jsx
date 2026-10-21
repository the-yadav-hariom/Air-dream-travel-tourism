import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenQuote }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Top Bar (Phone, circular email, social icons matching Image 1) */}
      <div className="top-bar air-dream-top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <a href="tel:+971588338927" className="top-bar-phone-link">
              <i className="fa-solid fa-phone"></i>
              <span>+971 58 833 8927</span>
            </a>
            <a href="mailto:info@airdreamtravel.com" className="top-bar-circle-icon-btn" title="Email Us" aria-label="Email Us">
              <i className="fa-regular fa-envelope"></i>
            </a>
          </div>
          <div className="top-bar-right">
            <div className="top-bar-social-group">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="top-bar-social-btn" title="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="top-bar-social-btn" title="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="top-bar-social-btn" title="TikTok">
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a href="https://wa.me/971588338927" target="_blank" rel="noopener noreferrer" className="top-bar-social-btn" title="WhatsApp">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header (Air Dream squircle badge, green WhatsApp, dark hamburger matching Image 1) */}
      <header className={`main-header air-dream-header ${isScrolled ? 'scrolled' : ''}`} id="mainHeader">
        <div className="container header-container">
          
          {/* Brand Logo */}
          <a href="#hero" className="brand-logo-link air-dream-brand" aria-label="Air Dream Travel & Tourism Home">
            <img src="/assets/air-dream-badge.svg" alt="Air Dream Logo" className="air-dream-header-badge" />
            <div className="air-dream-brand-text">
              <span className="air-dream-brand-name">Air Dream</span>
              <span className="air-dream-brand-sub">TRAVEL &amp; TOURISM</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav air-dream-nav" aria-label="Main Navigation">
            <a href="#hero" className="nav-link active">Home</a>
            <a href="#partners" className="nav-link">Partners</a>
            <a href="#why-choose" className="nav-link">Why Choose Us</a>
            <a href="#attractions" className="nav-link">Dubai Attractions</a>
            <a href="#packages" className="nav-link">Umrah &amp; Tours</a>
            <a href="#contact" className="nav-link nav-link-contact">
              <span className="contact-accent-icon"><i className="fa-solid fa-envelope"></i></span>
              <span>Contact</span>
            </a>
          </nav>

          {/* Right Action Icons (Green WhatsApp + Dark Hamburger) */}
          <div className="header-actions">
            <a 
              href="https://wa.me/971588338927" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="header-green-whatsapp-btn" 
              title="Chat on WhatsApp"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>

            <button 
              type="button" 
              className={`header-dark-hamburger-btn ${isMenuOpen ? 'active' : ''}`} 
              onClick={toggleMenu} 
              aria-label="Toggle navigation menu"
            >
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      <div 
        className={`mobile-nav-backdrop ${isMenuOpen ? 'open' : ''}`} 
        onClick={closeMenu}
      ></div>

      <aside className={`borderlink-mobile-menu ${isMenuOpen ? 'open' : ''}`} aria-label="Navigation Menu">
        <div className="borderlink-menu-inner">
          <div className="borderlink-menu-links">
            <div className="borderlink-menu-item-home">
              <a href="#hero" className="borderlink-nav-item active" onClick={closeMenu}>Home</a>
              <div className="borderlink-home-underline"></div>
            </div>
            
            <a href="#partners" className="borderlink-nav-item" onClick={closeMenu}>Airline Partners</a>
            <a href="#why-choose" className="borderlink-nav-item" onClick={closeMenu}>Why Choose Us</a>
            <a href="#attractions" className="borderlink-nav-item" onClick={closeMenu}>Top Dubai Attractions</a>
            <a href="#packages" className="borderlink-nav-item" onClick={closeMenu}>Umrah &amp; Tour Packages</a>
            <a href="#contact" className="borderlink-nav-item borderlink-contact-item" onClick={closeMenu}>
              <span className="contact-mini-envelope"><i className="fa-solid fa-envelope"></i></span>
              <span>Contact (+971 58 833 8927)</span>
            </a>
          </div>

          <div className="borderlink-menu-actions">
            <a href="https://wa.me/971588338927" target="_blank" rel="noopener noreferrer" className="btn-borderlink-signup" style={{ textAlign: 'center', textDecoration: 'none' }}>
              <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
            </a>
            <button type="button" className="btn-borderlink-login" onClick={() => { closeMenu(); onOpenQuote('Request Custom Quote'); }}>
              Request Quote
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
