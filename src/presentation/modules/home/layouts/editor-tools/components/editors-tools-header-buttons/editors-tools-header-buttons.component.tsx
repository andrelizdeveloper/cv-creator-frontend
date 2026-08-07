// Modules
import { Button, Stack } from '@mui/material';
import { Print, RestartAlt, Coffee } from '@mui/icons-material';

interface EditorToolsHeaderButtonsProps {
    onPrintClick: () => void;
    openStartOverModal: () => void;
    openBuyMeACoffeeModal: () => void;
}

export function EditorToolsHeaderButtons({
    onPrintClick,
    openStartOverModal,
    openBuyMeACoffeeModal,
}: EditorToolsHeaderButtonsProps) {
    return (
        <Stack sx={{ flexDirection: 'row', gap: 1, flexWrap: 'wrap' }}>
            <Button
                color="primary"
                variant="contained"
                startIcon={<Print />}
                onClick={onPrintClick}
            >
                Print
            </Button>
            <Button
                color="warning"
                variant="contained"
                startIcon={<RestartAlt />}
                onClick={openStartOverModal}
            >
                Start over
            </Button>
            <Button
                variant="contained"
                color="success"
                startIcon={<Coffee />}
                onClick={openBuyMeACoffeeModal}
            >
                Buy me a coffee
            </Button>
        </Stack>
    );
}
