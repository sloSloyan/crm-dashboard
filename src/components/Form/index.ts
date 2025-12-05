import { RegisterOptions } from 'react-hook-form';

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'select' | 'number';
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[]; // Для select
  validation?: RegisterOptions;
}

export interface FormProps {
  fields?: FormField[];
  onSubmit: (data: any) => void;
  initialData?: any;
  submitText?: string;
  cancelText?: string;
  onCancel?: () => void;
  isLoading?: boolean;
  onChange?: any
  value?: any
}