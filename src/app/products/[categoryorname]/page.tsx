import Card from "@/components/Card";
import EmptyState from "@/components/UI/EmptyState";
import { getProductsByCategoryOrName } from "@/utils/products.helpers";
import Link from "next/link";
import React from "react";

interface PageProps {
  params: Promise<{ categoryorname: string }>;
}

const CategoryOrNamePage = async ({ params }: PageProps) => {
  const { categoryorname } = await params;
  const products = await getProductsByCategoryOrName(categoryorname);

  return (
    <div className="w-full flex items-center justify-center gap-6 flex-wrap">
      {products.length ? (
        products.map((product) => {
          return (
            <Link key={product.id} href={`/product/${product.id}`}>
              <Card key={product.id} {...product} />
            </Link>
          );
        })
      ) : (
        <EmptyState query={categoryorname} />
      )}
    </div>
  );
};

export default CategoryOrNamePage;
