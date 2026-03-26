import { Link } from "react-router-dom";
import { ArrowLeft, Star, Clock, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const BackgroundDecor = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-[#FFF9F5]">
    {/* Animated Blobs */}
    <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#FF8A3D]/10 rounded-full blur-[120px] animate-pulse" />
    <div className="absolute top-[30%] left-[-10%] w-[50%] h-[50%] bg-[#FF6FAE]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
    <div className="absolute bottom-[-10%] right-[20%] w-[40%] h-[40%] bg-[#FFD76A]/15 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '4s' }} />
    
    {/* SVG Mesh / Web Pattern */}
    <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10L90 90M90 10L10 90' stroke='%232F2F2F' stroke-width='0.5' fill='none'/%3E%3Ccircle cx='10' cy='10' r='1' fill='%232F2F2F'/%3E%3Ccircle cx='90' cy='90' r='1' fill='%232F2F2F'/%3E%3Ccircle cx='90' cy='10' r='1' fill='%232F2F2F'/%3E%3Ccircle cx='10' cy='90' r='1' fill='%232F2F2F'/%3E%3Ccircle cx='50' cy='50' r='1' fill='%232F2F2F'/%3E%3C/svg%3E")`, backgroundSize: '150px 150px' }} />
  </div>
);

const MockupCard = ({ id }: { id: number }) => (
  <div className="bg-white/70 backdrop-blur-md rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.1)] transition-all duration-500 group border border-white/50 hover:border-primary/30">
    {/* Mockup Image Area */}
    <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
      <div className="text-gray-400 font-display text-sm font-semibold uppercase tracking-widest opacity-50">Image Placeholder {id}</div>
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    
    <div className="p-6">
      <div className="flex items-center gap-2 mb-3">
        <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase tracking-wider">Category</span>
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="w-3 h-3 text-[#FFD76A] fill-[#FFD76A]" />
          ))}
        </div>
      </div>
      
      <h3 className="font-display text-xl font-bold mb-2 text-[#1A1A5E]">Package Title {id}</h3>
      
      <div className="flex items-center gap-4 mb-4 text-gray-500 text-xs font-body">
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3 text-primary" /> 3 Days / 2 Nights
        </div>
        <div className="flex items-center gap-1">
          <MapPin className="w-3 h-3 text-primary" /> Location
        </div>
      </div>
      
      <p className="text-muted-foreground text-sm mb-6 font-body leading-relaxed line-clamp-2">
        This is a mockup description for the package. It highlights the key features and exciting adventures included in this trip.
      </p>
      
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div>
          <span className="text-gray-400 text-[10px] block uppercase font-bold">Starts from</span>
          <span className="text-primary font-bold text-lg">₹X,XXX</span>
        </div>
        <div className="flex gap-2">
          <Link to="/contact" className="px-4 py-2 rounded-lg bg-[#FF8A3D] text-white text-xs font-bold transition-all hover:bg-[#FF6FAE] shadow-sm active:scale-95">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default function Packages() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <BackgroundDecor />
      <Navbar />

      {/* ── HERO SECTION ── */}
      <section className="pt-32 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-primary text-sm font-bold mb-6 hover:translate-x-[-4px] transition-transform">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-[#1A1A5E] mb-6">Explore Our Packages</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-body">
            From high-altitude treks to peaceful riverside spiritual retreats, 
            discover the perfect Himalayan experience tailored for you.
          </p>
        </div>
      </section>

      {/* ── PACKAGES GRID ── */}
      <section className="pb-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 15 }).map((_, i) => (
              <MockupCard key={i} id={i + 1} />
            ))}
          </div>
          
          <div className="mt-20 p-12 bg-white/40 backdrop-blur-xl rounded-[40px] border border-white/60 text-center max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10" />
            <h2 className="font-display text-3xl font-bold text-[#1A1A5E] mb-4">Don't see what you're looking for?</h2>
            <p className="text-gray-500 mb-8 font-body text-sm">We specialize in custom itineraries. Tell us your preferences and we'll craft the perfect journey.</p>
            <Link to="/contact" className="btn-primary inline-block">Request Custom Trip</Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
