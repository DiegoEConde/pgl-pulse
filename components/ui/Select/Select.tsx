// React
import { useId } from "react";

// Tipos
import { SelectProps } from "./types";

// Estilos
import styles from "./Select.module.css";

export default function Select({
    label,
    helperText,
    error,
    children,
    fullWidth = false,
    required = false,
    className = "",
    id,
    ...props
}: SelectProps) {

    const generatedId = useId();
    const selectId = id ?? generatedId;

    const rootClasses = [
        styles.root,
        fullWidth && styles.fullWidth,
    ]
        .filter(Boolean)
        .join(" ");

    const selectClasses = [
        styles.select,
        error && styles.selectError,
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (

        <div className={rootClasses}>
            {label && (
                <label htmlFor={selectId} className={styles.label}>
                    {label}

                    {required && (
                        <span className={styles.required}>*</span>
                    )}
                </label>
            )}

            <select
                id={selectId}
                className={selectClasses}
                {...props}
            >
                {children}
            </select>

            {error ? (
                <span className={styles.errorText}>
                    {error}
                </span>
            ) : (
                helperText && (
                    <span className={styles.helperText}>
                        {helperText}
                    </span>
                )
            )}
        </div>
    );
}