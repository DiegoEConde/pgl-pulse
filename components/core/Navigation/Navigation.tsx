"use client";

/**
 * ============================================================
 * Navigation
 * ------------------------------------------------------------
 * Menú principal de navegación de PGL Pulse.
 *
 * Genera automáticamente las opciones a partir de la
 * configuración centralizada.
 *
 * Cada botón inicia una transición visual antes de cambiar
 * de pantalla.
 *
 * No contiene lógica de navegación; únicamente solicita
 * al AppContext iniciar una transición.
 * ============================================================
 */

// ============================================================
// IMPORTACIONES
// ============================================================

import { navigationItems } from "@/config/navigation";
import { useApp } from "@/contexts/AppContext";

// ============================================================
// COMPONENTE
// ============================================================

export default function Navigation() {

    // ========================================================
    // CONTEXTO
    // ========================================================

    const {
        currentPage,
        isTransitioning,
        startTransition,
    } = useApp();

    // ========================================================
    // RENDER
    // ========================================================

    return (

        <nav className="navigation">

            {navigationItems.map((item) => (

                <button
                    key={item.id}
                    className={
                        currentPage === item.id
                            ? "navigation-button active"
                            : "navigation-button"
                    }
                    disabled={isTransitioning}
                    onClick={() =>
                        startTransition(item.id)
                    }
                >
                    {item.label}
                </button>

            ))}

        </nav>

    );

}