/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  Star, 
  ChevronDown, 
  Menu, 
  X, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook,
  Award,
  Users
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-serif text-2xl font-semibold tracking-tight text-neutral-900">Botox<span className="text-gold">-g</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider text-neutral-600">
          <a href="#services" className="hover:text-neutral-900 transition-colors">Services</a>
          <a href="#how-it-works" className="hover:text-neutral-900 transition-colors">How it Works</a>
          <a href="#about" className="hover:text-neutral-900 transition-colors">About</a>
          <a href="#faq" className="hover:text-neutral-900 transition-colors">FAQ</a>
          <button className="bg-neutral-900 text-white px-6 py-2.5 rounded-full text-xs hover:bg-neutral-800 transition-all">Book Now</button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-neutral-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-neutral-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Services</a>
            <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">How it Works</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">About</a>
            <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">FAQ</a>
            <button className="btn-primary w-full mt-2">Book a Consultation</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image/Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000" 
          alt="Clinic Interior" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 text-gold rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
            <ShieldCheck size={14} /> Medical-Grade Excellence
          </div>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-neutral-900 mb-6">
            Rediscover Your <br />
            <span className="italic">Natural</span> Radiance
          </h1>
          <p className="text-lg text-neutral-600 mb-10 max-w-lg leading-relaxed">
            Expertly administered Botox treatments designed to smooth wrinkles while preserving your unique facial expressions. Safe, precise, and luxurious.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="btn-primary">Book a Consultation</button>
            <button className="btn-secondary">Get a Free Assessment</button>
          </div>

          <div className="flex items-center gap-8 border-t border-neutral-200 pt-8">
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold text-neutral-900">15+</span>
              <span className="text-xs uppercase tracking-wider text-neutral-500">Years Experience</span>
            </div>
            <div className="w-px h-10 bg-neutral-200" />
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold text-neutral-900">10k+</span>
              <span className="text-xs uppercase tracking-wider text-neutral-500">Happy Clients</span>
            </div>
            <div className="w-px h-10 bg-neutral-200" />
            <div className="flex flex-col">
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <span className="text-xs uppercase tracking-wider text-neutral-500">5-Star Rated</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
            <img 
              src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1000" 
              alt="Beautiful Natural Face" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-taupe/5 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "Client since 2022",
      content: "I was terrified of looking 'frozen', but the team at Botox-g was so patient. The results are incredibly natural—my friends just think I've been sleeping better!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Masseter Treatment",
      content: "The jaw slimming treatment changed my life. Not only do I look better, but my TMJ pain has significantly decreased. Professional and clean environment.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "First-time Client",
      content: "The consultation was so thorough. They explained exactly where they would inject and why. Minimal downtime, I went back to work the same afternoon.",
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-4">Real Results, Real Confidence</h2>
          <p className="text-neutral-500 uppercase tracking-widest text-sm">Trusted by thousands of clients</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-cream border border-neutral-100 shadow-sm"
            >
              <div className="flex text-gold mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-neutral-700 italic mb-6 leading-relaxed">"{review.content}"</p>
              <div>
                <p className="font-semibold text-neutral-900">{review.name}</p>
                <p className="text-xs text-neutral-500 uppercase tracking-wider">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const items = [
    {
      icon: <Sparkles className="text-gold" />,
      title: "Smooth Wrinkles",
      desc: "Effectively soften fine lines and deep wrinkles for a refreshed appearance."
    },
    {
      icon: <Users className="text-gold" />,
      title: "Natural Results",
      desc: "Our 'less is more' approach ensures you still look like yourself, just better."
    },
    {
      icon: <Clock className="text-gold" />,
      title: "Fast Procedure",
      desc: "Treatments take only 10-20 minutes. Perfect for a lunch-break refresh."
    },
    {
      icon: <ShieldCheck className="text-gold" />,
      title: "Minimal Downtime",
      desc: "Resume your daily activities immediately with virtually no recovery period."
    }
  ];

  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-8">Why Choose Botox-g?</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {items.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg text-neutral-900">{item.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-video lg:aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000" 
              alt="Medical Professional" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-neutral-900 text-white p-8 rounded-2xl hidden md:block max-w-xs">
            <p className="text-2xl font-serif mb-2 italic">"Safety is our first priority, beauty is our second."</p>
            <p className="text-xs uppercase tracking-widest text-neutral-400">— Dr. Julianne G., Founder</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const treatments = [
    {
      title: "Forehead Lines",
      desc: "Smooth horizontal lines for a serene, youthful forehead.",
      price: "From $199"
    },
    {
      title: "Crow's Feet",
      desc: "Soften the lines around the eyes while keeping your smile bright.",
      price: "From $149"
    },
    {
      title: "Frown Lines",
      desc: "Eliminate the '11' lines between brows for a more relaxed look.",
      price: "From $179"
    },
    {
      title: "Jaw Slimming",
      desc: "Relax masseter muscles for a slimmer facial profile and TMJ relief.",
      price: "From $349"
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-gold font-semibold uppercase tracking-widest text-xs mb-4">Our Expertise</p>
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-900">Precision Treatments</h2>
          </div>
          <p className="text-neutral-500 max-w-md">
            We target specific muscle groups to achieve the exact aesthetic goals you desire. Every face is unique, and so is our approach.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((t, idx) => (
            <div key={idx} className="group p-8 rounded-2xl border border-neutral-100 bg-cream hover:bg-neutral-900 hover:text-white transition-all duration-500 cursor-default">
              <h3 className="font-serif text-2xl mb-4">{t.title}</h3>
              <p className="text-neutral-600 group-hover:text-neutral-300 text-sm mb-6 leading-relaxed">{t.desc}</p>
              <p className="font-semibold text-gold">{t.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      num: "01",
      title: "Consultation",
      desc: "Meet with our experts to discuss your goals and medical history."
    },
    {
      num: "02",
      title: "Personalized Plan",
      desc: "We create a custom mapping of injection points for your face."
    },
    {
      num: "03",
      title: "Treatment",
      desc: "A quick, 15-minute procedure with minimal discomfort."
    },
    {
      num: "04",
      title: "Radiant Results",
      desc: "See full results in 7-14 days that last for 3-4 months."
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">The Botox-g Journey</h2>
          <p className="text-neutral-400 uppercase tracking-widest text-sm">Simple, Safe, and Effective</p>
        </div>

        <div className="grid md:grid-cols-4 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-neutral-800 z-0" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-neutral-800 rounded-full flex items-center justify-center text-gold font-serif text-2xl mb-6 border border-neutral-700">
                {step.num}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Does the treatment hurt?",
      a: "Most clients describe the sensation as a quick pinch. We use ultra-fine needles and can apply a topical numbing cream if you're particularly sensitive."
    },
    {
      q: "How long do the results last?",
      a: "Typically, Botox results last between 3 to 4 months. Factors like metabolism and the area treated can influence longevity."
    },
    {
      q: "Is it safe?",
      a: "Yes, Botox is FDA-approved and has been used for decades. Our practitioners are highly trained medical professionals who prioritize safety above all else."
    },
    {
      q: "When will I see results?",
      a: "You may start to see softening within 3-5 days, with the full effect visible at the 14-day mark."
    },
    {
      q: "Will I look natural?",
      a: "Absolutely. Our philosophy is to enhance your beauty, not change it. We focus on subtle improvements that leave you looking refreshed, not 'done'."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-cream">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-4">Common Questions</h2>
          <p className="text-neutral-500 uppercase tracking-widest text-sm">Everything you need to know</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-neutral-100 overflow-hidden">
              <button 
                className="w-full p-6 text-left flex justify-between items-center hover:bg-neutral-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-semibold text-neutral-900">{faq.q}</span>
                <ChevronDown className={`text-neutral-400 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-neutral-600 text-sm leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-neutral-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <span className="font-serif text-3xl font-semibold tracking-tight text-neutral-900 mb-6 block">Botox<span className="text-gold">-g</span></span>
            <p className="text-neutral-500 max-w-sm mb-8 leading-relaxed">
              Premium medical aesthetics clinic dedicated to natural-looking rejuvenation and patient safety. Experience the gold standard of care.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-600 hover:bg-gold hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-600 hover:bg-gold hover:text-white transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-neutral-900 mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li><a href="#services" className="hover:text-gold transition-colors">Treatments</a></li>
              <li><a href="#how-it-works" className="hover:text-gold transition-colors">Process</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">Our Clinic</a></li>
              <li><a href="#faq" className="hover:text-gold transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-900 mb-6 uppercase tracking-widest text-xs">Contact</h4>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold shrink-0" />
                <span>123 Aesthetic Way, Suite 400<br />Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-gold shrink-0" />
                <span>Mon-Fri: 9am - 6pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-neutral-400 uppercase tracking-widest">
          <p>© 2026 Botox-g Clinic. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-neutral-900">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-900">Terms of Service</a>
            <a href="#" className="hover:text-neutral-900">Medical Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gold/5 z-0" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-serif text-4xl md:text-6xl text-neutral-900 mb-8">Ready to Reveal Your Best Self?</h2>
        <p className="text-lg text-neutral-600 mb-10 leading-relaxed">
          Join over 10,000 satisfied clients who trust Botox-g for their aesthetic journey. Limited consultation slots available this month.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="btn-primary text-lg px-12">Book Your Consultation</button>
          <button className="btn-secondary text-lg px-12">Call (555) 123-4567</button>
        </div>
        <p className="mt-8 text-sm text-neutral-400 flex items-center justify-center gap-2">
          <CheckCircle2 size={16} className="text-gold" /> No-obligation assessment included
        </p>
      </div>
    </section>
  );
};

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-6 left-0 right-0 z-40 px-6 md:hidden"
        >
          <button className="btn-primary w-full shadow-2xl py-5 text-lg">
            Book Consultation Now
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      
      {/* Trust Bar */}
      <div className="bg-neutral-50 py-10 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 font-bold text-xl"><Award className="text-neutral-400" /> FDA APPROVED</div>
          <div className="flex items-center gap-2 font-bold text-xl"><ShieldCheck className="text-neutral-400" /> CERTIFIED CLINIC</div>
          <div className="flex items-center gap-2 font-bold text-xl"><Users className="text-neutral-400" /> 10K+ CLIENTS</div>
          <div className="flex items-center gap-2 font-bold text-xl"><Star className="text-neutral-400" /> TOP RATED</div>
        </div>
      </div>

      <Testimonials />
      <Benefits />
      <Services />
      <HowItWorks />
      
      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Clinic" 
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-10 -left-10 w-40 h-40 border-l-4 border-t-4 border-gold/30 rounded-tl-3xl hidden md:block" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-gold font-semibold uppercase tracking-widest text-xs mb-4">Medical Authority</p>
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-6">Expertise You Can Trust</h2>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              Founded by Dr. Julianne G., Botox-g was born from a desire to bridge the gap between medical precision and luxury hospitality. We believe that aesthetic treatments should be a comfortable, empowering experience.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Board-Certified Medical Practitioners",
                "State-of-the-art Sterile Environment",
                "Premium Allergan Botox® Products",
                "Bespoke Aftercare Support"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-neutral-700 font-medium">
                  <CheckCircle2 size={20} className="text-gold" /> {item}
                </li>
              ))}
            </ul>
            <button className="btn-secondary">Learn More About Us</button>
          </div>
        </div>
      </section>

      <FAQ />
      <CTASection />
      <Footer />
      <StickyCTA />
    </div>
  );
}
