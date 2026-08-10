// Modules
import { ChevronLeft } from '@mui/icons-material';
import { Button, Grid, Stack } from '@mui/material';

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
    EditorsToolsConfigurationsContainer,
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
    titleFontFamily: string;
    onTitleFontFamilyChange: (fontFamily: string) => void;
}

function LeftSidebarContainer({
    editorForm,
    onPrintClick,
    openStartOverModal,
    openBuyMeACoffeeModal,
    isLeftSidebarShowing,
    toggleLeftSidebar,
    titleFontFamily,
    onTitleFontFamilyChange,
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
                    <EditorsToolsConfigurationsContainer
                        titleFontFamily={titleFontFamily}
                        onTitleFontFamilyChange={onTitleFontFamilyChange}
                    />
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
    titleFontFamily: string;
    onTitleFontFamilyChange: (fontFamily: string) => void;
}

export function EditorToolsLayout({
    children,
    editorForm,
    onPrintClick,
    openStartOverModal,
    openBuyMeACoffeeModal,
    isLeftSidebarShowing,
    toggleLeftSidebar,
    titleFontFamily,
    onTitleFontFamilyChange,
}: EditorToolsLayoutProps) {
    return (
        <>
            <Grid container sx={editorToolsContainerSx}>
                <Grid
                    sx={{ display: isLeftSidebarShowing ? 'block' : 'none' }}
                    size={{ xs: isLeftSidebarShowing ? 12 : 0, md: isLeftSidebarShowing ? 4.5 : 0 }}
                >
                    <LeftSidebarContainer
                        editorForm={editorForm}
                        onPrintClick={onPrintClick}
                        openStartOverModal={openStartOverModal}
                        openBuyMeACoffeeModal={openBuyMeACoffeeModal}
                        isLeftSidebarShowing={isLeftSidebarShowing}
                        toggleLeftSidebar={toggleLeftSidebar}
                        titleFontFamily={titleFontFamily}
                        onTitleFontFamilyChange={onTitleFontFamilyChange}
                    />
                </Grid>
                <Grid
                    size={{
                        xs: isLeftSidebarShowing ? 0 : 12,
                        md: isLeftSidebarShowing ? 7.5 : 12,
                    }}
                >
                    {children}
                </Grid>
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
