import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import campfire from "@/assets/campfire.jpg";
import riversideCamping from "@/assets/riverside-camping.jpg";
import heroMountains from "@/assets/hero-mountains.webp";

const campingActivities = [
  {
    icon: "⛺",
    title: "Riverside Camping",
    desc: "Sleep on the banks of the Ganga with the sound of rushing water lulling you to sleep. Premium tents, clean facilities.",
    price: "From ₹1,200/night",
  },
  {
    icon: "🔥",
    title: "Bonfire Night",
    desc: "Gather around a roaring bonfire under a billion stars. Music, stories, marshmallows, and lifelong memories.",
    price: "Included in camping",
  },
  {
    icon: "🎶",
    title: "DJ Night",
    desc: "Dance the night away on the beach with our weekend DJ nights. Music, lights, and pure vibes by the river.",
    price: "₹500/person add-on",
  },
  {
    icon: "🏖️",
    title: "Beach Walk",
    desc: "Explore the white sand beaches of the Ganga. Sunrise walks, sunset views, and the serenity of the Himalayas.",
    price: "Complimentary",
  },
];

const adventureSports = [
  {
    icon: "🪂",
    title: "Paragliding",
    desc: "Soar like an eagle above Rishikesh with our experienced tandem pilots. Views of the Ganga and Himalayas from 1500ft.",
    price: "₹2,500/person",
    duration: "30-45 min",
  },
  {
    icon: "🦘",
    title: "Bungee Jump 109m",
    desc: "India's highest bungee! Take the leap from 109m at Jumping Heights, Rishikesh. Pure terror, pure bliss.",
    price: "₹3,550/jump",
    duration: "5 seconds of courage!",
  },
  {
    icon: "🎢",
    title: "Zipline",
    desc: "Zip through the forest canopy at speeds up to 130km/h. The longest zipline in the Himalayas.",
    price: "₹1,500/person",
    duration: "1–2 min",
  },
  {
    icon: "🌀",
    title: "Giant Swing",
    desc: "The world's highest giant swing at 83m. Swing out over a 300ft gorge — not for the faint-hearted!",
    price: "₹2,550/person",
    duration: "60 seconds",
  },
];

const comboPkg = [
  { title: "Adventure Lite", items: ["16km Rafting", "1 Night Camping", "Bonfire"], price: "₹2,800" },
  { title: "Adventure Max", items: ["16km Rafting", "Paragliding", "1 Night Camping", "Bonfire + DJ Night"], price: "₹5,500" },
  { title: "Ultimate Rush", items: ["16km Rafting", "Bungee 109m", "Paragliding", "Zipline", "2 Nights Camping"], price: "₹10,500" },
];

export default function Camping() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${campfire})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/90" />
        <div className="relative text-center px-4 max-w-4xl mx-auto pt-20">
          <span className="text-saffron text-sm font-semibold tracking-widest uppercase font-body">Camping & Adventure</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mt-3 mb-5">
            Sleep Under the Stars,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-forest-green to-saffron">
              Dare the Unknown
            </span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Riverside camps, bonfire nights, paragliding, bungee, and everything in between.
          </p>
        </div>
      </section>

      {/* Camping Section */}
      <section className="py-20 px-4 bg-navy-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-saffron text-sm font-semibold tracking-widest uppercase">Camp Life</span>
            <h2 className="section-title text-white mt-2">Camping Experiences</h2>
            <p className="section-subtitle">The most beautiful campsite on the banks of the holy Ganga.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="relative rounded-3xl overflow-hidden" style={{ minHeight: "350px" }}>
              <img src={riversideCamping} alt="Riverside Camping" className="w-full h-full object-cover" style={{ minHeight: "350px" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="font-display text-2xl font-bold text-white">Our Camp</h3>
                <p className="text-white/80 text-sm mt-1">Right on the Ganga banks, Rishikesh</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {campingActivities.map((act) => (
                <div key={act.title} className="glass-card p-5 card-hover">
                  <span className="text-3xl block mb-3">{act.icon}</span>
                  <h3 className="font-display text-base font-bold text-white mb-1">{act.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-3">{act.desc}</p>
                  <span className="text-saffron text-xs font-semibold">{act.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Adventure Sports */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-saffron text-sm font-semibold tracking-widest uppercase">Adrenaline Zone</span>
            <h2 className="section-title text-white mt-2">Adventure Sports</h2>
            <p className="section-subtitle">Push your limits with Rishikesh's most thrilling adventure activities.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {adventureSports.map((sport) => (
              <div key={sport.title} className="glass-card p-7 card-hover flex items-start gap-5">
                <span className="text-5xl flex-shrink-0">{sport.icon}</span>
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-1">{sport.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{sport.desc}</p>
                  <div className="flex items-center gap-4">
                    <span className="text-saffron font-bold text-lg font-display">{sport.price}</span>
                    <span className="text-muted-foreground text-xs bg-muted px-2 py-1 rounded-full">{sport.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combo Packages */}
      <section className="py-16 px-4 bg-navy-light">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-saffron text-sm font-semibold tracking-widest uppercase">Save More</span>
            <h2 className="section-title text-white mt-2">Combo Packages</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {comboPkg.map((pkg, i) => (
              <div key={pkg.title} className={`glass-card p-7 card-hover ${i === 2 ? "border-saffron/30 bg-saffron/5" : ""}`}>
                {i === 2 && <span className="block text-center mb-3 text-saffron text-xs font-bold tracking-widest uppercase">Best Value</span>}
                <h3 className="font-display text-xl font-bold text-white mb-4">{pkg.title}</h3>
                <ul className="space-y-2 mb-6">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-white/80 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-saffron" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-saffron font-display">{pkg.price}</span>
                  <Link to="/contact" className="px-4 py-2 rounded-full bg-river-blue text-white text-xs font-semibold hover:bg-primary/90 transition-all duration-300">
                    Book
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
