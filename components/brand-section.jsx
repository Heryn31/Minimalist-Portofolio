"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

const brands = [
  { name: "PHP", logo: "/brands/PHP.png" },
  { name: "PYTHON", logo: "/brands/PYTHON.png" },
  { name: "JAVASCRIPT", logo: "/brands/JAVASCRIPT.png" },
  { name: "TYPESCRIPT", logo: "/brands/TYPESCRIPT.png" },
  { name: "REACT", logo: "/brands/REACT.png" },
  { name: "NEXT", logo: "/brands/NEXT.png" },
  { name: "EXPRESS", logo: "/brands/EXPRESS.png" },
  { name: "LARAVEL", logo: "/brands/LARAVEL.jpeg" },
  { name: "DJANGO", logo: "/brands/DJANGO.png" },
  { name: "SPRING", logo: "/brands/SPRING.png" },
  { name: "KOTLIN", logo: "/brands/KOTLIN.png" },
  { name: "MYSQL", logo: "/brands/MYSQL.png" },
  { name: "POSTGRES", logo: "/brands/POSTGRES.png" },
  { name: "FIREBASE", logo: "/brands/FIREBASE.png" },
  { name: "DOCKER", logo: "/brands/DOCKER.png" },
  { name: "CODE", logo: "/brands/CODE.png" },
  { name: "MINT", logo: "/brands/MINT.png" },
]

export function BrandSection() {
  return (
    <section className="relative w-full overflow-hidden py-16">

      {/* Mask gradient (shadcn friendly) */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />

        {/* Marquee */}
        <motion.div
          className="flex w-max gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...brands, ...brands].map((brand, index) => (
            <Card
              key={index}
              className={cn(
                "flex items-center justify-center",
                "border-border/60 bg-card/50 backdrop-blur",
                "transition-all hover:bg-card hover:shadow-sm"
              )}
            >
              <CardContent className="flex h-16 w-32 items-center justify-center p-4">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-16 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                  loading="lazy"
                />
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}