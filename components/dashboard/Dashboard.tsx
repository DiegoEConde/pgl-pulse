/**
 * ============================================================
 * Dashboard
 * ------------------------------------------------------------
 * Pantalla principal del sistema.
 *
 * Muestra el resumen operativo del día y los paneles
 * principales utilizados por el usuario.
 * ============================================================
 */

import StatCard from "@/components/dashboard/StatCard/StatCard";
import Panel from "@/components/ui/Panel/Panel";

export default function Dashboard() {
    return (
        <section className="dashboard">
            <header className="dashboard-header">
                <h1 className="dashboard-title">
                    Buen día, Diego.
                </h1>
                <span className="dashboard-datetime">
                    Lunes 20 Jul · 10:42
                </span>
            </header>

            <hr className="dashboard-divider" />

            <section className="dashboard-stats">
                <StatCard
                    title="Ventas del día"
                    value="$ 0"/>
                <StatCard
                    title="Compras del día"
                    value="$ 0"/>
                <StatCard
                    title="Ganancias"
                    value="$ 0"/>
            </section>

            <section className="dashboard-panels">
                <Panel title="Alertas">
                    Sin datos.
                </Panel>
                <Panel title="Stock">
                    Sin datos.
                </Panel>
                <Panel title="En reparto">
                    Sin datos.
                </Panel>
            </section>
        </section>
    );
}