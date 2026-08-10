import { ReactNode } from 'react';

export interface CustomSelectFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: Array<{
        label: string;
        value: string;
    }>;
    disabled?: boolean;
    helperText?: string;
    startIcon?: ReactNode;
}
