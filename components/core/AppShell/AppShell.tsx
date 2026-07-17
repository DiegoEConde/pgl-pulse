/**
 * ============================================================
 * AppShell
 * ------------------------------------------------------------
 * Contenedor principal de la aplicación.
 *
 * Define la estructura fija utilizada por todo PGL Pulse:
 * Header, Navigation y Workspace.
 *
 * No contiene lógica de negocio.
 * Sólo organiza la interfaz principal.
 * ============================================================
 */

// IMPORTACIONES
import Header from "../Header/Header";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Workspace from "../Workspace/Workspace";

// TIPOS
type AppShellProps = {
  children: React.ReactNode;
};

// COMPONENTE
export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="app-shell">
      <Header>
        <Logo />
      </Header>

      <Navigation />

      <Workspace>
        {children}
      </Workspace>
    </div>
  );
}