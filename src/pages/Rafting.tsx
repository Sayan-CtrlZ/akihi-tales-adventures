import { Link } from "react-router-dom";
import { ArrowRight, Shield, Clock, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import rafting from "@/assets/rafting.jpeg";
import heroMountains from "@/assets/hero-mountains.webp";

const packages = [
  {
    km: "9 km",
    title: "Brahmpuri to Rishikesh",
    duration: "1–2 Hours",
    difficulty: "Easy",
    difficultyColor: "text-green-400",
    price: "₹800",
    rapids: "Grade II",
    desc: "Perfect for beginners and families. Gentle rapids, beautiful scenery, and a great introduction to white-water rafting.",
    highlights: ["Beginner friendly", "Beautiful ghats", "Perfect for groups"],
  },
  {
    km: "16 km",
    title: "Shivpuri to Rishikesh",
    duration: "2–3 Hours",
    difficulty: "Moderate",
    difficultyColor: "text-yellow-400",
    price: "₹1,200",
    rapids: "Grade III",
    desc: "The most popular stretch on the Ganga. Exciting rapids with stunning Himalayan scenery and stops at secret beaches.",
    highlights: ["Most popular route", "Cliff jumping", "Beach lunch stop"],
    badge: "Most Popular",
  },
  {
    km: "26 km",
    title: "Marine Drive to Rishikesh",
    duration: "4–5 Hours",
    difficulty: "Moderate–High",
    difficultyColor: "text-orange-400",
    price: "₹1,800",
    rapids: "Grade III–IV",
    desc: "A thrilling full-day experience through dramatic canyons, powerful rapids like The Wall and Golf Course.",
    highlights: ["Full day adventure", "Powerful rapids", "Canyon landscapes"],
  },
  {
    km: "35 km",
    title: "Kaudiyala Expedition",
    duration: "6–8 Hours",
    difficulty: "Advanced",
    difficultyColor: "text-red-400",
    price: "₹2,500",
    rapids: "Grade IV–V",
    desc: "The ultimate Rishikesh rafting expedition. For experienced rafters only — massive rapids, remote wilderness, pure adrenaline.",
    highlights: ["Extreme rapids", "Remote wilderness", "Expert guides only"],
    badge: "Extreme",
  },
];

const safety = [
  { icon: <Shield className="w-6 h-6" />, title: "Certified Guides", desc: "All our rafting guides hold international certifications and have logged 1000+ river hours." },
  { icon: <Users className="w-6 h-6" />, title: "Safety Equipment", desc: "ISI-approved life jackets, helmets, and paddles provided for every rafter." },
  { icon: <Clock className="w-6 h-6" />, title: "Weather Monitoring", desc: "We check river conditions and weather forecasts before every trip. Safety first, always." },
];

export default function Rafting() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${rafting})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/90" />
        <div className="relative text-center px-4 max-w-4xl mx-auto pt-20">
          <span className="text-saffron text-sm font-semibold tracking-widest uppercase font-body">White Water Adventure</span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-3 mb-5">
            River Rafting in
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-river-blue to-saffron">
              Rishikesh
            </span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Conquer the mighty Ganga through Grade II–V rapids. Beginner packages to expert expeditions — we have it all.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-river-blue text-white font-semibold text-sm hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30">
            Book Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 px-4 bg-navy-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-saffron text-sm font-semibold tracking-widest uppercase">Rafting Routes</span>
            <h2 className="section-title text-white mt-2">Choose Your Route</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.km} className="glass-card p-7 card-hover relative">
                {pkg.badge && (
                  <span className="absolute top-5 right-5 px-3 py-1 rounded-full bg-saffron/20 border border-saffron/40 text-saffron text-xs font-semibold">
                    {pkg.badge}
                  </span>
                )}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-river-blue/30 to-forest-green/20 flex flex-col items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg leading-none">{pkg.km}</span>
                    <span className="text-muted-foreground text-xs">route</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">{pkg.title}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-muted-foreground text-xs flex items-center gap-1"><Clock className="w-3 h-3" />{pkg.duration}</span>
                      <span className={`text-xs font-semibold ${pkg.difficultyColor}`}>● {pkg.difficulty}</span>
                      <span className="text-muted-foreground text-xs">{pkg.rapids}</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{pkg.desc}</p>
                <ul className="space-y-1.5 mb-6">
                  {pkg.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-white/80 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-saffron flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-saffron font-display">{pkg.price}</span>
                    <span className="text-muted-foreground text-sm ml-1">/ person</span>
                  </div>
                  <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-river-blue text-white text-sm font-semibold hover:bg-primary/90 transition-all duration-300 hover:-translate-y-0.5">
                    Book <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-saffron text-sm font-semibold tracking-widest uppercase">Your Safety Matters</span>
            <h2 className="section-title text-white mt-2">Safety First, Always</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {safety.map((s) => (
              <div key={s.title} className="glass-card p-6 card-hover text-center">
                <div className="w-14 h-14 rounded-2xl bg-river-blue/20 border border-river-blue/30 flex items-center justify-center mx-auto mb-4 text-river-blue">
                  {s.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with mountain bg */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${heroMountains})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-river-blue/80 to-forest-green/80" />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Ready to Conquer the Ganga?</h2>
          <p className="text-white/80 mb-8">Book your rafting adventure today. Groups, couples, solo travelers — all welcome!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="px-7 py-3.5 rounded-full bg-white text-navy font-bold text-sm hover:bg-white/90 transition-all duration-300 hover:-translate-y-1">
              Book Now
            </Link>
            <a href="https://wa.me/919999999999?text=I%20want%20to%20book%20rafting%20in%20Rishikesh" target="_blank" rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full border-2 border-white text-white font-bold text-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
