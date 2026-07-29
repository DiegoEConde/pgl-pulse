import clsx from "clsx";

import { SpinnerProps } from "./types";

import styles from "./Spinner.module.css";

export default function Spinner({
    size = "md",
}: SpinnerProps) {

    return (
        <div
            className={clsx(
                styles.spinner,
                styles[size],
            )}
            role="status"
            aria-label="Cargando"
        />
    );
}