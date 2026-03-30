import { Link } from "react-router-dom";
import { Paintbrush, Home, Droplets, SprayCan, ArrowRight } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

import interiorImg from "/lovable-uploads/7f64d4a7-9d9d-46cc-994f-c464ca1af955.jpg";
import exteriorImg from "/lovable-uploads/bb7fb72f-9749-49b4-b576-54d6a4f93cc4.png";
import epoxyImg from "/lovable-uploads/bdab53b0-b946-4be9-aaea-27a70ce90d34.png";
import pressureImg from "/lovable-uploads/1234.jpg";
import cabinetImg from "/lovable-uploads/daea4bb3-0a2c-415b-a352-1ce8622dd0f5.png";
import solarImg from "/lovable-uploads/1235.png";


const services = [
{
  icon: Paintbrush,
  title: "Interior Painting",
  img: interiorImg,
  desc: "We provide clean, precise interior painting that refreshes and enhances the look of your home or business. From walls and ceilings to trim and doors, we make your space look new again.",
  bullets: ["Clean and professional results", "Walls, ceilings, trim & doors", "Ideal for homes and businesses"]
},
{
  icon: Home,
  title: "Exterior Painting",
  img: exteriorImg,
  desc: "Protect and beautify your property with our professional exterior painting services. We use durable, high-quality materials to ensure a long-lasting finish that withstands weather and time.",
  bullets: ["Weather-resistant finishes", "Durable, high-quality materials", "Enhances curb appeal"]
},
{
  icon: Droplets,
  title: "Epoxy Floor Coatings",
  img: epoxyImg,
  desc: "Our epoxy flooring systems are perfect for garages, patios, and commercial spaces. They provide a strong, durable, and modern finish that is easy to maintain and resistant to stains and damage.",
  bullets: ["Stain and damage resistant", "Modern, sleek appearance", "Perfect for garages & commercial"]
},
{
  icon: SprayCan,
  title: "Pressure Washing",
  img: pressureImg,
  desc: "We remove dirt, mold, mildew, and stains from surfaces like driveways, walls, sidewalks, and exterior siding, restoring the clean look of your property.",
  bullets: ["Removes mold & mildew", "Restores surfaces to like-new", "Driveways, walls & siding"]
},
{
  icon: Paintbrush,
  title: "Cabinet Painting & Refinishing",
  img: cabinetImg,
  desc: "Give your kitchen or bathroom a fresh, modern look without replacing your cabinets. Our cabinet painting service delivers a smooth and durable finish that transforms your space.",
  bullets: ["Smooth, durable finish", "Kitchen & bathroom cabinets", "Cost-effective transformation"]
}
,
{
  icon: Paintbrush,
  title: "Solar Panel Cleaning",
  img: solarImg,
  desc: "If your panels are covered in dust, pollen, or bird droppings, they can lose up to 20% or more of their efficiency. That means you're paying for solar... but not getting the full benefit.",
  bullets: ["Increased energy output", "Better return on your solar investment", "Spot-free, streak-free panels"]
}];


const ServicesPage = () =>
<>
    <PageBanner
    title="Our Services"
    subtitle="High-quality painting and surface improvement services for residential and commercial properties." />
  

    <section className="section-padding">
      <div className="container-site space-y-10">
        {services.map((service, i) =>
      <AnimatedSection key={service.title} delay={i * 0.05}>
            <div className="bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-200 overflow-hidden grid md:grid-cols-[1fr_1fr] items-stretch">
              <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                <img
              src={service.img}
              alt={service.title}
              className="w-full h-full object-cover aspect-[4/3] md:aspect-auto"
              loading="lazy" />
            
              </div>
              <div className={`p-6 md:p-8 flex flex-col justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon size={24} className="text-primary" />
                </div>
                <h2 className="font-sans font-bold text-2xl md:text-3xl tracking-tight text-foreground mb-3">
                  {service.title}
                </h2>
                <p className="font-body text-base leading-relaxed text-muted-foreground mb-4">
                  {service.desc}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.bullets.map((b) =>
              <li key={b} className="flex items-center gap-2 text-sm font-body text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {b}
                    </li>
              )}
                </ul>
                <div>
                  <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold text-sm transition-[transform,filter] duration-200 hover:brightness-110 active:scale-[0.98]">
                
                    Request Estimate <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
      )}
      </div>
    </section>

    {/* Service Areas */}
    <section className="section-padding bg-muted/50">
      <div className="container-site">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-tight text-foreground mb-4">
              Service Areas
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              We work throughout Central Florida
            </p>
            <div className="bg-card rounded-xl shadow-card p-8">
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
                Need help choosing the right service? Contact us today and we'll guide you through the best solution for your property.
              </p>
              <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm transition-[transform,filter] duration-200 hover:brightness-110 active:scale-[0.98]">
              
                Contact Us Today
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>;


export default ServicesPage;