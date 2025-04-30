"use client";

import { useAuth } from "@/context/AuthContext";
import { IProduct } from "@/types";
import { createOrder } from "@/utils/orders.helper";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

const CartView = () => {
  const { userData } = useAuth();
  const [cartItems, setCartItems] = useState<IProduct[]>([]);
  const [cartTotal, setCartTotal] = useState<number>(0);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(savedCart);
  }, []);

  useEffect(() => {
    const totalAmount = cartItems.reduce(
      (currentTotal, product) => currentTotal + product.price,
      0
    );
    setCartTotal(totalAmount);
  }, [cartItems]);

  const removeItemFromCart = (productId: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const handleCheckout = async () => {
    if (userData?.token) {
      const productIds = cartItems.map((item) => item.id);
      await createOrder(userData.token, productIds);
      setCartItems([]);
      localStorage.setItem("cart", "[]");
      window.dispatchEvent(new Event("cartUpdated"));
    }
  };

  return (
    <div className="bg-gray-50 px-4 py-12">
      <div className="mx-auto w-full max-w-7xl flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          {cartItems.length ? (
            <div className="space-y-4">
              {cartItems.map((product) => (
                <div
                  key={product.id}
                  className="relative flex items-center gap-4 bg-white p-4 rounded-xl shadow"
                >
                  <button
                    onClick={() => removeItemFromCart(product.id)}
                    className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-200 transition"
                    aria-label="Eliminar producto"
                  >
                    <X className="w-4 h-4 text-gray-600" />
                  </button>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-contain rounded"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-800">
                      {product.name}
                    </h3>
                    <p className="text-gray-600">Precio ${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-700 py-20">
              Tu carrito está vacío
            </div>
          )}
        </div>

        <div className="md:w-1/3 bg-white p-6 rounded-xl shadow-lg h-fit">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Resumen del pedido
          </h2>
          <div className="flex justify-between text-gray-700 mb-6">
            <span>Total</span>
            <span className="font-medium">${cartTotal}</span>
          </div>
          <button
            onClick={handleCheckout}
            disabled={!cartItems.length}
            className="w-full py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition disabled:opacity-50"
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartView;
