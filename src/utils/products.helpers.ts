import { IProduct } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getProductsDB(): Promise<IProduct[]> {
  try {
    const response = await fetch(`${API_URL}/products`, {
      next: { revalidate: 60 },
    });
    const products: IProduct[] = await response.json();
    return products;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getProductsById(id: string): Promise<IProduct> {
  try {
    const response = await getProductsDB();
    const productFiltered = response.find(
      (product) => product.id.toString() === id
    );
    if (!productFiltered) throw new Error("Product not found");
    return productFiltered;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getProductsByCategoryOrName(
  categoryIdOrName: string
): Promise<IProduct[]> {
  try {
    const response = await getProductsDB();

    let productFiltered = response.filter(
      (product) => product.categoryId.toString() === categoryIdOrName
    );

    if (!productFiltered.length) {
      productFiltered = response.filter((product) =>
        product.name
          .toLocaleLowerCase()
          .includes(categoryIdOrName.toLocaleLowerCase())
      );
      if (!productFiltered.length) {
        productFiltered = [];
      }
    }
    return productFiltered;
  } catch (error: any) {
    throw new Error(error);
  }
}
