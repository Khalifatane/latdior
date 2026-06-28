"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Scale,
  ShoppingCart,
  Truck,
  RotateCcw,
  Gavel,
} from "lucide-react";

const sections = [
  {
    icon: ShoppingCart,
    title: "Commandes et paiements",
    content: `
      En passant commande sur notre site, vous acceptez ce qui suit :

      - Tous les prix sont indiqués en dollars américains et peuvent changer sans préavis.
      - Nous nous réservons le droit de refuser ou d’annuler toute commande pour quelque raison que ce soit.
      - Le paiement doit être effectué en totalité au moment de l’achat.
      - Nous acceptons les principales cartes de crédit, PayPal et autres moyens de paiement indiqués au paiement.
      - Toutes les transactions sont traitées de manière sécurisée via notre prestataire de paiement.
    `,
  },
  {
    icon: Truck,
    title: "Expédition et livraison",
    content: `
      Nos conditions de livraison sont les suivantes :

      - Nous livrons à l’adresse fournie lors du paiement. Veuillez vérifier son exactitude.
      - Les délais de livraison sont estimatifs et non garantis.
      - Le risque de perte et la propriété des articles vous sont transférés à la livraison.
      - Nous ne sommes pas responsables des retards causés par les douanes ou le transporteur.
      - La livraison gratuite s’applique aux commandes de plus de 100 FCFA aux États-Unis continentaux.
    `,
  },
  {
    icon: RotateCcw,
    title: "Retours et remboursements",
    content: `
      Notre politique de retour est conçue pour garantir votre satisfaction :

      - Les articles peuvent être retournés dans les 30 jours suivant la livraison.
      - Les articles doivent être inutilisés et dans leur emballage d’origine.
      - Les remboursements seront effectués sur le moyen de paiement initial.
      - Les frais de livraison ne sont pas remboursables sauf si le retour est dû à notre erreur.
      - Les articles en promotion peuvent ne pas être éligibles au retour sauf défaut.
    `,
  },
  {
    icon: Scale,
    title: "Descriptions des produits",
    content: `
      Nous visons l’exactitude de toutes les informations produit :

      - Nous faisons tout notre possible pour afficher correctement les couleurs et images.
      - Nous ne garantissons pas que les descriptions produits soient exactes, complètes ou exemptes d’erreurs.
      - Si un produit ne correspond pas à sa description, votre seul recours est de le retourner inutilisé.
      - Les spécifications et fonctionnalités peuvent être modifiées par les fabricants.
    `,
  },
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
            <Scale className="h-16 w-16 text-amber-600 mx-auto mb-6" />
            <span className="text-amber-600 text-sm font-semibold tracking-wider uppercase mb-4 block">
              Informations légales
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Conditions d’utilisation
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Veuillez lire attentivement ces conditions avant d’utiliser notre
              site ou d’effectuer un achat.
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
          {/* Agreement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-12"
          >
            <div className="flex items-start gap-4">
              <Gavel className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Acceptation des conditions
                </h3>
                <p className="text-gray-600 text-sm">
                  En accédant à notre site ou en l’utilisant, vous acceptez
                  d’être lié par ces conditions d’utilisation. Si vous n’êtes
                  pas d’accord avec une partie des conditions, vous ne pouvez
                  pas accéder au site ni utiliser nos services.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-10 w-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <section.icon className="h-5 w-5 text-amber-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {section.title}
                  </h2>
                </div>
                <div className="pl-14 text-gray-600 whitespace-pre-line">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Account Responsibilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Responsabilités du compte
            </h2>
            <p className="text-gray-600 mb-4">
              Lorsque vous créez un compte, vous devez fournir des informations
              exactes et complètes. Vous êtes responsable de :
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="h-2 w-2 bg-amber-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                <span>
                  Maintenir la confidentialité du mot de passe de votre compte
                </span>
              </li>
              <li className="flex items-start">
                <span className="h-2 w-2 bg-amber-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                <span>Restreindre l’accès à votre ordinateur ou appareil</span>
              </li>
              <li className="flex items-start">
                <span className="h-2 w-2 bg-amber-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                <span>Assumer la responsabilité de toutes les activités liées à votre compte</span>
              </li>
              <li className="flex items-start">
                <span className="h-2 w-2 bg-amber-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                <span>Nous informer immédiatement de toute utilisation non autorisée</span>
              </li>
            </ul>
          </motion.div>

          {/* Intellectual Property */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Propriété intellectuelle
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Tout le contenu de ce site, y compris les textes, graphiques,
              logos, images et logiciels, est la propriété de Maketbi ou de
              ses fournisseurs de contenu et est protégé par le droit d’auteur
              et d’autres lois sur la propriété intellectuelle. Vous ne pouvez
              pas reproduire, distribuer, modifier ou créer des œuvres dérivées
              sans notre autorisation écrite expresse.
            </p>
          </motion.div>

          {/* Limitation of Liability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Limitation de responsabilité
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Maketbi ne pourra être tenue responsable des dommages
              indirects, accessoires, spéciaux, consécutifs ou punitifs
              résultant de l’utilisation ou de l’impossibilité d’utiliser nos
              services. Notre responsabilité totale ne dépassera pas le montant
              que vous avez payé pour le produit ou service concerné.
            </p>
          </motion.div>

          {/* Governing Law */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Droit applicable
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Les présentes conditions sont régies et interprétées conformément
              aux lois de l’État de New York, sans égard à ses règles de
              conflit de lois. Tout litige sera résolu par les tribunaux du
              comté de New York, État de New York.
            </p>
          </motion.div>

          {/* Changes to Terms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Modifications des conditions
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Nous nous réservons le droit de modifier ces conditions à tout
              moment. Nous vous informerons des changements importants en
              publiant les nouvelles conditions sur cette page et en mettant à
              jour la date de "Dernière mise à jour". Votre utilisation
              continue du site après les changements vaut acceptation des
              nouvelles conditions.
            </p>
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
                <FileText className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-semibold">Des questions ?</h2>
            </div>
            <p className="text-gray-400 mb-4">
              Si vous avez des questions sur ces conditions d’utilisation,
              contactez-nous :
            </p>
            <div className="space-y-2 text-gray-300">
              <p>Email : legal@luxemarket.com</p>
              <p>Adresse : 123 Design Street, New York, NY 10001</p>
              <p>Téléphone : +1 (555) 123-4567</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
