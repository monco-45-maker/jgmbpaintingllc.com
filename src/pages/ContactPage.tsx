import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "sonner";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    details: "",
    contactMethod: "email"
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thank you! We'll be in touch soon.");
      setForm({ name: "", email: "", phone: "", service: "", details: "", contactMethod: "email" });
    }, 1000);
  };

  const inputClass =
  "w-full rounded-lg bg-background ring-1 ring-input px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow duration-200";

  return (
    <>
      <PageBanner
        title="Contact JGMB Painting"
        subtitle="Let's talk about your next painting or remodeling project. Request your free estimate today." />
      

      <section className="section-padding">
        <div className="container-site">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12">
            {/* Contact info */}
            <AnimatedSection>
              <div>
                <h2 className="font-sans font-bold text-2xl tracking-tight text-foreground mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-sm text-foreground">Email</p>
                      <a href="mailto:jgmb.painting@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        jgmb.painting@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-sm text-foreground">Location</p>
                      <p className="text-sm text-muted-foreground">Central Florida </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-sm text-foreground">Phone</p>
                      <a href="tel:+14075800112" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        +1 (321) 287-7179
                      </a>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="mt-8 rounded-xl bg-muted/50 border border-border overflow-hidden h-56 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={32} className="text-primary mx-auto mb-2" />
                    <p className="font-sans font-semibold text-sm text-foreground">Central Florida</p>
                    <p className="text-xs text-muted-foreground">Serving the surrounding areas</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={0.1}>
              <div className="bg-card rounded-2xl shadow-card p-6 md:p-8">
                <h2 className="font-sans font-bold text-2xl tracking-tight text-foreground mb-6">Request Free Estimate</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} className={inputClass} placeholder="Your name" required />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">Email *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} className={inputClass} placeholder="you@email.com" required />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">Phone</label>
                      <input name="phone" type="tel" value={form.phone} onChange={handleChange} className={inputClass} placeholder="(555) 000-0000" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">Service Needed</label>
                      <select name="service" value={form.service} onChange={handleChange} className={inputClass}>
                        <option value="">Select a service</option>
                        <option>Interior Painting</option>
                        <option>Exterior Painting</option>
                        <option>Epoxy Floor Coatings</option>
                        <option>Pressure Washing</option>
                        <option>Cabinet Painting</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">Project Details</label>
                    <textarea name="details" rows={4} value={form.details} onChange={handleChange} className={inputClass} placeholder="Tell us about your project..." />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">Preferred Contact Method</label>
                    <div className="flex gap-4">
                      {["email", "phone"].map((m) =>
                      <label key={m} className="flex items-center gap-2 cursor-pointer">
                          <input
                          type="radio"
                          name="contactMethod"
                          value={m}
                          checked={form.contactMethod === m}
                          onChange={handleChange}
                          className="accent-primary" />
                        
                          <span className="text-sm capitalize font-body">{m}</span>
                        </label>
                      )}
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold text-sm transition-[transform,filter] duration-200 hover:brightness-110 active:scale-[0.98] disabled:opacity-60">
                    
                    {submitting ? "Sending..." : "Request Free Estimate"}
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-site text-center">
          <AnimatedSection>
            <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-tight mb-4">
              Reliable Service. Professional Results.
            </h2>
            <p className="font-body text-lg opacity-80 leading-relaxed">
              Let's get your project started.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>);

};

export default ContactPage;