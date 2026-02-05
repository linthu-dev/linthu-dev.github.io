 import { motion } from "framer-motion";
 import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
 
 export const HeroSection = () => {
   return (
     <section id="home" className="min-h-screen flex items-center justify-center pt-20">
       <div className="container mx-auto px-6 text-center">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
         >
           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
             <span className="text-foreground">Hi, I'm </span>
             <span className="text-gradient">John Doe</span>
           </h1>
           
           <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 font-mono">
             Full-Stack Developer crafting modern web experiences with React, TypeScript, and Node.js
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
             <a
               href="/resume.pdf"
               className="px-6 py-3 bg-transparent text-foreground rounded-lg font-mono text-sm border border-border hover:border-primary/50 transition-colors"
             >
               Resume
             </a>
           </div>
 
           <div className="flex items-center justify-center gap-6">
             <a
               href="https://github.com"
               target="_blank"
               rel="noopener noreferrer"
               className="text-muted-foreground hover:text-primary transition-colors"
             >
               <Github size={24} />
             </a>
             <a
               href="https://linkedin.com"
               target="_blank"
               rel="noopener noreferrer"
               className="text-muted-foreground hover:text-primary transition-colors"
             >
               <Linkedin size={24} />
             </a>
             <a
               href="mailto:hello@example.com"
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