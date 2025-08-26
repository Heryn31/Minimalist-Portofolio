"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap } from "lucide-react"
import { GlitchText } from "./glitch-text"

export function AboutSection() {
  const skills = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices",
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "Creative Design",
      description: "Crafting beautiful, user-centered design experiences",
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Performance",
      description: "Optimizing for speed and exceptional user experience",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <GlitchText text="About Me" className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-full h-96 bg-white rounded-lg overflow-hidden">
                <img src="/profile-photo.png" alt="Professional headshot" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-sans text-2xl font-semibold text-foreground">Hi, who are you?</h3>
            <p className="font-serif text-muted-foreground leading-relaxed">
              Started as a graphic designer, I discovered my passion for web development and have been creating digital
              experiences ever since. I believe in the power of good design to solve real problems and create meaningful
              connections.
            </p>
            <p className="font-serif text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new design trends, contributing to open source projects, or
              enjoying a good cup of coffee while sketching new ideas.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{skill.icon}</div>
                  <h4 className="font-sans text-xl font-semibold text-card-foreground mb-3">{skill.title}</h4>
                  <p className="font-serif text-muted-foreground leading-relaxed">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
