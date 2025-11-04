import { motion, Variants } from "framer-motion";
import { Award, Users, Building, TrendingUp, Calendar, MapPin, Star, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const OurWorkPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const caseStudies = [
    {
      year: "2025",
      name: "Tent Decor Expo UP 2025",
      date: "February 2025",
      location: "Uttar Pradesh, India",
      overview: "EllowDigital proudly developed a comprehensive platform — Esenyx — to streamline registration, exhibitor onboarding, and entry management for the prestigious Tent Decor Expo UP 2025. Our solution handled thousands of attendees and dozens of exhibitors with precision and ease.",
      results: [
        { icon: Users, label: "Registrations", value: "2,500+" },
        { icon: Building, label: "Exhibitors Onboarded", value: "50+" },
        { icon: Award, label: "Downtime", value: "Zero" },
        { icon: TrendingUp, label: "Faster Check-in", value: "80%" },
      ],
      highlights: [
        "Seamless QR-based entry system eliminated long queues and manual verification",
        "Real-time dashboard monitoring provided instant insights to organizers",
        "On-site team support ensured smooth operations throughout the event",
      ],
      testimonial: {
        quote: "Esenyx made our event registration and entry effortless — and the EllowDigital team's on-site support was outstanding.",
        author: "Tent Decor Expo Organizing Committee, UP",
      },
      thanks: "Special thanks to the Tent, Caterers & Decorators Welfare Association of UP",
    },
    {
      year: "2024",
      name: "TechSummit India",
      date: "November 2024",
      location: "Bangalore, India",
      overview: "Digital registration platform with live check-in tracking and exhibitor insights for one of India's premier technology conferences.",
      results: [
        { icon: Users, label: "Registrations", value: "1,800+" },
        { icon: Building, label: "Exhibitors", value: "35+" },
        { icon: Award, label: "Check-in Speed", value: "75% Faster" },
        { icon: TrendingUp, label: "User Satisfaction", value: "95%" },
      ],
      highlights: [
        "Multi-tier registration system for attendees, speakers, and VIPs",
        "Integrated badge printing with QR codes",
        "Real-time analytics dashboard for organizers",
      ],
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <header className="bg-gradient-hero py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <Link to="/">
            <Button variant="ghost" className="mb-8 text-foreground hover:text-primary">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
              <Star className="w-5 h-5 text-primary" />
              <span className="font-semibold text-primary">Case Studies</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">Our Work</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore how Esenyx is transforming event management across India — 
              from expos to corporate summits.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Timeline */}
      <main className="py-16 px-4">
        <motion.div
          className="container mx-auto max-w-6xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {caseStudies.map((study, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="relative mb-16 last:mb-0"
            >
              {/* Timeline Line */}
              {index < caseStudies.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-primary opacity-30 hidden md:block" />
              )}

              <div className="grid md:grid-cols-[auto,1fr] gap-8">
                {/* Year Badge */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">{study.year.slice(2)}</span>
                  </div>
                </div>

                {/* Content Card */}
                <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden">
                  {/* Header */}
                  <div className="bg-gradient-dark p-8 text-secondary-foreground">
                    <h2 className="text-3xl font-bold mb-4">{study.name}</h2>
                    <div className="flex flex-wrap gap-4 text-sm text-secondary-foreground/80">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{study.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{study.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-8 space-y-8">
                    {/* Thanks Note */}
                    {study.thanks && (
                      <p className="text-muted-foreground italic text-center py-4 border-y border-border">
                        {study.thanks}
                      </p>
                    )}

                    {/* Overview */}
                    <div>
                      <h3 className="text-xl font-bold mb-3">Overview</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {study.overview}
                      </p>
                    </div>

                    {/* Results Grid */}
                    <div>
                      <h3 className="text-xl font-bold mb-4">Key Results</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {study.results.map((result, idx) => (
                          <div
                            key={idx}
                            className="p-4 bg-muted rounded-lg text-center space-y-2"
                          >
                            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                              <result.icon className="w-5 h-5 text-primary" />
                            </div>
                            <div className="text-2xl font-bold">{result.value}</div>
                            <div className="text-xs text-muted-foreground">{result.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    {study.highlights && (
                      <div>
                        <h3 className="text-xl font-bold mb-4">Key Highlights</h3>
                        <ul className="space-y-3">
                          {study.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                              <span className="text-muted-foreground">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Testimonial */}
                    {study.testimonial && (
                      <div className="bg-gradient-dark p-6 rounded-xl">
                        <blockquote className="space-y-4">
                          <p className="text-lg text-secondary-foreground italic">
                            "{study.testimonial.quote}"
                          </p>
                          <footer className="text-primary font-semibold">
                            — {study.testimonial.author}
                          </footer>
                        </blockquote>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="container mx-auto max-w-4xl mt-20 text-center space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Transform Your Next Event?
          </h2>
          <p className="text-lg text-muted-foreground">
            Join the growing number of organizers who trust Esenyx for seamless event management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/#contact">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto">
                Book a Demo
              </Button>
            </Link>
            <Link to="/">
              <Button variant="cta" size="lg" className="text-lg px-8 py-6 h-auto">
                Explore Features
              </Button>
            </Link>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default OurWorkPage;
