/**
 * ============================================================
 * Workspace
 * ------------------------------------------------------------
 * Área principal de trabajo.
 * ============================================================
 */

import AlertCenter from "../AlertCenter/AlertCenter";

type WorkspaceProps = {
    children: React.ReactNode;
};

export default function Workspace({
    children,
}: WorkspaceProps) {
    return (
        <main className="workspace">
            <section className="workspace-dashboard">
                {children}
            </section>
            <aside className="workspace-alerts">
                <AlertCenter />
            </aside>
        </main>
    );
}