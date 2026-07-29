// Tipos
import { PanelProps } from "./types";

// Estilos
import styles from "./Panel.module.css";

export default function Panel({
    title,
    icon,
    children,
}: PanelProps) {
    return (
        <section className={styles.panel}>
            <header className={styles.header}>

                {icon && (
                    <div className={styles.icon}>
                        {icon}
                    </div>
                )}

                <h3>{title}</h3>

            </header>

            <div className={styles.content}>
                {children}
            </div>
        </section>
    );
}