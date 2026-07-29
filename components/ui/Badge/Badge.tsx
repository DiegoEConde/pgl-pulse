// Tipos
import { BadgeProps } from "./types";

// Estilos
import styles from "./Badge.module.css";

export default function Badge({
    children,
    variant = "neutral",
}: BadgeProps) {

    const badgeClasses = [
        styles.root,
        styles[variant],
    ]
        .filter(Boolean)
        .join(" ");

    return (

        <span className={badgeClasses}>
            {children}
        </span>

    );

}