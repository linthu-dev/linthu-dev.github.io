 import { motion } from "framer-motion";
 import { Code2, Rocket, Users } from "lucide-react";
 
 const highlights = [
   {
     icon: Code2,
     title: "Clean Code",
     description: "Writing maintainable, scalable code that stands the test of time.",
   },
   {
     icon: Rocket,
     title: "Fast Delivery",
     description: "Shipping quality products quickly without compromising on standards.",
   },
   {
     icon: Users,
     title: "Team Player",
     description: "Collaborating effectively with designers, PMs, and fellow developers.",
   },
 ];
 
 export const AboutSection = () => {
   return (
     <section id="about" className="py-24">
       <div className="container mx-auto px-6">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
         >
           <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
             About <span className="text-gradient">Me</span>
           </h2>
           <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
             Passionate developer with 5+ years of experience building web applications
           </p>
         </motion.div>
 
         <div className="grid md:grid-cols-2 gap-12 items-center">
           <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
           >
             <div className="bg-card rounded-xl border border-border p-8 card-hover">
               <p className="text-foreground leading-relaxed mb-6">
                 I'm a full-stack developer based in San Francisco, specializing in building 
                 exceptional digital experiences. Currently, I'm focused on building accessible, 
                 human-centered products.
               </p>
               <p className="text-muted-foreground leading-relaxed mb-6">
                 I enjoy working on projects that challenge me to learn new technologies and 
                 push the boundaries of what's possible on the web. When I'm not coding, you 
                 can find me exploring new coffee shops or hiking in the mountains.
               </p>
               <div className="flex flex-wrap gap-3">
                 <span className="px-3 py-1 bg-surface rounded-full text-sm text-muted-foreground border border-border">
                   Problem Solver
                 </span>
                 <span className="px-3 py-1 bg-surface rounded-full text-sm text-muted-foreground border border-border">
                   Continuous Learner
                 </span>
                 <span className="px-3 py-1 bg-surface rounded-full text-sm text-muted-foreground border border-border">
                   Open Source
                 </span>
               </div>
             </div>
           </motion.div>
 
           <div className="grid gap-6">
             {highlights.map((item, index) => (
               <motion.div
                 key={item.title}
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: index * 0.1 }}
                 className="bg-card rounded-xl border border-border p-6 card-hover flex items-start gap-4"
               >
                 <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                   <item.icon className="w-6 h-6 text-primary" />
                 </div>
                 <div>
                   <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                   <p className="text-muted-foreground text-sm">{item.description}</p>
                 </div>
               </motion.div>
             ))}
           </div>
         </div>
       </div>
     </section>
   );
 };