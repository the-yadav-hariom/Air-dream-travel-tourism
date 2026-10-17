# Air Dream Travel & Tourism ("Fly Your Dreams")

A modern, responsive, mobile-first website for **Air Dream Travel & Tourism** built with HTML5, CSS3, Vanilla JavaScript, and an optional lightweight Express.js backend.

## Brand Identity & Design System
- **Tagline:** "Fly Your Dreams"
- **Logo:** Paper-plane / jet curving through a cloud vector icon with bold typography.
- **Color Palette:**
  - Navy: `#0A1F44` (Deep luxury night sky)
  - Sky Blue: `#1E6FD9` (Electric vibrant sky)
  - Light Blue: `#CDE8FF` (Soft dream clouds)
  - Pure White: `#FFFFFF`
  - Gold Accent: `#F5B301` (Sunlight & luxury star rating)
- **Typography:**
  - **Poppins** for clean, readable body text, buttons, and navigation.
  - **Dancing Script** for elegant, script-style titles on vertical feature cards and section accents.

---

## Key Features & Sections

1. **Top Bar & Sticky Dark-Navy Header:**
   - 24/7 Hotline, IATA Certification badge, and multi-currency selector.
   - Sticky header with animated nav link underlines.
   - Mobile slide-out drawer menu with smooth backdrop blur.
   - Quick "Get a Quote" call-to-action button.

2. **Hero Wallpaper Slider:**
   - Full-width 3-slide slider with subtle Ken Burns zoom and cross-fade transitions.
   - Auto-slides every 5 seconds, pauses on hover, and supports touch swipe on mobile.
   - Slide 1: Flights ("Fly Anywhere at the Best Fares" &rarr; "Book Your Flight")
   - Slide 2: Spiritual Journeys ("Hajj & Umrah Made Easy" &rarr; "View Packages")
   - Slide 3: Holiday Tours ("Explore the World with Air Dream" &rarr; "Plan Your Trip")
   - High-contrast gradient overlay ensuring 100% legibility.

3. **Floating Interactive Search Bar:**
   - Overlaps the bottom of the hero with glassmorphism and animated top border.
   - Interactive search mode tabs: **Flights**, **Hajj & Umrah**, **Tour Packages**, **Visa Services**.
   - Location swap button with animated rotation.
   - Interactive search submission opens real-time matching deals.

4. **"Why Choose Air Dream Travel & Tourism?" Section:**
   - Soft curved light-blue background shapes.
   - 6 vertical photo cards with blue backgrounds and elegant script titles:
     - Global Reach
     - Seamless Ticketing
     - Spiritual Journeys
     - Visa Assistance
     - 24/7 Support
     - Competitive Fare
   - **3D Book-Style Open Interaction:** Clicking or tapping any card smoothly opens it like a book/passport spread (angled cover tilted to the left, inner white page to the right with emoji, description, and an instant **"Book Offer Trip"** button).
   - Responsive grid: 2 columns on mobile (matching reference design), 3 on tablet, 6 on desktop.

5. **Popular Destinations & Featured Packages:**
   - Interactive filter tabs (All, Hajj & Umrah, Holiday Tours, Flights).
   - Package cards featuring ratings, durations, inclusions tags, transparent pricing, and "Book Now" buttons.
   - Touch/click package slider with navigation arrows.

7. **Airline Partners, Testimonials & FAQ:**
   - Continuous marquee banner of 10+ partner airlines (Emirates, Qatar Airways, Saudia, Singapore Airlines, etc.).
   - Verified traveler review cards with star ratings.
   - Accessible animated FAQ accordion.

8. **Global Features:**
   - Pulsing green floating WhatsApp button.
   - Floating "Live Chat" bubble with interactive AI concierge modal and quick prompt chips.
   - "Get a Quote" multi-step modal with budget and passenger fields.
   - "Book Now" modal with prefilled package name.
   - Newsletter subscription form with toast alerts.
   - 100% responsive down to 320px with zero horizontal scrolling.

---

## How to Run

### Option 1: Instant Static Preview (No Installation Required)
Simply open `index.html` in any web browser (Chrome, Safari, Edge, Firefox).

### Option 2: Run with Node.js & Express (Optional)
If you prefer running a local server with API endpoints:
```bash
npm install
npm start
```
Then visit `http://localhost:3000` in your browser.
