// pantalla principal del sistema

import Panel from "@/components/ui/Card/Card";

export default function Dashboard() {
  return (
    <section className="dashboard">

      <header className="dashboard-header">

          <span className="dashboard-greeting">
              ¡Buen día, este es el resumen de hoy!
          </span>

          <span className="dashboard-datetime">
              Lunes 20 de julio · 10:42
          </span>

      </header>

      <section className="dashboard-summary">

        <article className="dashboard-card">
          <h3>Ventas del día</h3>
          <span>$ 0</span>
        </article>

        <article className="dashboard-card">
          <h3>Compras del día</h3>
          <span>$ 0</span>
        </article>

        <article className="dashboard-card">
          <h3>Ganancia del día</h3>
          <span>$ 0</span>
        </article>

      </section>

      <section className="dashboard-panels">

        <Panel title="Alertas">

          No hay alertas.

        </Panel>

        <Panel title="Productos en Stock">

          Sin datos.

        </Panel>

        <Panel title="En tránsito">

          Sin datos.

        </Panel>

      </section>

    </section>
  );
}