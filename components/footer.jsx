"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/Heryn31", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/heryn31/", label: "LinkedIn" },
    { icon: <Mail size={20} />, href: "mailto:herynnantenaina31@gmail.com", label: "Email" },
  ]

  return (
    <footer className="bg-card w-full border-t border-border">
      <div className="mx-auto px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Logo */}
          <div className="mb-8">
            <h3 className="font-sans text-2xl font-bold text-card-foreground">heryn.</h3>
            <p className="font-serif text-muted-foreground mt-2">Développeur web</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-8 border-border"
          >
            <p className="font-serif text-muted-foreground flex items-center justify-center gap-2">
              © 2026 Heryn . Tout droits réservé.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
