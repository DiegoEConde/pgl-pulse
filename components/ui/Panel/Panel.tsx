// contenedor reutilizable para secciones de la aplicación

type PanelProps = {
    title: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
};

export default function Panel({
    title,
    icon,
    children,
}: PanelProps) {
    return (
        <section className="panel">
            <header className="panel-header">
                {icon && (
                    <div className="panel-header-icon">
                        {icon}
                    </div>
                )}
                <h3>{title}</h3>
            </header>

            <div className="panel-content">
                {children}
            </div>
        </section>
    );
}