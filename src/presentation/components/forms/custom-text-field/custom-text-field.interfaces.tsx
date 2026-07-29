export interface CustomTextFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number';
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
}