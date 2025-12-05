import React from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';
import styles from './Form.module.scss';

interface FormSelectProps {
  field: {
    name: string;
    label: string;
    options: { value: string; label: string }[];
    required?: boolean;
  };
  register: UseFormRegister<any>;
  error?: FieldError;
  defaultValue?: string;
}

const FormSelect: React.FC<FormSelectProps> = ({ 
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
      <select
        id={field.name}
        className={`${styles.select} ${error ? styles.error : ''}`}
        defaultValue={defaultValue}
        {...register(field.name, {
          required: field.required ? `${field.label} is required` : false,
        })}
      >
        {field.options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
};

export default FormSelect;