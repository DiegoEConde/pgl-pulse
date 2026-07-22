"use client";

/**
 * ============================================================
 * PageRouter
 * ------------------------------------------------------------
 * Router interno de PGL Pulse.
 *
 * Selecciona qué pantalla renderizar según el módulo activo
 * almacenado en AppContext.
 *
 * No contiene lógica de navegación.
 * No contiene layout.
 * No administra animaciones.
 * Su única responsabilidad es devolver la pantalla correcta.
 * ============================================================
 */

// IMPORTACIONES
import { useApp } from "@/contexts/AppContext";

import Dashboard from "@/components/dashboard/Dashboard";

// COMPONENTE
export default function PageRouter() {

    const {
        currentPage,
    } = useApp();

    switch (currentPage) {

        case "inicio":
            return <Dashboard />;

        case "compras":
            return <h1>Compras</h1>;

        case "ventas":
            return <h1>Ventas</h1>;

        case "reparto":
            return <h1>Reparto</h1>;

        case "stock":
            return <h1>Stock</h1>;

        case "datos":
            return <h1>Datos</h1>;

        case "reportes":
            return <h1>Reportes</h1>;

        default:
            return <Dashboard />;
    }

}