// Modules
import { Stack } from '@mui/material';

// Components
import { TitleContent } from '../title-content/title-content.component';
import { ContactInformationContent, MyselfDescriptionContent } from './components';

interface UserSectionProps {
    username: string;
    email: string;
    phone: string;
    location: string;
    description: string;
    fontFamily?: string;
}

export function UserSection({
    username,
    email,
    phone,
    location,
    description,
    fontFamily,
}: UserSectionProps) {
    return (
        <Stack>
            <TitleContent title={username} fontFamily={fontFamily} />
            <ContactInformationContent email={email} phone={phone} location={location} />
            <MyselfDescriptionContent description={description} />
        </Stack>
    );
}
