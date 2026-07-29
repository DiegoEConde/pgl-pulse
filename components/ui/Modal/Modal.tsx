// React
import { useEffect } from "react";

// Tipos
import { ModalProps } from "./types";

// Estilos
import styles from "./Modal.module.css";

export default function Modal({
    open,
    title,
    subtitle,
    children,
    footer,
    size = "md",
    onClose,
}: ModalProps) {

    useEffect(() => {

        if (!open) return;

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleEscape);

        return () => {
            window.removeEventListener("keydown", handleEscape);
        };

    }, [open, onClose]);

    if (!open) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={`${styles.modal} ${styles[size]}`} onClick={(event) => event.stopPropagation()}>
                <header className={styles.header}>
                    <div className={styles.title}>
                        <h2>{title}</h2>
                        {subtitle && (
                            <p>{subtitle}</p>
                        )}
                    </div>
                    <button className={styles.closeButton} onClick={onClose}> ✕ </button>
                </header>

                <main className={styles.body}>
                    {children}
                </main>

                {footer && (
                    <footer className={styles.footer}>
                        {footer}
                    </footer>
                )}
            </div>
        </div>
    );
}