"use client";

import { useAuth } from "@/context/AuthContext";
import { IProduct } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const ProductDetail: React.FC<IProduct> = ({
  id,
  name,
  image,
  description,
  stock,
  price,
  categoryId,
}) => {
  const router = useRouter();
  const { userData } = useAuth();

  const handleAddToCart = () => {
    if (!userData?.token) {
      toast.error("Debes estar logueado para añadir productos a tu carrito");
      router.push("/login");
    } else {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const productExist = cart.some((item: IProduct) => item.id === id);

      if (productExist) {
        toast.error("El producto ya existe en tu carrito");
        router.push("/cart");
      } else {
        cart.push({ id, name, image, description, stock, price, categoryId });
        localStorage.setItem("cart", JSON.stringify(cart));

        window.dispatchEvent(new Event("cartUpdated"));
        toast.success("Producto añadido al carrito");
      }
    }
  };

  return (
    <div className="bg-gray-50 px-4 py-12">
      <div className="mx-auto w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg flex flex-col md:flex-row gap-6">
        <img
          className="w-full md:w-1/2 h-auto object-contain rounded-xl"
          src={image}
          alt={`Imagen de ${name}`}
        />
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">
              {name}
            </h1>
            <p className="text-gray-700 mb-4">{description}</p>
          </div>
          <div className="space-y-2 text-gray-700">
            <p>
              Stock: <span className="font-medium">{stock}</span>
            </p>
            <p>
              Price: <span className="font-medium">${price}</span>
            </p>
          </div>
          <button
            onClick={handleAddToCart}
            className="mt-6 w-full py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
