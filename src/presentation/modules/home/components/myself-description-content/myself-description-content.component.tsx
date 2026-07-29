// Modules
import { Stack, Typography } from '@mui/material';

// Interfaces
import { SxObject } from '../../../../interfaces'

interface MyselfDescriptionContentProps {
    description: string
}

const descriptionTypographySx: SxObject = {
    fontSize: 14,
    textAlign: 'justify',
}

export function MyselfDescriptionContent({ description }: MyselfDescriptionContentProps) {
    return (
        <Stack>
            <Typography sx={descriptionTypographySx}>
                {description}
            </Typography>
        </Stack>
    )
}
