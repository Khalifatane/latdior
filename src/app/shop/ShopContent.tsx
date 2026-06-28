"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SlidersHorizontal,
  Grid3X3,
  LayoutList,
  ChevronDown,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProductCard } from "@/components/product/ProductCard";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import type { Product } from "@/types";

const sortOptions = [
  { label: "En vedette", value: "featured" },
  { label: "Prix : du plus bas au plus eleve", value: "price-asc" },
  { label: "Prix : du plus eleve au plus bas", value: "price-desc" },
  { label: "Nouveautes", value: "newest" },
  { label: "Mieux notes", value: "rating" },
];

const priceRanges = [
  { label: "Moins de 5 000 FCFA", min: 0, max: 5000 },
  { label: "5 000 FCFA - 20 000 FCFA", min: 5000, max: 20000 },
  { label: "20 000 FCFA - 50 000 FCFA", min: 20000, max: 50000 },
  { label: "50 000 FCFA+", min: 50000, max: Infinity },
];

interface ShopContentProps {
  products: Product[];
  categories: string[];
}

export function ShopContent({ products, categories }: ShopContentProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.tags.some((t) => t.toLowerCase().includes(query))
      );
    }

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedPriceRanges.length > 0) {
      result = result.filter((p) =>
        selectedPriceRanges.some((range) => {
          const rangeData = priceRanges.find((r) => r.label === range);
          if (!rangeData) return true;
          return p.price >= rangeData.min && p.price < rangeData.max;
        })
      );
    }

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result.sort((a, b) => parseInt(b.id.replace(/[^0-9]/g, "")) - parseInt(a.id.replace(/[^0-9]/g, "")));
        break;
      default:
        break;
    }

    return result;
  }, [searchQuery, selectedCategories, selectedPriceRanges, sortBy, products]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const togglePriceRange = (range: string) => {
    setSelectedPriceRanges((prev) =>
      prev.includes(range)
        ? prev.filter((r) => r !== range)
        : [...prev, range]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPriceRanges([]);
    setSearchQuery("");
  };

  const activeFiltersCount = selectedCategories.length + selectedPriceRanges.length;

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center">
              <Checkbox
                id={`category-${category}`}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => toggleCategory(category)}
              />
              <Label
                htmlFor={`category-${category}`}
                className="ml-2 text-sm text-gray-600 cursor-pointer"
              >
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-4">Fourchette de prix</h3>
        <div className="space-y-3">
          {priceRanges.map((range) => (
            <div key={range.label} className="flex items-center">
              <Checkbox
                id={`price-${range.label}`}
                checked={selectedPriceRanges.includes(range.label)}
                onCheckedChange={() => togglePriceRange(range.label)}
              />
              <Label
                htmlFor={`price-${range.label}`}
                className="ml-2 text-sm text-gray-600 cursor-pointer"
              >
                {range.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {activeFiltersCount > 0 && (
        <Button variant="outline" className="w-full" onClick={clearFilters}>
          Effacer tous les filtres
        </Button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              Tous les produits
            </h1>
            <p className="text-gray-600">
              Decouvrez notre collection premium soigneusement selectionnee
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <FilterContent />
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Input
                  type="text"
                  placeholder="Rechercher des produits..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-4"
                />
              </div>

              {/* Controls */}
              <div className="flex items-center gap-4">
                {/* Mobile Filter Button */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="lg:hidden">
                      <SlidersHorizontal className="h-4 w-4 mr-2" />
                      Filtres
                      {activeFiltersCount > 0 && (
                        <span className="ml-2 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                          {activeFiltersCount}
                        </span>
                      )}
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80">
                    <SheetHeader>
                      <SheetTitle>Filtres</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6">
                      <FilterContent />
                    </div>
                  </SheetContent>
                </Sheet>

                {/* Sort */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="min-w-[140px]">
                      {sortOptions.find((o) => o.value === sortBy)?.label}
                      <ChevronDown className="h-4 w-4 ml-2" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {sortOptions.map((option) => (
                      <DropdownMenuItem
                        key={option.value}
                        onClick={() => setSortBy(option.value)}
                      >
                        {option.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* View Mode */}
                <div className="hidden sm:flex items-center border rounded-md">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 ${viewMode === "grid" ? "bg-gray-100" : ""}`}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 ${viewMode === "list" ? "bg-gray-100" : ""}`}
                  >
                    <LayoutList className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Active Filters */}
            {activeFiltersCount > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-sm text-gray-500">Filtres actifs :</span>
                {selectedCategories.map((category) => (
                  <span
                    key={category}
                    className="inline-flex items-center gap-1 bg-amber-100 text-amber-800 text-sm px-3 py-1 rounded-full"
                  >
                    {category}
                    <button
                      onClick={() => toggleCategory(category)}
                      className="hover:text-amber-900"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
                {selectedPriceRanges.map((range) => (
                  <span
                    key={range}
                    className="inline-flex items-center gap-1 bg-amber-100 text-amber-800 text-sm px-3 py-1 rounded-full"
                  >
                    {range}
                    <button
                      onClick={() => togglePriceRange(range)}
                      className="hover:text-amber-900"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
                <button
                  onClick={clearFilters}
                  className="text-sm text-amber-600 hover:text-amber-700"
                >
                  Tout effacer
                </button>
              </div>
            )}

            {/* Results Count */}
            <p className="text-sm text-gray-500 mb-6">
              Affichage de {filteredProducts.length} sur {products.length} produits
            </p>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <motion.div
                layout
                className={`grid gap-6 ${
                  viewMode === "grid"
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                    : "grid-cols-1"
                }`}
              >
                <AnimatePresence mode="popLayout">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg mb-4">
                  Aucun produit ne correspond a vos criteres
                </p>
                <Button onClick={clearFilters} variant="outline">
                  Effacer les filtres
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
