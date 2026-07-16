import Header from "../Header/Header";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Workspace from "../Workspace/Workspace";

type AppShellProps = {
  children: React.ReactNode;
};

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