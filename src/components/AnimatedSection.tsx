import { motion } from "framer-motion";
import { ReactNode, forwardRef } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection = forwardRef<HTMLDivElement, AnimatedSectionProps>(
  ({ children, className = "", delay = 0 }, ref) => (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
);

AnimatedSection.displayName = "AnimatedSection";

export default AnimatedSection;
