// Modules
import { Add } from '@mui/icons-material';
import { Button, Stack, Typography } from '@mui/material';

// Configs
import { AppColorsConfig, AppTextStyles } from '../../../../../../../configs';

// Styles
import { FlexStyles } from '../../../../../../styles/flex-styles/flex-styles';

interface EditorsToolsSectionContainerProps {
    title: string;
    children: React.ReactNode;
    shouldHaveAddButton?: boolean;
    onAddClick?: () => void;
}

export function EditorsToolsSectionContainer({
    title,
    children,
    shouldHaveAddButton = false,
    onAddClick,
}: EditorsToolsSectionContainerProps) {
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
            <Stack sx={FlexStyles.HFlexACenterJBetween}>
                <Typography sx={AppTextStyles.subtitle1}>{title}</Typography>
                {shouldHaveAddButton && onAddClick !== undefined && (
                    <Button variant="contained" startIcon={<Add />} onClick={onAddClick}>
                        Add
                    </Button>
                )}
            </Stack>
            {children}
        </Stack>
    );
}
