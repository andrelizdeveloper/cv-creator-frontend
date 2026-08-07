// Modules
import { Button, Stack } from '@mui/material';

// Components
import { CustomModal, CustomModalProps } from '../custom-modal/custom-modal.component';

// Styles
import { FlexStyles } from '../../../styles/flex-styles/flex-styles';

export type ConfirmModalProps = CustomModalProps & {
    onConfirm: () => void;
};

export function ConfirmModal(props: ConfirmModalProps) {
    return (
        <CustomModal
            title={props.title}
            isOpen={props.isOpen}
            onClose={props.onClose}
            shouldCloseOnBackdropClick={props.shouldCloseOnBackdropClick}
            maxWidth={props.maxWidth}
        >
            {props.children}
            <Stack sx={FlexStyles.HFlexACenterJEnd}>
                <Button onClick={props.onConfirm} variant="contained">
                    Confirm
                </Button>
                <Button onClick={props.onClose}>Cancel</Button>
            </Stack>
        </CustomModal>
    );
}
