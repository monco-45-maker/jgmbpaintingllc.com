import { Link } from "react-router-dom";

interface PageBannerProps {
  title: string;
  subtitle: string;
}

const PageBanner = ({ title, subtitle }: PageBannerProps) => (
  <section className="bg-primary text-primary-foreground section-padding">
    <div className="container-site text-center">
      <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4">
        {title}
      </h1>
      <p className="font-body text-lg md:text-xl max-w-2xl mx-auto opacity-80 leading-relaxed">
        {subtitle}
      </p>
    </div>
  </section>
);

export default PageBanner;
