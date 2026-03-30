import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, Shield, Clock, Paintbrush, Droplets, SprayCan, Home, Star, ArrowRight, ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import kitBryan from "@/assets/kit-bryan.png";
import tomDoyle from "@/assets/tom-doyle.png";

const gallery1 = "/lovable-uploads/079b9e6a-73da-47e8-a06f-9928235327ec.png";
const gallery2 = "/lovable-uploads/c103a4a5-0977-4e2e-9722-f22494d70ff3.png";
const gallery7 = "/lovable-uploads/c20fd364-e9ff-4e5f-83db-2754bec9438c.png";
const gallery5 = "/lovable-uploads/a430cd09-9737-4e07-bd0e-1bb02d228ccd.png";

const GOOGLE_PROFILE_URL =
  "https://www.google.com/maps/place/JG%26MB+painting+and+remodeling+llc./@27.7946085,-81.512955,8z/data=!4m8!3m7!1s0x6ba70fc4b8d26f87:0x76cd3583bca6588d!8m2!3d27.7946085!4d-81.512955!9m1!1b1!16s%2Fg%2F11kk07twtq?entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D";

// Data
const services = [
  { icon: Paintbrush, title: "Interior Painting", img: "/lovable-uploads/1254.jpg", desc: "We provide clean, precise interior painting that refreshes and enhances the look of your home or business. From walls and ceilings to trim and doors, we make your space look new again." },
  { icon: Home, title: "Exterior Painting", img: "/lovable-uploads/0edda452-bbc2-4400-a469-3a6189039451.png", desc: "Protect and beautify your property with our professional exterior painting services. We use durable, high-quality materials to ensure a long-lasting finish that withstands weather and time." },
  { icon: Droplets, title: "Epoxy Floor Coatings", img: "/lovable-uploads/98cfd60d-e4cb-474d-8452-ea95669b2869.png", desc: "Our epoxy flooring systems are perfect for garages, patios, and commercial spaces. They provide a strong, durable, and modern finish that is easy to maintain and resistant to stains and damage." },
  { icon: SprayCan, title: "Pressure Washing", img: "/lovable-uploads/1234.jpg", desc: "We remove dirt, mold, mildew, and stains from surfaces like driveways, walls, sidewalks, and exterior siding, restoring the clean look of your property." },
  { icon: Paintbrush, title: "Cabinet Painting & Refinishing", img: "/lovable-uploads/bde6c085-fdf8-42e0-9be7-ff8c18dd596c.png", desc: "Give your kitchen or bathroom a fresh, modern look without replacing your cabinets. Our cabinet painting service delivers a smooth and durable finish that transforms your space." },
  { icon: Paintbrush, title: "Solar Panel Cleaning", img: "/lovable-uploads/1235.png", desc: "If your panels are covered in dust, pollen, or bird droppings, they can lose up to 20% or more of their efficiency. That means you're paying for solar... but not getting the full benefit." }
];

const whyChoose = [
  { icon: Star, title: "Experienced Professionals", desc: "With over 6 years of experience, we have the knowledge and skills to deliver high-quality results on every project." },
  { icon: CheckCircle, title: "Quality Workmanship", desc: "We pay attention to every detail and use quality materials to ensure a clean, durable, and professional finish that lasts." },
  { icon: Clock, title: "Reliable and On-Time", desc: "We respect your time and your property. Our team shows up on time, works efficiently, and completes projects as scheduled." },
  { icon: Home, title: "Residential & Commercial", desc: "From homes to businesses, we provide professional interior and exterior painting tailored to meet your needs." },
  { icon: Paintbrush, title: "Additional Services", desc: "Beyond painting, we also offer epoxy floors, pressure washing, and cabinet painting, helping you improve and protect your property." },
  { icon: Shield, title: "Customer Satisfaction First", desc: "Our goal is to make every client happy. We believe integrity and professionalism create long-term relationships and satisfied customers." }
];

const avatarColors: Record<string, string> = {
  J: "#1a73e8",
  P: "#e91e63",
  M: "#34a853",
  D: "#ff6d00",
  X: "#9c27b0",
  S: "#00897b",
  K: "#f4511e",
  T: "#039be5",
};

const getAvatarColor = (name: string) =>
  avatarColors[name.charAt(0).toUpperCase()] ?? "#5f6368";

