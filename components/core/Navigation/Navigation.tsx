/**
 * ============================================================
 * NAVIGATION
 * ------------------------------------------------------------
 * Menú principal de navegación de PGL Pulse.
 *
 * Genera automáticamente las opciones a partir de la
 * configuración centralizada.
 * ============================================================
 */

// IMPORTACIONES
import { navigationItems } from "@/config/navigation";

// COMPONENTE
export default function Navigation() {
    return (
        <nav className="navigation">
            {navigationItems.map((item) => (
                <button key={item.id} className="navigation-button">
                    {item.label}
                </button>
            ))}
        </nav>
    );
}