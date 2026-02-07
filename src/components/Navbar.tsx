import { useState, useEffect } from "react";
import { Menu, X, MapPin, Mail, Phone, Github, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import profileImage from "@/assets/profile.png";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const scrollToSection = (href: string, callback?: () => void) => {
  const targetId = href.replace("#", "");
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  if (callback) {
    setTimeout(callback, 100);
  }
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.replace("#", ""));
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveLink(`#${section}`);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(false);
    setTimeout(() => {
      scrollToSection(href);
    }, 50);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setProfileOpen(true)}
              className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity"
            >
              <img
                src={profileImage}
                alt="Lin Thu"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-primary/50 object-cover cursor-pointer hover:border-primary transition-colors"
              />
              <span className="font-mono font-semibold text-foreground text-sm sm:text-base">Lin Thu</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative font-mono text-sm transition-colors ${
                    activeLink === link.href 
                      ? "text-primary" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                  {activeLink === link.href && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground p-2 -mr-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden mt-4 pb-4 overflow-hidden"
              >
                <div className="flex flex-col gap-1">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`font-mono text-sm py-3 px-4 rounded-lg text-left transition-colors ${
                        activeLink === link.href 
                          ? "text-primary bg-primary/10" 
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      {link.name}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Profile Dialog */}
      <Dialog open={profileOpen} onOpenChange={setProfileOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="sr-only">Profile Details</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center text-center">
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={profileImage}
              alt="Lin Thu"
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-primary/50 object-cover mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1">Lin Thu</h2>
            <p className="text-primary font-mono text-sm mb-4">Mobile Application Developer</p>
            
            <div className="w-full space-y-3 text-left">
              <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-foreground">Sanchaung, Yangon, Myanmar</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:linthu49754@gmail.com" className="text-sm text-foreground hover:text-primary transition-colors truncate">
                  linthu49754@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+9509944096748" className="text-sm text-foreground hover:text-primary transition-colors">
                  (+95) 09944096748
                </a>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                <GraduationCap className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-foreground">University of Computer Studies Hpa-an</span>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://github.com/planetlt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:linthu49754@gmail.com"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+9509944096748"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>

            <motion.span 
              className="mt-4 px-4 py-2 bg-primary/10 text-primary rounded-lg font-mono text-xs border border-primary/30 flex items-center gap-2"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Open to Work
            </motion.span>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
