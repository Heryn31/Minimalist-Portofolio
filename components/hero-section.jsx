"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Link, Mail } from "lucide-react";
import { GlitchText } from "./glitch-text";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

export function HeroSection() {
  const [text, setText] = useState("welcome");

  useEffect(() => {
    const timer = setTimeout(() => {
      setText("name");
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="border relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* IMAGE (milieu) */}
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 0.6 }}
        className="absolute z-20 flex justify-center items-center"
      >
        <motion.img
          whileHover={{ scale: 1.25, y: 20 }}
          src="/profile-photo.png"
          alt="profile"
          className="w-[500px] sm:w-[800px] object-contain"
        />
      </motion.div>

      {/* CONTENT */}
      <div className="relative text-center px-4 max-w-5xl">
        {/* TITRE (derrière image) */}
        <AnimatePresence mode="wait">
          {text === "welcome" ? (
            <motion.h1
              key="welcome"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -80 }}
              transition={{ duration: 0.6 }}
              className="font-title mb-6 relative z-10 flex justify-center"
            >
            <span className="text-[var(--primary)] text-center text-stroke-2 font-bold text-[2rem] sm:text-[16rem] tracking-[-0.1em] leading-none">
                Bienvenue 
              </span>
            </motion.h1>
          ) : (
            <motion.h1
              key="name"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -80 }}
              transition={{ duration: 0.6 }}
              className="font-title mb-6 relative z-10 flex justify-center"
            >
              <span className="text-[var(--primary)] text-center text-stroke-2 font-bold text-[2rem] sm:text-[16rem] tracking-[-0.1em] leading-none">
                Herinantenaina
              </span>
            </motion.h1>
          )}
        </AnimatePresence>

        {/* BUTTONS (devant tout) */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-12 relative z-30"
        >
          <a href="#projects">
            <Button size="lg">
              <Link /> Voir mes projets
            </Button>
          </a>

          <a href="/Herinantenaina.pdf" download>
            <Button size="lg">
              <Download /> Télécharger le CV
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
