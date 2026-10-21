import React from 'react';

export default function AboutSection({ onOpenQuote }) {
  return (
    <section className="about-us-section" id="about-us">
      <div className="container about-us-container">
        
        <h2 className="about-us-title">About US</h2>
        
        <p className="about-us-quote">
          &ldquo;We, at Arabian Travel Service, cater to our clients a lifestyle at its best where they can feel the pulse of Salalah, the unseen facet of Oman, through our exclusive guided tours and other value-added services.&rdquo;
        </p>
        
        <div>
          <button 
            type="button" 
            className="btn-about-readmore" 
            onClick={() => onOpenQuote && onOpenQuote('About Arabian Travel Service')}
          >
            Read More
          </button>
        </div>

        {/* Arched Photo Composition with Overlapping Bubble Photo Badges (Image 4) */}
        <div className="about-visual-stage">
          {/* Main Arched Frame */}
          <div className="about-arch-outer">
            <div className="about-arch-inner">
              <img 
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" 
                alt="Arabian Travel Service Salalah Oman" 
                className="about-arch-img" 
                loading="lazy" 
              />
            </div>
          </div>

          {/* Bubble 1: Top-Left (Wadi waterfalls) */}
          <div className="about-bubble-1" title="Wadi Darbat Waterfalls">
            <img 
              src="https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=400&q=80" 
              alt="Wadi Darbat Waterfalls Salalah" 
              loading="lazy" 
            />
          </div>

          {/* Bubble 2: Top-Side (Blue Sea Coast) */}
          <div className="about-bubble-2" title="Salalah Coastline">
            <img 
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=300&q=80" 
              alt="Salalah Coastline Blue Sea" 
              loading="lazy" 
            />
          </div>

          {/* Bubble 3: Bottom-Left (Camels on Beach) */}
          <div className="about-bubble-3" title="Coastal Camels">
            <img 
              src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=400&q=80" 
              alt="Salalah Beach Camels" 
              loading="lazy" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}
