// Components
import { Stack, Typography } from '@mui/material';

// Interfaces
import { SxObject } from '../../../../interfaces';

import { TitleSection } from '../../../../components';

interface ToolsContentProps {
    toolsValue: string;
}

const toolTextSx: SxObject = {
    fontSize: 14,
    lineHeight: 1.0,
};

export function ToolsContent({ toolsValue }: ToolsContentProps) {
    return (
        <Stack>
            <TitleSection title="Tools" textAlign="left" />
            <Stack sx={{ marginTop: 1 }}>
                <Typography sx={toolTextSx}>{toolsValue}</Typography>
            </Stack>
        </Stack>
    );
}
