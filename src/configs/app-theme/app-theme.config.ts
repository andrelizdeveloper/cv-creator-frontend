import { createTheme } from '@mui/material';

export const appTheme = createTheme({
    components: {
        MuiButton: {
            defaultProps: {
                size: 'small',
            },
        },
        MuiTextField: {
            defaultProps: {
                size: 'small',
            },
        },
        MuiSelect: {
            defaultProps: {
                size: 'small',
            },
        },
        MuiAutocomplete: {
            defaultProps: {
                size: 'small',
            },
        },
        MuiOutlinedInput: {
            defaultProps: {
                size: 'small',
            },
        },
        MuiInputBase: {
            defaultProps: {
                size: 'small',
            },
        },
        MuiFormControl: {
            defaultProps: {
                size: 'small',
            },
        },
        MuiIconButton: {
            defaultProps: {
                size: 'small',
            },
        },
        MuiIcon: {
            defaultProps: {
                fontSize: 'small',
            },
        },
        MuiSvgIcon: {
            defaultProps: {
                fontSize: 'small',
            },
        },
    },
});
