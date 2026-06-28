import { getProductBySlug, getRelatedProducts } from "@/sanity/lib/utils";
import { notFound } from "next/navigation";
import ProductPageClient from "./ProductPageClient";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const revalidate = 60;

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = await getRelatedProducts(product.category, product.slug);

  return <ProductPageClient product={product} relatedProducts={relatedProducts} />;
}
