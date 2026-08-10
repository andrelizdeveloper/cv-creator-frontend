// Modules
import { Stack } from '@mui/material';

// Configs
import { AppColorsConfig } from '../../../../configs';

interface GenericBorderContainerProps {
    children: React.ReactNode;
}

export function GenericBorderContainer({ children }: GenericBorderContainerProps) {
    return (
        <Stack
            sx={{
                border: `1px solid ${AppColorsConfig.gray[300]}`,
                padding: 2,
                borderRadius: 1,
                gap: 2,
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
            }}
        >
            {children}
        </Stack>
    );
}
