// React
import { useId } from "react";

// Tipos
import { TextareaProps } from "./types";

// Estilos
import styles from "./Textarea.module.css";

export default function Textarea({
    label,
    helperText,
    error,
    fullWidth = false,
    required = false,
    className = "",
    id,
    ...props
}: TextareaProps) {

    const generatedId = useId();
    const textareaId = id ?? generatedId;

    const rootClasses = [
        styles.root,
        fullWidth && styles.fullWidth,
    ]
        .filter(Boolean)
        .join(" ");

    const textareaClasses = [
        styles.textarea,
        error && styles.textareaError,
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (

        <div className={rootClasses}>

            {label && (
                <label
                    htmlFor={textareaId}
                    className={styles.label}
                >
                    {label}

                    {required && (
                        <span className={styles.required}>
                            *
                        </span>
                    )}

                </label>
            )}

            <textarea
                id={textareaId}
                className={textareaClasses}
                {...props}
            />

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