type WorkspaceProps = {
  children: React.ReactNode;
};

export default function Workspace({ children }: WorkspaceProps) {
  return (
    <main className="workspace">
      {children}
    </main>
  );
}