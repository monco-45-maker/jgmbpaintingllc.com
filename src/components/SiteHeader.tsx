import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
{ to: "/", label: "Home" },
{ to: "/about", label: "About" },
{ to: "/services", label: "Services" },
{ to: "/gallery", label: "Gallery" },
{ to: "/contact", label: "Contact" }];


const SiteHeader = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-sm border-b border-border">
      <div className="container-site flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          {/* Cambia esa línea por esta: */}
<img 
  alt="JGMB Painting logo" 
  className="h-14 md:h-20 w-auto object-contain border-0 border-none rounded-none shadow-none" 
  src="/lovable-uploads/4e8b018b-234f-4270-ae1c-a51098ef3566.png" 
/>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <Link
            key={link.to}
            to={link.to}
            className={`text-sm font-medium transition-colors duration-200 ${
            location.pathname === link.to ?
            "text-primary font-semibold" :
            "text-foreground/70 hover:text-foreground"}`
            }>
            
              {link.label}
            </Link>
          )}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-accent text-accent-foreground font-semibold text-sm transition-[transform,filter] duration-200 hover:brightness-110 active:scale-[0.98]">
            
            Free Estimate
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu">
          
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen &&
      <div className="md:hidden bg-card border-b border-border">
          <nav className="container-site py-4 flex flex-col gap-4">
            {navLinks.map((link) =>
          <Link
            key={link.to}
            to={link.to}
            onClick={() => setMobileOpen(false)}
            className={`text-base font-medium ${
            location.pathname === link.to ?
            "text-primary font-semibold" :
            "text-foreground/70"}`
            }>
            
                {link.label}
              </Link>
          )}
            <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-accent text-accent-foreground font-semibold text-sm w-full">
            
              Free Estimate
            </Link>
          </nav>
        </div>
      }
    </header>);

};

export default SiteHeader;