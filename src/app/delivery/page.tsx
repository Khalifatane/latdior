"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Truck,
  Package,
  Clock,
  MapPin,
  Check,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const shippingOptions = [
  {
    name: "Livraison standard",
    price: "Gratuit",
    minPrice: 100,
    time: "5 à 7 jours ouvrés",
    description: "Gratuite pour les commandes de plus de 100 FCFA, sinon 9.99 FCFA",
    features: [
      "Suivi inclus",
      "Livraison à domicile",
      "Assurance incluse",
    ],
  },
  {
    name: "Livraison express",
    price: "19.99 FCFA",
    time: "2 à 3 jours ouvrés",
    description: "Livraison rapide pour les commandes urgentes",
    features: ["Traitement prioritaire", "Suivi en temps réel", "Signature requise"],
  },
  {
    name: "Livraison le lendemain",
    price: "29.99 FCFA",
    time: "1 jour ouvré",
    description: "Commandez avant 14h pour une livraison le lendemain",
    features: ["Livraison garantie le lendemain", "Option livraison le matin", "Support premium"],
  },
];

const deliverySteps = [
  {
    icon: Package,
    title: "Traitement de la commande",
    description: "Nous préparons et emballons votre commande sous 24 heures.",
  },
  {
    icon: Truck,
    title: "Expédié",
    description: "Votre commande est en route avec un suivi.",
  },
  {
    icon: MapPin,
    title: "En cours de livraison",
    description: "Votre colis est avec le transporteur local.",
  },
  {
    icon: Check,
    title: "Livré",
    description: "Votre commande a bien été livrée.",
  },
];

const internationalZones = [
  { zone: "Amérique du Nord", time: "5 à 10 jours ouvrés", cost: "À partir de 15 FCFA" },
  { zone: "Europe", time: "7 à 14 jours ouvrés", cost: "À partir de 20 FCFA" },
  { zone: "Asie-Pacifique", time: "10 à 20 jours ouvrés", cost: "À partir de 25 FCFA" },
  { zone: "Reste du monde", time: "14 à 30 jours ouvrés", cost: "À partir de 35 FCFA" },
];

export default function Page() {
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
              Informations de livraison
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Livraison & retours
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une livraison rapide et fiable, des retours simplifiés. Nous
              voulons que vous aimiez votre achat.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Shipping Options */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Options de livraison
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choisissez le mode de livraison qui vous convient le mieux.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {shippingOptions.map((option, index) => (
              <motion.div
                key={option.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 rounded-xl border-2 ${
                  index === 0
                    ? "border-amber-600 bg-amber-50"
                    : "border-gray-200 bg-white"
                }`}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {option.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span
                    className={`text-3xl font-bold ${
                      index === 0 ? "text-amber-600" : "text-gray-900"
                    }`}
                  >
                    {option.price}
                  </span>
                  {option.minPrice && (
                    <span className="text-sm text-gray-500">
                      pour les commandes de ${option.minPrice}+
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                  <Clock className="h-4 w-4" />
                  {option.time}
                </div>
                <ul className="space-y-2">
                  {option.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comment fonctionne la livraison
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Suivez votre commande à chaque étape.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {deliverySteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="h-16 w-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-amber-600" />
                </div>
                <div className="text-amber-600 font-semibold mb-2">
                  Étape {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* International Shipping */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-amber-600 text-sm font-semibold tracking-wider uppercase mb-4 block">
                Livraison internationale
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nous livrons partout
              </h2>
              <p className="text-gray-600 mb-8">
                Où que vous soyez, nous pouvons vous livrer. Nous expédions
                actuellement dans plus de 30 pays avec des transporteurs
                internationaux fiables.
              </p>

              <div className="overflow-hidden rounded-xl border">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                        Région
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                        Délai
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                        À partir de
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {internationalZones.map((zone) => (
                      <tr key={zone.zone}>
                        <td className="px-4 py-3 text-sm text-gray-900">
                          {zone.zone}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          {zone.time}
                        </td>
                        <td className="px-4 py-3 text-sm text-amber-600 font-medium">
                          {zone.cost}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=800&fit=crop"
                  alt="Livraison internationale"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Returns Section */}
      <section className="py-16 lg:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-amber-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
                Retours simplifiés
              </span>
              <h2 className="text-3xl font-bold mb-6">Politique de retour de 30 jours</h2>
              <p className="text-gray-400 mb-8">
                Pas entièrement satisfait ? Aucun souci. Nous offrons des
                retours gratuits dans les 30 jours suivant la livraison pour
                tous les articles non utilisés dans leur emballage d’origine.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Retours gratuits sur toutes les commandes",
                  "Remboursement complet sur le mode de paiement initial",
                  "Processus de retour en ligne simple",
                  "Échanges possibles pour d’autres tailles/couleurs",
                ].map((item) => (
                  <div key={item} className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900"
              >
                <Link href="/contact">
                  Démarrer un retour
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-800 p-8 rounded-2xl"
            >
              <h3 className="text-xl font-semibold mb-6">
                Comment retourner un article
              </h3>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Initier le retour",
                    description:
                      "Connectez-vous à votre compte et sélectionnez la commande à retourner.",
                  },
                  {
                    step: "2",
                    title: "Emballez votre article",
                    description:
                      "Placez l’article non utilisé dans son emballage d’origine.",
                  },
                  {
                    step: "3",
                    title: "Renvoyez-le",
                    description: "Utilisez l’étiquette de retour prépayée fournie.",
                  },
                  {
                    step: "4",
                    title: "Obtenir un remboursement",
                    description:
                      "Recevez votre remboursement sous 5 à 7 jours ouvrés.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="h-8 w-8 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-semibold">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <AlertCircle className="h-12 w-12 text-amber-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Des questions sur la livraison ?
            </h2>
            <p className="text-gray-600 mb-8">
              Notre équipe support est là pour vous aider. Contactez-nous et
              nous vous répondrons sous 24 heures.
            </p>
            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <Link href="/contact">Contacter le support</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
