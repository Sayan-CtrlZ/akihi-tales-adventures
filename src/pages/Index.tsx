import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteConfig } from "@/site-config";
import heroMountains from "@/assets/hero-mountains.webp";
import raftingEx2 from "@/assets/ex2.jpg";
import campfire from "@/assets/campfire.jpg";
import riversideCampingCopy from "@/assets/riverside-camping copy.jpg";
import gangaAartiAsset from "@/assets/aarti.jpeg";
import gangotri from "@/assets/gangotri.webp";
import badrinath from "@/assets/badrinath.jpg";
import kedarnathAsset from "@/assets/kedarnath.jpg";
import gangotriTempleAsset from "@/assets/gangotri-temple.webp";
import aboutUsAsset from "@/assets/image.png";

const packages = [
  {
    title: "River Rafting",
    desc: "Experience the thrill of the Ganga. Routes from 9km to 35km.",
    price: "From ₹800",
    image: raftingEx2,
    href: "/rafting",
    tag: "Bestseller"
  },
  {
    title: "Riverside Camping",
    desc: "Stay under the stars with bonfires, music, and beach walks.",
    price: "From ₹1,200",
    image: riversideCampingCopy,
    href: "/camping",
    tag: "Popular"
  },
  {
    title: "Adventure Combos",
    desc: "Camping + Rafting + Bungee + Paragliding. The ultimate rush.",
    price: "From ₹5,000",
    image: "https://i0.wp.com/trailsofinju.com/wp-content/uploads/2021/01/Adventure-Travel-In-India.png?w=967&ssl=1",
    href: "/packages",
    tag: "Premium"
  }
];

const dhams = [
  {
    name: "Kedarnath",
    desc: "Majestic Shiva temple amidst snow peaks. A soul-stirring trek.",
    image: kedarnathAsset,
  },
  {
    name: "Badrinath",
    desc: "The sacred abode of Lord Vishnu between Nar & Narayan peaks.",
    image: badrinath,
  },
  {
    name: "Gangotri",
    desc: "Where the holy Ganga descends. Pure spiritual tranquility.",
    image: gangotri,
  },
  {
    name: "Yamunotri",
    desc: "The westernmost shrine. A beautiful trek to the Yamuna source.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc452624941?auto=format&fit=crop&q=80&w=800",
  }
];

const reasons = [
  { icon: "🛡️", title: "Safety First", desc: "Certified guides and high-end rafting gear." },
  { icon: "⛺", title: "Premium Camps", desc: "Best spots along the Ganga with clean facilities." },
  { icon: "🗺️", title: "Local Experts", desc: "Born and raised in Uttarakhand — true insiders." },
];

const testimonials = [
  { name: "Priya S.", trip: "Rafting", text: "Amazing team! Safe, professional, and great food.", stars: 5 },
  { name: "Arjun K.", trip: "Camping", text: "Best bonfire nights and riverside views. Memorable!", stars: 5 },
  { name: "Meera R.", trip: "Char Dham", text: "Stress-free pilgrimage thanks to our dedicated care.", stars: 5 },
];

const yatraPackages = [
  {
    title: "Char Dham Yatra",
    duration: "10 Days / 9 Nights",
    image: gangotriTempleAsset,
  },
  {
    title: "Do Dham Yatra",
    duration: "5 Days / 4 Nights",
    image: gangotri,
  },
  {
    title: "Kedarnath Yatra",
    duration: "3 Days / 2 Nights",
    image: kedarnathAsset,
  }
];

const oneDayTours = [
  { title: "Mussoorie One Day Tour", price: "₹2,500", image: "https://uttarakhandtourism.gov.in/assets/media/UTDB_media_logo1746526797mussorroe.jpg" },
  { title: "Dehradun One Day Tour", price: "₹2,200", image: "https://www.gokitetours.com/wp-content/uploads/2025/02/Top-10-Hill-Station-in-Dehradun-for-a-Perfect-Gateway.webp" },
  { title: "Rishikesh One Day Tour", price: "₹1,500", image: "https://www.nativeplanet.com/img/2023/06/rishikesh34-1686056150.jpg" },
  { title: "Haridwar One Day Tour", price: "₹1,800", image: "https://clubmahindra.gumlet.io/blog/images/haridwar-image.jpg?w=376&dpr=2.6" },
];

