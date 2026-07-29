import { ReactNode } from "react";

export interface PanelProps {
    title: string;
    icon?: ReactNode;
    children: ReactNode;
}