// React
import { useId } from "react";

// Librerías
import { Search as SearchIcon } from "lucide-react";

// Tipos
import { SearchProps } from "./types";

// Estilos
import styles from "./Search.module.css";

export default function Search({
    fullWidth = false,
    className = "",
    id,
    type,
    ...props
}: SearchProps) {

    const generatedId = useId();
    const searchId = id ?? generatedId;

    const rootClasses = [
        styles.root,
        fullWidth && styles.fullWidth,
    ]
        .filter(Boolean)
        .join(" ");

    const inputClasses = [
        styles.input,
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (

        <div className={rootClasses}>

            <SearchIcon
                className={styles.icon}
                size={18}
                strokeWidth={2}
                aria-hidden="true"
            />

            <input
                id={searchId}
                type="search"
                className={inputClasses}
                {...props}
            />

        </div>

    );

}