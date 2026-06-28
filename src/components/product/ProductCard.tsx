'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatFCFA } from '../../lib/utils';
import { Button } from '@/components/ui/button';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, setIsCartOpen } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    setIsCartOpen(true);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Link href={`/product/${product.slug}`}>
        <div className="relative bg-gray-100 rounded-xl overflow-hidden mb-4 aspect-square">
          {/* Product Image */}
          <img
            src={product.images[0]}
            alt={product.name}
            onError={(e) => {
              const t = e.currentTarget as HTMLImageElement;
              t.onerror = null;
              t.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600"><rect width="100%" height="100%" fill="%23e5e7eb"/><text x="50%" y="50%" font-size="24" dominant-baseline="middle" text-anchor="middle" fill="%23999">No image</text></svg>';
            }}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Discount Badge */}
          {discount && (
            <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
              -{discount}%
            </div>
          )}

          {/* Quick Actions */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
            >
              <Heart className="h-4 w-4 text-gray-600" />
            </button>
          </div>

          {/* Add to Cart Button */}
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <Button
              onClick={handleAddToCart}
              className="w-full bg-white text-gray-900 hover:bg-gray-900 hover:text-white shadow-lg"
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              Ajouter au panier
            </Button>
          </div>

          {/* Out of Stock Overlay */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="bg-white text-gray-900 px-4 py-2 text-sm font-semibold rounded">
                Rupture de stock
              </span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-1">
          {/* Category */}
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            {product.category}
          </p>

          {/* Name */}
          <h3 className="font-medium text-gray-900 group-hover:text-amber-600 transition-colors line-clamp-1">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <span className="text-sm text-gray-600">{product.rating}</span>
            <span className="text-sm text-gray-400">({product.reviews})</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-900">{formatFCFA(product.price)}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">{formatFCFA(product.originalPrice)}</span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
