"use client";

import { useAuth } from "@/context/AuthContext";
import { LogOut, Search } from "lucide-react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const LogoutButton = () => {
  const { setUserData } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    setUserData(null);
    localStorage.removeItem("userSession");
    Cookies.remove("userSession");
    router.push("/");
    toast.success("Sesión cerrada correctamente");
  };

  return (
    <button
      onClick={handleLogout}
      className="p-2 rounded-full hover:bg-gray-300 transition"
      aria-label="Cerrar sesión"
    >
      <LogOut className="w-5 h-5 text-gray-700" />
    </button>
  );
};

export default LogoutButton;
