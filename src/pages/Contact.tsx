import { useState } from "react";
import { Phone, MapPin, Instagram, MessageSquare, User, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroMountains from "@/assets/hero-mountains.webp";

const packages = [
  "9km Rafting",
  "16km Rafting",
  "26km Rafting",
  "35km Rafting Expedition",
  "Riverside Camping",
  "Adventure Combo Package",
  "All-in-One Adventure (₹10,500)",
  "Camping + Rafting (₹3,000)",
  "Paragliding",
  "Bungee Jump 109m",
  "Zipline & Giant Swing",
  "Char Dham Yatra (Group)",
  "Char Dham Yatra (Family)",
  "Custom Trip",
  "Scooty Rental",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", pkg: "", message: "" });
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
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url(${heroMountains})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/85 to-navy" />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="text-saffron text-sm font-semibold tracking-widest uppercase font-body">Let's Connect</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mt-3 mb-5">
            Book Your Adventure /
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-river-blue to-saffron">
              Contact Us
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Reach out via WhatsApp, call, or fill the form below. We reply within 24 hours.
          </p>
        </div>
      </section>

      {/* Quick Contact Buttons */}
      <section className="py-10 px-4 bg-navy-light">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href="https://wa.me/919999999999?text=Hi%20Akihi%20Tales!%20I%20want%20to%20book%20a%20trip."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 glass-card p-5 card-hover group"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                style={{ background: "#25D366" }}>
                <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">WhatsApp Us</p>
                <p className="text-muted-foreground text-xs">+91 99999 99999</p>
              </div>
            </a>

            <a
              href="tel:+919999999999"
              className="flex items-center gap-4 glass-card p-5 card-hover group"
            >
              <div className="w-12 h-12 rounded-full bg-river-blue flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Call Us</p>
                <p className="text-muted-foreground text-xs">+91 99999 99999</p>
              </div>
            </a>

            <a
              href="https://instagram.com/akihi_tales"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 glass-card p-5 card-hover group"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                style={{ background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)" }}>
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Instagram</p>
                <p className="text-muted-foreground text-xs">@akihi_tales</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Form */}
            <div>
              <h2 className="font-display text-3xl font-bold text-white mb-3">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">Tell us what you're looking for and we'll get back to you within 24 hours.</p>

              {submitted ? (
                <div className="glass-card p-10 text-center">
                  <span className="text-5xl block mb-4">🏔️</span>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">Message Received!</h3>
                  <p className="text-muted-foreground">
                    Thanks {form.name || ""}! We'll reach out on <strong className="text-white">+{form.phone}</strong> within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-white/80 text-sm font-medium flex items-center gap-2 mb-2">
                      <User className="w-4 h-4 text-saffron" /> Full Name
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-white placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
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
                      className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-white placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-white/80 text-sm font-medium flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-saffron" /> Package / Activity
                    </label>
                    <select
                      name="pkg"
                      value={form.pkg}
                      onChange={handleChange}
                      required
                      className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                    >
                      <option value="">Select a package...</option>
                      {packages.map((p) => (
                        <option key={p} value={p} className="bg-card">{p}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-white/80 text-sm font-medium flex items-center gap-2 mb-2">
                      <MessageSquare className="w-4 h-4 text-saffron" /> Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Your dates, group size, special requirements..."
                      rows={4}
                      className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-white placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-full bg-river-blue text-white font-bold text-sm hover:bg-primary/90 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
                  >
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Info + Map */}
            <div className="space-y-6">
              <div className="glass-card p-6">
                <h3 className="font-display text-xl font-bold text-white mb-4">Find Us in Rishikesh</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-saffron flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white text-sm font-medium">Rishikesh, Uttarakhand, India</p>
                      <p className="text-muted-foreground text-xs mt-0.5">We travel all across Uttarakhand</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-saffron flex-shrink-0" />
                    <a href="tel:+919999999999" className="text-white text-sm hover:text-saffron transition-colors">+91 99999 99999</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Instagram className="w-5 h-5 text-saffron flex-shrink-0" />
                    <a href="https://instagram.com/akihi_tales" target="_blank" rel="noopener noreferrer" className="text-white text-sm hover:text-saffron transition-colors">instagram.com/akihi_tales</a>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-2xl overflow-hidden border border-border" style={{ height: "300px" }}>
                <iframe
                  title="Rishikesh Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27831.52977025386!2d78.27369999999999!3d30.085597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390928f43e77e8ef%3A0x6e040b91cf2869a6!2sRishikesh%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="glass-card p-5 text-center">
                <p className="text-muted-foreground text-sm mb-2">Prefer to chat instantly?</p>
                <a
                  href="https://wa.me/919999999999?text=Hi%20Akihi%20Tales!%20I%20want%20to%20book%20a%20trip."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: "#25D366" }}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Open WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
