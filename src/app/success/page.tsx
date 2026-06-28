"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Package, Mail, ShoppingBag, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

export default function Page() {
  const { clearCart } = useCart();
  const [orderNumber, setOrderNumber] = useState("");

  useEffect(() => {
    setOrderNumber(`LM${Date.now().toString(36).toUpperCase()}`);
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 text-center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="h-24 w-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="h-12 w-12 text-green-600" />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
          >
            Commande confirmée !
          </motion.h1>

          {/* Message */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          className="text-gray-600 text-lg mb-8"
          >
            Merci pour votre achat. Votre commande a été reçue et est en cours
            de traitement.
          </motion.p>

          {/* Order Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gray-50 rounded-xl p-6 mb-8"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="text-left">
                <p className="text-sm text-gray-500 mb-1">Numéro de commande</p>
                <p className="text-lg font-semibold text-gray-900">
                  {orderNumber}
                </p>
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-500 mb-1">Livraison estimée</p>
                <p className="text-lg font-semibold text-gray-900">
                  {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString(
                    "fr-FR",
                    {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    }
                  )}
                </p>
              </div>
            </div>
          </motion.div>

          {/* What's Next */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Que se passe-t-il ensuite ?
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-4 bg-amber-50 rounded-lg">
                <Mail className="h-6 w-6 text-amber-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">
                  Vous recevrez bientôt un email de confirmation
                </p>
              </div>
              <div className="p-4 bg-amber-50 rounded-lg">
                <Package className="h-6 w-6 text-amber-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">
                  Nous vous informerons lorsque votre commande sera expédiée
                </p>
              </div>
              <div className="p-4 bg-amber-50 rounded-lg">
                <ShoppingBag className="h-6 w-6 text-amber-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">
                  Suivez l’état de votre commande à tout moment
                </p>
              </div>
            </div>
          </motion.div>

          {/* Receipt Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-gray-50 rounded-xl p-6 mb-8"
          >
            <div className="flex items-start gap-4">
              <Mail className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
              <div className="text-left">
                <p className="font-medium text-gray-900 mb-1">
                  Un reçu a été envoyé à votre email
                </p>
                <p className="text-sm text-gray-600">
                  Consultez votre boîte de réception pour un reçu détaillé de
                  votre achat. S’il n’apparaît pas, vérifiez vos spams.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 h-12 px-8"
            >
              <Link href="/shop">
                <ShoppingBag className="h-5 w-5 mr-2" />
                Continuer vos achats
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8">
              <Link href="/">
                <Home className="h-5 w-5 mr-2" />
                Retour à l’accueil
              </Link>
            </Button>
          </motion.div>

          {/* Support */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          className="mt-8 text-sm text-gray-500"
          >
            Des questions sur votre commande ?{" "}
            <Link
              href="/contact"
              className="text-amber-600 hover:text-amber-700 font-medium"
            >
              Contacter notre équipe support
            </Link>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
