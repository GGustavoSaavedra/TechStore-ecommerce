import { ILoginProps, IRegisterProps } from "@/types";
import toast from "react-hot-toast";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function register(userData: IRegisterProps) {
  try {
    const response = await fetch(`${API_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (response.ok) {
      toast.success("Usuario registrado exitosamente");
      return response.json();
    } else {
      toast.error("Error al registrar el usuario");
      throw new Error("Falló el servidor al registrar el usuario");
    }
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function login(userData: ILoginProps) {
  try {
    const response = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (response.ok) {
      toast.success("Usuario logueado exitosamente");
      return response.json();
    } else {
      toast.error("Error de Email o contraseña");
      throw new Error("Falló el servidor al loguear el usuario");
    }
  } catch (error: any) {
    throw new Error(error);
  }
}
