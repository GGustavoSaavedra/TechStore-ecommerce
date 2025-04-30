import Card from "@/components/Card";
import { getProductsDB } from "@/utils/products.helpers";
import Link from "next/link";

const CardList = async () => {
  const productsToPreLoad = await getProductsDB();
  return (
    <div className="w-full flex items-center justify-center gap-6 flex-wrap">
      {productsToPreLoad &&
        productsToPreLoad.map((product) => {
          return (
            <Link key={product.id} href={`/product/${product.id}`}>
              <Card key={product.id} {...product} />
            </Link>
          );
        })}
    </div>
  );
};

export default CardList;
