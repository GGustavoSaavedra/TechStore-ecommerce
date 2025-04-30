import ProductDetail from "@/components/UI/ProductDetail";
import { getProductsById } from "@/utils/products.helpers";
import React from "react";

interface PageProps {
  params: Promise<{ productID: string }>;
}

export default async function Page({ params }: PageProps) {
  const { productID } = await params;
  const product = await getProductsById(productID);
  return <ProductDetail {...product} />;
}
