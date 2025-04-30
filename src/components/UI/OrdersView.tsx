"use client";

import { useAuth } from "@/context/AuthContext";
import { IOrder } from "@/types";
import { getOrders } from "@/utils/orders.helper";
import { useState, useEffect } from "react";

const OrdersView = () => {
  const { userData } = useAuth();
  const [orders, setOrders] = useState<IOrder[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (userData?.token) {
        const response = await getOrders(userData.token);
        setOrders(response);
      }
    };
    fetchOrders();
  }, [userData]);

  return (
    <div className="bg-gray-50 px-4 py-12">
      <div className="mx-auto w-full max-w-4xl">
        {orders.length ? (
          <div className="space-y-6">
            {orders.map((order) => (
              <details
                key={order.id}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-gray-800">
                  <span>Orden N° {order.id}</span>
                  <span className="text-sm text-gray-600">
                    {new Date(order.date).toLocaleDateString()}
                  </span>
                </summary>
                <div className="mt-4 space-y-4">
                  <p className="text-gray-600">
                    Estado:{" "}
                    <span
                      className={`font-medium ${
                        order.status === "approved"
                          ? "text-green-600"
                          : "text-gray-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </p>
                  <div className="space-y-3">
                    {order.products.map((product) => (
                      <div
                        key={product.id}
                        className="flex items-center gap-4 bg-gray-50 p-3 rounded-lg"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 object-contain rounded"
                        />
                        <div>
                          <p className="text-gray-800">{product.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </details>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-700 py-20">
            No tienes órdenes realizadas
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersView;
