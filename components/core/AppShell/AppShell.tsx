/**
 * ============================================================
 * AppShell
 * ------------------------------------------------------------
 * Contenedor principal de la aplicación.
 *
 * Define la estructura base compartida por todos los módulos.
 *
 * Organiza los componentes globales de la interfaz:
 * - Header
 * - Workspace
 *
 * No contiene lógica de negocio.
 * ============================================================
 */

// ============================================================
// IMPORTACIONES
// ============================================================

import Header from "../Header/Header";
import Workspace from "../Workspace/Workspace";

// ============================================================
// TIPOS
// ============================================================

type AppShellProps = {
    children: React.ReactNode;
};

// ============================================================
// COMPONENTE
// ============================================================

export default function AppShell({
    children,
}: AppShellProps) {

    return (

        <div className="app-shell">

            {/* ==================================================
                Encabezado principal
            =================================================== */}

            <Header />

            {/* ==================================================
                Área principal de trabajo
            =================================================== */}

            <Workspace>
                {children}
            </Workspace>

        </div>

    );

}