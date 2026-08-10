// Components
import { Stack, Typography } from '@mui/material';

// Interfaces
import { SxObject } from '../../../../interfaces';

import { TitleSection } from '../../../../components';

interface ToolsContentProps {
    toolsValue: string;
    fontFamily?: string;
}

const toolTextSx: SxObject = {
    fontSize: 14,
    lineHeight: 1.2,
};

export function ToolsContent({ toolsValue, fontFamily }: ToolsContentProps) {
    return (
        <Stack>
            <TitleSection title="Tools" textAlign="left" fontFamily={fontFamily} />
            <Stack sx={{ marginTop: 1 }}>
                <Typography sx={toolTextSx}>{toolsValue}</Typography>
            </Stack>
        </Stack>
    );
}
