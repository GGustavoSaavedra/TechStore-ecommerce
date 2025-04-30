const API_URL = process.env.NEXT_PUBLIC_API_URL;
import toast from "react-hot-toast";

export async function createOrder(token: string, products: number[]) {
  try {
    const response = await fetch(`${API_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ products }),
    });
    if (response.ok) {
      toast.success("La compra fue realizada con éxito");
      return response.json();
    } else {
      toast.error("Error al registrar la compra");
      throw new Error("Falló el servidor al registrar la compra");
    }
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getOrders(token: string) {
  try {
    const response = await fetch(`${API_URL}/users/orders`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    return response.json();
  } catch (error: any) {
    throw new Error(error);
  }
}
