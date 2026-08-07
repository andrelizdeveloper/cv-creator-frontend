// Components
import { Stack, Typography } from '@mui/material';

// Configs
import { AppColorsConfig } from '../../../../../configs';

// Interfaces
import { SxObject } from '../../../../interfaces';

import { TitleSection } from '../../../../components';

interface JobsContentProps {
    jobExperienceInformation: Array<{
        jobCompany: string;
        jobPosition: string;
        jobStartDate: string;
        jobEndDate: string;
        jobDescription: string;
    }>;
}

const jobItemContainerSx: SxObject = {
    gap: 0.5,
    marginBottom: 1,
    paddingBottom: 1,
    borderBottom: `1px solid ${AppColorsConfig.gray[200]}`,
};

const jobTitleSx: SxObject = {
    fontSize: 14,
    lineHeight: 1.0,
};

const jobDatesSx: SxObject = {
    fontSize: 13,
    lineHeight: 1.0,
    color: AppColorsConfig.gray[600],
};

const jobDescriptionSx: SxObject = {
    fontSize: 13,
    lineHeight: 1.2,
};

export function JobsContent({ jobExperienceInformation }: JobsContentProps) {
    return (
        <Stack>
            <TitleSection title="Jobs" textAlign="left" />
            <Stack sx={{ marginTop: 1 }}>
                {jobExperienceInformation.map((job, index) => {
                    const jobCompany = job.jobCompany.trim() || 'Company';
                    const jobPosition = job.jobPosition.trim() || 'Position';
                    const jobStartDate = job.jobStartDate.trim() || 'Start';
                    const jobEndDate = job.jobEndDate.trim() || 'End';
                    const jobDescription = job.jobDescription.trim();
                    return (
                        <Stack key={index} sx={jobItemContainerSx}>
                            <Typography sx={jobTitleSx}>
                                {jobCompany} - {jobPosition}
                            </Typography>
                            <Typography sx={jobDatesSx}>
                                {jobStartDate} - {jobEndDate}
                            </Typography>
                            {jobDescription !== '' && (
                                <Typography sx={jobDescriptionSx}>{jobDescription}</Typography>
                            )}
                        </Stack>
                    );
                })}
            </Stack>
        </Stack>
    );
}
