// Modules
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

// Interfaces
import { CustomSelectFieldProps } from './custom-select-field.interfaces';

export function CustomSelectField({
    label,
    value,
    onChange,
    options,
    disabled = false,
    helperText,
}: CustomSelectFieldProps) {
    const handleChange = (event: SelectChangeEvent) => {
        onChange(event.target.value);
    };

    return (
        <FormControl fullWidth size="small">
            <InputLabel id={`${label}-select-label`}>{label}</InputLabel>
            <Select
                labelId={`${label}-select-label`}
                value={value}
                label={label}
                onChange={handleChange}
                disabled={disabled}
                displayEmpty
            >
                {options.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
            {helperText !== undefined && helperText !== '' && (
                <span style={{ fontSize: '0.75rem', color: '#666', marginTop: 4 }}>
                    {helperText}
                </span>
            )}
        </FormControl>
    );
}
