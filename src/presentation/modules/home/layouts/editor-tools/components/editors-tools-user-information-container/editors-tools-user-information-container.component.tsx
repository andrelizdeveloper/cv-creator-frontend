// Modules
import { AccountCircle, Email, LocationOn, Phone } from '@mui/icons-material';

// Components
import { ComposedForm, FormFields, PossibleForms } from '../../../../../../components';
import { EditorsToolsSectionContainer } from '../editors-tools-section-container/editors-tools-section-container.component';

// Hooks
import { UseHandleCvFormReturn } from '../../../../hooks';

interface EditorsToolsUserInformationContainerProps {
    editorForm: UseHandleCvFormReturn;
}

function buildUserInformationFormList(editorForm: UseHandleCvFormReturn): PossibleForms[] {
    return [
        {
            type: FormFields.TEXTFIELD,
            props: {
                label: 'User name',
                onChange: editorForm.userInformation.userName.onChange,
                value: editorForm.userInformation.userName.value,
                rows: 1,
                startIcon: <AccountCircle />,
            },
        },
        {
            type: FormFields.TEXTFIELD,
            props: {
                label: 'User email',
                onChange: editorForm.userInformation.userEmail.onChange,
                value: editorForm.userInformation.userEmail.value,
                rows: 1,
                startIcon: <Email />,
            },
        },
        {
            type: FormFields.TEXTFIELD,
            props: {
                label: 'User location',
                onChange: editorForm.userInformation.userLocation.onChange,
                value: editorForm.userInformation.userLocation.value,
                rows: 1,
                startIcon: <LocationOn />,
            },
        },
        {
            type: FormFields.TEXTFIELD,
            props: {
                label: 'User phone',
                onChange: editorForm.userInformation.userPhone.onChange,
                value: editorForm.userInformation.userPhone.value,
                rows: 1,
                startIcon: <Phone />,
            },
        },
        {
            type: FormFields.TEXTFIELD,
            props: {
                label: 'User description',
                onChange: editorForm.userInformation.userDescription.onChange,
                value: editorForm.userInformation.userDescription.value,
                rows: 6,
            },
        },
    ];
}

export function EditorsToolsUserInformationContainer({
    editorForm,
}: EditorsToolsUserInformationContainerProps) {
    return (
        <EditorsToolsSectionContainer title="USER INFORMATION">
            <ComposedForm
                formList={buildUserInformationFormList(editorForm)}
                sxObjectForContainer={{ gap: 2 }}
            />
        </EditorsToolsSectionContainer>
    );
}
