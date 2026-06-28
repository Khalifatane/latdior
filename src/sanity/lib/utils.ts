import type { SanityImage, SanityProduct, Product } from "@/types/product";
import { urlFor } from "./image";

function getSanityImageUrl(image?: SanityImage): string {
  if (!image || !image.asset) return "";
  return image.asset.url || urlFor(image).url();
}

/**
 * Converts a Sanity product to the Product format used by existing components
 */
export function sanityProductToProduct(sanityProduct: SanityProduct): Product {
  const imageUrls = (sanityProduct.images?.length
    ? sanityProduct.images
    : sanityProduct.image
    ? [sanityProduct.image]
    : [])
    .map(getSanityImageUrl)
    .filter(Boolean);

  // Build specifications record from entries
  const specifications: Record<string, string> = {};
  if (sanityProduct.specifications?.entries) {
    for (const entry of sanityProduct.specifications.entries) {
      specifications[entry.key] = entry.value;
    }
  }

  return {
    id: sanityProduct._id,
    slug: sanityProduct.slug.current,
    name: sanityProduct.title,
    description: sanityProduct.description,
    price: sanityProduct.price,
    originalPrice: sanityProduct.originalPrice,
    images: imageUrls,
    category: sanityProduct.category,
    tags: sanityProduct.tags || [],
    inStock: sanityProduct.inStock ?? true,
    quantity: sanityProduct.quantity ?? 10,
    rating: sanityProduct.rating ?? 4.5,
    reviews: sanityProduct.reviews ?? 0,
    features: sanityProduct.features || [],
    specifications: Object.keys(specifications).length > 0 ? specifications : undefined,
  };
}

/**
 * Converts an array of Sanity products to Product format
 */
export function sanityProductsToProducts(
  sanityProducts: SanityProduct[]
): Product[] {
  return sanityProducts.map(sanityProductToProduct);
}

/**
 * Fetches all products from Sanity
 */
export async function getProducts(): Promise<Product[]> {
  const { client } = await import("./client");
  const { productsQuery } = await import("./queries");

  const sanityProducts = await client.fetch<SanityProduct[]>(productsQuery);
  return sanityProductsToProducts(sanityProducts);
}

/**
 * Fetches a single product by slug
 */
export async function getProductBySlug(slug: string): Promise<Product | null> {
  const { client } = await import("./client");
  const { productBySlugQuery } = await import("./queries");

  const sanityProduct = await client.fetch<SanityProduct | null>(
    productBySlugQuery,
    { slug }
  );
  if (!sanityProduct) return null;
  return sanityProductToProduct(sanityProduct);
}

/**
 * Fetches all unique categories
 */
export async function getAllCategories(): Promise<string[]> {
  const { client } = await import("./client");
  const { categoriesQuery } = await import("./queries");

  const results = await client.fetch<{ category: string }[]>(categoriesQuery);
  return [...new Set(results.map((r) => r.category))];
}

/**
 * Fetches related products by category
 */
export async function getRelatedProducts(
  category: string,
  slug: string
): Promise<Product[]> {
  const { client } = await import("./client");
  const { relatedProductsQuery } = await import("./queries");

  const sanityProducts = await client.fetch<SanityProduct[]>(
    relatedProductsQuery,
    { category, slug }
  );
  return sanityProductsToProducts(sanityProducts);
}
