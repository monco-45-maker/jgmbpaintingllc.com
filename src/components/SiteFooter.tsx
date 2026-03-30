import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Instagram, Facebook, Phone } from "lucide-react";

// Custom TikTok icon since lucide doesn't have it
const TikTokIcon = ({ size = 20 }: {size?: number;}) =>
<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>;


const quickLinks = [
{ to: "/", label: "Home" },
{ to: "/about", label: "About Us" },
{ to: "/services", label: "Services" },
{ to: "/gallery", label: "Gallery" },
{ to: "/contact", label: "Contact" }];


const serviceLinks = [
{ to: "/services", label: "Interior Painting" },
{ to: "/services", label: "Exterior Painting" },
{ to: "/services", label: "Epoxy Floors" },
{ to: "/services", label: "Pressure Washing" },
{ to: "/services", label: "Cabinet Painting" },
{ to: "/services", label: "Solar Cleaning" },


];



const SiteFooter = () =>
<footer className="bg-foreground text-primary-foreground">
    <div className="container-site section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <img src={logo} alt="JGMB Painting logo" className="h-10 mb-4 brightness-0 invert" />
          <p className="text-sm leading-relaxed opacity-70">
            JGMB Painting provides professional painting and remodeling services with quality workmanship, reliable service, and attention to detail.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-sans font-semibold text-sm mb-4 uppercase tracking-wider opacity-50">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((link) =>
          <li key={link.label}>
                <Link to={link.to} className="text-sm opacity-70 hover:opacity-100 transition-opacity duration-200">
                  {link.label}
                </Link>
              </li>
          )}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-sans font-semibold text-sm mb-4 uppercase tracking-wider opacity-50">Services</h4>
          <ul className="space-y-3">
            {serviceLinks.map((link) =>
          <li key={link.label}>
                <Link to={link.to} className="text-sm opacity-70 hover:opacity-100 transition-opacity duration-200">
                  {link.label}
                </Link>
              </li>
          )}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-sans font-semibold text-sm mb-4 uppercase tracking-wider opacity-50">Contact</h4>
          <ul className="space-y-3 text-sm opacity-70">
            <li>jgmb.painting@gmail.com</li>
            <li>Central Florida </li>
            <li>
              <a href="tel:+14075800112" className="hover:opacity-100 transition-opacity">
                +1 (321) 287-7179
              </a>
            </li>
          </ul>
          
          {/* Social Media Icons */}
          <div className="flex items-center gap-3 mt-4">
            <a
            href="https://www.instagram.com/jg.mb.painting/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
            aria-label="Instagram">
            
              <Instagram size={18} />
            </a>
            <a
            href="https://www.facebook.com/people/JGMB-Painting/61572885038494/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
            aria-label="Facebook">
            
              <Facebook size={18} />
            </a>
            <a
            href="https://www.tiktok.com/@jgmb.painting/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
            aria-label="TikTok">
            
              <TikTokIcon size={18} />
            </a>
            <a
            href="tel:+14075800112"
            className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
            aria-label="Phone">
            
              <Phone size={18} />
            </a>
          </div>
          
          <Link
          to="/contact"
          className="inline-flex mt-6 items-center justify-center px-6 py-2.5 rounded-lg bg-accent text-accent-foreground font-semibold text-sm transition-[transform,filter] duration-200 hover:brightness-110 active:scale-[0.98]">
          
            Get Free Estimate
          </Link>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-primary-foreground/10 text-center">
        <p className="text-xs opacity-50">
          © {new Date().getFullYear()} JGMB Painting & Remodeling. All rights reserved.
        </p>
      </div>
    </div>
  </footer>;


export default SiteFooter;