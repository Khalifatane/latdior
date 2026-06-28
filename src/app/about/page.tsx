"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Award, Leaf, Heart, Target, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "50K+", label: "Clients satisfaits" },
  { value: "500+", label: "Produits" },
  { value: "30+", label: "Pays" },
  { value: "4.9", label: "Note moyenne" },
];

const values = [
  {
    icon: Leaf,
    title: "Durabilité",
    description:
      "Nous privilégions des matériaux écoresponsables et des pratiques durables dans chaque produit que nous créons.",
  },
  {
    icon: Award,
    title: "Qualité",
    description:
      "Chaque produit subit des tests rigoureux pour garantir qu’il respecte nos standards élevés.",
  },
  {
    icon: Heart,
    title: "Le client d'abord",
    description:
      "Votre satisfaction est notre priorité. Nous sommes là pour vous accompagner à chaque étape.",
  },
  {
    icon: Target,
    title: "Innovation",
    description:
      "Nous faisons évoluer nos designs pour vous offrir le meilleur des produits lifestyle modernes.",
  },
];

const team = [
  {
    name: "Aminata Diop",
    role: "Fondatrice & PDG",
    image: "/profil_1.png",
  },
  {
    name: "Cheikh Ndiaye",
    role: "Responsable design",
    image: "/profil_2.png",
  },
  {
    name: "Ibrahima Ba",
    role: "Chef de produit",
    image: "/profil_3.png",
  },
  {
    name: "Mamadou Fall",
    role: "Directeur des opérations",
    image: "/profil_5.png",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop"
            alt="Bannière À propos"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-amber-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
              Notre histoire
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Créer la qualité
              <span className="block text-amber-400">Depuis 2018</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Nous croyons au pouvoir d’un design réfléchi et d’un savoir-faire
              de qualité pour transformer le quotidien.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center text-white">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  className="text-4xl lg:text-5xl font-bold mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-amber-100">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-amber-600 text-sm font-semibold tracking-wider uppercase mb-4 block">
                Notre mission
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Élever le quotidien grâce à un design réfléchi
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Fondée en 2018, Maketbi est née d’une idée simple : créer
                  des produits qui allient harmonieusement fonctionnalité et
                  esthétique. Nous pensons que les objets du quotidien doivent
                  apporter de la joie et améliorer nos vies.
                </p>
                <p>
                  Chaque produit de notre collection est soigneusement
                  sélectionné et testé pour répondre à nos exigences de
                  qualité, de durabilité et d’excellence design. Nous
                  collaborons avec des artisans et fabricants qui partagent
                  notre engagement pour le savoir-faire.
                </p>
                <p>
                  Notre aventure est guidée par une passion pour l’innovation
                  et un profond respect pour nos clients. Nous explorons sans
                  cesse de nouveaux matériaux, technologies et approches de
                  design pour vous offrir des produits qui dépassent vos
                  attentes.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Notre équipe"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Globe className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Global Reach</p>
                    <p className="text-sm text-gray-500">
                      Livraison dans plus de 30 pays
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amber-600 text-sm font-semibold tracking-wider uppercase mb-4 block">
              Ce que nous défendons
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Nos valeurs fondamentales
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-14 w-14 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                  <value.icon className="h-7 w-7 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amber-600 text-sm font-semibold tracking-wider uppercase mb-4 block">
              Les personnes derrière
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Rencontrez notre équipe
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="aspect-square rounded-full overflow-hidden mb-4 mx-auto max-w-[200px]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-amber-600">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Rejoignez notre aventure
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Faites partie de notre communauté. Abonnez-vous pour recevoir des
              nouvelles sur nos produits, des offres exclusives et des contenus
              en coulisses.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 h-14"
            >
              <Link href="/shop">Découvrir nos produits</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
