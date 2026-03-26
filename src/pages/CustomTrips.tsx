import { useState } from "react";
import { Link } from "react-router-dom";
import { Send, MapPin, Calendar, Users, User, Phone, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroMountains from "@/assets/hero-mountains.webp";

const destinations = [
  "Rishikesh Rafting & Camping",
  "Kedarnath Trek",
  "Badrinath Yatra",
  "Gangotri & Yamunotri",
  "Full Char Dham Yatra",
  "Valley of Flowers",
  "Chopta – Tungnath",
  "Auli Skiing",
  "Har Ki Doon Trek",
  "Custom / Other",
];

const features = [
  { icon: "🗓️", title: "Tell us your dates", desc: "We plan around your schedule" },
  { icon: "👥", title: "Group size", desc: "Solo, couple, group — we adapt" },
  { icon: "🏔️", title: "Pick your destination", desc: "Uttarakhand and beyond" },
  { icon: "✨", title: "We plan everything", desc: "Transport, stay, activities — all done" },
];

export default function CustomTrips() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    destination: "",
    startDate: "",
    endDate: "",
    people: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed opacity-30" style={{ backgroundImage: `url(${heroMountains})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy" />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="text-saffron text-sm font-semibold tracking-widest uppercase font-body">Personalized For You</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mt-3 mb-5">
            Plan Your Dream
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-river-blue to-saffron">
              Custom Trip
            </span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Tell us your dates, number of people, and destination — and we'll plan everything for you.
          </p>
        </div>
      </section>

      {/* Feature pills */}
      <section className="py-12 px-4 bg-navy-light">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((f) => (
              <div key={f.title} className="glass-card p-5 text-center card-hover">
                <span className="text-3xl block mb-2">{f.icon}</span>
                <h3 className="text-white font-semibold text-sm">{f.title}</h3>
                <p className="text-muted-foreground text-xs mt-1">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-white mb-3">Build Your Itinerary</h2>
            <p className="text-muted-foreground">Fill in the form and our team will reach out within 24 hours.</p>
          </div>

          {submitted ? (
            <div className="glass-card p-10 text-center">
              <span className="text-6xl block mb-4">🎉</span>
              <h3 className="font-display text-2xl font-bold text-white mb-3">Request Received!</h3>
              <p className="text-muted-foreground mb-6">
                Thank you, {form.name || "friend"}! We'll WhatsApp you within 24 hours with a personalised plan.
              </p>
              <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-river-blue text-white font-semibold text-sm hover:bg-primary/90 transition-all duration-300">
                Back to Home
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-white/80 text-sm font-medium flex items-center gap-2 mb-2">
                    <User className="w-4 h-4 text-saffron" /> Your Name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Arjun Sharma"
                    className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-white placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-all"
                  />
                </div>
                <div>
                  <label className="text-white/80 text-sm font-medium flex items-center gap-2 mb-2">
                    <Phone className="w-4 h-4 text-saffron" /> Phone / WhatsApp
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765 43210"
                    className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-white placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-white/80 text-sm font-medium flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-saffron" /> Destination
                </label>
                <select
                  name="destination"
                  value={form.destination}
                  onChange={handleChange}
                  required
                  className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all appearance-none"
                >
                  <option value="" className="text-muted-foreground">Select destination...</option>
                  {destinations.map((d) => (
                    <option key={d} value={d} className="bg-card">{d}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-white/80 text-sm font-medium flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-saffron" /> Start Date
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={form.startDate}
                    onChange={handleChange}
                    required
                    className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all [color-scheme:dark]"
                  />
                </div>
                <div>
                  <label className="text-white/80 text-sm font-medium flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-saffron" /> End Date
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    value={form.endDate}
                    onChange={handleChange}
                    className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all [color-scheme:dark]"
                  />
                </div>
              </div>

              <div>
                <label className="text-white/80 text-sm font-medium flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-saffron" /> Number of People
                </label>
                <input
                  type="number"
                  name="people"
                  value={form.people}
                  onChange={handleChange}
                  required
                  min="1"
                  placeholder="e.g. 4"
                  className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-white placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                />
              </div>

              <div>
                <label className="text-white/80 text-sm font-medium flex items-center gap-2 mb-2">
                  <MessageSquare className="w-4 h-4 text-saffron" /> Tell us more
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Budget, special requirements, preferred activities, accommodation type..."
                  rows={4}
                  className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-white placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-full bg-river-blue text-white font-bold text-sm hover:bg-primary/90 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
              >
                <Send className="w-4 h-4" /> Send My Trip Request
              </button>
              <p className="text-center text-muted-foreground text-xs">
                Or WhatsApp us directly at +91 99999 99999
              </p>
            </form>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
