import { Link } from "react-router-dom";
import { ArrowRight, Mountain, Heart, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroMountains from "@/assets/hero-mountains.webp";
import riversideCamping from "@/assets/riverside-camping.jpg";
import campfire from "@/assets/campfire.jpg";

const values = [
  { icon: "🛡️", title: "Safety First", desc: "We never compromise on safety. Certified guides, quality equipment, and thorough weather checks before every trip." },
  { icon: "🌿", title: "Eco-Responsible", desc: "Leave no trace policy. We clean our campsites, minimize plastic, and support local conservation efforts." },
  { icon: "❤️", title: "Curated with Love", desc: "Every trip is designed with genuine care and attention. We don't just run tours — we create experiences." },
  { icon: "🤝", title: "Community First", desc: "We employ local guides, support local vendors, and give back to the Rishikesh community." },
  { icon: "💡", title: "Always Innovating", desc: "From new routes to fresh experiences, we're always finding ways to make your adventure more remarkable." },
  { icon: "🌸", title: "Inclusive Travel", desc: "Women-friendly, senior-friendly, and budget-to-luxury options for every type of traveler." },
];

const team = [
  {
    name: "Tammy",
    role: "Founder & Host",
    desc: "The heart and soul of Akihi Tales. Tammy is a passionate traveler and host who believes every trip should feel personal, safe, and magical. Her warmth and attention to detail make every guest feel at home in the mountains.",
    emoji: "🏔️",
    color: "from-river-blue/30 to-forest-green/20",
  },
  {
    name: "Our Rafting Team",
    role: "Certified River Guides",
    desc: "Born on the banks of the Ganga, our rafting guides know every rapid by name. With international certifications and thousands of hours on the river, they're the safest hands you could be in.",
    emoji: "🚣",
    color: "from-forest-green/30 to-river-blue/20",
  },
  {
    name: "Local Experts",
    role: "Himalayan Guides & Camp Staff",
    desc: "Our camp staff and Himalayan guides are true insiders — locals who've grown up exploring these mountains. They know the hidden trails, the best viewpoints, and the most authentic experiences.",
    emoji: "🗺️",
    color: "from-saffron/20 to-river-blue/20",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${heroMountains})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="relative text-center px-4 max-w-4xl mx-auto pt-20">
          <span className="text-white/80 text-sm font-semibold tracking-widest uppercase font-body">Our Story</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mt-3 mb-5 drop-shadow-xl">
            About <span className="text-gradient">Akihi Tales</span>
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto drop-shadow-md">
            A travel agency born from the mountains, built on love for adventure, and powered by genuine hospitality.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-[#FFF9F5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">Who We Are</span>
              <h2 className="font-display text-4xl font-bold text-foreground mt-2 mb-6">Curating Adventures Since Day One</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground font-bold">Akihi Tales</strong> is a travel agency based in the adventure capital of India — <strong className="text-primary">Rishikesh, Uttarakhand</strong>. We were born from a simple belief: travel should be safe, fun, and deeply memorable.
                </p>
                <p>
                  We curate adventure trips, rafting expeditions, riverside camping stays, and Himalayan journeys across Uttarakhand. Whether you're a college student seeking a budget getaway, a couple celebrating an anniversary, or a family embarking on a sacred pilgrimage — we have something crafted just for you.
                </p>
                <p>
                  Our founder <strong className="text-foreground font-bold">Tammy</strong> and our team of local experts bring years of experience and authentic knowledge of the Himalayas to every trip. We don't just plan itineraries — we pour our hearts into every experience.
                </p>
                <p>
                  From the white-water rapids of the Ganga to the divine temples of Char Dham, from bungee jumping at 109m to stargazing by a bonfire — Akihi Tales is your trusted companion for every adventure.
                </p>
              </div>
              <div className="flex items-center gap-3 mt-8">
                <Link to="/packages" className="btn-primary !px-6 !py-3">
                  Explore Packages <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="btn-outline !px-6 !py-3">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden" style={{ height: "250px" }}>
                <img src={riversideCamping} alt="Riverside Camping" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden mt-8" style={{ height: "250px" }}>
                <img src={campfire} alt="Bonfire" className="w-full h-full object-cover" />
              </div>
              <div className="col-span-2 glass-card p-5 text-center">
                <div className="flex justify-center gap-8">
                  <div>
                    <p className="text-3xl font-bold text-primary font-display">10K+</p>
                    <p className="text-muted-foreground text-xs">Happy Travelers</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary font-display">5+</p>
                    <p className="text-muted-foreground text-xs">Years Active</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary font-display">4.9</p>
                    <p className="text-muted-foreground text-xs flex items-center gap-1">
                      <Star className="w-3 h-3 text-primary fill-primary" /> Rating
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">The People</span>
            <h2 className="section-title mt-2">Meet the Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className={`glass-card p-7 card-hover bg-gradient-to-br ${member.color}`}>
                <div className="text-5xl mb-4">{member.emoji}</div>
                <h3 className="font-display text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-[#FFF9F5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">What We Stand For</span>
            <h2 className="section-title mt-2">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="glass-card p-6 card-hover group">
                <span className="text-4xl block mb-3 group-hover:scale-110 transition-transform duration-300">{v.icon}</span>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-16 px-4 bg-background text-center">
        <div className="max-w-2xl mx-auto">
          <Heart className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="font-display text-3xl font-bold text-foreground mb-3">Follow Our Adventures</h2>
          <p className="text-muted-foreground mb-6">Join 50,000+ followers on Instagram for daily trip inspiration, reels, and travel stories from the Himalayas.</p>
          <a
            href="https://instagram.com/akihi_tales"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white transition-all duration-300 hover:-translate-y-1"
            style={{ background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)" }}
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @akihi_tales
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
