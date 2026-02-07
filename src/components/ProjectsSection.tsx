import { motion } from "framer-motion";
import { Github, Smartphone } from "lucide-react";

const projects = [
  {
    title: "Ninjavan Partner & Shipper Apps",
    description: "Delivery pickup system for partners and shippers with creative UI, API integrations and realtime notifications using Flutter.",
    tags: ["Flutter", "Dart", "REST API", "Notifications"],
    github: "https://github.com/planetlt",
    featured: true,
  },
  {
    title: "Token Doctor",
    description: "Online hospital appointment booking app (patient & staff) with payment integrations, custom UI and realtime notifications.",
    tags: ["Flutter", "Dart", "Payments", "API"],
    github: "https://github.com/planetlt",
    featured: true,
  },
  {
    title: "Social Communication App",
    description: "Full-featured social app with audio/video calls, screen sharing (Tencent Cloud), real-time push notifications, payment integrations and TikTok-style video playback.",
    tags: ["Android", "Java", "WebRTC", "JPush"],
    github: "https://github.com/planetlt",
    featured: true,
  },
  {
    title: "Ninja Next & Ninja One",
    description: "Parcel creation, delivery management by user role, ticket system, reporting, food pre-ordering with credit payment, and HR policy features.",
    tags: ["Flutter", "Dart", "REST API"],
    github: "https://github.com/planetlt",
    featured: true,
  },
  {
    title: "All-in-One POS System",
    description: "Mobile POS and business management system for tracking sales, income/expenses, profit & loss reports, inventory monitoring and multi-branch operations.",
    tags: ["Android", "Java", "MVVM", "SQLite"],
    github: "https://github.com/planetlt",
    featured: true,
  },
  {
    title: "Mahar Android TV (v2)",
    description: "Video playing application for Android TV with customized ads integration, live TV channels, search functionality and modified video player.",
    tags: ["Android", "Kotlin", "MVP", "Ads SDK"],
    github: "https://github.com/planetlt",
  },
  {
    title: "Ride-Hailing Apps",
    description: "Passenger and driver apps supporting real-time ride booking, distance-based fare calculation, trip pre-booking, and receipt printing.",
    tags: ["Flutter", "Dart", "Maps", "Payments"],
    github: "https://github.com/planetlt",
  },
  {
    title: "Construction Equipment Trading",
    description: "App for selling and renting big construction equipment with creative UI, search with specific info, payment integrations and suggestion posts.",
    tags: ["Flutter", "Dart", "REST API"],
    github: "https://github.com/planetlt",
  },
  {
    title: "Chan Myanmar Warehouse App",
    description: "Warehouse checking system with nearest warehouse detection based on staff location, API integrations and report history.",
    tags: ["Flutter", "Dart", "Geolocation"],
    github: "https://github.com/planetlt",
  },
  {
    title: "Fuel Payment & Management",
    description: "Two mobile apps for drivers and fuel station staff with QR code payments using company credit points and fuel usage control.",
    tags: ["Flutter", "Dart", "QR Code"],
    github: "https://github.com/planetlt",
  },
  {
    title: "Room & House Rental System",
    description: "Multi-user platform for house owners and renters with part-time services, payment reminders and transaction tracking.",
    tags: ["Flutter", "Dart", "Payments"],
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
            Some of the mobile applications I've built and contributed to
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
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
                <p className="text-muted-foreground text-xs mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-1.5 py-0.5 bg-surface text-xs text-muted-foreground rounded font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
