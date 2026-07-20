// componente que organiza el área principal de trabajo

import AlertCenter from "../AlertCenter/AlertCenter";

type WorkspaceProps = {
  children: React.ReactNode;
};

export default function Workspace({ children }: WorkspaceProps) {
  return (
    <main className="workspace">
      <section className="workspace-content">
        {children}
      </section>

      <AlertCenter />
    </main>
  );
}