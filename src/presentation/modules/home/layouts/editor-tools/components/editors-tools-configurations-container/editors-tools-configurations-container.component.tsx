// Modules
import { Stack, Typography } from '@mui/material';

// Components
import { ComposedForm, FormFields } from '../../../../../../components';
import { GenericBorderContainer } from '../../../../../../components';

// Configs
import { AppTextStyles } from '../../../../../../../configs';

interface EditorsToolsConfigurationsContainerProps {
    titleFontFamily: string;
    onTitleFontFamilyChange: (fontFamily: string) => void;
}

export function EditorsToolsConfigurationsContainer({
    titleFontFamily,
    onTitleFontFamilyChange,
}: EditorsToolsConfigurationsContainerProps) {
    const titleFontFormList = [
        {
            type: FormFields.SELECTFIELD,
            props: {
                label: 'Title font',
                value: titleFontFamily,
                onChange: onTitleFontFamilyChange,
                options: [
                    { label: 'Bebas Neue', value: 'Bebas Neue' },
                    { label: 'Poppins', value: 'Poppins' },
                    { label: 'Montserrat', value: 'Montserrat' },
                ],
                helperText: 'Selecciona la fuente para los títulos del CV.',
            },
        },
    ];

    return (
        <GenericBorderContainer>
            <Stack sx={{ gap: 1.5 }}>
                <Typography sx={AppTextStyles.subtitle1}>Configurations</Typography>
                <ComposedForm formList={titleFontFormList} sxObjectForContainer={{ gap: 1 }} />
            </Stack>
        </GenericBorderContainer>
    );
}
