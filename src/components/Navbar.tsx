import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import profileImage from "@/assets/profile.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const targetId = href.replace("#", "");
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

 export const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.replace("#", ""));
      for (const section of sections.reverse()) {
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
 
   return (
     <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
       <div className="container mx-auto px-6 py-4">
         <div className="flex items-center justify-between">
          <a 
            href="#home" 
            className="flex items-center gap-3"
            onClick={(e) => scrollToSection(e, "#home")}
          >
            <img
              src={profileImage}
              alt="Lin Thu"
              className="w-9 h-9 rounded-full border-2 border-primary/50 object-cover"
            />
            <span className="font-mono font-semibold text-foreground">Lin Thu</span>
          </a>
 
           {/* Desktop Navigation */}
           <div className="hidden md:flex items-center gap-8">
             {navLinks.map((link) => (
              <motion.a
                 key={link.name}
                 href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
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
             className="md:hidden text-foreground"
             onClick={() => setIsOpen(!isOpen)}
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
               className="md:hidden mt-4 pb-4"
             >
               <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.a
                     key={link.name}
                     href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`font-mono text-sm transition-colors ${
                      activeLink === link.href 
                        ? "text-primary" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    onClick={(e) => {
                      scrollToSection(e, link.href);
                      setIsOpen(false);
                    }}
                   >
                     {link.name}
                  </motion.a>
                 ))}
               </div>
             </motion.div>
           )}
         </AnimatePresence>
       </div>
     </nav>
   );
 };