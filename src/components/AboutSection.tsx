import { motion } from "framer-motion";
import { Code2, Smartphone, Users, Music, GraduationCap, MapPin } from "lucide-react";

const highlights = [
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Building Android applications with Java, Kotlin, and Flutter.",
  },
  {
    icon: Code2,
    title: "Problem Solver",
    description: "Love coding logic, solving problems and helping others with their code.",
  },
  {
    icon: Users,
    title: "Team Spirit",
    description: "Collaborating effectively with teams to create useful applications.",
  },
];

const personalInfo = [
  { label: "Birthday", value: "Jun 22, 1999" },
  { label: "Phone", value: "09793549754" },
  { label: "City", value: "Yangon" },
  { label: "Email", value: "ggltatplanet@gmail.com" },
  { label: "Freelance", value: "Available" },
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
            Android Developer with 2+ years of experience building mobile applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card rounded-xl border border-border p-8 card-hover">
              <p className="text-foreground leading-relaxed mb-6">
                I want to live in IT world by utilizing my prior experiences, knowledge, abilities
                and team spirit. I want to create useful and popular applications. Currently, I am working as an Android Developer at Myanmar Smart City.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I decided that I must be a mobile developer since my second year student life at Computer University.
                I just love coding logic, solving coding problems and advising for another person's problems when coding.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I like listening to music, mostly acoustic versions. Sometimes I listen to bass and trap. I also enjoy watching movies, especially animations. Battle Through the Heavens is my favorite animation series.
              </p>
              
              {/* Personal Info Grid */}
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-border">
                {personalInfo.map((info) => (
                  <div key={info.label} className="flex flex-col">
                    <span className="text-xs text-muted-foreground">{info.label}</span>
                    <span className="text-sm text-foreground">{info.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-xl border border-border p-6 card-hover mt-6"
            >
              <h3 className="font-mono font-semibold text-lg mb-4 text-primary flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Education
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">University of Computer Studies Hpa-an</h4>
                    <p className="text-sm text-muted-foreground">Computer Science • 2016 - 2020</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">Matriculation Examination</h4>
                    <p className="text-sm text-muted-foreground">Sar Pan Aein Private School • 2015 - 2016</p>
                  </div>
                </div>
              </div>
            </motion.div>
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

            {/* Participations */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card rounded-xl border border-border p-6 card-hover"
            >
              <h3 className="font-mono font-semibold text-lg mb-4 text-primary">Participations</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  2017 Myanmar College Programming Contest
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  2018 ICPC Asia-Yangon Regional Programming Contest
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Samsung Mobile Application Training 2017
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Java Development Class Training
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Application Contest hosted by KDDI Foundation
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
