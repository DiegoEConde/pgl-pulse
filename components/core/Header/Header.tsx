/**
 * ============================================================
 * Header
 * ------------------------------------------------------------
 * Barra superior principal de PGL Pulse.
 *
 * Contiene:
 * • Logo del sistema.
 * • Navegación principal.
 * ============================================================
 */

import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

export default function Header() {
    return (
        <header className="header">

            {/* ==========================================
                Identidad visual
            ========================================== */}

            <Logo />

            {/* ==========================================
                Navegación principal
            ========================================== */}
            <Navigation />

        </header>
    );
}