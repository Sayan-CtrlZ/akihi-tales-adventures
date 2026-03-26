import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import rafting from "@/assets/rafting.jpeg";
import campfire from "@/assets/campfire.jpg";
import riversideCamping from "@/assets/riverside-camping.jpg";
import heroMountains from "@/assets/hero-mountains.webp";
import gangotri from "@/assets/gangotri.webp";
import badrinath from "@/assets/badrinath.jpg";
import kedarnath from "@/assets/kedarnath.jpg";

const categories = [
  {
    title: "River Rafting",
    desc: "9km to 35km expeditions on the mighty Ganga. Suitable for beginners to thrill-seekers.",
    price: "From ₹800",
    tag: "Most Popular",
    image: rafting,
    href: "/rafting",
    color: "from-river-blue/40 to-navy/80",
  },
  {
    title: "Camping Packages",
    desc: "Riverside camps with bonfires, DJ nights, beach walks, and stargazing under the Himalayan sky.",
    price: "From ₹1,200",
    tag: "Bestseller",
    image: riversideCamping,
    href: "/camping",
    color: "from-forest-green/40 to-navy/80",
  },
  {
    title: "Adventure Combos",
    desc: "The ultimate rush — Camping + Paragliding + Rafting + 109m Bungee all in one package.",
    price: "From ₹5,000",
    tag: "Premium",
    image: campfire,
    href: "/camping",
    color: "from-saffron/30 to-navy/80",
  },
  {
    title: "Group Trips",
    desc: "Special group rates for college groups, corporate teams, and large families. Min 10 people.",
    price: "From ₹2,500",
    tag: "Best Value",
    image: heroMountains,
    href: "/contact",
    color: "from-purple-800/40 to-navy/80",
  },
  {
    title: "Couple Trips",
    desc: "Romantic riverside camping, sunset walks, and private adventure experiences for two.",
    price: "From ₹4,000",
    tag: "Romantic",
    image: riversideCamping,
    href: "/contact",
    color: "from-pink-800/30 to-navy/80",
  },
  {
    title: "Char Dham Yatra",
    desc: "Sacred pilgrimages to Kedarnath, Badrinath, Gangotri & Yamunotri — guided, safe and soulful.",
    price: "From ₹12,000",
    tag: "Spiritual",
    image: kedarnath,
    href: "/char-dham",
    color: "from-amber-800/40 to-navy/80",
  },
  {
    title: "Custom Trips",
    desc: "Tell us your dream trip and we'll plan every detail — dates, destinations, budget, activities.",
    price: "Custom pricing",
    tag: "Flexible",
    image: gangotri,
    href: "/custom-trips",
    color: "from-teal-800/40 to-navy/80",
  },
];

export default function Packages() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${heroMountains})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy" />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="text-saffron text-sm font-semibold tracking-widest uppercase font-body">All Packages</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mt-3 mb-5">
            Adventure for Every Traveler
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From solo backpackers to family pilgrimages — Akihi Tales has a perfectly curated package for you.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 px-4 bg-navy-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.title} className="relative rounded-2xl overflow-hidden card-hover group cursor-pointer" style={{ minHeight: "360px" }}>
                <img src={cat.image} alt={cat.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className={`absolute inset-0 bg-gradient-to-t ${cat.color}`} />
                <div className="relative h-full p-7 flex flex-col justify-end" style={{ minHeight: "360px" }}>
                  <span className="absolute top-5 right-5 px-3 py-1 rounded-full bg-saffron/20 border border-saffron/40 text-saffron text-xs font-semibold backdrop-blur-sm">
                    {cat.tag}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">{cat.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-saffron font-bold text-lg font-display">{cat.price}</span>
                    <Link
                      to={cat.href}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/20 border border-white/30 text-white text-xs font-semibold hover:bg-river-blue hover:border-river-blue transition-all duration-300"
                    >
                      Explore <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-background text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-muted-foreground mb-8">Let us build a custom package just for you.</p>
          <Link to="/custom-trips" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-saffron text-accent-foreground font-bold text-sm hover:bg-saffron/90 transition-all duration-300 hover:-translate-y-1">
            Plan a Custom Trip <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