const BackgroundDecor = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-[#FFF9F5]">
    {/* Animated Blobs */}
    <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#FF8A3D]/10 rounded-full blur-[120px] animate-pulse" />
    <div className="absolute top-[30%] left-[-10%] w-[50%] h-[50%] bg-[#FF6FAE]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
    <div className="absolute bottom-[-10%] right-[20%] w-[40%] h-[40%] bg-[#FFD76A]/15 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '4s' }} />
    
    {/* SVG Mesh / Web Pattern */}
    <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10L90 90M90 10L10 90' stroke='%232F2F2F' stroke-width='0.5' fill='none'/%3E%3Ccircle cx='10' cy='10' r='1' fill='%232F2F2F'/%3E%3Ccircle cx='90' cy='90' r='1' fill='%232F2F2F'/%3E%3Ccircle cx='90' cy='10' r='1' fill='%232F2F2F'/%3E%3Ccircle cx='10' cy='90' r='1' fill='%232F2F2F'/%3E%3Ccircle cx='50' cy='50' r='1' fill='%232F2F2F'/%3E%3C/svg%3E")`, backgroundSize: '150px 150px' }} />
    
    {/* Soft Noise Overlay */}
    <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
  </div>
);

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <BackgroundDecor />
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
          style={{ backgroundImage: `url(${gangaAartiAsset})`, backgroundAttachment: "fixed" }}
        />
        {/* Darker overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">

          <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-xl">
            Adventure Awaits in
            <span className="block text-gradient">Rishikesh</span>
          </h1>

          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-body drop-shadow-md">
            Private camping, white-water rafting, and sacred Himalayan journeys.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary">Book Now <ArrowRight className="w-4 h-4" /></Link>
            <a href={`https://wa.me/${siteConfig.whatsapp.number}`} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all">WhatsApp Us</a>
          </div>
        </div>
      </section>

      {/* ── POPULAR PACKAGES (Activities) ── */}
      <section id="packages" className="py-20 px-4 bg-transparent relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <h2 className="section-title text-[#2F2F2F]">Adventure Packages</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.title} className="bg-white/60 backdrop-blur-md rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 group cursor-pointer border border-white/40 hover:border-primary/30">
                <div className="relative h-64 overflow-hidden">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/95 text-primary text-xs font-bold shadow-sm">
                    {pkg.tag}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl font-bold mb-2 text-[#1A1A5E]">{pkg.title}</h3>
                  <p className="text-muted-foreground text-sm mb-5 font-body leading-relaxed">{pkg.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold text-xl">{pkg.price}</span>
                    <Link to={pkg.href} className="btn-primary !px-5 !py-2 !text-xs">Explore</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/packages" className="btn-outline inline-flex items-center gap-2">
              View All Adventure Packages <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── YATRA PACKAGES ── */}
      <section id="yatra-packages" className="py-20 px-4 bg-transparent relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-display text-4xl font-bold text-[#2F2F2F]">Yatra Packages</h2>
            <Link to="/packages" className="text-[#2F2F2F] font-medium hover:underline text-sm font-body">View All</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {yatraPackages.map((pkg) => (
              <div key={pkg.title} className="bg-white/70 backdrop-blur-md rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-white/50 flex flex-col group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:border-primary/20">
                <div className="relative h-64 overflow-hidden">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-6 relative">
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full -z-10 transition-all group-hover:w-20 group-hover:h-20" />
                  
                  <h3 className="font-display text-xl font-bold text-[#1A1A5E] mb-1">{pkg.title}</h3>
                  <p className="text-gray-500 text-sm mb-6 font-body">{pkg.duration}</p>
                  <Link to="/contact" className="w-full py-3 rounded-lg bg-[#FF8A3D] text-white font-bold text-center block transition-all hover:bg-[#FF6FAE] shadow-sm active:scale-95">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ONE DAY TOURS & CAB BOOKING ── */}
      <section id="one-day-tours" className="py-20 px-4 bg-transparent relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-display text-4xl font-bold text-[#2F2F2F]">One Day Tours</h2>
              <p className="text-gray-500 text-sm mt-2 font-body">Includes Private Cab & Driver</p>
            </div>
            <Link to="/packages" className="text-[#2F2F2F] font-medium hover:underline text-sm font-body">View All</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {oneDayTours.map((tour) => (
              <div key={tour.title} className="bg-white/70 backdrop-blur-md rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-white/50 group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
                <div className="relative h-48 overflow-hidden">
                  <img src={tour.image} alt={tour.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 rounded-full text-[10px] font-bold text-primary uppercase tracking-wider">Cab Included</div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-[#1A1A5E] mb-1">{tour.title}</h3>
                  <p className="text-primary font-bold">{tour.price}</p>
                  <Link to="/contact" className="mt-4 w-full py-2 rounded-lg border border-[#FF8A3D] text-[#FF8A3D] text-xs font-bold text-center block hover:bg-[#FF8A3D] hover:text-white transition-all">
                    Book Cab
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/packages" className="btn-outline inline-flex items-center gap-2">
              View More One Day Tours <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT US SUMMARY ── */}
      <section id="about-us" className="py-20 px-4 bg-transparent relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src={aboutUsAsset} alt="About Akihi Tales" className="w-full h-full object-cover min-h-[400px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-white text-3xl font-bold font-display">Crafting Himalayan Memories</p>
                <p className="text-white/80 font-body">Since 10+ Years</p>
              </div>
            </div>
            <div>
              <span className="text-primary text-sm font-semibold tracking-widest uppercase font-body">Our Story</span>
              <h2 className="font-display text-4xl font-bold text-[#2F2F2F] mt-2 mb-6">About Akihi Tales</h2>
              <div className="space-y-4 text-gray-500 leading-relaxed font-body">
                <p>
                  Akihi Tales is a travel agency based in the adventure capital of India — Rishikesh, Uttarakhand. 
                  We were born from a simple belief: travel should be safe, fun, and deeply memorable.
                </p>
                <p>
                  Our founder Tammy and our team of local experts bring years of authentic knowledge 
                  of the Himalayas to every trip. We don't just plan itineraries — we pour our hearts 
                  into every experience.
                </p>
              </div>
              <div className="mt-10 flex gap-4">
                <Link to="/about" className="btn-primary">Learn More</Link>
                <Link to="/contact" className="btn-outline">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="reviews" className="py-20 px-4 bg-transparent relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <h2 className="section-title">Happy Travelers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/70 backdrop-blur-md p-8 rounded-2xl border border-white/50 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 relative">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-saffron fill-saffron" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mb-6 italic font-body">"{t.text}"</p>
                <div>
                  <p className="text-foreground font-semibold text-sm">{t.name}</p>
                  <p className="text-primary text-xs">{t.trip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE (Hidden for now to keep it compact) ── */}
      {/* <section className="py-20 px-4 bg-[#FFF9F5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason) => (
              <div key={reason.title} className="text-center p-8 bg-white/80 rounded-2xl border border-primary/5 shadow-sm">
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h3 className="text-lg font-bold mb-2 font-display">{reason.title}</h3>
                <p className="text-muted-foreground text-sm font-body">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}


      {/* ── FINAL CTA ── */}
      <section className="py-20 px-4 bg-transparent text-center relative">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-[#2F2F2F]">Ready for Adventure?</h2>
          <p className="text-muted-foreground text-lg mb-10 font-body">Join 10,000+ happy travelers. Book your custom trip today.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">Get Started</Link>
            <Link to="/rafting" className="btn-outline">View Activities</Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
