// Modules
import { ChevronLeft } from '@mui/icons-material';
import { Button, Fab, Grid, Stack } from '@mui/material';

// Configs
import { AppColorsConfig } from '../../../../../configs';

// Hooks
import { UseHandleCvFormReturn } from '../../hooks';

// Interfaces
import { SxObject } from '../../../../interfaces';

// Components
import {
    EditorsToolsHeaderTitle,
    EditorToolsHeaderButtons,
    EditorsToolsJobsInformationContainer,
    EditorsToolsUserInformationContainer,
    EditorsToolsToolsInformationContainer,
    EditorsToolsEducationInformationContainer,
} from './components';

const LeftSidebarContainerSx: SxObject = {
    backgroundColor: AppColorsConfig.white,
    borderRight: `1px solid ${AppColorsConfig.gray[200]}`,
    height: '100vh',
    overflow: 'hidden',
};
interface LeftSidebarContainerProps {
    editorForm: UseHandleCvFormReturn;
    onPrintClick: () => void;
    openStartOverModal: () => void;
    openBuyMeACoffeeModal: () => void;
    isLeftSidebarShowing: boolean;
    toggleLeftSidebar: () => void;
}

function LeftSidebarContainer({
    editorForm,
    onPrintClick,
    openStartOverModal,
    openBuyMeACoffeeModal,
    isLeftSidebarShowing,
    toggleLeftSidebar,
}: LeftSidebarContainerProps) {
    return (
        <Stack sx={LeftSidebarContainerSx}>
            <Stack sx={{ padding: 2, gap: 2, height: '100%', overflowY: 'auto' }}>
                <EditorToolsHeaderButtons
                    onPrintClick={onPrintClick}
                    openStartOverModal={openStartOverModal}
                    openBuyMeACoffeeModal={openBuyMeACoffeeModal}
                />
                <EditorsToolsHeaderTitle
                    isLeftSidebarShowing={isLeftSidebarShowing}
                    toggleLeftSidebar={toggleLeftSidebar}
                />
                <Stack sx={{ gap: 2 }}>
                    <EditorsToolsUserInformationContainer editorForm={editorForm} />
                    <EditorsToolsEducationInformationContainer editorForm={editorForm} />
                    <EditorsToolsJobsInformationContainer editorForm={editorForm} />
                    <EditorsToolsToolsInformationContainer editorForm={editorForm} />
                </Stack>
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
    editorForm: UseHandleCvFormReturn;
    onPrintClick: () => void;
    openStartOverModal: () => void;
    openBuyMeACoffeeModal: () => void;
    isLeftSidebarShowing: boolean;
    toggleLeftSidebar: () => void;
}

export function EditorToolsLayout({
    children,
    editorForm,
    onPrintClick,
    openStartOverModal,
    openBuyMeACoffeeModal,
    isLeftSidebarShowing,
    toggleLeftSidebar,
}: EditorToolsLayoutProps) {
    return (
        <>
            <Grid container sx={editorToolsContainerSx}>
                <Grid size={{ xs: 12, sm: isLeftSidebarShowing ? 4.5 : 0 }}>
                    <LeftSidebarContainer
                        editorForm={editorForm}
                        onPrintClick={onPrintClick}
                        openStartOverModal={openStartOverModal}
                        openBuyMeACoffeeModal={openBuyMeACoffeeModal}
                        isLeftSidebarShowing={isLeftSidebarShowing}
                        toggleLeftSidebar={toggleLeftSidebar}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: isLeftSidebarShowing ? 7.5 : 12 }}>{children}</Grid>
            </Grid>

            {!isLeftSidebarShowing && (
                <Button
                    color="primary"
                    variant="contained"
                    onClick={toggleLeftSidebar}
                    aria-label="Show sidebar"
                    startIcon={<ChevronLeft />}
                    sx={{
                        position: 'fixed',
                        top: 16,
                        left: 16,
                        zIndex: 1300,
                    }}
                >
                    Show sidebar
                </Button>
            )}
        </>
    );
}
