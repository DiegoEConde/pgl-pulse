// Tipos
import { InputProps } from "./types";

// Estilos
import styles from "./Input.module.css";

export default function Input({
    label,
    helperText,
    error,
    fullWidth = false,
    required = false,
    className,
    id,
    ...props
}: InputProps) {

    const classes = [
        styles.input,
        fullWidth && styles.fullWidth,
        error && styles.error,
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (

        <div className={styles.root}>

            {label && (
                <label
                    className={styles.label}
                    htmlFor={id}
                >
                    {label}

                    {required && (
                        <span className={styles.required}>
                            *
                        </span>
                    )}

                </label>
            )}

            <input
                id={id}
                className={classes}
                {...props}
            />

            {error ? (
                <span className={styles.errorText}>
                    {error}
                </span>
            ) : helperText ? (
                <span className={styles.helperText}>
                    {helperText}
                </span>
            ) : null}

        </div>

    );

}