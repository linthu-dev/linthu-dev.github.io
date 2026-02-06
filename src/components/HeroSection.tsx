import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowUp, Github, Mail, Phone } from "lucide-react";

export const HeroSection = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 relative">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-gradient">Lin Thu</span>
          </h1>
          
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 font-mono px-2">
            Android Mobile Developer with 2+ years of experience building mobile applications
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <a
              href="#projects"
              className="w-full sm:w-auto px-6 py-3 bg-primary text-primary-foreground rounded-lg font-mono text-sm hover:opacity-90 transition-opacity glow text-center"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-mono text-sm border border-border hover:border-primary/50 transition-colors text-center"
            >
              Contact Me
            </a>
            <motion.span 
              className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-mono text-xs sm:text-sm border border-primary/30 flex items-center gap-2"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Open to Work
            </motion.span>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/planetlt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
            >
              <Github size={24} />
            </a>
            <a
              href="tel:09793549754"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
            >
              <Phone size={24} />
            </a>
            <a
              href="mailto:ggltatplanet@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
 
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors p-2"
          onClick={() => scrollToSection("about")}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.button>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={() => scrollToSection("home")}
            className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 w-10 h-10 sm:w-12 sm:h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity glow"
          >
            <ArrowUp size={18} className="sm:hidden" />
            <ArrowUp size={20} className="hidden sm:block" />
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
};