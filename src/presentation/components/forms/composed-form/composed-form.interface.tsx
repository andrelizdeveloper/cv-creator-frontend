// Interfaces
import { SxObject } from '../../../interfaces';
import { CustomSelectFieldProps, CustomTextFieldProps } from './components';

export enum FormFields {
    TEXTFIELD = 'TEXTFIELD',
    SELECTFIELD = 'SELECTFIELD',
}

export type PossibleForms =
    | {
          type: FormFields.TEXTFIELD;
          props: CustomTextFieldProps;
      }
    | {
          type: FormFields.SELECTFIELD;
          props: CustomSelectFieldProps;
      };

export interface ComposedFormProps {
    formList: PossibleForms[];
    sxObjectForContainer?: SxObject;
}
