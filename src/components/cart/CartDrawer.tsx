'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { formatFCFA } from '../../lib/utils';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';

export function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col p-6">
        <SheetHeader className="space-y-2.5 px-0 pt-0 pb-4">
          <SheetTitle className="flex items-center text-xl">
            <ShoppingBag className="h-5 w-5 mr-2" />
            Votre panier ({items.length})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="h-24 w-24 bg-gray-100 rounded-full flex items-center justify-center mb-6"
            >
              <ShoppingBag className="h-10 w-10 text-gray-400" />
            </motion.div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Votre panier est vide
            </h3>
            <p className="text-gray-500 text-sm mb-6 max-w-xs">
              Il semble que vous n'ayez encore rien ajouté à votre panier. Découvrez nos produits et trouvez votre coup de cœur !
            </p>
            <Button
              onClick={() => setIsCartOpen(false)}
              asChild
              className="bg-amber-600 hover:bg-amber-700"
            >
              <Link href="/shop">
                Commencer vos achats
              </Link>
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 pr-2">
              <div className="space-y-6">
                <AnimatePresence mode="popLayout">
                  {items.map((item) => (
                    <motion.div
                      key={item.product.id}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="flex gap-4"
                    >
                      {/* Product Image */}
                      <Link
                        href={`/product/${item.product.slug}`}
                        onClick={() => setIsCartOpen(false)}
                        className="flex-shrink-0"
                      >
                        <div className="h-20 w-20 bg-gray-100 rounded-lg overflow-hidden">
                          <img
                            src={item.product.images[0]}
                            alt={item.product.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </Link>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <Link
                          href={`/product/${item.product.slug}`}
                          onClick={() => setIsCartOpen(false)}
                          className="block"
                        >
                          <h4 className="text-sm font-medium text-gray-900 truncate hover:text-amber-600 transition-colors">
                            {item.product.name}
                          </h4>
                        </Link>
                        <p className="text-sm text-gray-500 mt-0.5">{formatFCFA(item.product.price)}</p>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center border border-gray-200 rounded-md">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="h-7 w-7 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="h-7 w-8 flex items-center justify-center text-sm font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="h-7 w-7 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>

                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      {/* Item Total */}
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">{formatFCFA(item.product.price * item.quantity)}</p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </ScrollArea>

            <div className="border-t border-gray-200 pt-4 mt-4 space-y-4">
              {/* Subtotal */}
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Sous-total</span>
                <span className="font-medium text-gray-900">{formatFCFA(totalPrice)}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Livraison</span>
                <span className="font-medium text-gray-900">
                  {totalPrice >= 100 ? 'Gratuite' : formatFCFA(9.99)}
                </span>
              </div>

              <Separator />

              {/* Total */}
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold text-gray-900">Total</span>
                <span className="text-xl font-bold text-gray-900">{formatFCFA(totalPrice + (totalPrice >= 100 ? 0 : 9.99))}</span>
                
              </div>

              {/* Checkout Buttons */}
              <div className="space-y-2">
                <Button
                  className="w-full bg-amber-600 hover:bg-amber-700 h-12 text-base"
                  asChild
                >
                  <Link href="/checkout" onClick={() => setIsCartOpen(false)}>
                    Passer commande
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full h-12"
                  onClick={() => setIsCartOpen(false)}
                  asChild
                >
                  <Link href="/shop">
                    Continuer vos achats
                  </Link>
                </Button>
              </div>

              {/* Clear Cart */}
              {items.length > 0 && (
                <button
                  onClick={clearCart}
                  className="w-full text-center text-sm text-gray-500 hover:text-red-500 transition-colors"
                >
                  Vider le panier
                </button>
              )}
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
