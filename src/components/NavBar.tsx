"use client";

import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import SearchBar from "./SearchBar";
import LogoutButton from "./LogoutButton";
import { useState, useEffect } from "react";

const NavBar = () => {
  const { userData } = useAuth();
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = () => {
    const stored = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartCount(Array.isArray(stored) ? stored.length : 0);
  };

  useEffect(() => {
    updateCartCount();
    window.addEventListener("cartUpdated", updateCartCount);
    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center hover:opacity-80 transition"
        >
          <img
            className="h-9 w-auto cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            alt="Logo"
          />
        </Link>

        <div className="flex-1 flex justify-center px-6">
          <SearchBar />
        </div>

        {!userData?.token ? (
          <div className="flex items-center gap-4">
            <Link
              href="/register"
              className="hidden sm:inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
            >
              Regístrate
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-blue-500 transition"
            >
              Iniciar sesión
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Link
              href="/cart"
              className="relative hidden sm:inline-flex items-center justify-center rounded-lg border border-gray-300 p-2 text-gray-700 hover:bg-gray-100 transition"
              aria-label="Ver carrito"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-blue-500 transition"
            >
              Perfil
            </Link>
            <LogoutButton />
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
