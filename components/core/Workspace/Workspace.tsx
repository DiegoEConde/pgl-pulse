"use client";

/**
 * ============================================================
 * Workspace
 * ------------------------------------------------------------
 * Área principal de trabajo de la aplicación.
 *
 * RESPONSABILIDADES
 * ------------------------------------------------------------
 * • Distribuir el Dashboard.
 * • Mostrar el AlertCenter.
 * • Aplicar el efecto visual de transición únicamente al
 *   Dashboard.
 *
 * IMPORTANTE
 * ------------------------------------------------------------
 * Workspace conoce únicamente el estado visual
 * "isTransitioning" para agregar una clase CSS.
 *
 * Toda la animación es responsabilidad del CSS.
 * ============================================================
 */

import AlertCenter from "../AlertCenter/AlertCenter";
import { useApp } from "@/contexts/AppContext";

// ============================================================
// TIPOS
// ============================================================

type WorkspaceProps = {
    children: React.ReactNode;
};

// ============================================================
// COMPONENTE
// ============================================================

export default function Workspace({
    children,
}: WorkspaceProps) {

    const {
        isTransitioning,
    } = useApp();

    return (

        <main className="workspace">

            {/* ==================================================
                Dashboard principal
            =================================================== */}

            <section
                className={`workspace-dashboard ${
                    isTransitioning
                        ? "workspace-dashboard-pulse"
                        : ""
                }`}
            >
                {children}
            </section>

            {/* ==================================================
                Centro de alertas
                (Nunca participa del efecto visual)
            =================================================== */}

            <aside className="workspace-alerts">
                <AlertCenter />
            </aside>

        </main>

    );

}