import React from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';
import styles from './Form.module.scss';

interface FormInputProps {
  field: {
    name: string;
    label: string;
    type: 'text' | 'email' | 'tel' | 'number';
    placeholder?: string;
    required?: boolean;
  };
  register: UseFormRegister<any>;
  error?: FieldError;
  defaultValue?: string;
}

const FormInput: React.FC<FormInputProps> = ({ 
  field, 
  register, 
  error, 
  defaultValue 
}) => {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={field.name} className={styles.label}>
        {field.label}
        {field.required && <span className={styles.required}>*</span>}
      </label>
      <input
        type={field.type}
        id={field.name}
        className={`${styles.input} ${error ? styles.error : ''}`}
        placeholder={field.placeholder}
        defaultValue={defaultValue}
        {...register(field.name, {
          required: field.required ? `${field.label} is required` : false,
        })}
      />
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
};

export default FormInput;