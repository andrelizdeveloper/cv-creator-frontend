// Modules
import { Button, Grid, Stack, Typography } from '@mui/material';

// Configs
import { AppColorsConfig, AppTextStyles } from '../../../../../configs';

// Interfaces
import { SxObject } from '../../../../interfaces';

const LeftSidebarContainerSx: SxObject = {
    backgroundColor: AppColorsConfig.white,
    borderRight: `1px solid ${AppColorsConfig.gray[200]}`,
    height: '100%',
};

function LeftSidebarContainer() {
    return (
        <Stack sx={LeftSidebarContainerSx}>
            <Stack sx={{ padding: 2 }}>
                <Typography sx={AppTextStyles.title1}>Editor Tools</Typography>
                <Button variant="contained">Print</Button>
            </Stack>
        </Stack>
    );
}

const editorToolsContainerSx: SxObject = {
    height: '100vh',
    backgroundColor: AppColorsConfig.white,
};

interface EditorToolsLayoutProps {
    children?: React.ReactNode;
}

export function EditorToolsLayout({ children }: EditorToolsLayoutProps) {
    return (
        <Grid container sx={editorToolsContainerSx}>
            <Grid size={{ xs: 12, sm: 3 }}>
                <LeftSidebarContainer />
            </Grid>
            <Grid size={{ xs: 12, sm: 9 }}>{children}</Grid>
        </Grid>
    );
}
