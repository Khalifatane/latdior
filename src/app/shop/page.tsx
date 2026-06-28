import { getProducts, getAllCategories } from "@/sanity/lib/utils";
import { ShopContent } from "./ShopContent";

export const revalidate = 60;

export default async function Page() {
  const products = await getProducts();
  const categories = await getAllCategories();

  return <ShopContent products={products} categories={categories} />;
}
