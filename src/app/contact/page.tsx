"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "contact@saintlouisshoes.sn",
    description: "Nous répondons sous 24 heures",
  },
  {
    icon: Phone,
    title: "Téléphone",
    content: "+221 77 875 63 16",
    description: "Lun–Sam : 9h–19h",
  },
  {
    icon: MapPin,
    title: "Boutique",
    content: "Avenue Général de Gaulle",
    description: "Île de Saint-Louis, Sénégal",
  },
  {
    icon: Clock,
    title: "Horaires",
    content: "Lun - Ven : 9h - 18h",
    description: "Sam - Dim : Fermé",
  },
];

const faqs = [
  {
    question: "Combien de temps prend la livraison ?",
    answer:
      "La livraison standard prend 5 à 7 jours ouvrés. La livraison express (2 à 3 jours ouvrés) est disponible au paiement avec des frais supplémentaires.",
  },
  {
    question: "Quelle est votre politique de retour ?",
    answer:
      "Nous offrons une politique de retour de 30 jours pour les articles non utilisés dans leur emballage d’origine. Retours gratuits sur toutes les commandes.",
  },
  {
    question: "Expédiez-vous à l’international ?",
    answer:
      "Oui, nous livrons dans plus de 30 pays. Les tarifs et délais internationaux varient selon la destination.",
  },
  {
    question: "Comment puis-je suivre ma commande ?",
    answer:
      "Une fois votre commande expédiée, vous recevrez un email avec un numéro de suivi. Vous pourrez suivre votre colis sur notre site ou celui du transporteur.",
  },
];

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-amber-600 text-sm font-semibold tracking-wider uppercase mb-4 block">
              Contactez-nous
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nous aimerions avoir de vos nouvelles
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une question, un avis, ou juste envie de dire bonjour ? Notre
              équipe est là pour vous aider et vous répondra dès que possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center"
              >
                <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {info.title}
                </h3>
                <p className="text-amber-600 font-medium mb-1">
                  {info.content}
                </p>
                <p className="text-sm text-gray-500">{info.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Envoyez-nous un message
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
                >
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    Message envoyé !
                  </h3>
                  <p className="text-green-600">
                    Merci de nous avoir contactés. Nous vous répondrons sous
                    24 heures.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Votre nom</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jean Dupont"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Adresse email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jean@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Comment pouvons-nous vous aider ?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Dites-nous en plus sur votre demande..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-700 h-12"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=450&fit=crop"
                  alt="Carte de localisation"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* FAQs */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Questions fréquentes
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4">
                      <h4 className="font-medium text-gray-900 mb-2">
                        {faq.question}
                      </h4>
                      <p className="text-sm text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Suivez-nous
            </h2>
            <p className="text-gray-600 mb-8">
              Suivez-nous sur les réseaux sociaux pour les dernières
              actualités, les coulisses et des offres exclusives.
            </p>
            <div className="flex justify-center gap-4">
              {["Instagram", "Twitter", "Facebook", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md hover:bg-amber-600 hover:text-white transition-all text-gray-600"
                >
                  <span className="text-xs font-medium">{social[0]}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
