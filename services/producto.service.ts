import { supabase } from "@/lib/supabase/client";

// Servicio encargado de todas las operaciones relacionadas con productos.
export const ProductoService = {
  // Obtiene todos los productos ordenados por marca y nombre.
  async getAll() {
    const { data, error } = await supabase
      .from("producto")
      .select("*")
      .order("marca")
      .order("nombre");

    // Lanza el error para que sea manejado por el componente.
    if (error) {
      throw error;
    }

    return data;
  },
};