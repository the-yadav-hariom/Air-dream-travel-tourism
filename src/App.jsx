import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PartnersSection from './components/PartnersSection';
import SingleLineCards from './components/SingleLineCards';
import AttractionsSection from './components/AttractionsSection';
import AboutSection from './components/AboutSection';
import ToursSection from './components/ToursSection';
import AirportTransferSection from './components/AirportTransferSection';
import GallerySection from './components/GallerySection';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Request a Quote');

  const handleOpenQuote = (title = 'Request a Quote') => {
    setModalTitle(title);
    setModalOpen(true);
  };

  const handleCloseQuote = () => {
    setModalOpen(false);
  };

  const handleBookTrip = (packageTitle, price) => {
    setModalTitle(`Book: ${packageTitle} (${price})`);
    setModalOpen(true);
  };

  const handleBookAttraction = (name, price) => {
    setModalTitle(`Book Attraction: ${name} (${price})`);
    setModalOpen(true);
  };

  return (
    <div className="react-root-container">
      {/* Navigation & Top Bar (Matching Image 1) */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <HeroSection onOpenQuote={handleOpenQuote} />

        {/* Partners & Airline Logos (Matching Image 2) */}
        <PartnersSection />

        {/* Why Choose 3D Cards (Row-wise Laptop, Column-wise Phone) */}
        <SingleLineCards onBookTrip={handleBookTrip} />

        {/* Attractions you can't miss (Top Dubai Attractions) */}
        <AttractionsSection onBookAttraction={handleBookAttraction} />

        {/* About US Section (Matching Reference Image 4) */}
        <AboutSection onOpenQuote={handleOpenQuote} />

        {/* Tour - Trips Left-to-Right Auto-Scrolling Marquee (Image 3 Top) */}
        <ToursSection onBookTour={handleBookTrip} />

        {/* Airport Transfer Left-to-Right Auto-Scrolling Marquee (Image 3 Bottom) */}
        <AirportTransferSection onBookTransfer={handleBookTrip} />

        {/* Salalah Photo Gallery (Matching Reference Image 1) */}
        <GallerySection onOpenPhoto={handleBookTrip} />

        {/* Reviews Left-to-Right Auto-Scrolling Marquee featuring Bhavesh S (Image 2) */}
        <ReviewsSection />
      </main>

      {/* Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Booking / Quote Modal */}
      <BookingModal 
        isOpen={modalOpen} 
        title={modalTitle} 
        onClose={handleCloseQuote} 
      />
    </div>
  );
}
