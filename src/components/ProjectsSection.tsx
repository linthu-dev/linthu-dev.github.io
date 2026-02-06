import { motion } from "framer-motion";
import { ExternalLink, Github, Folder, Smartphone } from "lucide-react";

const projects = [
  {
    title: "Social Media Mobile App",
    description: "Social media mobile application that connects with related website. Full-featured platform with real-time communication.",
    tags: ["Android", "Java", "Firebase", "WebSocket"],
    github: "https://github.com/planetlt",
    featured: true,
  },
  {
    title: "Delivery Mobile App",
    description: "Delivery mobile app for pick up and delivery services that connects with related website backend.",
    tags: ["Android", "Kotlin", "REST API", "Maps"],
    github: "https://github.com/planetlt",
    featured: true,
  },
  {
    title: "POS Mobile Application",
    description: "Point of Sale mobile application that connects with printers and POS software for Computer integration.",
    tags: ["Android", "Bluetooth", "Printer SDK", "SQLite"],
    github: "https://github.com/planetlt",
    featured: true,
  },
  {
    title: "Product Trading App",
    description: "Product trading application for showing product details with beautiful UI and smooth navigation.",
    tags: ["Flutter", "Dart", "REST API"],
    github: "https://github.com/planetlt",
  },
  {
    title: "Social Media Maintenance",
    description: "Maintained and upgraded social media app with payments, audio/video upgrades, screen share, video conferencing, and UI redesign.",
    tags: ["Android", "WebRTC", "Payments"],
    github: "https://github.com/planetlt",
  },
];

export const ProjectsSection = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center text-sm sm:text-base max-w-2xl mx-auto mb-10 sm:mb-16">
            Some of the mobile applications I've worked on
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-xl border border-border p-6 card-hover group"
            >
              <div className="flex items-center justify-between mb-4">
                <Smartphone className="w-10 h-10 text-primary" />
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-surface text-xs text-muted-foreground rounded font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-center mb-8">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-lg border border-border p-4 card-hover group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-muted-foreground text-xs">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
