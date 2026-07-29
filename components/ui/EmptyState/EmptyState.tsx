import { EmptyStateProps } from "./types";

import styles from "./EmptyState.module.css";

export default function EmptyState({
    title,
    description,
    icon,
    action,
}: EmptyStateProps) {

    return (
        <div className={styles.root}>
            {icon && (
                <div className={styles.icon}>
                    {icon}
                </div>
            )}
            <h3 className={styles.title}>
                {title}
            </h3>
            {description && (
                <p className={styles.description}>
                    {description}
                </p>
            )}
            {action && (
                <div className={styles.action}>
                    {action}
                </div>
            )}
        </div>
    );
}