"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap, Globe, Server, Lightbulb } from "lucide-react";

export function AboutSection() {
  const skills = [
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: "Code Propre",
    description: "Écrire un code clair, maintenable et évolutif selon les bonnes pratiques.",
  },
  {
    icon: <Palette className="w-8 h-8 text-primary" />,
    title: "Design Créatif",
    description: "Concevoir des interfaces esthétiques et centrées sur l’utilisateur.",
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Performance",
    description: "Optimiser chaque projet pour une rapidité et une expérience utilisateur fluide.",
  },
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: "Sites Responsives",
    description: "Adapter les interfaces à tous les écrans pour une navigation intuitive.",
  },
  {
    icon: <Server className="w-8 h-8 text-primary" />,
    title: "Intégration Backend",
    description: "Connecter les interfaces à des API ou des serveurs sécurisés et performants.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-primary" />,
    title: "Résolution de Problèmes",
    description: "Trouver des solutions efficaces et innovantes aux défis techniques.",
  },
];


  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        ></motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-full h-150 rounded-lg overflow-hidden">
                <img
                  src="/profile-photo.png"
                  alt="Professional headshot"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-sans text-5xl font-bold text-foreground">
              <span className="text-[var(--primary)]">D</span>evenir développeur web
            </h3>{" "}
            <h3 className="font-sans text-2xl font-semibold text-foreground">
              C’est avant tout une passion
            </h3>{" "}
            <p className="font-serif text-muted-foreground leading-relaxed">
              {" "}
              J’ai commencé en tant que graphiste, avant de découvrir ma
              véritable passion pour le développement web. Depuis, je crée des
              expériences numériques qui allient esthétique et performance. Je
              crois profondément au pouvoir du bon design pour résoudre des
              problèmes concrets et créer des connexions significatives.{" "}
            </p>{" "}
            <p className="font-serif text-muted-foreground leading-relaxed">
              {" "}
              Lorsque je ne code pas, je m’inspire des nouvelles tendances en
              design, je contribue à des projets open source, ou je savoure un
              bon café tout en esquissant de nouvelles idées.{" "}
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-6 gap-8">
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
                  <h4 className="font-sans text-xl font-semibold text-card-foreground mb-3">
                    {skill.title}
                  </h4>
                  <p className="font-serif text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
