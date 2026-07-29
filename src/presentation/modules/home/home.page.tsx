// Modules
import { Stack } from '@mui/material';

// Interfaces
import { SxObject } from '../../interfaces';

// Components
import { EditorToolsLayout } from './layouts';

import {
    JobsContent,
    TitleContent,
    ToolsContent,
    EducationContent,
    MyselfDescriptionContent,
    ContactInformationContent,
} from './components';

// Configs
import { AppColorsConfig } from '../../../configs';

const pageContainer1Sx: SxObject = {
    backgroundColor: AppColorsConfig.gray[50],
    height: '100%',
};

const pageContainer2Sx: SxObject = {
    padding: 2,
};

const pageContentSx: SxObject = {
    backgroundColor: AppColorsConfig.white,
    padding: 2,
    borderRadius: 1,
    border: `1px solid ${AppColorsConfig.gray[200]}`,
    gap: 2
};

const loremIpsumDescription = `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia sed consequuntur repellendus possimus
    eos! Quo, quam itaque illo quaerat deserunt numquam reiciendis, possimus aut provident ea nam et reprehenderit minus!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia sed consequuntur repellendus possimus
    eos! Quo, quam itaque illo quaerat deserunt numquam reiciendis, possimus aut provident ea nam et reprehenderit minus!
`;

function PageContainer() {
    return (
        <Stack sx={pageContainer1Sx}>
            <Stack sx={pageContainer2Sx}>
                <Stack sx={pageContentSx}>
                    <Stack>
                        <TitleContent
                            title="Jesus Andre Lizaran Blanco"
                        />
                        <ContactInformationContent
                            email="andrelizdeveloper@gmail.com"
                            phone="2293460202"
                            location="CDMX, Mexico"
                        />
                        <MyselfDescriptionContent
                            description={loremIpsumDescription}
                        />
                    </Stack>
                    <EducationContent />
                    <JobsContent />
                    <ToolsContent />
                </Stack>
            </Stack>
        </Stack>
    );
}

export function HomePage() {
    return (
        <EditorToolsLayout>
            <PageContainer />
        </EditorToolsLayout>
    );
}
