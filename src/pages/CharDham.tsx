import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import kedarnath from "@/assets/kedarnath.jpg";
import badrinath from "@/assets/badrinath.jpg";
import gangotri from "@/assets/gangotri.webp";
import gangotriTemple from "@/assets/gangotri-temple.webp";

const temples = [
  {
    name: "Kedarnath",
    deity: "Lord Shiva",
    altitude: "3,583m",
    bestTime: "May – June, Sep – Oct",
    image: kedarnath,
    desc: "One of the twelve Jyotirlingas, Kedarnath sits amidst breathtaking Himalayan scenery. The trek through Gaurikund is a soul-stirring journey.",
    highlights: ["12 Jyotirlingas shrine", "Scenic helicopter option", "Mandakini river", "Ancient stone temple"],
    duration: "2–3 days",
  },
  {
    name: "Badrinath",
    deity: "Lord Vishnu",
    altitude: "3,300m",
    bestTime: "May – June, Sep – Nov",
    image: badrinath,
    desc: "Set between the Nar and Narayan mountain ranges, Badrinath is one of the Char Dhams and a vital Hindu pilgrimage site in the Himalayas.",
    highlights: ["One of Char Dhams", "Tapt Kund hot springs", "Neelkanth Peak views", "Mana Village nearby"],
    duration: "1–2 days",
  },
  {
    name: "Gangotri",
    deity: "Goddess Ganga",
    altitude: "3,100m",
    bestTime: "May – June, Sep – Oct",
    image: gangotri,
    desc: "The origin of the sacred Ganges. Gangotri temple stands at the source of India's holiest river, surrounded by glaciers and snow-capped peaks.",
    highlights: ["Origin of River Ganga", "Gaumukh Glacier trek", "Surya Kund", "Bhagirathi valley"],
    duration: "1–2 days",
  },
  {
    name: "Yamunotri",
    deity: "Goddess Yamuna",
    altitude: "3,293m",
    bestTime: "May – June, Sep – Oct",
    image: gangotriTemple,
    desc: "The source of the Yamuna river, Yamunotri is the westernmost shrine of the Char Dham circuit. A beautiful 6km trek from Janki Chatti.",
    highlights: ["Source of Yamuna river", "Surya Kund hot spring", "Divya Shila rock", "Scenic trekking route"],
    duration: "1–2 days",
  },
];

const tourTypes = [
  {
    id: "group",
    label: "Group Tour",
    icon: "👥",
    title: "Char Dham Group Yatra",
    desc: "Join a scheduled group tour with fellow pilgrims. Cost-effective, well-organized, and spiritually enriching.",
    features: ["Fixed departure dates", "Min 10 people", "Group discounts", "All-inclusive package"],
    price: "From ₹12,000 / person",
  },
  {
    id: "family",
    label: "Family Tour",
    icon: "👨‍👩‍👧",
    title: "Family Pilgrimage Package",
    desc: "Specially designed for families with elderly members and children. Comfortable travel with extra care.",
    features: ["Flexible pace", "Senior-friendly", "Helicopter options", "Premium stays"],
    price: "From ₹18,000 / person",
  },
  {
    id: "custom",
    label: "Custom Plan",
    icon: "✨",
    title: "Personalized Char Dham",
    desc: "Your journey, your way. We design a completely customized itinerary around your dates and preferences.",
    features: ["Your dates", "Private vehicle", "Hotel of your choice", "Dedicated guide"],
    price: "Custom pricing",
  },
];

export default function CharDham() {
  const [activeTab, setActiveTab] = useState("group");
  const active = tourTypes.find((t) => t.id === activeTab)!;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${kedarnath})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/95" />
        <div className="relative text-center px-4 max-w-4xl mx-auto pt-20">
          <span className="text-saffron text-sm font-semibold tracking-widest uppercase font-body">Sacred Journey</span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-3 mb-5">
            Char Dham
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-saffron to-amber-300">
              Yatra Packages
            </span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Embark on the most sacred pilgrimage in Hinduism. Visit all four divine shrines of Uttarakhand with Akihi Tales.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-saffron text-accent-foreground font-bold text-sm hover:bg-saffron/90 transition-all duration-300 hover:-translate-y-1">
            Plan My Yatra <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Temples Grid */}
      <section className="py-20 px-4 bg-navy-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-saffron text-sm font-semibold tracking-widest uppercase">The Four Sacred Shrines</span>
            <h2 className="section-title text-white mt-2">The Char Dhams</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {temples.map((temple) => (
              <div key={temple.name} className="glass-card overflow-hidden card-hover">
                <div className="relative h-56 overflow-hidden">
                  <img src={temple.image} alt={temple.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-white">{temple.name}</h3>
                      <p className="text-saffron text-sm font-medium">{temple.deity}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white/80 text-xs">{temple.altitude} ASL</p>
                      <p className="text-white/60 text-xs">{temple.duration}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{temple.desc}</p>
                  <div className="mb-4">
                    <p className="text-white/60 text-xs mb-2">Best Time: <span className="text-saffron">{temple.bestTime}</span></p>
                    <div className="grid grid-cols-2 gap-1.5">
                      {temple.highlights.map((h) => (
                        <span key={h} className="text-xs text-white/70 flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-saffron" />{h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Types */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-saffron text-sm font-semibold tracking-widest uppercase">Tour Options</span>
            <h2 className="section-title text-white mt-2">Choose Your Style</h2>
          </div>
          {/* Tabs */}
          <div className="flex justify-center gap-3 mb-10">
            {tourTypes.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === t.id
                    ? "bg-saffron text-accent-foreground shadow-lg shadow-saffron/30"
                    : "glass text-white/70 hover:text-white"
                }`}
              >
                {t.icon} {t.label}
              </button>
            ))}
          </div>
          {/* Content */}
          <div className="glass-card p-8 max-w-2xl mx-auto text-center">
            <h3 className="font-display text-2xl font-bold text-white mb-3">{active.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">{active.desc}</p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {active.features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-white/80 text-sm">
                  <span className="w-5 h-5 rounded-full bg-saffron/20 border border-saffron/40 flex items-center justify-center text-saffron text-xs">✓</span>
                  {f}
                </div>
              ))}
            </div>
            <p className="text-saffron font-bold text-xl font-display mb-6">{active.price}</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-saffron text-accent-foreground font-bold text-sm hover:bg-saffron/90 transition-all duration-300">
              Book This Package <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
