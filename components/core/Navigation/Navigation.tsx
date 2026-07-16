// DATOS DE NAVEGACIÓN
const navigationItems = [
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
      {navigationItems.map((item) => (
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