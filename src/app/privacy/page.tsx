"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Cookie, Mail } from "lucide-react";

const sections = [
  {
    icon: FileText,
    title: "Informations que nous collectons",
    content: `
      Nous collectons les informations que vous nous fournissez directement lorsque vous :

      - Créez un compte ou effectuez un achat
      - Vous inscrivez à notre newsletter
      - Contactez notre service client
      - Participez à des enquêtes ou promotions

      Cela peut inclure votre nom, adresse email, adresse de livraison,
      informations de paiement et numéro de téléphone.
    `,
  },
  {
    icon: Eye,
    title: "Comment nous utilisons vos informations",
    content: `
      Nous utilisons les informations collectées pour :

      - Traiter et honorer vos commandes
      - Communiquer avec vous au sujet de vos commandes et de votre compte
      - Vous envoyer des communications marketing (avec votre consentement)
      - Améliorer notre site et nos services
      - Détecter et prévenir la fraude
      - Respecter nos obligations légales
    `,
  },
  {
    icon: Lock,
    title: "Comment nous protégeons vos informations",
    content: `
      Nous mettons en œuvre des mesures techniques et organisationnelles
      appropriées pour protéger vos informations personnelles :

      - Chiffrement SSL pour toutes les transmissions de données
      - Traitement sécurisé des paiements via Stripe
      - Audits et évaluations de sécurité réguliers
      - Accès limité aux informations personnelles
      - Formation des employés à la protection des données
    `,
  },
  {
    icon: Cookie,
    title: "Cookies et suivi",
    content: `
      Nous utilisons des cookies et des technologies similaires pour :

      - Mémoriser vos préférences et paramètres
      - Comprendre comment vous utilisez notre site
      - Personnaliser votre expérience d’achat
      - Proposer des publicités ciblées

      Vous pouvez contrôler les cookies via les paramètres de votre navigateur.
    `,
  },
];

const rights = [
  "Accéder à vos informations personnelles",
  "Corriger des informations inexactes",
  "Demander la suppression de vos informations",
  "Vous opposer à certains traitements",
  "Retirer votre consentement à tout moment",
  "Portabilité des données",
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
            <Shield className="h-16 w-16 text-amber-600 mx-auto mb-6" />
            <span className="text-amber-600 text-sm font-semibold tracking-wider uppercase mb-4 block">
              Votre vie privée compte
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Politique de confidentialité
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nous nous engageons à protéger vos informations personnelles et à
              faire preuve de transparence sur leur utilisation.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Dernière mise à jour :{" "}
              {new Date().toLocaleDateString("fr-FR", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none mb-16"
          >
            <p className="text-gray-600 leading-relaxed">
              Chez Maketbi, nous prenons votre vie privée très au sérieux.
              Cette politique de confidentialité explique comment nous
              collectons, utilisons, divulguons et protégeons vos informations
              lorsque vous visitez notre site ou effectuez un achat. Veuillez
              lire attentivement cette politique. Si vous n’acceptez pas ses
              termes, veuillez ne pas accéder au site.
            </p>
          </motion.div>

          {/* Policy Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <section.icon className="h-6 w-6 text-amber-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {section.title}
                  </h2>
                </div>
                <div className="text-gray-600 whitespace-pre-line">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Your Rights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Vos droits en matière de confidentialité
            </h2>
            <p className="text-gray-600 mb-6">
              Selon votre localisation, vous pouvez disposer des droits
              suivants concernant vos informations personnelles :
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {rights.map((right) => (
                <div
                  key={right}
                  className="flex items-center bg-amber-50 p-4 rounded-lg"
                >
                  <Lock className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{right}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Data Retention */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Conservation des données
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Nous conservons vos informations personnelles aussi longtemps que
              nécessaire pour atteindre les objectifs décrits dans cette
              politique, sauf si une durée de conservation plus longue est
              requise ou autorisée par la loi. Lorsque nous n’en avons plus
              besoin, nous les supprimons ou anonymisons de manière sécurisée.
            </p>
          </motion.div>

          {/* Third Parties */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Services tiers
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Nous pouvons partager vos informations avec des prestataires
              tiers de confiance qui nous aident à exploiter notre site, à mener
              nos activités ou à vous servir. Cela inclut :
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="h-2 w-2 bg-amber-600 rounded-full mr-3" />
                Prestataires de paiement (Stripe)
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-amber-600 rounded-full mr-3" />
                Partenaires d’expédition et de traitement
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-amber-600 rounded-full mr-3" />
                Services de marketing par email
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-amber-600 rounded-full mr-3" />
                Fournisseurs d’analytique
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gray-900 rounded-2xl p-8 text-white"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 bg-amber-600 rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-semibold">Contactez-nous</h2>
            </div>
            <p className="text-gray-400 mb-4">
              Si vous avez des questions sur cette politique de confidentialité
              ou nos pratiques en matière de données, contactez-nous :
            </p>
            <div className="space-y-2 text-gray-300">
              <p>Email : privacy@luxemarket.com</p>
              <p>Adresse : 123 Design Street, New York, NY 10001</p>
              <p>Téléphone : +1 (555) 123-4567</p>
            </div>
          </motion.div>

          {/* Changes to Policy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Modifications de cette politique
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Nous pouvons mettre à jour cette politique de confidentialité de
              temps à autre. Nous vous informerons des changements en publiant
              la nouvelle version sur cette page et en mettant à jour la date
              de &quot;Dernière mise à jour&quot;. Nous vous conseillons de la consulter
              régulièrement.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
