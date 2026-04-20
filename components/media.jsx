"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Link, Mail } from "lucide-react";
import { GlitchText } from "./glitch-text";

export function Media() {
  return (
    <section className="border relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* CONTENT */}
      <div className="relative text-center px-4 max-w-5xl">

        {/* TITRE (derrière image) */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-title mb-6 relative z-10 flex justify-center"
        >
          <span className="text-[var(--primary)] text-center text-stroke-2 font-bold text-[4rem] sm:text-[8rem] tracking-[-0.1em] leading-none">
           Et bien plus encore...
          </span>
        </motion.h1>

         {/* BUTTONS (devant tout) */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 relative z-30"
            >
              <Button
                variant="outline"
                className="flex items-center gap-2"
              >
                <Link size={20} />
                <GlitchText text="Découvrir sur mon station" />
              </Button>
            </motion.div>


      </div>
    </section>
  );
}
