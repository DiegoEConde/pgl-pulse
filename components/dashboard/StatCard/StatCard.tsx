/**
 * ============================================================
 * StatCard
 * ------------------------------------------------------------
 * Tarjeta utilizada para mostrar indicadores rápidos del
 * Dashboard.
 *
 * Se reutiliza para métricas como ventas, compras, stock,
 * ganancias y cualquier otro indicador resumido.
 * ============================================================
 */

// TIPOS
type StatCardProps = {
    title: string;
    value: string;
};

// COMPONENTE
export default function StatCard({
    title,
    value,
}: StatCardProps) {
    return (
        <article className="stat-card">
            <span className="stat-card-title">
                {title}
            </span>
            <strong className="stat-card-value">
                {value}
            </strong>
        </article>
    );
}