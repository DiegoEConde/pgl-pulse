/**
 * ============================================================
 * PGL Pulse
 * Navigation configuration
 * ------------------------------------------------------------
 * Centraliza los elementos del menú principal.
 *
 * Cada elemento define la información necesaria para construir
 * automáticamente la navegación principal.
 * ============================================================
 */

import type { NavigationPage } from "@/contexts/AppContext";

// TIPOS
type NavigationItem = {
    id: NavigationPage;
    label: string;
    path: string;
};

// CONFIGURACIÓN
export const navigationItems: NavigationItem[] = [
    {
        id: "inicio",
        label: "Inicio",
        path: "/",
    },
    {
        id: "compras",
        label: "Compras",
        path: "/compras",
    },
    {
        id: "ventas",
        label: "Ventas",
        path: "/ventas",
    },
    {
        id: "reparto",
        label: "Reparto",
        path: "/reparto",
    },
    {
        id: "stock",
        label: "Stock",
        path: "/stock",
    },
    {
        id: "datos",
        label: "Datos",
        path: "/datos",
    },
    {
        id: "reportes",
        label: "Reportes",
        path: "/reportes",
    },
];