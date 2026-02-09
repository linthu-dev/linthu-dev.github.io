import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Missing fields",
        description: "Please fill in all fields before sending.",
        variant: "destructive",
      });
      return;
    }

    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:linthu49754@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    toast({
      title: "Email client opened!",
      description: "Please send the message from your email app.",
    });

    setFormData({ name: "", email: "", message: "" });
  };
 
    return (
      <section id="contact" className="py-16 sm:py-24 bg-surface">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-muted-foreground text-center text-sm sm:text-base max-w-2xl mx-auto mb-10 sm:mb-16">
              Have a project in mind or just want to chat? Feel free to reach out!
            </p>
          </motion.div>
  
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-4xl mx-auto">
           {/* Contact Info */}
           <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="space-y-8"
           >
             <div className="bg-card rounded-xl border border-border p-6 card-hover">
               <h3 className="font-mono font-semibold text-lg mb-6 text-primary">Contact Info</h3>
               <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:linthu49754@gmail.com" className="text-foreground hover:text-primary transition-colors">
                        linthu49754@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-foreground">Sanchaung Township, Yangon, Myanmar</p>
                    </div>
                  </div>
               </div>
             </div>
 
              <div className="bg-card rounded-xl border border-border p-6 card-hover">
                <h3 className="font-mono font-semibold text-lg mb-6 text-primary">Follow Me</h3>
                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/planetlt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/lin-thu-213296275"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="mailto:linthu49754@gmail.com"
                    className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
           </motion.div>
 
           {/* Contact Form */}
           <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
           >
             <form onSubmit={handleSubmit} className="bg-card rounded-xl border border-border p-6 card-hover">
               <h3 className="font-mono font-semibold text-lg mb-6 text-primary">Send Message</h3>
               <div className="space-y-4">
                 <div>
                   <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                     Name
                   </label>
                   <input
                     type="text"
                     id="name"
                     value={formData.name}
                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                     className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                     placeholder="Your name"
                   />
                 </div>
                 <div>
                   <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                     Email
                   </label>
                   <input
                     type="email"
                     id="email"
                     value={formData.email}
                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                     className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                     placeholder="your@email.com"
                   />
                 </div>
                 <div>
                   <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                     Message
                   </label>
                   <textarea
                     id="message"
                     rows={4}
                     value={formData.message}
                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                     className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                     placeholder="Your message..."
                   />
                 </div>
                 <button
                   type="submit"
                   className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-mono text-sm hover:opacity-90 transition-opacity glow flex items-center justify-center gap-2"
                 >
                   <Send size={18} />
                   Send Message
                 </button>
               </div>
             </form>
           </motion.div>
         </div>
       </div>
     </section>
   );
 };