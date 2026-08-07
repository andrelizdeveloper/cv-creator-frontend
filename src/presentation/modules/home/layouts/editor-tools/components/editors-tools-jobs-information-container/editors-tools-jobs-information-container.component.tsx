// Modules
import { CalendarToday, Work } from '@mui/icons-material';

// Components
import { FormFields, PossibleForms } from '../../../../../../components';
import { EditorsToolsGroupedFormsSectionContainer } from '../editors-tools-grouped-forms-section-container/editors-tools-grouped-forms-section-container.component';

// Hooks
import { UseHandleCvFormReturn } from '../../../../hooks';

interface EditorsToolsJobsInformationContainerProps {
    editorForm: UseHandleCvFormReturn;
}

function buildJobsInformationFormList(
    job: UseHandleCvFormReturn['jobExperienceInformation'][number],
    index: number,
): PossibleForms[] {
    return [
        {
            type: FormFields.TEXTFIELD,
            props: {
                label: `Company ${index + 1}`,
                onChange: job.jobCompany.onChange,
                value: job.jobCompany.value,
                rows: 1,
                startIcon: <Work />,
            },
        },
        {
            type: FormFields.TEXTFIELD,
            props: {
                label: `Position ${index + 1}`,
                onChange: job.jobPosition.onChange,
                value: job.jobPosition.value,
                rows: 1,
                startIcon: <Work />,
            },
        },
        {
            type: FormFields.TEXTFIELD,
            props: {
                label: `Start date ${index + 1}`,
                onChange: job.jobStartDate.onChange,
                value: job.jobStartDate.value,
                rows: 1,
                startIcon: <CalendarToday />,
            },
        },
        {
            type: FormFields.TEXTFIELD,
            props: {
                label: `End date ${index + 1}`,
                onChange: job.jobEndDate.onChange,
                value: job.jobEndDate.value,
                rows: 1,
                startIcon: <CalendarToday />,
            },
        },
        {
            type: FormFields.TEXTFIELD,
            props: {
                label: `Description ${index + 1}`,
                onChange: job.jobDescription.onChange,
                value: job.jobDescription.value,
                rows: 4,
            },
        },
    ];
}

export function EditorsToolsJobsInformationContainer({
    editorForm,
}: EditorsToolsJobsInformationContainerProps) {
    const jobsGroups = editorForm.jobExperienceInformation.map((job, index) =>
        buildJobsInformationFormList(job, index),
    );

    return (
        <EditorsToolsGroupedFormsSectionContainer
            sectionTitle="JOBS INFORMATION"
            groupTitlePrefix="Job"
            groups={jobsGroups}
            onAddClick={editorForm.addJobExperienceInformation}
            onRemoveClick={editorForm.removeJobExperienceInformation}
        />
    );
}
