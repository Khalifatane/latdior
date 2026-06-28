"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  Heart,
  Share2,
  Truck,
  Shield,
  RefreshCw,
  Star,
  ChevronLeft,
  ChevronRight,
  Check,
  Minus,
  Plus,
  ArrowRight,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatFCFA } from '../../../lib/utils';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ProductCard } from "@/components/product/ProductCard";
import type { Product } from "@/types";

type ProductPageClientProps = {
  product: Product;
  relatedProducts: Product[];
};

export default function ProductPageClient({
  product,
  relatedProducts,
}: ProductPageClientProps) {
  const router = useRouter();
  const { addToCart, setIsCartOpen } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : null;

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    addToCart(product, quantity);
    setTimeout(() => {
      setIsAddingToCart(false);
      setIsCartOpen(true);
    }, 300);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    router.push("/checkout");
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-amber-600 transition-colors">
              Accueil
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/shop" className="hover:text-amber-600 transition-colors">
              Boutique
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={product.images[selectedImage]}
                  onError={(e) => {
                    const t = e.currentTarget as HTMLImageElement;
                    t.onerror = null;
                    t.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800"><rect width="100%" height="100%" fill="%23e5e7eb"/><text x="50%" y="50%" font-size="24" dominant-baseline="middle" text-anchor="middle" fill="%23999">No image</text></svg>';
                  }}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}

              {/* Discount Badge */}
              {discount && (
                <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded">
                  -{discount}% DE REMISE
                </div>
              )}
            </motion.div>

            {/* Thumbnail Gallery */}
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 h-20 w-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index
                        ? "border-amber-600"
                        : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - ${index + 1}`}
                      onError={(e) => {
                        const t = e.currentTarget as HTMLImageElement;
                        t.onerror = null;
                        t.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="100%" height="100%" fill="%23e5e7eb"/><text x="50%" y="50%" font-size="12" dominant-baseline="middle" text-anchor="middle" fill="%23999">No image</text></svg>';
                      }}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Category & Rating */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-amber-600 font-medium uppercase tracking-wider">
                {product.category}
              </span>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span className="text-sm font-medium">{product.rating}</span>
                <span className="text-sm text-gray-500">
                  ({product.reviews} avis)
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-gray-900">{formatFCFA(product.price)}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-400 line-through">{formatFCFA(product.originalPrice)}</span>
              )}
              {discount && (
                <span className="text-sm text-green-600 font-medium">
                  Economisez {formatFCFA(product.originalPrice! - product.price)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Features */}
            {product.features && (
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Caracteristiques cles</h3>
                <ul className="space-y-1">
                  {product.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Actions */}
            <div className="space-y-4">
              {/* Quantity */}
              <div className="flex items-center gap-4">
                <span className="font-medium text-gray-900">Quantite</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-50 transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-50 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleAddToCart}
                  className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-3 text-base font-medium"
                  disabled={isAddingToCart}
                >
                  {isAddingToCart ? (
                    "Ajout en cours..."
                  ) : (
                    <>
                      <ShoppingBag className="h-5 w-5 mr-2" />
                      Ajouter au panier
                    </>
                  )}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`px-4 ${
                    isWishlisted
                      ? "text-red-500 border-red-500"
                      : "text-gray-600 border-gray-300"
                  }`}
                >
                  <Heart className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`} />
                </Button>
                <Button
                  variant="outline"
                  className="px-4 text-gray-600 border-gray-300"
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              {/* Buy Now */}
              <Button
                onClick={handleBuyNow}
                className="w-full bg-gray-900 hover:bg-black text-white py-3 text-base font-medium"
              >
                Acheter maintenant
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>

            <Separator />

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-amber-600" />
                Livraison gratuite
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-amber-600" />
                Paiement securise
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="h-5 w-5 text-amber-600" />
                Retours faciles
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="reviews">Avis</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-6">
              <div className="prose max-w-none text-gray-600">
                <p>{product.description}</p>
              </div>
            </TabsContent>
            <TabsContent value="details" className="mt-6">
              <div className="space-y-4 text-gray-600">
                {product.features?.map((detail, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-6">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6">
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(5)].map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className={`h-4 w-4 ${
                            starIndex < 4 ? "fill-amber-400 text-amber-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm">
                      Excellent produit, j&apos;adore la qualite et la durabilite.
                    </p>
                    <p className="text-xs text-gray-400 mt-2">Marie D.</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Produits similaires
              </h2>
              <Link
                href="/shop"
                className="text-amber-600 hover:text-amber-700 transition-colors"
              >
                Voir tout
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
