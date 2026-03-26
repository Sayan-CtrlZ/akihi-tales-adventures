import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Packages" },
  { href: "/rafting", label: "Rafting" },
  { href: "/camping", label: "Camping" },
  { href: "/custom-trips", label: "Custom Trips" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        location.pathname === "/"
          ? scrolled
            ? "backdrop-blur-xl bg-background/80 border-b border-primary/10 shadow-md"
            : "bg-transparent"
          : "backdrop-blur-xl bg-background/80 border-b border-primary/10 shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden shadow-lg border-2 border-primary/20 bg-white transition-transform group-hover:scale-105">
              <img src={logo} alt="Akihi Tales" className="w-full h-full object-cover" />
            </div>
            <span className="font-display text-xl lg:text-2xl font-bold text-foreground tracking-wide">
              Akihi <span className="text-primary">Tales</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.slice(0, -1).map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2.5 text-sm font-bold rounded-full transition-all duration-300 ${
                  location.pathname === link.href
                    ? (location.pathname === "/" ? (scrolled ? "bg-primary text-white shadow-md" : "bg-white text-primary shadow-lg") : "bg-primary text-white shadow-md")
                    : (location.pathname === "/" ? scrolled : true) 
                      ? "text-foreground hover:text-primary hover:bg-primary/5" 
                      : "text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-3 px-5 py-2.5 rounded-full bg-river-blue text-white text-sm font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              (location.pathname === "/" ? scrolled : true) ? "text-foreground hover:bg-black/5" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-16 transition-all duration-300 ease-in-out z-40 ${
          menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="backdrop-blur-2xl bg-background/95 border-b border-primary/10 px-4 py-8 space-y-3 shadow-2xl">
          {navLinks.map((link, idx) => (
            <Link
              key={link.href}
              to={link.href}
              className={`block px-5 py-4 rounded-3xl text-base font-bold transition-all duration-300 active:scale-95 ${
                location.pathname === link.href
                  ? "bg-primary text-white shadow-lg"
                  : "text-foreground/80 hover:text-primary hover:bg-primary/5"
              }`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block w-full text-center px-5 py-4 rounded-3xl bg-river-blue text-white text-base font-bold shadow-lg active:scale-95 mt-4"
          >
            Book Your Adventure
          </Link>
        </div>
      </div>
    </nav>
  );
}
