// Components
import { ComposedForm, FormFields, PossibleForms } from '../../../../../../components';
import { EditorsToolsSectionContainer } from '../editors-tools-section-container/editors-tools-section-container.component';

// Hooks
import { UseHandleCvFormReturn } from '../../../../hooks';

interface EditorsToolsToolsInformationContainerProps {
    editorForm: UseHandleCvFormReturn;
}

function buildToolsInformationFormList(editorForm: UseHandleCvFormReturn): PossibleForms[] {
    return [
        {
            type: FormFields.TEXTFIELD,
            props: {
                label: 'List your tools',
                onChange: editorForm.toolsInformation.toolName.onChange,
                value: editorForm.toolsInformation.toolName.value,
                rows: 5,
            },
        },
    ];
}

export function EditorsToolsToolsInformationContainer({
    editorForm,
}: EditorsToolsToolsInformationContainerProps) {
    return (
        <EditorsToolsSectionContainer title="TOOLS INFORMATION">
            <ComposedForm
                formList={buildToolsInformationFormList(editorForm)}
                sxObjectForContainer={{ gap: 2 }}
            />
        </EditorsToolsSectionContainer>
    );
}
