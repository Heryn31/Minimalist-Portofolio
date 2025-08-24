"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import { GlitchText } from "./glitch-text"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      {/* Left side - Portfolio in Japanese */}
      <motion.div
        className="absolute left-8 top-1/2 transform -translate-y-1/2 flex flex-col items-center z-20"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="w-px h-16 bg-foreground/30 mb-4"></div>
        <div className="writing-mode-vertical text-foreground/70 font-sans text-lg tracking-wider">ポートフォリオ</div>
        <div className="w-px h-16 bg-foreground/30 mt-4"></div>
      </motion.div>

      {/* Right side - Developer in Japanese */}
      <motion.div
        className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col items-center z-20"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="w-px h-16 bg-foreground/30 mb-4"></div>
        <div className="writing-mode-vertical text-foreground/70 font-sans text-lg tracking-wider">デベロッパー</div>
        <div className="w-px h-16 bg-foreground/30 mt-4"></div>
      </motion.div>

      <div className="container mx-auto px-4 text-center relative z-30">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto relative z-10 py-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <GlitchText
              text="Herinantenaina Arnaud Michael"
              className="font-sans text-5xl md:text-7xl font-bold text-foreground mb-6"
            />
          </motion.div>

          <motion.p
            className="font-serif text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Full stack JavaScript developer
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              View My Work
            </Button>
            <Button variant="outline" size="lg">
              Download CV
            </Button>
          </motion.div>

          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
