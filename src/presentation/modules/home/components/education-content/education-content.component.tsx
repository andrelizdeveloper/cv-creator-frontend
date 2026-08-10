// Components
import { Stack, Typography } from '@mui/material';

// Configs
import { AppColorsConfig } from '../../../../../configs';

// Interfaces
import { SxObject } from '../../../../interfaces';

import { TitleSection } from '../../../../components';

interface EducationContentProps {
    educationInformation: Array<{
        schoolName: string;
        schoolDegree: string;
        schoolStartDate: string;
        schoolEndDate: string;
    }>;
    fontFamily?: string;
}

const educationItemContainerSx: SxObject = {
    borderBottom: `1px solid ${AppColorsConfig.gray[200]}`,
    paddingBottom: 1,
    marginBottom: 1,
    gap: 0.5,
};

const educationTextSx: SxObject = {
    fontSize: 14,
    lineHeight: 1.0,
};

const educationDateSx: SxObject = {
    fontSize: 13,
    color: AppColorsConfig.gray[500],
    lineHeight: 1.0,
};

export function EducationContent({ educationInformation, fontFamily }: EducationContentProps) {
    return (
        <Stack>
            <TitleSection title="Education" textAlign="left" fontFamily={fontFamily} />
            <Stack sx={{ marginTop: 1 }}>
                {educationInformation.map((education, index) => {
                    const schoolName = education.schoolName.trim() || 'School';
                    const schoolDegree = education.schoolDegree.trim() || 'Degree';
                    const schoolStartDate = education.schoolStartDate.trim() || 'Start';
                    const schoolEndDate = education.schoolEndDate.trim() || 'End';
                    return (
                        <Stack key={index} sx={educationItemContainerSx}>
                            <Typography sx={educationTextSx}>
                                {schoolName} - {schoolDegree}
                            </Typography>
                            <Typography sx={educationDateSx}>
                                {schoolStartDate} - {schoolEndDate}
                            </Typography>
                        </Stack>
                    );
                })}
            </Stack>
        </Stack>
    );
}
