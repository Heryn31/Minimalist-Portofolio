"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GlitchText } from "./glitch-text"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "JavaScript", level: 89 },
        { name: "React.js", level: 90 },
        { name: "TypeScript", level: 70 },
        { name: "Tailwind CSS", level: 89 },
        { name: "Framer Motion", level: 90 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 89 },
        { name: "Express.js", level: 89 },
        { name: "Java", level: 65 },
        { name: "Python", level: 80 },
        { name: "Django Rest API", level: 75 },
        { name: "Kotlin", level: 60 },
        { name: "Spring Boot", level: 65 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 55 },
        { name: "AWS", level: 50 },
        { name: "Figma", level: 88 },
        { name: "Photoshop", level: 85 },
      ],
    },
  ]

  const languages = ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3", "Java", "SQL", "Python"]

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
         <GlitchText
  text="Langages & Technologies"
  className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-6"
/>
<p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
  Mon expertise technique couvre les technologies web modernes ainsi que les outils de design.
</p>

        </motion.div>

        {/* Programming Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-sans text-2xl font-semibold text-foreground mb-8 text-center">
            Langages de programmation
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {languages.map((language, index) => (
              <motion.div
                key={language}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {language}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card border-border">
                <CardContent className="p-6">
                  <h4 className="font-sans text-xl font-semibold text-card-foreground mb-6 text-center">
                    {category.title}
                  </h4>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-serif text-muted-foreground">{skill.name}</span>
                          <span className="font-serif text-sm text-primary font-medium">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <motion.div
                            className="bg-primary h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
