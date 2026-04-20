"use client";

import { motion } from "framer-motion";

export function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="font-title mb-6 relative z-10 flex justify-center"
      >
        <span className="text-white text-center text-stroke-2 font-bold text-[2rem] sm:text-[16rem] tracking-[-0.1em] leading-none">
          Chargement...
        </span>
      </motion.div>
    </div>
  );
}
