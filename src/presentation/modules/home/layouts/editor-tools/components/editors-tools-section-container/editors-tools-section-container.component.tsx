// Modules
import { Add } from '@mui/icons-material';
import { Button, Stack, Typography } from '@mui/material';

// Components
import { GenericBorderContainer } from '../../../../../../components';

// Configs
import { AppTextStyles } from '../../../../../../../configs';

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
        <GenericBorderContainer>
            <Stack sx={FlexStyles.HFlexACenterJBetween}>
                <Typography sx={AppTextStyles.subtitle1}>{title}</Typography>
                {shouldHaveAddButton && onAddClick !== undefined && (
                    <Button variant="contained" startIcon={<Add />} onClick={onAddClick}>
                        Add
                    </Button>
                )}
            </Stack>
            {children}
        </GenericBorderContainer>
    );
}
