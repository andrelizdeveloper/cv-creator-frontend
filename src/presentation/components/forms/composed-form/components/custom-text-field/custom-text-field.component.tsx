// Modules
import type { ChangeEvent } from 'react';
import { TextField, InputAdornment } from '@mui/material';

// Interfaces
import { CustomTextFieldProps } from './custom-text-field.interfaces';

export function CustomTextField({
    label,
    value,
    onChange,
    placeholder,
    type = 'text',
    disabled = false,
    error,
    helperText,
    rows = 1,
    startIcon,
}: CustomTextFieldProps) {
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onChange(event.target.value);
    };

    return (
        <TextField
            label={label}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            type={type}
            disabled={disabled}
            error={error}
            helperText={helperText}
            fullWidth
            rows={rows}
            multiline={rows > 1}
            slotProps={{
                input: {
                    startAdornment:
                        startIcon !== undefined ? (
                            <InputAdornment position="start">{startIcon}</InputAdornment>
                        ) : undefined,
                },
            }}
        />
    );
}
