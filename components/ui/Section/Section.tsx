// Tipos
import { SectionProps } from "./types";

// Estilos
import styles from "./Section.module.css";

export default function Section({
    title,
    description,
    children,
}: SectionProps) {

    return (

        <section className={styles.section}>

            <header className={styles.header}>

                <h3 className={styles.title}>
                    {title}
                </h3>

                {description && (
                    <p className={styles.description}>
                        {description}
                    </p>
                )}

            </header>

            <div className={styles.content}>
                {children}
            </div>

        </section>

    );

}