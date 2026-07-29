// Tipos
import { ButtonProps } from "./types";

// Estilos
import styles from "./Button.module.css";

export default function Button({
    variant = "primary",
    size = "md",
    fullWidth = false,
    loading = false,
    leftIcon,
    rightIcon,
    children,
    disabled,
    className,
    ...props
}: ButtonProps) {

    const classes = [
        styles.button,
        styles[variant],
        styles[size],
        fullWidth && styles.fullWidth,
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (

        <button
            className={classes}
            disabled={disabled || loading}
            {...props}
        >

            {leftIcon && (
                <span className={styles.icon}>
                    {leftIcon}
                </span>
            )}

            <span className={styles.content}>
                {loading ? "Cargando..." : children}
            </span>

            {rightIcon && !loading && (
                <span className={styles.icon}>
                    {rightIcon}
                </span>
            )}

        </button>

    );

}