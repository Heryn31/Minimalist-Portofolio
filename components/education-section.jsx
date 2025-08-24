"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, BookOpen } from "lucide-react"
import { GlitchText } from "./glitch-text"

export function EducationSection() {
  const education = [
    {
      icon: <GraduationCap className="w-6 h-6 text-primary" />,
      degree: "Bachelor of Computer Science",
      institution: "University of Technology",
      year: "2018 - 2022",
      description: "Specialized in web development and user interface design",
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      degree: "Full Stack Web Development",
      institution: "FreeCodeCamp Certification",
      year: "2021",
      description: "Comprehensive certification covering modern web technologies",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      degree: "UX/UI Design Bootcamp",
      institution: "Design Institute",
      year: "2020",
      description: "Intensive program focused on user-centered design principles",
    },
  ]

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <GlitchText text="Education" className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-6" />
          <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Continuous learning and professional development in web technologies and design
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {education.map((item, index) => (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />

                  <Card className="md:ml-16 bg-card border-border hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 md:hidden">{item.icon}</div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <h3 className="font-sans text-xl font-semibold text-card-foreground">{item.degree}</h3>
                            <span className="font-serif text-sm text-primary font-medium">{item.year}</span>
                          </div>
                          <h4 className="font-serif text-lg text-muted-foreground mb-3">{item.institution}</h4>
                          <p className="font-serif text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                        <div className="flex-shrink-0 hidden md:block">{item.icon}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
