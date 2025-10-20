"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { GlitchText } from "./glitch-text"

export function ProjectsSection() {
  const projects = [
  {
    title: "Parc National de Madagascar",
    description: "Conception et développement d'une application web ergonomique pour le Parc National de Madagascar, avec un focus sur l'ergonomie et l'interaction homme-machine.",
    image: "/park.png",
    technologies: ["ExpressJS", "NodeJS", "ReactJS"],
    liveUrl: "#",
    githubUrl: "https://github.com/Heryn31/Project-IHM.git",
  },
  {
    title: "Streamusic",
    description: "Application mobile de streaming audio permettant une écoute simultanée et des fonctionnalités collaboratives pour une expérience utilisateur interactive.",
    image: "/notFound.png",
    technologies: ["Kotlin", "Jetpack Compose", "NodeJS", "SocketIO", "Firebase Authentication"],
    liveUrl: "#",
    githubUrl: "https://github.com/Heryn31/Streamusic.git",
  },
  {
    title: "Carlocation",
    description: "Application web de gestion de location de voitures, développée avec deux stacks technologiques différentes.",
    image: "/location.png",
    technologies: ["Spring Boot", "Java", "ExpressJS", "NodeJS", "ReactJS"],
    liveUrl: "#",
    githubUrl: "https://github.com/Heryn31/Project-Spring-Boot---Java.git",
  },
  {
    title: "Blooming",
    description: "Plateforme éducative initiant les enfants à la technologie, avec une interface spécialement conçue pour les jeunes utilisateurs.",
    image: "/notFound.png",
    technologies: ["React", "Express", "TypeScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/SafeZoneProject/frontMyBooming.git",
  },
  {
    title: "Sehatra.com",
    description: "Amélioration de l'interface et de l'expérience utilisateur du site web de l'entreprise avec des pages modernes, intuitives et cohérentes.",
    image: "/sehatra.png",
    technologies: ["Django Rest", "Python", "ReactJS"],
    liveUrl: "#",
    githubUrl: "https://github.com/Heryn31/Stage-Sehatra.git",
  },
];


  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <GlitchText
            text="Projets phares"
            className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-6"
          />
          <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Une sélection de mes réalisations récentes, démontrant mon expertise dans les technologies web modernes.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card border-border hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardContent className="p-6">
                  <h3 className="font-sans text-xl font-semibold text-card-foreground mb-3">{project.title}</h3>
                  <p className="font-serif text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                  {project.githubUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 bg-transparent"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
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
