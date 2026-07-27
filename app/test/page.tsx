"use client";

import { useEffect } from "react";
import { ProductoService } from "@/services/producto.service";

// Página temporal para validar la conexión con Supabase.
export default function TestPage() {
  // Ejecuta la consulta al cargar la página.
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productos = await ProductoService.getAll();

        // Muestra los productos obtenidos desde la base de datos.
        console.log(productos);
      } catch (error) {
        // Muestra cualquier error ocurrido durante la consulta.
        console.error(error);
      }
    };

    loadProducts();
  }, []);

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Prueba de conexión con Supabase</h1>
      <p>Revisá la consola del navegador (F12).</p>
    </main>
  );
}