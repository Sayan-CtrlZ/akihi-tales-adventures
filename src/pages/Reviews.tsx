import { Star, Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroMountains from "@/assets/hero-mountains.webp";

const reviews = [
  {
    name: "Priya Sharma",
    location: "Delhi",
    trip: "Rafting + Riverside Camping",
    date: "March 2024",
    rating: 5,
    avatar: "PS",
    color: "bg-river-blue",
    text: "Best rafting experience of my entire life! The team at Akihi Tales was incredibly professional and made sure we were safe at every rapid. Tammy is an absolute gem — she organized everything perfectly and even cooked us the most amazing breakfast by the river. The 16km route on the Ganga was breathtaking. I've done rafting in multiple countries, but Rishikesh with Akihi Tales was something else entirely. Will 100% be coming back!",
  },
  {
    name: "Arjun Mehta",
    location: "Mumbai",
    trip: "All-in-One Adventure Package",
    date: "February 2024",
    rating: 5,
    avatar: "AM",
    color: "bg-forest-green",
    text: "The camping was absolutely amazing and the food was SO good! We had dal makhani, parathas, and chai by the bonfire — it felt like a homely feast in the wilderness. The team surprised us with a DJ night on our last evening which was unexpected and so fun. Bungee jump at 109m was terrifying in the best way possible. The trip was worth every single penny and then some!",
  },
  {
    name: "Deepa & Vikram",
    location: "Bengaluru",
    trip: "Couple Adventure Trip",
    date: "January 2024",
    rating: 5,
    avatar: "DV",
    color: "bg-saffron",
    text: "We were celebrating our anniversary and Tammy made it absolutely special. She decorated our tent with fairy lights and flowers, arranged a private bonfire dinner by the river. The sunrise over the Himalayas from our campsite was the most romantic thing I've ever witnessed. Akihi Tales genuinely cares about making memories, not just running tours. Five stars isn't enough.",
  },
  {
    name: "Rahul Singh",
    location: "Chandigarh",
    trip: "Char Dham Yatra",
    date: "October 2023",
    rating: 5,
    avatar: "RS",
    color: "bg-amber-700",
    text: "Tammy was an exceptional guide and host throughout our Char Dham Yatra. Being an elderly group, we were worried about the travel but she handled everything with such care and patience. The helicopter booking for Kedarnath was seamless, and the accommodations at each stop were comfortable and clean. A spiritually transformative journey, made effortless by Akihi Tales.",
  },
  {
    name: "Aditi Nair",
    location: "Pune",
    trip: "Girls Group Rafting Trip",
    date: "December 2023",
    rating: 5,
    avatar: "AN",
    color: "bg-pink-700",
    text: "Travelled as a group of 8 girls and felt completely safe the entire time. The rafting guides were so patient and encouraging with first-timers. Tammy was incredibly welcoming and the camp had excellent facilities. The bonfire and stargazing was absolutely magical. Highly recommend Akihi Tales especially for women traveling in groups!",
  },
  {
    name: "Kabir Tiwari",
    location: "Jaipur",
    trip: "Paragliding + Camping",
    date: "November 2023",
    rating: 5,
    avatar: "KT",
    color: "bg-purple-700",
    text: "The paragliding experience was out of this world! Soaring above the Ganga with the Himalayas in the background is something I'll never forget. The pilot was experienced and made me feel completely safe. The camping after was equally amazing — good food, great company, beautiful location. Akihi Tales delivered on every promise.",
  },
  {
    name: "Neha Kapoor",
    location: "Lucknow",
    trip: "Bungee + Rafting Combo",
    date: "September 2023",
    rating: 5,
    avatar: "NK",
    color: "bg-teal-700",
    text: "I was terrified before the bungee jump but Tammy and the team encouraged me so much! The team at the bungee was professional and calming. After the jump, we went for the 16km rafting which was the perfect adrenaline continuation. Excellent value for money, excellent service, excellent memories. Akihi Tales is the BEST adventure company in Rishikesh, bar none!",
  },
  {
    name: "Saurabh Gupta",
    location: "Noida",
    trip: "College Group Trip (22 people)",
    date: "August 2023",
    rating: 5,
    avatar: "SG",
    color: "bg-cyan-700",
    text: "Organized our college farewell trip with Akihi Tales and they handled a group of 22 people brilliantly! The coordination was smooth, the rafting was thrilling, the campsite was beautiful, and the prices were very reasonable. Tammy personally ensured everyone had fun and felt included. The DJ night was the highlight of the trip. Our whole batch is planning to come back again next year!",
  },
];

export default function Reviews() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${heroMountains})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy" />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="text-saffron text-sm font-semibold tracking-widest uppercase font-body">Real Stories</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mt-3 mb-5">
            What Our Travelers Say
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Over 10,000 happy adventurers and counting. Here are some of their stories.
          </p>
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {[
              { num: "10,000+", label: "Happy Travelers" },
              { num: "4.9 ⭐", label: "Average Rating" },
              { num: "5+", label: "Years of Adventure" },
              { num: "100%", label: "Safety Record" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-saffron font-display">{stat.num}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 px-4 bg-navy-light">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {reviews.map((review) => (
              <div key={review.name} className="glass-card p-7 break-inside-avoid card-hover">
                <Quote className="w-8 h-8 text-saffron/30 mb-4" />
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-saffron fill-saffron" />
                  ))}
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-6 italic">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                    {review.avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{review.name}</p>
                    <p className="text-muted-foreground text-xs">{review.location} • {review.date}</p>
                  </div>
                  <span className="ml-auto px-2.5 py-1 rounded-full bg-river-blue/20 border border-river-blue/30 text-river-blue text-xs">
                    {review.trip}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-background text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Ready to Create Your Story?</h2>
          <p className="text-muted-foreground mb-8">Join thousands of happy adventurers. Book your Rishikesh adventure today.</p>
          <a
            href="https://wa.me/919999999999?text=Hi!%20I%20want%20to%20book%20an%20adventure%20with%20Akihi%20Tales."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{ background: "#25D366" }}
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Start Planning on WhatsApp
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
