import {
    ReactNode,
    SelectHTMLAttributes,
} from "react";

export interface SelectProps
    extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    helperText?: string;
    error?: string;
    children: ReactNode;
    fullWidth?: boolean;
    required?: boolean;
}