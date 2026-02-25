"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { GlitchText } from "./glitch-text";

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
        <div className="writing-mode-vertical text-[var(--primary)]/70 text-lg tracking-wider">
          ポートフォリオ
        </div>
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
        <div className="writing-mode-vertical text-[var(--primary)]/70 text-lg tracking-wider">
          デベロッパー
        </div>
        <div className="w-px h-16 bg-foreground/30 mt-4"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 items-center">
        
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
              <h1 className="font-title mb-6">
                <span className="text-[var(--primary)] font-bold text-xl sm:text-8xl tracking-tighter">
                  Herinantenaina
                </span>
              </h1>
            </motion.div>

            <motion.p
              className="font-title font-bold text-xl sm:text-4xl mb-8 leading-relaxed tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Arnaud Michael
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button size="lg" variant={"ghost"}>
                Voir mes travails
              </Button>
              <a href="/Herinantenaina.pdf" download="Herinantenaina.pdf">
                <Button variant="default" size="lg">
                  <Download /> Télécharger le CV
                </Button>
              </a>
            </motion.div>

            <motion.div
              className="flex justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <a
                href="https://github.com/Heryn31"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/heryn31/"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:herynnantenaina31@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <div className="w-full h-100 overflow-hidden">
              <img
                src="/profile-photo.png"
                alt="Professional headshot"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
