import { motion } from "framer-motion";
import { ArrowDown, Github, Mail, Phone } from "lucide-react";
import profileImage from "@/assets/profile.png";

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <img
              src={profileImage}
              alt="Lin Thu"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto border-4 border-primary/50 object-cover"
            />
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-gradient">Lin Thu</span>
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 font-mono">
            Android Mobile Developer with 2+ years of experience building mobile applications
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-mono text-sm hover:opacity-90 transition-opacity glow"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-mono text-sm border border-border hover:border-primary/50 transition-colors"
            >
              Contact Me
            </a>
            <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full font-mono text-sm border border-green-500/30">
              Available for Freelance
            </span>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/planetlt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="tel:09793549754"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone size={24} />
            </a>
            <a
              href="mailto:ggltatplanet@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
 
         <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1, duration: 0.6 }}
           className="absolute bottom-8 left-1/2 -translate-x-1/2"
         >
           <a href="#about" className="text-muted-foreground hover:text-primary transition-colors animate-bounce block">
             <ArrowDown size={24} />
           </a>
         </motion.div>
       </div>
     </section>
   );
 };