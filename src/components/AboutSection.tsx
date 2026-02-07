import { motion } from "framer-motion";
import { Code2, Smartphone, Users, Music, GraduationCap, MapPin } from "lucide-react";

const highlights = [
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "4+ years in Android (Java, Kotlin) and Flutter (Dart) development.",
  },
  {
    icon: Code2,
    title: "Problem Solver",
    description: "Love coding logic, solving problems and advising others with their code.",
  },
  {
    icon: Users,
    title: "Team Spirit",
    description: "Collaborating effectively with teams to create useful and popular applications.",
  },
];

const personalInfo = [
  { label: "Phone", value: "(+95) 09944096748" },
  { label: "City", value: "Sanchaung, Yangon" },
  { label: "Email", value: "linthu49754@gmail.com" },
  { label: "Languages", value: "Myanmar, English" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-center text-sm sm:text-base max-w-2xl mx-auto mb-10 sm:mb-16">
            Mobile Application Developer with 4+ years of development experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card rounded-xl border border-border p-4 sm:p-6 md:p-8 card-hover">
              <p className="text-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                I want to develop useful mobile applications by utilizing my prior experiences, knowledge, abilities, working experiences and team spirit. I have over 4 years experience in android development and over 3 years working experience.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Currently working as a Senior Flutter Developer at Ninjavan Myanmar. Previously worked at Token Doctor, Secret Code, and Innowave Myanmar building various mobile applications.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                I enjoy watching movies, listening to music, and visiting peaceful places in my free time.
              </p>
              
              {/* Personal Info Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border">
                {personalInfo.map((info) => (
                  <div key={info.label} className="flex flex-col">
                    <span className="text-xs text-muted-foreground">{info.label}</span>
                    <span className="text-xs sm:text-sm text-foreground">{info.value}</span>
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
              className="bg-card rounded-xl border border-border p-4 sm:p-6 card-hover mt-4 sm:mt-6"
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
                    <p className="text-sm text-muted-foreground">Computer Science • 2015 - 2020</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">Matriculation Examination</h4>
                    <p className="text-sm text-muted-foreground">Sar Pann Aein Private School</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">Java Basic Training</h4>
                    <p className="text-sm text-muted-foreground">JDC • 2016</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">Samsung Mobile App Training</h4>
                    <p className="text-sm text-muted-foreground">2017</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className="grid gap-4 sm:gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-xl border border-border p-4 sm:p-6 card-hover flex items-start gap-3 sm:gap-4"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">{item.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Participations */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card rounded-xl border border-border p-4 sm:p-6 card-hover"
            >
              <h3 className="font-mono font-semibold text-base sm:text-lg mb-4 text-primary">Working Experience</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  <div>
                    <span className="text-foreground font-medium">Ninjavan Myanmar</span>
                    <p>Senior Flutter Developer • Jan 2024 - Present</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  <div>
                    <span className="text-foreground font-medium">Token Doctor</span>
                    <p>Flutter Developer • Jul 2023 - Present</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  <div>
                    <span className="text-foreground font-medium">Secret Code</span>
                    <p>Android Developer • Jun 2021 - Jun 2023</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  <div>
                    <span className="text-foreground font-medium">Innowave Myanmar</span>
                    <p>Android Developer • Oct 2020 - Mar 2021</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
