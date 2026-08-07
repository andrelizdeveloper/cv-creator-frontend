// Styles
import './index.css';

// Modules
import { StrictMode } from 'react';
import { ThemeProvider } from '@mui/material';
import { createRoot } from 'react-dom/client';

// Components
import { HomePage } from './presentation/modules';

// Configs
import { appTheme } from './configs';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeProvider theme={appTheme}>
            <HomePage />
        </ThemeProvider>
    </StrictMode>,
);
