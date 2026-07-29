import { ReactNode } from "react";

export type BadgeVariant =
    | "success"
    | "warning"
    | "danger"
    | "info"
    | "neutral";

export interface BadgeProps {
    children: ReactNode;
    variant?: BadgeVariant;
}