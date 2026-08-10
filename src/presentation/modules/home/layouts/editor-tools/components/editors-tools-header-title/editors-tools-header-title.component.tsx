// Modules
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { IconButton, Stack, Typography } from '@mui/material';

// Configs
import { AppTextStyles } from '../../../../../../../configs';

// Styles
import { FlexStyles } from '../../../../../../styles/flex-styles/flex-styles';

interface EditorsToolsHeaderTitleProps {
    toggleLeftSidebar: () => void;
    isLeftSidebarShowing: boolean;
}

export function EditorsToolsHeaderTitle({
    toggleLeftSidebar,
    isLeftSidebarShowing,
}: EditorsToolsHeaderTitleProps) {
    return (
        <Stack sx={FlexStyles.HFlexACenterJBetween}>
            <Stack sx={FlexStyles.HFlexABaseline}>
                <Typography sx={AppTextStyles.title1}>CV Creator</Typography>
                <Typography sx={AppTextStyles.caption1}>Version 1.0 by Andre Lizaran</Typography>
            </Stack>
            <IconButton
                onClick={toggleLeftSidebar}
                color={isLeftSidebarShowing ? 'primary' : 'default'}
                aria-label={isLeftSidebarShowing ? 'Hide sidebar' : 'Show sidebar'}
            >
                {isLeftSidebarShowing ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
        </Stack>
    );
}
