 import { useState } from "react";
 import { Menu, X } from "lucide-react";
 import { motion, AnimatePresence } from "framer-motion";
 
 const navLinks = [
   { name: "Home", href: "#home" },
   { name: "About", href: "#about" },
   { name: "Skills", href: "#skills" },
   { name: "Projects", href: "#projects" },
   { name: "Contact", href: "#contact" },
 ];
 
 export const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
 
   return (
     <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
       <div className="container mx-auto px-6 py-4">
         <div className="flex items-center justify-between">
           <a href="#home" className="flex items-center gap-2">
             <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
               <span className="font-mono font-bold text-primary-foreground text-sm">&lt;/&gt;</span>
             </div>
             <span className="font-mono font-semibold text-foreground">DevPortfolio</span>
           </a>
 
           {/* Desktop Navigation */}
           <div className="hidden md:flex items-center gap-8">
             {navLinks.map((link) => (
               <a
                 key={link.name}
                 href={link.href}
                 className="text-muted-foreground hover:text-foreground transition-colors font-mono text-sm"
               >
                 {link.name}
               </a>
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
                 {navLinks.map((link) => (
                   <a
                     key={link.name}
                     href={link.href}
                     className="text-muted-foreground hover:text-foreground transition-colors font-mono text-sm"
                     onClick={() => setIsOpen(false)}
                   >
                     {link.name}
                   </a>
                 ))}
               </div>
             </motion.div>
           )}
         </AnimatePresence>
       </div>
     </nav>
   );
 };