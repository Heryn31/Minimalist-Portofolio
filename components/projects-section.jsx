"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { GlitchText } from "./glitch-text"

export function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Modern e-commerce solution built with Next.js, featuring real-time inventory, payment processing, and admin dashboard.",
      image: "/modern-ecommerce-interface.png",
      technologies: ["Next.js", "TypeScript", "Stripe", "Prisma"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, team collaboration, and project tracking.",
      image: "/task-management-dashboard.png",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Responsive portfolio website for a creative agency, featuring smooth animations and optimized performance.",
      image: "/creative-agency-portfolio.png",
      technologies: ["React", "Framer Motion", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with location-based forecasts, charts, and weather alerts.",
      image: "/preview/project4.png",
      technologies: ["Vue.js", "Chart.js", "Weather API"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Social Media App",
      description:
        "Full-stack social media application with user authentication, real-time messaging, and content sharing.",
      image: "/social-media-app-interface.png",
      technologies: ["React Native", "Firebase", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Learning Platform",
      description: "Online learning platform with course management, progress tracking, and interactive quizzes.",
      image: "/online-learning-platform.png",
      technologies: ["Next.js", "Supabase", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

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
            text="Featured Projects"
            className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-6"
          />
          <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A showcase of my recent work, demonstrating expertise in modern web technologies
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
                    <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
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
