import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroMountains from "@/assets/hero-mountains.webp";
import rafting from "@/assets/rafting.jpeg";
import campfire from "@/assets/campfire.jpg";
import riversideCamping from "@/assets/riverside-camping.jpg";
import gangaAarti from "@/assets/ganga-aarti.jpg";
import gangotri from "@/assets/gangotri.webp";
import badrinath from "@/assets/badrinath.jpg";
import kedarnath from "@/assets/kedarnath.jpg";

const deals = [
  {
    title: "Riverside Camping + Rafting",
    description: "1 Night Hostel + 1 Night Riverside Camping + 4 Meals + 16km Rafting",
    price: "₹3,000",
    per: "per person",
    tag: "Best Seller",
    color: "from-river-blue/20 to-forest-green/20",
    link: "/packages",
  },
  {
    title: "All-in-One Adventure",
    description: "Camping + Paragliding + Rafting + 109m Bungee Jump — the ultimate rush!",
    price: "₹10,500",
    per: "per person",
    tag: "Premium",
    color: "from-saffron/20 to-river-blue/20",
    link: "/packages",
  },
  {
    title: "Scooty Rental",
    description: "Explore Rishikesh on your own schedule. Fuel not included.",
    price: "₹500",
    per: "per day",
    tag: "Daily",
    color: "from-forest-green/20 to-saffron/20",
    link: "/contact",
  },
];

const reasons = [
  { icon: "🛡️", title: "Safe & Experienced Team", desc: "Certified guides with years of experience on the Ganga rapids." },
  { icon: "⛺", title: "Best Riverside Camps", desc: "Wake up to the sound of the Ganga right outside your tent." },
  { icon: "🗺️", title: "Custom Trip Planning", desc: "We design your perfect itinerary based on your preferences." },
  { icon: "💰", title: "Affordable Packages", desc: "Budget-friendly to luxury — something for every traveler." },
  { icon: "🌸", title: "Women Friendly Trips", desc: "Safe, welcoming, and comfortable experiences for all." },
  { icon: "🏔️", title: "Expert Local Guides", desc: "Born and raised in Uttarakhand — true insiders of the Himalayas." },
];

const testimonials = [
  { name: "Priya S.", trip: "Rafting + Camping", text: "Best rafting experience of my life! The team was incredibly safe and professional. Tammy is an amazing host — made us feel at home.", stars: 5 },
  { name: "Arjun K.", trip: "Adventure Package", text: "Camping was amazing and the food was so good! The bonfire night was unforgettable. Will definitely come back!", stars: 5 },
  { name: "Meera R.", trip: "Char Dham Yatra", text: "Tammy is such a wonderful person. She made our Char Dham trip stress-free and spiritually fulfilling.", stars: 5 },
  { name: "Kabir T.", trip: "All-in-One Package", text: "The trip was worth every penny! Bungee, paragliding, rafting all in one — absolutely insane value!", stars: 5 },
];

const galleryImages = [
  { src: rafting, alt: "River Rafting in Rishikesh", span: "col-span-2" },
  { src: campfire, alt: "Bonfire Night Camping" },
  { src: riversideCamping, alt: "Riverside Camping" },
  { src: heroMountains, alt: "Uttarakhand Mountains", span: "col-span-2" },
  { src: gangaAarti, alt: "Ganga Aarti" },
  { src: gangotri, alt: "Gangotri Dham" },
  { src: kedarnath, alt: "Kedarnath Temple" },
  { src: badrinath, alt: "Badrinath Temple" },
];

const trustBadges = [
  "✔ Trusted by 10,000+ travelers",
  "✔ Safe & certified rafting team",
  "✔ Custom trips available",
  "✔ Budget to premium packages",
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${rafting})`,
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/80" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-saffron/40 bg-saffron/10 text-saffron text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-saffron animate-pulse" />
            Rishikesh, Uttarakhand • India
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-slide-up">
            Adventure Starts in
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-river-blue via-saffron to-forest-green">
              Rishikesh
            </span>
            with Akihi Tales
          </h1>

          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-body animate-fade-in">
            Camping, Rafting, Bungee, Paragliding & Himalayan Trips curated with love
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10 animate-fade-in">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-river-blue text-white font-semibold text-sm hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1"
            >
              Book Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/40 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/60 transition-all duration-300 hover:-translate-y-1"
            >
              View Packages
            </Link>
            <a
              href="https://wa.me/919999999999?text=Hi!%20I%20want%20to%20book%20an%20adventure%20with%20Akihi%20Tales."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white transition-all duration-300 hover:-translate-y-1"
              style={{ background: "#25D366" }}
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-3 animate-fade-in">
            {trustBadges.map((badge) => (
              <span key={badge} className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-medium backdrop-blur-sm">
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* ── POPULAR DEALS ── */}
      <section className="py-20 px-4 bg-navy-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-saffron text-sm font-semibold tracking-widest uppercase font-body">Hot Deals</span>
            <h2 className="section-title text-white mt-2">Popular Packages</h2>
            <p className="section-subtitle text-muted-foreground">
              Handpicked adventures designed for unforgettable memories
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deals.map((deal) => (
              <div
                key={deal.title}
                className={`relative glass-card p-7 card-hover bg-gradient-to-br ${deal.color}`}
              >
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-saffron/20 border border-saffron/30 text-saffron text-xs font-semibold">
                  {deal.tag}
                </span>
                <h3 className="font-display text-xl font-bold text-white mb-2">{deal.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{deal.description}</p>
                <div className="flex items-baseline gap-1 mb-5">
                  <span className="text-3xl font-bold text-saffron font-display">{deal.price}</span>
                  <span className="text-muted-foreground text-sm">{deal.per}</span>
                </div>
                <Link
                  to={deal.link}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-river-blue text-white text-sm font-semibold hover:bg-primary/90 transition-all duration-300 hover:-translate-y-0.5"
                >
                  View Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className="py-20 px-4 bg-background relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroMountains})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-saffron text-sm font-semibold tracking-widest uppercase">Why Us</span>
            <h2 className="section-title text-white mt-2">Why Choose Akihi Tales?</h2>
            <p className="section-subtitle">We don't just plan trips. We craft memories that last a lifetime.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="glass-card p-6 card-hover group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {reason.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="py-20 px-4 bg-navy-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-saffron text-sm font-semibold tracking-widest uppercase">Gallery</span>
            <h2 className="section-title text-white mt-2">Adventures Captured</h2>
            <p className="section-subtitle">From the Ganga rapids to the peaks of the Himalayas</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-2xl group cursor-pointer ${img.span || ""} ${i === 0 ? "row-span-2" : ""}`}
                style={{ aspectRatio: img.span ? "2/1" : "1/1" }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-medium">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-saffron text-sm font-semibold tracking-widest uppercase">Reviews</span>
            <h2 className="section-title text-white mt-2">What Travelers Say</h2>
            <p className="section-subtitle">Real experiences from real adventurers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="glass-card p-6 card-hover">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-saffron fill-saffron" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-river-blue text-xs mt-0.5">{t.trip}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 text-river-blue hover:text-saffron font-semibold text-sm transition-colors"
            >
              Read all reviews <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${heroMountains})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-forest-green/70" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            From rafting the Ganga to trekking the Himalayas — we've got you covered.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-saffron text-accent-foreground font-bold text-sm hover:bg-saffron/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-saffron/30"
            >
              Plan My Trip
            </Link>
            <Link
              to="/packages"
              className="px-8 py-4 rounded-full border-2 border-white/50 text-white font-bold text-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              Browse Packages
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
