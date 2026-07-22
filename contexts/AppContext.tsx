"use client";

/**
 * ============================================================
 * AppContext
 * ------------------------------------------------------------
 * Estado global de la aplicación.
 *
 * Este contexto centraliza toda la navegación entre módulos
 * y coordina completamente el ciclo de vida de la transición.
 *
 * Responsabilidades:
 *
 * • Conocer la página actual.
 * • Conocer la página destino.
 * • Iniciar la transición.
 * • Cambiar la página en el momento correcto.
 * • Finalizar la transición.
 * • Evitar múltiples navegaciones simultáneas.
 *
 * La transición visual depende únicamente del estado
 * "isTransitioning".
 * ============================================================
 */

import {
    createContext,
    useContext,
    useRef,
    useState,
    type ReactNode,
} from "react";

// ============================================================
// TIPOS
// ============================================================

export type NavigationPage =
    | "inicio"
    | "compras"
    | "ventas"
    | "reparto"
    | "stock"
    | "datos"
    | "reportes";

type AppContextType = {

    // Página actualmente visible.
    currentPage: NavigationPage;

    // Página solicitada.
    targetPage: NavigationPage | null;

    // Indica si existe una transición activa.
    isTransitioning: boolean;

    /**
     * Inicia una transición completa.
     */
    startTransition: (
        page: NavigationPage,
    ) => void;

};

// ============================================================
// CONTEXTO
// ============================================================

const AppContext =
    createContext<AppContextType | null>(null);

// ============================================================
// PROVIDER
// ============================================================

export function AppProvider({
    children,
}: {
    children: ReactNode;
}) {

    // ========================================================
    // ESTADO
    // ========================================================

    // Página visible.
    const [
        currentPage,
        setCurrentPage,
    ] = useState<NavigationPage>("inicio");

    // Próxima página.
    const [
        targetPage,
        setTargetPage,
    ] = useState<NavigationPage | null>(null);

    // Estado de transición.
    const [
        isTransitioning,
        setIsTransitioning,
    ] = useState(false);

    // ========================================================
    // TIMERS
    // ========================================================

    /**
     * Timer encargado del cambio de página.
     */
    const changeTimer =
        useRef<number | null>(null);

    /**
     * Timer encargado de finalizar la transición.
     */
    const finishTimer =
        useRef<number | null>(null);

    // ========================================================
    // TRANSICIÓN
    // ========================================================

    /**
     * --------------------------------------------------------
     * Inicia una nueva transición.
     *
     * Flujo:
     *
     * Click
     * ↓
     * Activa transición
     * ↓
     * 90 ms
     * ↓
     * Cambia la página
     * ↓
     * 220 ms
     * ↓
     * Finaliza la transición
     * --------------------------------------------------------
     */

    function startTransition(
        page: NavigationPage,
    ) {

        // Evita múltiples transiciones simultáneas.
        if (
            isTransitioning ||
            page === currentPage
        ) {
            return;
        }

        // Limpia timers pendientes.
        if (changeTimer.current) {
            clearTimeout(changeTimer.current);
        }

        if (finishTimer.current) {
            clearTimeout(finishTimer.current);
        }

        // Guarda destino.
        setTargetPage(page);

        // Activa la transición.
        setIsTransitioning(true);

        /**
         * Cambio visual de página.
         */
        changeTimer.current =
            window.setTimeout(() => {
                setCurrentPage(page);
            }, 90);

        /**
         * Limpieza final.
         */
        finishTimer.current =
            window.setTimeout(() => {
                setTargetPage(null);
                setIsTransitioning(false);
            }, 220);
    }

    // ========================================================
    // PROVIDER
    // ========================================================

    return (
        <AppContext.Provider
            value={{
                currentPage,
                targetPage,
                isTransitioning,
                startTransition,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

// ============================================================
// HOOK
// ============================================================

export function useApp() {
    const context =
        useContext(AppContext);
    if (!context) {
        throw new Error(
            "useApp debe utilizarse dentro de AppProvider."
        );
    }
    return context;
}