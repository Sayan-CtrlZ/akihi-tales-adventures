import { Link } from "react-router-dom";
import { Instagram, Phone, MapPin, Mail, ChevronRight } from "lucide-react";
import { siteConfig } from "@/site-config";
import logo from "@/assets/logo.jpg";

const quickLinks = [
  { href: "/packages", label: "All Packages" },
  { href: "/rafting", label: "River Rafting" },
  { href: "/camping", label: "Camping & Adventure" },
  { href: "/char-dham", label: "Char Dham Yatra" },
  { href: "/custom-trips", label: "Custom Trips" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact / Book Now" },
];

export default function Footer() {
  return (
    <footer className="bg-[#FFFDFB] border-t border-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg border-2 border-primary/20 bg-white">
                <img src={logo} alt="Akihi Tales" className="w-full h-full object-cover" />
              </div>
              <span className="font-display text-2xl font-bold text-foreground">
                Akihi <span className="text-primary">Tales</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Rishikesh's most trusted adventure travel agency. We curate unforgettable experiences — from white-water rafting to Himalayan pilgrimages.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/akihi_tales"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp.number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#25D366] flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
              >
                <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a
                href={`tel:${siteConfig.whatsapp.number}`}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-river-blue flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
              >
                <Phone className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-white font-semibold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="flex items-center gap-2 text-muted-foreground hover:text-saffron text-sm transition-colors duration-200 group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-white font-semibold text-lg mb-5">Our Services</h4>
            <ul className="space-y-2">
              {[
                "River Rafting 9–35km",
                "Riverside Camping",
                "Bungee Jumping 109m",
                "Paragliding",
                "Zipline & Giant Swing",
                "Char Dham Yatra",
                "Custom Himalayan Trips",
                "Scooty Rental",
              ].map((s) => (
                <li key={s} className="text-muted-foreground text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-saffron flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-white font-semibold text-lg mb-5">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-saffron mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">Rishikesh, Uttarakhand</p>
                  <p className="text-muted-foreground text-xs mt-0.5">India — Travelling all across Uttarakhand</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-saffron flex-shrink-0" />
                <a href={`tel:${siteConfig.whatsapp.number}`} className="text-white text-sm hover:text-saffron transition-colors">
                  +{siteConfig.whatsapp.number.replace(/^91/, '91 ')}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-saffron flex-shrink-0" />
                <a href="mailto:hello@akihitales.com" className="text-white text-sm hover:text-saffron transition-colors">
                  hello@akihitales.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-saffron flex-shrink-0" />
                <a
                  href="https://instagram.com/akihi_tales"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-sm hover:text-saffron transition-colors"
                >
                  @akihi_tales
                </a>
              </div>
            </div>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-saffron text-accent-foreground text-sm font-semibold hover:bg-saffron/90 transition-all duration-300 hover:shadow-lg hover:shadow-saffron/30 hover:-translate-y-0.5"
            >
              Book Your Adventure
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Akihi Tales. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Made with ❤️ for Adventure Seekers • Rishikesh, Uttarakhand
          </p>
        </div>
      </div>
    </footer>
  );
}
