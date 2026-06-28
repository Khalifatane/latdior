"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  XCircle,
  ShoppingBag,
  ArrowLeft,
  HelpCircle,
  CreditCard,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 text-center"
        >
          {/* Cancel Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="h-24 w-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <XCircle className="h-12 w-12 text-amber-600" />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
          >
            Commande annulée
          </motion.h1>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <p className="text-gray-600 text-lg">
              Votre commande a été annulée et aucun débit n’a été effectué sur
              votre compte.
            </p>
            <p className="text-gray-500">
              Si vous avez rencontré un problème lors du paiement ou si vous
              avez des questions, n’hésitez pas à contacter notre équipe
              support.
            </p>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid sm:grid-cols-2 gap-4 my-8"
          >
            <div className="p-6 bg-gray-50 rounded-xl">
              <CreditCard className="h-8 w-8 text-amber-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Aucun débit effectué
              </h3>
              <p className="text-sm text-gray-600">
                Votre moyen de paiement n’a pas été débité pour cette commande annulée.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <ShoppingBag className="h-8 w-8 text-amber-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Panier sauvegardé</h3>
              <p className="text-sm text-gray-600">
                Vos articles sont toujours dans votre panier si vous souhaitez
                réessayer.
              </p>
            </div>
          </motion.div>

          {/* Common Issues */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-amber-50 rounded-xl p-6 mb-8 text-left"
          >
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="h-5 w-5 text-amber-600" />
              <h3 className="font-semibold text-gray-900">Problèmes courants</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-medium">-</span>
                <span>Le paiement a été refusé par votre banque ou l’émetteur de la carte</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-medium">-</span>
                <span>La session a expiré pendant le paiement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-medium">-</span>
                <span>Problèmes de navigateur ou de connexion</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-medium">-</span>
                <span>Vous avez choisi d’annuler la commande</span>
              </li>
            </ul>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 h-12 px-8"
            >
              <Link href="/shop">
                <ShoppingBag className="h-5 w-5 mr-2" />
                Retour à la boutique
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8">
              <Link href="/contact">
                <HelpCircle className="h-5 w-5 mr-2" />
                Contacter le support
              </Link>
            </Button>
          </motion.div>

          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8"
          >
            <Link
              href="/"
              className="inline-flex items-center text-gray-500 hover:text-amber-600 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à l’accueil
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
