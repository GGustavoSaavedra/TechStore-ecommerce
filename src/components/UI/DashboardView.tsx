"use client";

import { useAuth } from "@/context/AuthContext";
import React from "react";

const DashboardView = () => {
  const { userData } = useAuth();

  return (
    <div className="bg-gray-50 px-4 py-12">
      <div className="mx-auto w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Bienvenido, {userData?.user.name}!
        </h1>

        <div className="space-y-4 text-gray-700">
          <div className="p-4 border rounded-lg hover:shadow transition">
            <h2 className="text-lg font-medium mb-1">Dirección de envío:</h2>
            <p>{userData?.user.address}</p>
          </div>

          <div className="p-4 border rounded-lg hover:shadow transition">
            <h2 className="text-lg font-medium mb-1">Correo electrónico:</h2>
            <p>{userData?.user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
