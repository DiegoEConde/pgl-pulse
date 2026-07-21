/**
 * ============================================================
 * AlertCenter
 * ------------------------------------------------------------
 * Panel lateral destinado a mostrar alertas y notificaciones
 * operativas del sistema.
 * ============================================================
 */

import Panel from "@/components/ui/Panel/Panel";
// icono de alertas
import { TriangleAlert } from "lucide-react";

export default function AlertCenter() {
    return (
        <aside className="alert-center">
            <Panel title="ALERTAS" icon={<TriangleAlert size={22} />}>
                <p>No hay alertas pendientes.</p>
            </Panel>
        </aside>
    );
}