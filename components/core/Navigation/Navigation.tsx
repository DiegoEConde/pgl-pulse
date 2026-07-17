import { navigationItems } from "@/config/navigation";

// DATOS DE NAVEGACIÓN
const NAVIGATION_ITEMS = [
  "Inicio",
  "Compras",
  "Ventas",
  "Reparto",
  "Stock",
  "Datos",
  "Reportes",
];

// COMPONENTE
export default function Navigation() {
  return (
    <nav className="navigation">
      {NAVIGATION_ITEMS.map((item) => (
        <div
          key={item}
          className="navigation-item"
        >
          <button className="navigation-button">
            {item}
          </button>
        </div>
      ))}
    </nav>
  );
}