/**
 * ============================================================
 * AppShell
 * ------------------------------------------------------------
 * Contenedor principal de la aplicación.
 *
 * Define la estructura fija utilizada por todo PGL Pulse.
 *
 * No contiene lógica de negocio.
 * Sólo organiza la interfaz principal.
 * ============================================================
 */

// IMPORTACIONES
import Header from "../Header/Header";
import Workspace from "../Workspace/Workspace";

// TIPOS
type AppShellProps = {
  children: React.ReactNode;
};

// COMPONENTE
export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="app-shell">

      <Header />

      <Workspace>
        {children}
      </Workspace>

    </div>
  );
}