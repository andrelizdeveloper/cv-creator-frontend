// Modules
import { Button, Stack, Typography } from '@mui/material';

// Components
import { CustomModal, CustomModalProps } from '../../../../components';

// Styles
import { FlexStyles } from '../../../../styles';

type BuyMeACoffeeModalProps = Omit<CustomModalProps, 'title' | 'children'>;

export function BuyMeACoffeeModal(props: BuyMeACoffeeModalProps) {
    return (
        <CustomModal {...props} title="Buy Me a Coffee">
            <Stack>
                <Typography>
                    If you enjoy using this app and would like to support its development, consider
                    buying me a coffee! Your support helps me continue improving the app and adding
                    new features. Thank you for your generosity!
                </Typography>
                <Typography>CLABE Account: 0129 0501 5743 499690</Typography>
                <Typography>Person Name: Jesus Andre Lizaran Blanco</Typography>
            </Stack>
            <Stack sx={FlexStyles.HFlexACenterJEnd}>
                <Button onClick={props.onClose}>Close</Button>
            </Stack>
        </CustomModal>
    );
}
