// Interfaces
import { SxObject } from '../../../interfaces';
import { CustomTextFieldProps } from './components';

export enum FormFields {
    TEXTFIELD = 'TEXTFIELD',
}

export type PossibleForms = {
    type: FormFields.TEXTFIELD;
    props: CustomTextFieldProps;
};

export interface ComposedFormProps {
    formList: PossibleForms[];
    sxObjectForContainer?: SxObject;
}
