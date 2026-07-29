// Styles
import './index.css';

// Modules
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Components
import { HomePage } from './presentation/modules';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <HomePage />
    </StrictMode>,
);
