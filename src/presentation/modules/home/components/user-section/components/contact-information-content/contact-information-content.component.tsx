// Modules
import { Stack, Typography } from '@mui/material';

// Configs
import { AppColorsConfig } from '../../../../../../../configs';

// Interfaces
import { SxObject } from '../../../../../../interfaces';

interface ContactInformationContentProps {
    email: string;
    phone: string;
    location: string;
}

const descriptionTypographySx: SxObject = {
    fontSize: 14,
    marginBottom: 0.5,
    paddingBottom: 0.3,
    color: AppColorsConfig.gray[500],
    borderBottom: `1px solid ${AppColorsConfig.gray[200]}`,
};

export function ContactInformationContent({
    email,
    location,
    phone,
}: ContactInformationContentProps) {
    return (
        <Stack>
            <Typography sx={descriptionTypographySx}>
                {[email, phone, location].filter(element => element.trim() !== '').join('/ ')}
            </Typography>
        </Stack>
    );
}
