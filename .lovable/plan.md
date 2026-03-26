
## Akihi Tales — Premium Multi-Page Travel Agency Website

### Overview
A full multi-page website for Akihi Tales, a Rishikesh-based adventure travel agency. Dark navy + river blue + forest green + white color palette, glassmorphism cards, smooth animations, parallax hero sections, and all uploaded images used throughout.

---

### Design System
- **Colors:** Deep navy (`#0a0f1e`), river blue (`#1e6fa8`), forest green (`#2d6a4f`), white/cream, saffron accent (`#f4a020`)
- **Typography:** Playfair Display (headings) + Inter (body) — loaded via Google Fonts
- **Effects:** Glassmorphism cards, parallax scroll, fade-in animations, frosted navbar
- **Floating button:** WhatsApp button fixed bottom-right on all pages

---

### File Structure
- `src/pages/Index.tsx` — Home
- `src/pages/Packages.tsx` — Packages overview
- `src/pages/Rafting.tsx` — River Rafting
- `src/pages/Camping.tsx` — Camping & Adventure
- `src/pages/CharDham.tsx` — Char Dham Yatra
- `src/pages/CustomTrips.tsx` — Custom Trips form
- `src/pages/Reviews.tsx` — Testimonials
- `src/pages/About.tsx` — About Us
- `src/pages/Contact.tsx` — Contact / Book Now
- `src/components/Navbar.tsx` — Sticky responsive navbar
- `src/components/Footer.tsx` — Footer with links & social
- `src/components/WhatsAppButton.tsx` — Floating WhatsApp CTA
- `src/assets/` — All uploaded images copied here

---

### Page-by-Page Plan

#### 1. Home Page
- **Hero:** Full-screen parallax with rafting image, headline "Adventure Starts in Rishikesh with Akihi Tales", subtitle, 3 CTA buttons (Book Now, View Packages, WhatsApp Us), animated trust badges (✔ Trusted by travelers, ✔ Safe rafting team, etc.)
- **Popular Deals:** 3 glassmorphism cards — Hostel+Camping+Rafting ₹3000, All-in-One Adventure ₹10,500, Scooty Rental ₹500/day
- **Why Choose Akihi Tales:** 6-icon grid with animated hover cards
- **Gallery:** Masonry/grid layout using all uploaded images (rafting, camping, mountains, Ganga aarti, temples)
- **Reviews:** Carousel/grid of testimonials with star ratings
- **Footer:** Instagram, WhatsApp, location, navigation links

#### 2. Packages Page
- Category grid cards: Rafting, Camping, Adventure Combo, Group Trips, Couple Trips, Char Dham, Custom Trips
- Each card has image, title, price, short description, and "View Details" button

#### 3. Rafting Page
- Hero with rafting image
- 4 package cards: 9km, 16km, 26km, 35km expedition — each with duration, difficulty, price
- Safety info accordion section
- Book Now CTA

#### 4. Camping & Adventure Page
- Hero with campfire/riverside camping image
- Two sections: Camping (Riverside, Bonfire Night, DJ Night, Beach Walk) and Adventure Sports (Paragliding, Bungee 109m, Zipline, Giant Swing)
- Activity cards with icons, descriptions, pricing

#### 5. Char Dham Yatra Page
- Hero with Kedarnath/Badrinath images
- 4 temple cards (Kedarnath, Badrinath, Gangotri, Yamunotri) each using the uploaded temple photos
- Group, Family, Custom tour tabs

#### 6. Custom Trips Page
- Headline "Plan Your Dream Trip"
- Form: Name, Phone, Destination, Dates, Number of people, Message
- Styled with glassmorphism on mountain background

#### 7. Reviews Page
- Long testimonials with names, star ratings, trip type tags
- Grid of 8–10 reviews including all specified ones (Tammy, rafting, camping, food)

#### 8. About Page
- Team photo area, Akihi Tales story text
- Tammy & local team highlight
- Mission/values section

#### 9. Contact / Book Now Page
- WhatsApp button, Call button, Instagram link
- Contact form (Name, Phone, Package, Message)
- Google Maps embed for Rishikesh

---

### Routing
All pages wired in `App.tsx` with React Router. Navbar links to all 9 pages. Floating WhatsApp button on every page.
