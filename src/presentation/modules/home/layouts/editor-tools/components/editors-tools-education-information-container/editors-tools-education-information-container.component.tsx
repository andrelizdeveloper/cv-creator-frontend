// Modules
import { CalendarToday, School } from '@mui/icons-material';

// Components
import { FormFields, PossibleForms } from '../../../../../../components';
import { EditorsToolsGroupedFormsSectionContainer } from '../editors-tools-grouped-forms-section-container/editors-tools-grouped-forms-section-container.component';

// Hooks
import { UseHandleCvFormReturn } from '../../../../hooks';

interface EditorsToolsEducationInformationContainerProps {
    editorForm: UseHandleCvFormReturn;
}

function buildEducationInformationFormList(
    education: UseHandleCvFormReturn['educationInformation'][number],
    index: number,
): PossibleForms[] {
    return [
        {
            type: FormFields.TEXTFIELD,
            props: {
                label: `School ${index + 1}`,
                onChange: education.schoolName.onChange,
                value: education.schoolName.value,
                rows: 1,
                startIcon: <School />,
            },
        },
        {
            type: FormFields.TEXTFIELD,
            props: {
                label: `Degree ${index + 1}`,
                onChange: education.schoolDegree.onChange,
                value: education.schoolDegree.value,
                rows: 1,
                startIcon: <School />,
            },
        },
        {
            type: FormFields.TEXTFIELD,
            props: {
                label: `Start date ${index + 1}`,
                onChange: education.schoolStartDate.onChange,
                value: education.schoolStartDate.value,
                rows: 1,
                startIcon: <CalendarToday />,
            },
        },
        {
            type: FormFields.TEXTFIELD,
            props: {
                label: `End date ${index + 1}`,
                onChange: education.schoolEndDate.onChange,
                value: education.schoolEndDate.value,
                rows: 1,
                startIcon: <CalendarToday />,
            },
        },
    ];
}

export function EditorsToolsEducationInformationContainer({
    editorForm,
}: EditorsToolsEducationInformationContainerProps) {
    const educationGroups = editorForm.educationInformation.map((education, index) =>
        buildEducationInformationFormList(education, index),
    );

    return (
        <EditorsToolsGroupedFormsSectionContainer
            sectionTitle="EDUCATION INFORMATION"
            groupTitlePrefix="Education"
            groups={educationGroups}
            onAddClick={editorForm.addEducationInformation}
            onRemoveClick={editorForm.removeEducationInformation}
        />
    );
}
