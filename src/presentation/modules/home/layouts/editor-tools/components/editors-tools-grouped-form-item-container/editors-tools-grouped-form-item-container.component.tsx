// Modules
import { DeleteOutlined } from '@mui/icons-material';
import { Button, Stack, Typography } from '@mui/material';

// Components
import { ComposedForm, PossibleForms } from '../../../../../../components';

// Configs
import { AppColorsConfig, AppTextStyles } from '../../../../../../../configs';

// Styles
import { FlexStyles } from '../../../../../../styles/flex-styles/flex-styles';

interface EditorsToolsGroupedFormItemContainerProps {
    title: string;
    formList: PossibleForms[];
    onRemoveClick: () => void;
    shouldDisableRemove: boolean;
}

export function EditorsToolsGroupedFormItemContainer({
    title,
    formList,
    onRemoveClick,
    shouldDisableRemove,
}: EditorsToolsGroupedFormItemContainerProps) {
    return (
        <Stack
            sx={{
                border: `1px solid ${AppColorsConfig.gray[200]}`,
                borderRadius: 1,
                padding: 2,
                gap: 2,
            }}
        >
            <Stack sx={FlexStyles.HFlexACenterJBetween}>
                <Typography sx={AppTextStyles.title3}>{title}</Typography>
                <Button
                    color="error"
                    variant="outlined"
                    startIcon={<DeleteOutlined />}
                    onClick={onRemoveClick}
                    disabled={shouldDisableRemove}
                >
                    Remove
                </Button>
            </Stack>
            <ComposedForm formList={formList} sxObjectForContainer={{ gap: 2 }} />
        </Stack>
    );
}