const googleReviews = [
  {
    name: "Tom Doyle",
    time: "2 weeks ago",
    photo: tomDoyle,
    text: "Javier was painting our neighbors house, and I asked him for a quote. So glad I did — normally I would do it myself but I'm not the spring chicken I used to be. Javier worked his magic and we could not be happier. They do outstanding work and communicate with you about the job. This is the first time I hired someone and I have already scheduled Javier back.",
  },
  {
    name: "Kit Bryan",
    time: "10 months ago",
    photo: kitBryan,
    text: "I was referred to JG&MB Painting and Remodeling to paint the interior of a new townhome I purchased. Javier was Amazing from the first call to the last! His pricing and availability was excellent! Very professional! Really happy with the results. Don't waste your time (and money) calling anyone else!!!",
  },
  {
    name: "PATRICIA ALBANO",
    time: "2 weeks ago",
    text: "Team did an amazing job. They painted my home exterior, interior and converted my kitchen and bath cabinets to white. They arrived on-time each morning and truly take pride in their work. I highly recommend JG&MB for your next painting job!",
  },
  {
    name: "Scott Macall",
    time: "2 years ago",
    text: "I've been with JG&MB painting for 3+ years and i can say with certainty that they are the best in the industry. Very professional and respectful, they go the extra on their service's. 100% recommend for painting needs!!",
  },
  {
    name: "Diana M Valderruten G",
    time: "2 years ago",
    text: "I would highly recommend JG&MB for any painting job. The owner is very professional. We had great communication since the beginning from contacting them for first time until the job was done. Fair price. I will give this company 5 stars.",
  },
  {
    name: "Kevin Mahen",
    time: "2 years ago",
    text: "Javier painted a couple of rooms for me and did excellent work for a reasonable price. He asked for the paint code and showed up ready to work. I was impressed with his organization and speed of work. I've recommended Javier to friends and will be using him for any future work.",
  },
  {
    name: "Ximena Garcia",
    time: "2 years ago",
    text: "Mr Junior was great. Was very professional our home came out amazing. Very clean with his work. Whenever we need anymore paint jobs in our home we will definitely use him again.",
  },
  {
    name: "Jaiver Ospina",
    time: "2 years ago",
    text: "Excelente trabajo, garantizado el trabajo de esta compañía!",
  },
  {
    name: "Melissa DeFabbio",
    time: "2 weeks ago",
    text: "Did a great job! Will use them for any future painting projects.",
  },
  {
    name: "maria barbosa",
    time: "2 years ago",
    text: "Good service. I super recommend it!!",
  },
];

// Subcomponents
const ReviewAvatar = ({ name, photo }: { name: string; photo?: string }) => {
  if (photo) {
    return (
      <img
        src={photo}
        alt={name}
        className="w-10 h-10 rounded-full object-cover flex-shrink-0"
      />
    );
  }
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold text-base select-none"
      style={{ backgroundColor: getAvatarColor(name) }}
    >
      {name.charAt(0).toUpperCase()}
    </div>
  );
};

const StarRating = () => (
  <div className="flex gap-0.5 mb-1">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
    ))}
  </div>
);

const GoogleLogo = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const CARDS_PER_PAGE = 4;

const ReviewsCarousel = ({ reviews }: { reviews: typeof googleReviews }) => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(reviews.length / CARDS_PER_PAGE);
  const visible = reviews.slice(page * CARDS_PER_PAGE, page * CARDS_PER_PAGE + CARDS_PER_PAGE);

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {visible.map((review) => (
          <div key={review.name} className="bg-white rounded-xl p-5 shadow-card flex flex-col gap-3 text-left">
            
            {/* Header con el Link al usuario */}
            <a 
              href={GOOGLE_PROFILE_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <ReviewAvatar name={review.name} photo={(review as any).photo} />
              <div className="min-w-0">
                <div className="flex items-center gap-1">
                  <p className="font-semibold text-sm text-gray-900 truncate">{review.name}</p>
                  
                  {/* SVG OFICIAL DE VERIFICADO (Google Style) */}
                  <svg className="w-[14px] h-[14px] flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#1a73e8"/>
                  </svg>

                </div>
                <p className="text-xs text-gray-500">{review.time}</p>
              </div>
              <div className="ml-auto flex-shrink-0">
                <GoogleLogo />
              </div>
            </a>
            
            <StarRating />
            
            <p className="font-body text-sm leading-relaxed text-gray-700 flex-1 line-clamp-4">
              {review.text}
            </p>

            <a 
              href={GOOGLE_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-blue-600 hover:underline mt-auto inline-block"
            >
              Read more
            </a>
          </div>
        ))}
      </div>

      {/* Flechas Laterales */}
      <button
        onClick={() => setPage((p) => Math.max(p - 1, 0))}
        disabled={page === 0}
        className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 w-10 h-10 rounded-full bg-white text-gray-800 flex items-center justify-center shadow-lg hover:bg-gray-50 disabled:opacity-0 transition-all z-10"
      >
        <ArrowRight size={18} className="rotate-180" />
      </button>

      <button
        onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
        disabled={page === totalPages - 1}
        className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 w-10 h-10 rounded-full bg-white text-gray-800 flex items-center justify-center shadow-lg hover:bg-gray-50 disabled:opacity-0 transition-all z-10"
      >
        <ArrowRight size={18} />
      </button>

      <div className="flex justify-center gap-1.5 mt-8">
        {[...Array(totalPages)].map((_, i) => (
          <div 
            key={i} 
            className={`w-1.5 h-1.5 rounded-full transition-colors ${page === i ? 'bg-white' : 'bg-white/30'}`}
          />
        ))}
      </div>
    </div>
  );
};

