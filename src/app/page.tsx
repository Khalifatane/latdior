import Link from "next/link";
import { ArrowRight, Star, Truck, Shield, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProducts } from "@/sanity/lib/utils";
import { ProductCard } from "@/components/product/ProductCard";
import { HomeContent } from "./HomeContent";

export const revalidate = 60;

export default async function Page() {
  const products = await getProducts();

  const featuredProducts = products.slice(0, 4);
  const newArrivals = products.slice(4, 8);

  const features = [
    {
      icon: Truck,
      title: "Livraison gratuite",
      description: "Pour les commandes de plus de 100 FCFA",
    },
    {
      icon: Shield,
      title: "Paiement securise",
      description: "Paiement 100 % securise",
    },
    {
      icon: RefreshCw,
      title: "Retours faciles",
      description: "Politique de retour de 30 jours",
    },
    {
      icon: Star,
      title: "Garantie qualite",
      description: "Produits premium uniquement",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop"
            alt="Arriere-plan principal"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <HomeContent />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center"
              >
                <div className="h-14 w-14 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-amber-600 text-sm font-semibold tracking-wider uppercase">
                Selection soignee
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
                Produits en vedette
              </h2>
            </div>
            <Link
              href="/shop"
              className="hidden sm:flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors"
            >
              Voir tout
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Button asChild variant="outline">
              <Link href="/shop">
                Voir tous les produits
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-20 lg:py-28 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-amber-400 text-sm font-semibold tracking-wider uppercase">
                Offre a duree limitee
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-white mt-4 mb-6">
                Soldes d'ete
                <span className="block text-amber-400">Jusqu'a -40 %</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-md">
                Profitez d'offres incroyables sur notre collection premium. Ne
                manquez pas ces economies exclusives.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 h-14"
              >
                <Link href="/shop">
                  Voir les soldes
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=800&fit=crop"
                  alt="Soldes d'ete"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white p-6 rounded-xl">
                <p className="text-4xl font-bold">40%</p>
                <p className="text-sm">DE REMISE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-amber-600 text-sm font-semibold tracking-wider uppercase">
                Nouveautes
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
                Nouveaux arrivages
              </h2>
            </div>
            <Link
              href="/shop"
              className="hidden sm:flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors"
            >
              Voir tout
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 lg:py-28 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Rejoignez notre communaute
            </h2>
            <p className="text-gray-600 mb-8">
              Abonnez-vous pour recevoir des offres exclusives, un acces
              anticipe aux nouveautes et du contenu selectionne, livre dans
              votre boite de reception.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Entrez votre email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <Button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 h-auto"
              >
                S&apos;abonner
              </Button>
            </form>

            <p className="text-sm text-gray-500 mt-4">
              En vous abonnant, vous acceptez notre politique de
              confidentialite. Desabonnement a tout moment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
