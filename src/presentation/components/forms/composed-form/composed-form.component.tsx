// Interfaces
import { memo } from 'react';
import { Stack } from '@mui/material';

// Components
import { CustomSelectField, CustomTextField } from './components';

// Interfaces
import { ComposedFormProps, FormFields, PossibleForms } from './composed-form.interface';

const MemorizedFormComponet = memo(({ form }: { form: PossibleForms }) => {
    switch (form.type) {
        case FormFields.TEXTFIELD:
            return <CustomTextField {...form.props} />;
        case FormFields.SELECTFIELD:
            return <CustomSelectField {...form.props} />;
        default:
            return null;
    }
});

export function ComposedForm({ formList, sxObjectForContainer = {} }: ComposedFormProps) {
    return (
        <Stack sx={sxObjectForContainer}>
            {formList.map((form, index) => (
                <MemorizedFormComponet key={index} form={form} />
            ))}
        </Stack>
    );
}