// Main Page
const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[75svh] flex items-center">
        <div className="absolute inset-0">
          <video src="/hero-video.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative container-site py-20 md:py-28 text-center">
          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-primary-foreground mb-6">
            Your Property Deserves a Professional Finish
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-lg md:text-xl text-primary-foreground/80 mb-8">
            From interior and exterior painting to epoxy floors and pressure washing, JGMB Painting delivers results you can trust.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-wrap justify-center gap-4 mb-8">
            {["Professional Work", "Reliable Service", "6+ Years of Experience"].map((item) =>
              <span key={item} className="flex items-center gap-2 text-sm text-primary-foreground/90 font-medium">
                <CheckCircle size={16} className="text-accent" /> {item}
              </span>
            )}
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:brightness-110 active:scale-[0.98]">Get a Free Estimate</Link>
            <Link to="/services" className="px-8 py-3.5 rounded-lg bg-transparent text-primary font-semibold text-sm ring-1 ring-primary-foreground/30 hover:bg-primary-foreground/10">View Services</Link>
          </motion.div>
        </div>
      </section>

      {/* Services Icons Bar */}
      <section className="bg-primary text-primary-foreground py-6">
        <div className="container-site flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium">
          {["Residential & Commercial", "Interior & Exterior Painting", "Epoxy Floors", "Pressure Washing", "Cabinet Painting"].map(item =>
            <span key={item} className="flex items-center gap-2 opacity-80"><CheckCircle size={14} />{item}</span>
          )}
        </div>
      </section>

      {/* About */}
      <section className="section-padding">
        <div className="container-site grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">About Our Company</p>
            <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-tight text-foreground mb-6">Built on Quality, Integrity, and Trust</h2>
            <p className="font-body text-lg leading-relaxed text-muted-foreground mb-4">At JGMB Painting, we take pride in delivering high-quality painting services with professionalism, reliability, and attention to detail. With over 6 years of experience in the industry, our team specializes in both residential and commercial projects.</p>
            <p className="font-body text-lg leading-relaxed text-muted-foreground mb-8">Our mission is simple: to provide honest work, excellent craftsmanship, and complete customer satisfaction.</p>
            <Link to="/about" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-200">Learn More About Us <ArrowRight size={16} /></Link>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <img alt="JGMB Painting team" src="/lovable-uploads/1.png" className="w-full aspect-[4/3] object-contain rounded-xl shadow-card" />
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-muted/50">
        <div className="container-site">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">What We Do</p>
              <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-tight text-foreground">Our Services</h2>
            </div>
          </AnimatedSection>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.07 } } }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service =>
              <motion.div key={service.title} variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }} className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-200">
                <img src={service.img} alt={service.title} className="w-full aspect-[16/10] object-cover" loading="lazy" />
                <div className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3"><service.icon size={20} className="text-primary" /></div>
                  <h3 className="font-sans font-semibold text-xl text-foreground mb-2">{service.title}</h3>
                  <p className="font-body text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
                </div>
              </motion.div>
            )}
          </motion.div>
          <AnimatedSection className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 active:scale-[0.98]">See All Services <ArrowRight size={16} /></Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section-padding">
        <div className="container-site">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Why Choose Us</p>
              <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-tight text-foreground">Why Choose JGMB Painting</h2>
            </div>
          </AnimatedSection>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.07 } } }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map(item =>
              <motion.div key={item.title} variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }} className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-200">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4"><item.icon size={20} className="text-accent" /></div>
                <h3 className="font-sans font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-muted/50">
        <div className="container-site">
          <AnimatedSection>
            <div className="text-center mb-10">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Our Work</p>
              <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-tight text-foreground">Recent Projects</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[gallery1, gallery2, gallery7, gallery5].map((img, i) =>
              <AnimatedSection key={i} delay={i * 0.07}>
                <img src={img} alt={`Project ${i + 1}`} className="w-full aspect-square object-cover rounded-xl shadow-card hover:shadow-card-hover transition-shadow duration-200" loading="lazy" />
              </AnimatedSection>
            )}
          </div>
          <AnimatedSection className="text-center mt-10">
            <Link to="/gallery" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-200">View Full Gallery <ArrowRight size={16} /></Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Google Reviews Carousel */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-site">
          <AnimatedSection>
            <div className="text-center mb-10">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Testimonials</p>
              <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-tight">What Our Clients Say</h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-primary-foreground">5.0</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-primary-foreground/70 text-sm">(10 reviews)</span>
                </div>
                <a
                  href={GOOGLE_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-gray-800 font-semibold text-sm hover:brightness-95 transition-all duration-200"
                >
                  <GoogleLogo />
                  Review us on Google
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </AnimatedSection>

          <ReviewsCarousel reviews={googleReviews} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container-site text-center max-w-2xl mx-auto">
          <AnimatedSection>
            <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-tight text-foreground mb-4">Ready to Refresh Your Property?</h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">Contact JGMB Painting today for a free estimate and let's bring new life to your home or business.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:brightness-110 active:scale-[0.98]">Get Free Estimate</Link>
              <Link to="/contact" className="px-8 py-3.5 rounded-lg bg-transparent text-primary font-semibold text-sm ring-1 ring-primary/30 hover:bg-primary/5">Contact Us</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default HomePage;