// Modules
import { Dialog, Stack, Typography } from '@mui/material';

// Configs
import { AppTextStyles } from '../../../../configs';

export interface CustomModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    shouldCloseOnBackdropClick?: boolean;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export function CustomModal({
    isOpen,
    onClose,
    title,
    children,
    shouldCloseOnBackdropClick = true,
    maxWidth = 'sm',
}: CustomModalProps) {
    return (
        <Dialog
            open={isOpen}
            onClose={shouldCloseOnBackdropClick ? onClose : undefined}
            maxWidth={maxWidth}
            fullWidth
        >
            <Stack sx={{ p: 2, gap: 2 }}>
                {title && <Typography sx={AppTextStyles.title2}>{title}</Typography>}
                {children}
            </Stack>
        </Dialog>
    );
}
