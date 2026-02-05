import { motion } from "framer-motion";

const skills = {
  "Mobile Development": [
    { name: "Java", level: 80 },
    { name: "Kotlin", level: 60 },
    { name: "Flutter", level: 60 },
    { name: "Android SDK", level: 75 },
  ],
  "Web Technologies": [
    { name: "HTML", level: 40 },
    { name: "CSS", level: 40 },
    { name: "JavaScript", level: 35 },
  ],
  "Tools & Design": [
    { name: "Photoshop", level: 70 },
    { name: "Git", level: 65 },
    { name: "Android Studio", level: 80 },
    { name: "Firebase", level: 60 },
  ],
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-card rounded-xl border border-border p-6 card-hover"
            >
              <h3 className="font-mono font-semibold text-lg mb-6 text-primary">{category}</h3>
              <div className="space-y-4">
                {categorySkills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground text-sm">{skill.name}</span>
                      <span className="text-muted-foreground text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
