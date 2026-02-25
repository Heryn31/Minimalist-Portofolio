"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { GlitchText } from "./glitch-text";
import Image from "next/image";
import {toast} from "sonner"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();

      toast.success("Message envoyé avec succès !");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast.error("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "herynnantenaina31@gmail.com",
      value: "herynnantenaina31@gmail.com",
      link: "mailto:herynnantenaina31@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "+261 34 30 509 71",
      value: "+261 34 30 509 71",
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Antsirabe, Antananarivo, Madagascar",
      value: "Antsirabe, Antananarivo, Madagascar",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <GlitchText
            text="Contactez-moi"
            className="font-title text-4xl md:text-8xl font-bold text-foreground mb-6"
          />

          <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Prenez contact avec moi pour discuter de vos projets, collaborations
            ou toute autre opportunité passionnante.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto flex justify-center items-center">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <p className="font-serif text-muted-foreground leading-relaxed mb-8">
                Je suis toujours intéressé par de nouvelles opportunités et des
                projets passionnants. Que vous ayez une question ou que vous
                souhaitiez simplement me dire bonjour, je ferai de mon mieux
                pour vous répondre !
              </p>
            </div>

            <div className="grid grid-rows-3 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a href={info.link} className="block group">
                    <div className="bg-card border border-border rounded-lg p-4 h-24 flex flex-col items-center justify-center hover:shadow-lg hover:border-primary/50 transition-all duration-300 group-hover:scale-105">
                      <div className="mb-2 group-hover:text-primary transition-colors">
                        {info.icon}
                      </div>
                      <span className="font-sans text-xs font-medium text-card-foreground group-hover:text-primary transition-colors text-center">
                        {info.title}
                      </span>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card border-border shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-serif text-sm font-medium text-card-foreground mb-2"
                      >
                        Nom
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-input border-border focus:ring-primary focus:border-primary"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block font-serif text-sm font-medium text-card-foreground mb-2"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-input border-border focus:ring-primary focus:border-primary"
                        placeholder="Votre email"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block font-serif text-sm font-medium text-card-foreground mb-2"
                    >
                      Sujet
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-input border-border focus:ring-primary focus:border-primary"
                      placeholder="Sujet du message"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-serif text-sm font-medium text-card-foreground mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-input border-border focus:ring-primary focus:border-primary resize-none"
                      placeholder="Votre message ici..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="lg"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {loading ? "Envoi..." : "Envoyer le message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
