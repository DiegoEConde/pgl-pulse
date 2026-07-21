// encabezado principal de la aplicación

import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  return (
    <header className="header">

      <div className="header-left">
        <Logo />
      </div>

      <div className="header-center">
        <Navigation />
      </div>

    </header>
  );
}