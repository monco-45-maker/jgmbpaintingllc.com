import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import AnimatedSection from "@/components/AnimatedSection";

import gallery1 from "@/assets/IMG_6909.jpg";
import gallery2 from "@/assets/IMG_7822.jpg";
import gallery6 from "@/assets/123.jpg";
import gallery7 from "@/assets/1254.jpg";
import exteriorImg from "@/assets/IMG_4265.jpg";
import epoxyImg from "@/assets/IMG_4154.jpg";
import pressureImg from "@/assets/IMG_6115.jpg";
import cabinetImg from "@/assets/9.png";
import cabinet1Img from "@/assets/Cabinets.jpg";
import epoxy1Img from "@/assets/epoxy1.jpg";
import epoxy2Img from "@/assets/epoxy2.jpg";
import gallery8 from "@/assets/interior1.jpg.jpeg";
import gallery9 from "@/assets/interior2.jpg.jpeg";
import gallery10 from "@/assets/interior3.jpg.jpeg";



const categories = ["All", "Interior", "Exterior", "Epoxy", "Cabinets", "Pressure Washing"] as const;

const galleryItems = [
  { src: "/lovable-uploads/gallery-ext-1.png", alt: "Casa pintada exterior con entrada elegante", category: "Exterior" },
  { src: "/lovable-uploads/gallery-ext-2.png", alt: "Puertas dobles pintadas en azul con herrajes dorados", category: "Exterior" },
  { src: "/lovable-uploads/gallery-ext-3.png", alt: "Fachada exterior pintada con ventanas negras", category: "Exterior" },
  { src: "/lovable-uploads/gallery-ext-4.png", alt: "Casa de dos pisos pintada con acentos turquesa", category: "Exterior" },
  { src: gallery1, alt: "Living room with sage green accent wall", category: "Interior" },
  { src: gallery2, alt: "Freshly painted two-story exterior", category: "Exterior" },
  { src: cabinetImg, alt: "White kitchen cabinet refinishing", category: "Cabinets" },
  { src: cabinet1Img, alt: "White kitchen cabinet refinishing", category: "Cabinets" },
  { src: epoxy2Img, alt: "Commercial expoxy 2", category: "Epoxy" },
  { src: pressureImg, alt: "Pressure washing driveway before and after", category: "Pressure Washing" },
  { src: gallery7, alt: "Navy blue bedroom accent wall", category: "Interior" },
  { src: exteriorImg, alt: "Exterior house painting on ladder", category: "Exterior" },
  { src: epoxyImg, alt: "Commercial epoxy floor coating", category: "Epoxy" },
  { src: gallery6, alt: "Pressure washed brick wall", category: "Pressure Washing" },
  { src: epoxy1Img, alt: "Commercial epoxy floor coating", category: "Epoxy" },
  { src: gallery8, alt: "Navy blue bedroom accent wall", category: "Interior" },
  { src: gallery9, alt: "Navy blue bedroom accent wall", category: "Interior" },
  { src: gallery10, alt: "Navy blue bedroom accent wall", category: "Interior" },
         
  
  
  

    
];

const GalleryPage = () => {
  const [filter, setFilter] = useState<string>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? galleryItems : galleryItems.filter((g) => g.category === filter);

  return (
    <>
      <PageBanner
        title="Our Gallery"
        subtitle="Browse our recent painting and remodeling projects across Winter Garden, FL."
      />

      <section className="section-padding">
        <div className="container-site">
          {/* Filter */}
          <AnimatedSection className="mb-10">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    filter === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-muted-foreground ring-1 ring-border hover:bg-muted"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.alt}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                  className="relative group cursor-pointer overflow-hidden rounded-xl"
                  onClick={() => setLightbox(i)}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-end">
                    <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-sm font-semibold text-primary-foreground bg-primary/80 px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-primary-foreground hover:text-accent transition-colors"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={filtered[lightbox]?.src}
              alt={filtered[lightbox]?.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-site text-center">
          <AnimatedSection>
            <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-tight mb-4">
              Like What You See?
            </h2>
            <p className="font-body text-lg opacity-80 leading-relaxed mb-8 max-w-xl mx-auto">
              Let us bring the same quality and attention to detail to your next project.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold text-sm transition-[transform,filter] duration-200 hover:brightness-110 active:scale-[0.98]"
            >
              Get Your Free Estimate
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
